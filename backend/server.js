import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import Message from "./models/Message.js";
import cors from "cors";
import dotenv from "dotenv";
import itemsRouter from "./routes/items.js";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./utils/mongodb.js";

dotenv.config();
const app = express();

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
connectDB()


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/items", itemsRouter);

// Serve frontend build (production)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("sendMessage", async ({ conversationId, senderId, receiverId, text }) => {
    const newMessage = new Message({ conversationId, sender: senderId, text });
    await newMessage.save();

    // Send to receiver if online
    const receiverSocketId = onlineUsers.get(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("getMessage", newMessage);
    }
  });

  socket.on("disconnect", () => {
    for (let [userId, sockId] of onlineUsers) {
      if (sockId === socket.id) onlineUsers.delete(userId);
    }
  });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
