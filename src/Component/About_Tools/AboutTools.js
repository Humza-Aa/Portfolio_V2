import styles from "./AboutTools.module.css"

export default function AboutTools() {
  return(
    <>
    <div className={styles.skillSet}>
        <div className={styles.skillTitle}>
          <div>My Skill Set</div>
        </div>
        <div className={styles.skillSetDiv}>
          <div>Frontend</div>
          <div>BackEnd</div>
          <div>Tools</div>
        </div>

      </div>
    </>
  )
}