import styles from './Header.module.css'
import MobileNav from './MobileNav/MobileNav';

export default function Header() {
  const hLinks = [
    {
      name: 'Home',
      svg: 'home',
      path: '#home'
    },
    {
      name: 'About',
      svg: 'about',
      path: '#summary'
    },
    {
      name: 'Experience',
      svg: 'exp',
      path: '#exp'
    },
    {
      name: 'Work',
      svg: 'home',
      path: '#work'
    },
    {
      name: 'Contact',
      svg: 'home',
      path: '#contact'
    },
  ]

  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.logo}>HA.</div>
        <div className={styles.linksDiv}>
          {
            hLinks.map((link, key) => {
              return(
                <div className={styles.linkDiv} key={key}>
                  <a href={link.path}>{link.name}</a>
                </div>
              )
            })
          }
        </div>
        <MobileNav hLinks={hLinks}/>
      </div>
    </>
  );
}
