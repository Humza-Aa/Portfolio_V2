import styles from "./Experience.module.css";
import WorkLayout from "./WorkLayout/WorkLayout";

export default function Experience() {
  return(
    <>
      <div className={styles.ExpDiv}>
        <div className={styles.expTitle}>
          <div>EXPERIENCE</div>
          <div>My Professional Journey</div>
          <div className={styles.workListingDiv}>
            <WorkLayout />
          </div>
        </div>
      </div>
    </>
  )
}