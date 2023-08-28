import styles from "./Home_Summary.module.css";
import profilePic from "./Images/profilepic.JPG"

export default function HomeSummary() {
  return (
    <>
      <div className={styles.homeSumDiv} id="summary">
        <div className={styles.aboutTitle}>
          <div>ABOUT</div>
          <div>Who Am I?</div>
        </div>
        <div className={styles.aboutDescription}>
          <div>
            Hey there! I'm Humza, a passionate software developer on a journey
            of constant growth. It all began three years ago when I embarked on
            my web development adventure through The Odin Project. What started
            as curiosity quickly evolved into a full-fledged passion, shaping
            the path that led me to where I am today. My thirst for knowledge
            drives me to explore emerging technologies.
            <br />
            <br />
            My journey has led me to the vibrant realm of software development.
            Currently, I'm a software developer at Project Human City,
            channeling my skills into crafting solutions that combine
            cutting-edge technology with meaningful impact. From responsive
            single-page wonders to intricate full stack marvels, I thrive on
            translating ideas into tangible digital experiences.
            <br />
            <br />
            Recently graduated in Computer Engineering from York University, I'm driven by a hunger for progress. Beyond the lines of code, I'm immersing myself in the dynamic realms of cloud computing and AI, exploring the thrilling intersection of innovation and mastery.
            <br />
            <br />
            One of my proudest achievements is 'CrimeVue.' This web app is more
            than code—it's an impactful solution that plots crime data on a map,
            empowering users with insights that drive safer communities.
          </div>
          <div className={styles.profilePic}>
            <img src={profilePic} alt="Humza" />
          </div>
        </div>
      </div>
    </>
  );
}
