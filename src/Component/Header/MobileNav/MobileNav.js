import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./MobileNav.module.css";

export default function MobileNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className={styles.headerDiv}>
        <HamburgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className={styles.HamburgerMenu}
          ref={refTwo}
        />
        <div
          ref={ref}
          className={`${styles.linksDiv} ${
            isOpen ? styles.open : styles.close
          }`}
        >
          {props.hLinks.map((link, key) => {
            return (
              <a onClick={() => setIsOpen(!isOpen)} href={link.path}>
                <div className={styles.linkDiv} key={key}>
                  {link.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
