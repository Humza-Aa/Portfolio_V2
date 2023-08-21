import styles from './Header.module.css'

export default function Header() {
  const hLinks = [
    {
      name: 'Home',
      svg: 'home',
      path: ''
    },
    {
      name: 'About',
      svg: 'about',
      path: ''
    },
    {
      name: 'Experience',
      svg: 'exp',
      path: ''
    },
    {
      name: 'Work',
      svg: 'home',
      path: ''
    },
    {
      name: 'Contact',
      svg: 'home',
      path: ''
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
                  <a href="/">{link.name}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
