import React, { useState, useRef } from "react";
import ChatInterface from "./Chat_Interface/chatInterface";
import styles from "./chatBot.module.css"

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const chatButtonRef = useRef(null);

  const handleButtonClick = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const getButtonPosition = () => {
    const buttonRect = chatButtonRef.current.getBoundingClientRect();
    return {
      top: buttonRect.top,
      left: buttonRect.left,
    };
  };

  return (
    <div>
      <button
        className={styles.btn}
        ref={chatButtonRef}
        onClick={handleButtonClick}

      >chat now</button>
      {showChat && (
        <ChatInterface
          onClose={handleCloseChat}
          buttonPosition={getButtonPosition()}
        />
      )}
    </div>
  );
};

export default App;
