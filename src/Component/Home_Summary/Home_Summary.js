import styles from "./Home_Summary.module.css";
import profilePic from "./Images/profilepic.JPG";

export default function HomeSummary(props) {
  const Summary = props.Summary;

  return (
    <>
      <div className={styles.homeSumDiv} id="summary">
        <div className={styles.aboutTitle}>
          <div>ABOUT</div>
          <div>Who Am I?</div>
        </div>
        <div className={styles.aboutDescription}>
          <div>
            {Summary.map((para, key) => {
              return (
                <>
                  {para}
                  <br/>
                  <br/>
                </>
              );
            })}
          </div>
          <div className={styles.profilePic}>
            <img src={profilePic} alt="Humza" />
          </div>
        </div>
      </div>
    </>
  );
}
