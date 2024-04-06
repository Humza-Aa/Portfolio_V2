import homeSummarystyles from "../Component/Home_Summary/Home_Summary.module.css";

import CrimeVue from "../Component/Work/App_Images/CrimeVue.png";
import FactCheck from "../Component/Work/App_Images/FactCheck.png";
import Astro from "../Component/About_Tools/Tools_data/Images/Astro.png";
import Vercel from "../Component/About_Tools/Tools_data/Images/Vercel.png";
import projectStyles from "../Component/Work/Work.module.css";

const Data = {
  header: {
    hLinks: [
      {
        name: "Home",
        svg: "home",
        path: "#home",
      },
      {
        name: "About",
        svg: "about",
        path: "#summary",
      },
      {
        name: "Experience",
        svg: "exp",
        path: "#exp",
      },
      {
        name: "Work",
        svg: "home",
        path: "#work",
      },
      {
        name: "Contact",
        svg: "home",
        path: "#contact",
      },
    ],
  },
  Home_Intro: {
    typer: [
      "Developer",
      "Cloud Engineer",
      "Software Developer",
      "AI Enthusiast",
      "Full Stack Developer",
      "UX/UI Designer",
      "Web Developer",
    ],
  },
  HomeSummary: {
    Summary: [
      <>
        Hey there, I'm <span className={homeSummarystyles.myName}>Humza</span>
        —an avid software developer fueled by a passion for crafting immersive
        digital experiences. My coding adventure kicked off three years ago when
        I discovered{" "}
        <span className={homeSummarystyles.projectName}>
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project
          </a>
        </span>
        , and ever since, my love for programming has only grown stronger.
      </>,
      <>
        Currently, I'm part of the dynamic team at{" "}
        <span className={homeSummarystyles.projectName}>
          <a
            href="https://cascadiacarbon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Cascadia Carbon
          </a>
        </span>
        , where I merge technology with purpose. Whether it's bringing
        single-page wonders to life or orchestrating intricate full stack
        marvels, I thrive on translating ideas into digital reality.
      </>,
      <>
        Recently armed with a Bachelor's in{" "}
        <span className={homeSummarystyles.degree}>Computer Engineering</span>,
        I'm on a mission for growth that knows no bounds. Exploring the
        fascinating worlds of cloud computing and AI, I'm all about the perfect
        mix of creativity and skill.
      </>,
      <>
        In addition to my journey, I've also taken up a mission to make a
        difference. Allow me to introduce you to{" "}
        <span className={homeSummarystyles.appName}>
          <a
            href="https://crimevue.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            'CrimeVue'
          </a>
        </span>
        —a project close to my heart, meticulously gathering and visualizing
        crime data to help build safer communities. And meet{" "}
        <span className={homeSummarystyles.appName}>
          <a
            href="https://github.com/Humza-Aa/AI_Chat_App"
            target="_blank"
            rel="noreferrer"
          >
            'My Portfolio Pal'
          </a>
        </span>
        —an AI chatbot trained on my experiences, here to answer any questions
        you might have about me. Let's embark on this meaningful journey
        together, shaping the world for the better.
      </>,
    ],
  },
  About_Tools: {
    frontendSkills: [
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "TailWindCss",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vue",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Angular",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      },
      {
        name: "Sass",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
    ],
    backendSkills: [
      {
        name: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Astro",
        adjust: true,
        sty: "50px",
        image: "Astro",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
    cloudSkills: [
      {
        name: "AWS",
        sty: "50px",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        source:
          "Amazon.com Inc., Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>, via Wikimedia Commons",
      },
      {
        name: "Kubernetes",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      { name: "Vercel", adjust: true, sty: "50px", image: "Vercel" },
    ],
    developerToolsSkills: [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      { name: "JUnit", adjust: true, image: "Junit" },
      { name: "Postman", adjust: true, image: "Postman" },
      {
        name: "Canvas",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      },
      {
        name: "Bash",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
    ],
    additionalSkills: [
      { name: "MATLAB", image: "matlab.png" },
      // Add more skills here
    ],
  },
  WorkLayout: {
    workData: [
      {
        WorkPlace: "Cascadia Carbon",
        Role: "Software Developer",
        TimeSpent: "Jan 2024 – Present",
        Description: [
          "Revamped React to Next.js web app, for intuitive navigation and 20% faster loading.",
          "Deployed web app to Firebase for seamless scalability and management.",
          "Enhanced user experience with dynamic features and animations, leading to a 15% increase in user engagement.",
          "Streamlined onboarding process, enabling new developers to integrate and contribute 25% faster.",
        ],
        id: 1,
      },
      {
        WorkPlace: "Project Human City",
        Role: "Software Developer",
        TimeSpent: "Jan 2023 – 2024",
        Description: [
          `Collaborated with cross-functional teams in enhancing product responsiveness, accessibility, and UI design through
          rigorous user tests and A/B testing, resulting in a 20% boost in user satisfaction`,
          `Developed React functional components from scratch, seamlessly integrating them into the existing legacy code base to
          optimize the user experience and reduce UI bugs`,
          `Refactored a secure Node.js with Express.js back-end server, integrating user authentication and access control for
          protected pages`,
          "Developed REST APIs for efficient user data communication between the front-end and back-end, while integrating MongoDB to ensure secure storage of sensitive information",
        ],
        id: 2,
      },
      {
        WorkPlace: "Excel Lassonde",
        Role: "Software Developer",
        TimeSpent: "Sep 2022 – Dec 2022",
        Description: [
          `Revamped UI designs and mock-ups using Figma, resulting in a 70% increase in user adoption rates`,
          `Addressed performance issues, implementing optimization techniques, including image compression, lazy loading, and
          caching for a 10% faster page load`,
          `Successfully integrated York University’s Duo authentication system, strengthening web security and ensuring secure
          access, resulting in a significant 60% reduction in false tutor appointments`,
          "Transformed the back-end with Node.js and Express to flawlessly manage front-end requests from 500+ students, averting crashes and ensuring uninterrupted service",
        ],
        id: 3,
      },
    ],
  },
  Projects: {
    //Work
    projects: [
      {
        name: "CrimeVue",
        description: (
          <>
            CrimeVue is a{" "}
            <span className={projectStyles.highlight}>
              dynamic web application
            </span>{" "}
            designed to enhance{" "}
            <span className={projectStyles.highlight}>community safety</span> by
            harnessing{" "}
            <span className={projectStyles.highlight}>live crime data</span>{" "}
            from Twitter. This innovative solution plots{" "}
            <span className={projectStyles.highlight}>real-time</span> crime
            incidents onto an{" "}
            <span className={projectStyles.highlight}>interactive map</span>,
            utilizing{" "}
            <span className={projectStyles.highlight}>distinct icons</span> to
            represent various types of crimes. Each marker on the map provides
            users with <span className={projectStyles.highlight}>detailed</span>{" "}
            information about the incident, empowering them with essential
            insights. By combining cutting-edge technology and real-time data,
            CrimeVue creates a{" "}
            <span className={projectStyles.highlight}>safer environment</span>{" "}
            and fosters{" "}
            <span className={projectStyles.highlight}>community awareness</span>
            .
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
            <span className={projectStyles.highlight}>
              develop critical thinking skills
            </span>{" "}
            by offering a{" "}
            <span className={projectStyles.highlight}>
              structured questionnaire
            </span>{" "}
            for fact-checking. By distinguishing between fact and opinion, users
            can{" "}
            <span className={projectStyles.highlight}>
              avoid misinformation
            </span>
            ,{" "}
            <span className={projectStyles.highlight}>
              make informed decisions
            </span>
            , and{" "}
            <span className={projectStyles.highlight}>
              enhance their research skills
            </span>
            , all while{" "}
            <span className={projectStyles.highlight}>staying safe online</span>{" "}
            and{" "}
            <span className={projectStyles.highlight}>
              saving valuable time
            </span>
            .
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
          github:
            "https://github.com/mustaffaimran/FactCheckingCapstoneProject",
          Live: "https://mustaffaimran.github.io/",
        },
      },
    ],
    smallProjects: [
      {
        name: "Twitter Scraper",
        description: (
          <>
            Introducing the{" "}
            <span className={projectStyles.highlight}>Twitter Scraper</span>—an
            advanced tool designed to{" "}
            <span className={projectStyles.highlight}>
              extract valuable insights
            </span>{" "}
            from Twitter. With the ability to{" "}
            <span className={projectStyles.highlight}>scrape tweets</span> from
            any Twitter page, this application{" "}
            <span className={projectStyles.highlight}>
              organizes content into different categories
            </span>{" "}
            and stores it in a structured database. Uncover trends,{" "}
            <span className={projectStyles.highlight}>
              analyze user sentiment
            </span>
            , and access real-time data to make{" "}
            <span className={projectStyles.highlight}>informed decisions</span>{" "}
            with ease.
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
            Introducing{" "}
            <span className={projectStyles.highlight}>Etch a Sketch</span>—a
            playful web application that invites users to{" "}
            <span className={projectStyles.highlight}>
              unleash their creativity
            </span>{" "}
            through a{" "}
            <span className={projectStyles.highlight}>digital canvas</span>.
            Emulating the <span className="italic">clasic drawing toy</span>,
            this interactive experience allows you to{" "}
            <span className={projectStyles.highlight}>
              sketch, doodle, and experiment with various patterns and colors
            </span>
            . Let your{" "}
            <span className="italic highlight">imagination run wild</span> as
            you{" "}
            <span className={projectStyles.highlight}>
              create, erase, and redraw
            </span>{" "}
            with a modern twist.
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
            <span className={projectStyles.highlight}>Playstore Scraper</span>
            —an innovative app that harnesses the power of data to provide{" "}
            <span className={projectStyles.highlight}>
              valuable insights
            </span>{" "}
            into app performance. By scraping app reviews and employing{" "}
            <span className={projectStyles.highlight}>
              natural language processing
            </span>
            , this tool offers an{" "}
            <span className={projectStyles.highlight}>in-depth analysis</span>{" "}
            of user sentiments and overall app satisfaction. Get a{" "}
            <span className={projectStyles.highlight}>comprehensive view</span>{" "}
            of app performance and enhance decision-making with{" "}
            <span className={projectStyles.highlight}>
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
    ],
  },
  Contact: `I'm always open to exciting new opportunities and collaborations in
  the world of software development. Whether it's discussing potential
  projects, sharing insights, or simply saying hello, I'm eager to
  connect and explore how we can work together to create innovative
  solutions. Let's connect and build something remarkable!`,
};

export default Data;
