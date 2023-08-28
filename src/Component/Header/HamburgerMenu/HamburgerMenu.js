import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu(props) {

  const toggleMenu = () => {
    props.setIsOpen(!props.isOpen);
  };


  return (
    <>
      <div
        className={`${styles.hamburger_icon} ${
          props.isOpen ? styles.open : ""
        }`}
        onClick={toggleMenu}
        id="hamBtn"
      >
        <div className={styles.bar} onClick={toggleMenu}></div>
        <div className={styles.bar} onClick={toggleMenu}></div>
        <div className={styles.bar} onClick={toggleMenu}></div>
      </div>
    </>
  );
}
