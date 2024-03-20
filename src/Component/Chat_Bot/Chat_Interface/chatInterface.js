import React, { useState, useRef, useEffect } from "react";
import styles from "./chatInterface.module.css";

const ChatInterface = ({ onClose, sendMessageToBackend }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatWindowRef = useRef(null);

  // Scroll to bottom of chat window on new message
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageSend = async () => {
    if (inputValue.trim() !== "") {
      const userMessage = { text: inputValue, sender: "You" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");
      const res = await sendMessageToBackend(inputValue);
      console.log(res);
      const botMessage = { text: res, sender: "Bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className={styles.chatInterface}>
      <div className={styles.aiProfile}>
        <header className={styles.chatTitle}>My Portfolio Pal</header>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>

      <div className={styles.chatWindow} ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              styles[message.sender.toLowerCase()]
            }`}
          >
            <span className={styles.sender}>{message.sender}:</span>{" "}
            <span className={styles.messageText}>{message.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className={styles.input}
        />
        <button onClick={handleMessageSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
