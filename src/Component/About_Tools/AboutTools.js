import styles from "./AboutTools.module.css";
import ToolsData from "./Tools_data/ToolsData";
// import Astro from "./Tools_data/Images/Astro.png"
const images = require.context("./Tools_data/Images", true);

export default function AboutTools() {
  return (
    <>
      <div className={styles.skillSet}>
        <div className={styles.skillTitle}>
          <div>My Skillset</div>
        </div>
        <div className={styles.skillSetDiv}>
          <div className={styles.frontendDiv}>
            <div>Frontend</div>
            <div>
              {ToolsData.frontendSkills.map((skill, key) => {
                return (
                  <>
                    <div key={key} className={styles.skillDiv}>
                      <img
                        className={`${styles.skillImg} ${skill.name}`}
                        style={skill.sty ? { width: skill.sty } : null}
                        src={
                          skill.adjust
                            ? images(`./${skill.image}.png`)
                            : skill.image
                        }
                        alt={skill.name}
                      />
                      <div>{skill.name}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.frontendDiv}>
            <div>Backend</div>
            <div>
              {ToolsData.backendSkills.map((skill, key) => {
                return (
                  <>
                    <div key={key} className={styles.skillDiv}>
                      <img
                        className={`${styles.skillImg} ${skill.name}`}
                        style={skill.sty ? { width: skill.sty } : null}
                        src={
                          skill.adjust
                            ? images(`./${skill.image}.png`)
                            : skill.image
                        }
                        alt={skill.name}
                      />
                      <div>{skill.name}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.frontendDiv}>
            <div>Cloud Tools</div>
            <div>
              {ToolsData.cloudSkills.map((skill, key) => {
                return (
                  <>
                    <div key={key} className={styles.skillDiv}>
                      <img
                        className={`${styles.skillImg} ${skill.name}`}
                        style={skill.sty ? { width: skill.sty } : null}
                        src={
                          skill.adjust
                            ? images(`./${skill.image}.png`)
                            : skill.image
                        }
                        alt={skill.name}
                      />
                      <div>{skill.name}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.frontendDiv}>
            <div>Developer Tools</div>
            <div>
              {ToolsData.developerToolsSkills.map((skill, key) => {
                return (
                  <>
                    <div key={key} className={styles.skillDiv}>
                      <img
                        className={`${styles.skillImg} ${skill.name}`}
                        style={skill.sty ? { width: skill.sty } : null}
                        src={
                          skill.adjust
                            ? images(`./${skill.image}.png`)
                            : skill.image
                        }
                        alt={skill.name}
                      />
                      <div>{skill.name}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
