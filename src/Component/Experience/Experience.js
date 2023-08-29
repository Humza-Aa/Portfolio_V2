import styles from "./Experience.module.css";
import WorkLayout from "./WorkLayout/WorkLayout";

export default function Experience(props) {
  return(
    <>
      <div className={styles.ExpDiv} id="exp">
        <div className={styles.expTitle}>
          <div>EXPERIENCE</div>
          <div>My Professional Journey</div>
          <div className={styles.workListingDiv}>
            <WorkLayout workData={props.workData}/>
          </div>
        </div>
      </div>
    </>
  )
}