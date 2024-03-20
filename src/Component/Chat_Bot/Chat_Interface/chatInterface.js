import React, { useState, useRef, useEffect } from "react";
import styles from "./chatInterface.module.css";

const ChatInterface = ({ toggleChat, sendMessageToBackend }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleHeaderExpansion = () => {
    setIsHeaderExpanded(!isHeaderExpanded);
  };

  const handleMessageSend = async () => {
    if (inputValue.trim() !== "") {
      const userMessage = { text: inputValue, sender: "You" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");

      const botMessage = { text: "Typing...", sender: "Pal" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      const res = await sendMessageToBackend(inputValue);
      const botResponse = { text: res, sender: "Pal" };
      setMessages((prevMessages) => [
        ...prevMessages.filter((message) => message.text !== "Typing..."),
        botResponse,
      ]);
    }
  };

  return (
    <div className={styles.chatInterface}>
      <div
        className={`${styles.aiProfile} ${
          isHeaderExpanded ? styles.expanded : ""
        }`}
        onClick={toggleHeaderExpansion}
      >
        <header className={styles.chatTitle}>My Portfolio Pal</header>
        {isHeaderExpanded && (
          <div className={styles.botInfo}>
            <p>
              This is My Portfolio Pal, a chatbot designed to assist you with
              information about my portfolio.
            </p>
            <p>Feel free to ask any questions or request information.</p>
          </div>
        )}
        <p className={styles.sideNote}>**My Pal may need one min to wake up**</p>
        <p className={styles.sideNote2}>**Refresh if needed**</p>
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
