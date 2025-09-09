import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    // Show the chatbot briefly on page load
    setIsOpen(true);
    setHasGreeted(true);
    const timer = setTimeout(() => setIsOpen(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setIsOpen(prev => !prev);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header" onClick={toggleChat}>
        🤖 Chat with us
      </div>

      {isOpen && (
        <div className="chatbot-body">
          <div className="chatbot-message">
            {hasGreeted ? "Hi there! How can we help today?" : ""}
          </div>
          {/* Future: Add message input, chat history, etc. */}
          <p className="chatbot-placeholder">[AI Assistant coming soon]</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;