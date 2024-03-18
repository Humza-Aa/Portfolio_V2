import styles from "./chatBot.module.css";

export default function ChatBot() {
  const handleClick = () => {
    // Function to handle button click
    console.log("Button clicked!");
    // You can add logic here to trigger your chatbot
  };

  return (
    <div>
      <button className={styles.btn} onClick={handleClick} text="Start Chat"> Chat Now </button>
    </div>
  );
}
