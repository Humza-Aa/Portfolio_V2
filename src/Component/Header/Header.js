import styles from "./Header.module.css";
import MobileNav from "./MobileNav/MobileNav";

export default function Header(props) {
  const hLinks = props.hLinks;

  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.logo}>HA.</div>
        <div className={styles.linksDiv}>
          {hLinks.map((link, key) => {
            return (
              <div className={styles.linkDiv} key={key}>
                <a href={link.path}>{link.name}</a>
              </div>
            );
          })}
        </div>
        <MobileNav hLinks={hLinks} />
      </div>
    </>
  );
}
