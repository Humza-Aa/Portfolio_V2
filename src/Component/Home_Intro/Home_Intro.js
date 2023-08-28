import ReactTyped from "react-typed";
import styles from "./home_Intro.module.css";
import CoderAnimation from "./Animations/CoderAnimation";

export default function Home_Intro() {
  return (
    <>
      <div className={styles.homeDiv} id="home">
        <div className={styles.homeLeftSide}>
          <div>Hello, my name is</div>
          <div> Humza Aamir </div>
          <div>
            <ReactTyped
              strings={["Developer", "Software Developer", "AI Enthusiast", "Full Stack Developer", "UX/UI Designer", "Web Developer"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              // cursorChar=")"
              showCursor={true}
            />

          </div>
        </div>
        <div className={styles.homeRightSide}>
          <div className={styles.animationDiv}>
            <CoderAnimation />
          </div>
        </div>
      </div>
    </>
  );
}
