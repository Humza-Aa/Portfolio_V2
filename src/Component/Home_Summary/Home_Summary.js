import styles from "./Home_Summary.module.css";
import profilePic from "./Images/profilepic.JPG";

export default function HomeSummary() {
  const Summary = [
    <>
      Hey there, I'm <span className={styles.myName}>Humza</span>—an avid
      software developer fueled by a passion for crafting immersive digital
      experiences. It all began three years ago when I embarked on a journey
      with The Odin Project, igniting a love for coding that has only grown
      stronger.
    </>,
    <>
      Today, I'm part of the dynamic team at{" "}
      <span className={styles.projectName}>
        <a
          href="https://projecthumancity.com/"
          target="_blank"
          rel="noreferrer"
        >
          Project Human City
        </a>
      </span>
      , where I fuse technology with purpose. Whether it's bringing single-page
      wonders to life or orchestrating intricate full stack marvels, I thrive on
      translating ideas into digital reality.
    </>,
    <>
      Recently armed with a degree in{" "}
      <span className={styles.degree}>Computer Engineering</span>, I'm on a
      relentless pursuit of progress. Venturing into the realms of cloud
      computing and AI, I revel in the synergy of innovation and mastery.
    </>,
    <>
      In addition to my journey, I've also embarked on a mission to drive
      change. I proudly introduced{" "}
      <span className={styles.appName}>
        <a
          href="https://crimevue.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          'CrimeVue'
        </a>
      </span>
      —a transformative solution that meticulously gathers and visualizes crime
      data, thereby contributing to safer communities. Join me on this impactful
      expedition as we reshape the landscape together.
    </>,
  ];

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
