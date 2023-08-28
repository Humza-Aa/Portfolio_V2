import CrimeVue from "../App_Images/CrimeVue.png";
import FactCheck from "../App_Images/FactCheck.png";
import Astro from "../../About_Tools/Tools_data/Images/Astro.png";
import Vercel from "../../About_Tools/Tools_data/Images/Vercel.png";
import styles from "../Work.module.css";

export const projects = [
  {
    name: "CrimeVue",
    description: (
      <>
        CrimeVue is a{" "}
        <span className={styles.highlight}>dynamic web application</span>{" "}
        designed to enhance{" "}
        <span className={styles.highlight}>community safety</span> by harnessing{" "}
        <span className={styles.highlight}>live crime data</span> from Twitter.
        This innovative solution plots{" "}
        <span className={styles.highlight}>real-time</span> crime incidents onto
        an <span className={styles.highlight}>interactive map</span>, utilizing{" "}
        <span className={styles.highlight}>distinct icons</span> to represent
        various types of crimes. Each marker on the map provides users with{" "}
        <span className={styles.highlight}>detailed</span> information about the
        incident, empowering them with essential insights. By combining
        cutting-edge technology and real-time data, CrimeVue creates a{" "}
        <span className={styles.highlight}>safer environment</span> and fosters{" "}
        <span className={styles.highlight}>community awareness</span>.
      </>
    ),
    img: CrimeVue,
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      Vercel,
    ],
    links: {
      github: "https://github.com/Humza-Aa/Ontario_Crime_Mapper",
      Live: "https://crimevue.vercel.app/",
    },
  },
  {
    name: "Fact Checking Central",
    description: (
      <>
        Fact Checking Central is a web app that empowers users to{" "}
        <span className={styles.highlight}>develop critical thinking skills</span>{" "}
        by offering a{" "}
        <span className={styles.highlight}>structured questionnaire</span> for
        fact-checking. By distinguishing between fact and opinion, users can{" "}
        <span className={styles.highlight}>avoid misinformation</span>,{" "}
        <span className={styles.highlight}>make informed decisions</span>, and{" "}
        <span className={styles.highlight}>enhance their research skills</span>, all
        while <span className={styles.highlight}>staying safe online</span> and{" "}
        <span className={styles.highlight}>saving valuable time</span>.
      </>
    ),
    img: FactCheck,
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      Astro,
    ],
    links: {
      github: "https://github.com/Humza-Aa/FactCheckingCapstoneProject",
      Live: "https://mustaffaimran.github.io/",
    },
  },
];

export const smallProjects = [
  {
    name: "Twitter Scraper",
    description: (
      <>
        Introducing the{" "}
        <span className={styles.highlight}>Twitter Scraper</span>—an advanced
        tool designed to{" "}
        <span className={styles.highlight}>extract valuable insights</span> from
        Twitter. With the ability to{" "}
        <span className={styles.highlight}>scrape tweets</span> from any Twitter
        page, this application{" "}
        <span className={styles.highlight}>
          organizes content into different categories
        </span>{" "}
        and stores it in a structured database. Uncover trends,{" "}
        <span className={styles.highlight}>analyze user sentiment</span>, and
        access real-time data to make{" "}
        <span className={styles.highlight}>informed decisions</span> with ease.
      </>
    ),
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    ],
    links: {
      github:
        "https://github.com/Humza-Aa/Ontario_Crime_Mapper/tree/main/Twitter_Scraper",
    },
  },
  {
    name: "Etch A Sketch",
    description: (
      <>
        Introducing <span className={styles.highlight}>Etch a Sketch</span>—a
        playful web application that invites users to{" "}
        <span className={styles.highlight}>unleash their creativity</span>{" "}
        through a <span className={styles.highlight}>digital canvas</span>.
        Emulating the <span className="italic">clasic drawing toy</span>, this
        interactive experience allows you to{" "}
        <span className={styles.highlight}>
          sketch, doodle, and experiment with various patterns and colors
        </span>
        . Let your{" "}
        <span className="italic highlight">imagination run wild</span> as you{" "}
        <span className={styles.highlight}>create, erase, and redraw</span> with
        a modern twist.
      </>
    ),
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    links: {
      github: "https://github.com/Humza-Aa/Google_Playstore_Review_Scraper",
      Live: "https://humza-aa.github.io/ETCH-A-SKETCH/",
    },
  },
  {
    name: "Playstore Review Scraper",
    description: (
      <>
        Introducing the{" "}
        <span className={styles.highlight}>Playstore Scraper</span>—an
        innovative app that harnesses the power of data to provide{" "}
        <span className={styles.highlight}>valuable insights</span> into app
        performance. By scraping app reviews and employing{" "}
        <span className={styles.highlight}>natural language processing</span>,
        this tool offers an{" "}
        <span className={styles.highlight}>in-depth analysis</span> of user
        sentiments and overall app satisfaction. Get a{" "}
        <span className={styles.highlight}>comprehensive view</span> of app
        performance and enhance decision-making with{" "}
        <span className={styles.highlight}>
          actionable data-driven insights
        </span>
        .
      </>
    ),
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    ],
    links: {
      github: "https://github.com/Humza-Aa/Google_Playstore_Review_Scraper",
    },
  },
];
