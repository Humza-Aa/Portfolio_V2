import { useState } from "react";
import styles from "./WorkLayout.module.css";

export default function WorkLayout(props) {
  const [active, setActive] = useState(1);
  const workData = props.workData;

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
