import styles from "./Experience.module.css";

export default function Experience() {
  return(
    <>
      <div className={styles.ExpDiv}>
        <div className={styles.expTitle}>
          <div>Experience</div>
          <div>My Professional Journey</div>
          <div className={styles.workListingDiv}>
            <div>Work Places</div>
            <div>Description</div>
          </div>
        </div>
      </div>
    </>
  )
}