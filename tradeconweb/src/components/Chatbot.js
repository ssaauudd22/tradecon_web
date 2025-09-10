// --- Gemini Chatbot Integration ---
import React, { useState, useRef, useEffect } from "react";
import './Chatbot.css';

const ChatbotIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#7C3AED" />
    <ellipse cx="11.5" cy="14" rx="2.5" ry="3" fill="#fff" />
    <ellipse cx="20.5" cy="14" rx="2.5" ry="3" fill="#fff" />
    <ellipse cx="16" cy="21" rx="5" ry="2" fill="#fff" />
  </svg>
);

const ChatMessage = ({ role, text }) => (
  <div className={`chatbot-message-bubble ${role}`}>
    {text}
  </div>
);

const ChatForm = ({ onSend, disabled }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    onSend(value);
    inputRef.current.value = "";
  };
  return (
    <form className="chatbot-footer" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        disabled={disabled}
        className="chatbot-input"
        autoComplete="off"
      />
      <button type="submit" disabled={disabled} className="chatbot-send-btn">Send</button>
    </form>
  );
};

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    { role: "model", text: "Hello! How can I assist you today?" },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory, showChatbot]);

  const handleSend = async (userMessage) => {
    setChatHistory((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);
    setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);
    try {
      const response = await generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
      setChatHistory((prev) => [
        ...prev.slice(0, -1),
        { role: "model", text: response }
      ]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev.slice(0, -1),
        { role: "model", text: "Sorry, I couldn't get a response. Please try again." }
      ]);
    }
    setLoading(false);
  };

  // System prompt to set chatbot personality
  const systemPrompt = {
    role: "user",
    parts: [{ text: "You are TradeconBot, a friendly and helpful AI assistant for the company TRADECON INDUSTRIES which operates in the RGV and South Carolina regions, specializing in construction, property improvement services. Our comprehensive services include renovation, remodeling, restoration, and upcoming single home construction projects. We have a strong track record in talent acquisition, connecting companies with the most suitable candidates. Our overarching goal is to continually provide innovation and excellence, guaranteeing the highest level of client satisfaction. Always answer in a concise, positive, and professional tone." }]
  };

  // Gemini API integration (API key must be set in .env as REACT_APP_API_URL)
  const generateBotResponse = async (history) => {
    // Prepend system prompt to chat history
    const messages = [systemPrompt, ...history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }))];
    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) return "[Missing Gemini API URL. Please set REACT_APP_API_URL in .env]";
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: messages }),
      });
      const data = await res.json();
      if (typeof window !== 'undefined' && window.console) {
        console.log('Gemini API raw response:', data);
      }
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || data?.candidates?.[0]?.content?.text || "[No response]";
      return text.replace(/\*/g, "").trim();
    } catch (e) {
      return "[Error contacting Gemini API]";
    }
  };

  return (
    <>
      {/* Overlay when chatbot is open */}
      {showChatbot && <div className="chatbot-overlay" onClick={() => setShowChatbot(false)} />}
      <div className={`chatbot-container${showChatbot ? " open" : ""}`}>
        <button
          className="chatbot-toggle-btn"
          onClick={() => setShowChatbot((v) => !v)}
          aria-label="Open chatbot"
        >
          <ChatbotIcon />
        </button>
        {showChatbot && (
          <div className="chatbot-popup">
            {/* Chatbot Header */}
            <div className="chatbot-header">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <ChatbotIcon />
                <span style={{ marginLeft: 8, fontWeight: 600 }}>TradeconBot</span>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: 20,
                  cursor: "pointer"
                }}
                aria-label="Close chatbot"
              >
                ×
              </button>
            </div>
            {/* Chatbot Body */}
            <div className="chatbot-body" ref={chatBodyRef}>
              {chatHistory.map((msg, idx) => (
                <ChatMessage key={idx} role={msg.role} text={msg.text} />
              ))}
            </div>
            {/* Chatbot Footer */}
            <ChatForm onSend={handleSend} disabled={loading} />
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;