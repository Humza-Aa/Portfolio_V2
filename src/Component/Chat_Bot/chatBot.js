import React, { useState, useRef, useEffect } from "react";
import ChatInterface from "./Chat_Interface/chatInterface";
import styles from "./chatBot.module.css";
import ReactTyped from "react-typed";
import Data from "../../Data/Data";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const sendMessageToBackend = async (message, API) => {
    try {
      const formData = new FormData();
      formData.append("message", message);

      const response = await fetch(
        `https://chat-app-zl6s.onrender.com/${API}`,
        {
          method: "POST",
          body: formData,
        }
      );

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

  useEffect(() => {
    sendMessageToBackend("Site Opened", "loc");
  }, []);

  return (
    <div ref={chatContainerRef} className={styles.container}>
      {showPopup && !showChat && (
        <div className={styles.popup}>
          <ReactTyped
            strings={Data.ChatBot.catch}
            typeSpeed={80}
            loop
            backSpeed={20}
            showCursor={true}
          />
          <button className={styles.closeBtn} onClick={closePopup}>
            x
          </button>
        </div>
      )}
      <button className={styles.btn} onClick={toggleChat}>
        {showChat ? "Close Chat" : "Talk to My Pal"}
      </button>
      {showChat && (
        <ChatInterface
          toggleChat={toggleChat}
          sendMessageToBackend={sendMessageToBackend}
        />
      )}
    </div>
  );
};

export default Chatbot;
