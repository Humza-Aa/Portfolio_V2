// ChatInterface.js
import React, { useState } from 'react';
import styles from './chatInterface.module.css';

const ChatInterface = ({ onClose, buttonPosition }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Add logic here to send message to chatbot
    }
  };

  return (
    <div className={styles.chatinterface} style={{ top: buttonPosition.top - 300, left: buttonPosition.left - 150 }}>
      <div className={styles.chatwindow}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles.message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputarea}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
      <button className={styles.closebutton} onClick={onClose}>Close</button>
    </div>
  );
};

export default ChatInterface;
