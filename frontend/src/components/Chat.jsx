import { useState, useEffect, useRef } from "react";
import socket from "../socket";
import axios from "axios";

function Chat({ conversationId, userId, partnerId }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const chatRef = useRef(null);

  // Join socket
  useEffect(() => {
    socket.emit("join", userId);

    socket.on("getMessage", (msg) => {
      if (msg.conversationId === conversationId) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("getMessage");
  }, [conversationId]);

  // Load messages (lazy)
  const loadMessages = async (pageNum = 1) => {
    const res = await axios.get(
      `/api/messages/${conversationId}?page=${pageNum}&limit=20`
    );
    if (pageNum === 1) {
      setMessages(res.data);
    } else {
      setMessages((prev) => [...res.data, ...prev]);
    }
  };

  useEffect(() => {
    loadMessages(1);
  }, [conversationId]);

  const handleSend = () => {
    socket.emit("sendMessage", {
      conversationId,
      senderId: userId,
      receiverId: partnerId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full border rounded-xl">
      <div
        className="flex-1 overflow-y-auto"
        ref={chatRef}
        onScroll={(e) => {
          if (e.target.scrollTop === 0) {
            setPage((prev) => {
              const nextPage = prev + 1;
              loadMessages(nextPage);
              return nextPage;
            });
          }
        }}
      >
        {messages.map((msg) => (
          <div key={msg._id} className={msg.sender === userId ? "text-right" : "text-left"}>
            <p className="inline-block bg-gray-200 rounded p-2 m-1">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="p-2 flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
