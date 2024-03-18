// ChatInterface.js
import React, { useState } from "react";
import styles from "./chatInterface.module.css";

const ChatInterface = ({ onClose, sendMessageToBackend }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = async () => {
    if (inputValue.trim() !== "") {
      const res = await sendMessageToBackend(inputValue);
      const userMessage = { text: inputValue, sender: "You" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");
      console.log(res);
      const botMessage = { text: res, sender: "Bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className={styles.chatInterface}>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} `}>
            <span className={styles.sender}>{message.sender}:</span>{" "}
            {message.text}
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
