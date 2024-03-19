// App.js
import React, { useState, useRef } from "react";
import ChatInterface from "./Chat_Interface/chatInterface";
import styles from "./chatBot.module.css";

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const chatContainerRef = useRef(null);

  const handleButtonClick = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const sendMessageToBackend = async (message) => {
    try {
      const formData = new FormData();
      formData.append("message", message);

      const response = await fetch("https://chat-app-zl6s.onrender.com/chat", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Handle response if needed
      const data = await response.text();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div ref={chatContainerRef} className={styles.container}>
      <button className={styles.btn} onClick={handleButtonClick}>
        chat now
      </button>
      {showChat && (
        <ChatInterface
          onClose={handleCloseChat}
          sendMessageToBackend={sendMessageToBackend}
        />
      )}
    </div>
  );
};

export default App;
