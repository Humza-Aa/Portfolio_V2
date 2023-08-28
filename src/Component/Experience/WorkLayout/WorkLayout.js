import { useState } from "react";
import styles from "./WorkLayout.module.css";

export default function WorkLayout() {
  const [active, setActive] = useState(1);
  const workData = [
    {
      WorkPlace: "Project Human City",
      Role: "Software Developer",
      TimeSpent: "Jan 2023 – Present",
      Description: [
        `Collaborated with a team of five developers through an agile development process to improve responsiveness,
      accessibility, and UI design, resulting in a 30% improvement in product quality and a 20% increase in client
      satisfaction ratings`,
        `Spearheaded the development of the front-end, by employing a user-centered design approach by conducting 45+
      user tests to determine the best UI/UX approach, resulting in improved user experience and increased engagement`,
        `Revamped existing wireframes, utilizing a responsive design approach to improve the platform’s usability by 10%
      and accessibility by 40% across a variety of devices, resulting in a more intuitive and streamlined user experience.`,
      ],
      id: 1,
    },
    {
      WorkPlace: "Excel Lassonde",
      Role: "Software Developer",
      TimeSpent: "Sep 2022 – Dec 2022",
      Description: [
        `Redesigned wireframes and mock-ups using design software such as Figma to showcase design concepts and user
        interfaces for various web applications, leading to 70% higher user adoption rates.`,
        `Designed, developed, and deployed customized software applications by collaborating with cross-functional teams to
        analyze user requirements, resulting in enhanced user test cases and greater inclusivity for all users.`,
        `Implemented various performance optimization techniques, including image compression, lazy loading, and caching,
        resulting in an 80% reduction in page load times and a significant increase of 5,000 monthly website visitors.`,
      ],
      id: 2,
    },
  ];

  return (
    <>
      <div className={styles.WorkPlacesDiv}>
        {workData.map((workInfo, key) => {
          return (
            <>
              <div
                key={key}
                onClick={() => setActive(workInfo.id)}
                className={`${
                  active === workInfo.id
                    ? styles.workActive
                    : styles.workNotActive
                } ${styles.WorkPlace}`}
              >
                {workInfo.WorkPlace}
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.workLayout}>
        {workData.map((workInfo, key) => {
          return (
            <>
              <div
                key={key}
                className={`${styles.Description} ${
                  active === workInfo.id ? styles.active : styles.hidden
                }`}
              >
                <div>{workInfo.Role}</div>
                <div>{workInfo.TimeSpent}</div>
                <ul className={styles.deslist}>
                  {workInfo.Description.map((des, keyq) => {
                    return (
                      <>
                        <li key={keyq}>{des}</li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
