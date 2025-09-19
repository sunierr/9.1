import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import Item from "../models/Item.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname,"../");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(rootDir, "uploads")); // save to ./uploads
  },
  filename: (req, file, cb) => {
    const decodedOriginalname = decodeURIComponent(escape(file.originalname));
    // Create a unique filename with the decoded original name
    cb(null, Date.now() + "-" + decodedOriginalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // limit: 5MB/filei
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files allowed"));
    }
  },
});

// GET all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Route to handle multiple uploads
router.post("/upload-multiple", upload.array("images", 5), (req, res) => {
  try {
    // Get text fields
    const { description, size, brand, condition, price, swap } = req.body;

    // Get uploaded files
    const files = req.files.map((f) => ({
      filename: f.filename,
      path: f.path,
      mimetype: f.mimetype,
      size: f.size,
    }));

    console.log(files)

    return res.json({
      message: "Upload successful",
      files,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Upload failed" });
  }
});
// POST new item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item({ name: req.body.name });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
