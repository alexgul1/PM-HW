import React from "react";
import classNames from 'classnames';

import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div>
      <div className={classNames(styles.infoContainer, styles.userInfo)}>
        <h2 className={styles.name}>Walter Patterson</h2>
        <p className={styles.position}>Front-end Developer</p>
        <div className={styles.userSocial}>
          <div>Email: wasd@sada.casd</div>
          <div>Phone: asd@sadg.cxgd</div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Work Experience</h2>
        <div className={styles.timeline}>
          <div className={classNames(styles.timelineCard, styles.workBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>at Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
          <div className={classNames(styles.timelineCard, styles.workBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>at Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
          <div className={classNames(styles.timelineCard, styles.workBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>at Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.timeline}>
          <div className={classNames(styles.timelineCard, styles.eduBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>from Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
          <div className={classNames(styles.timelineCard, styles.eduBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>from Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
          <div className={classNames(styles.timelineCard, styles.eduBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>from Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
          <div className={classNames(styles.timelineCard, styles.eduBorderColor)}>
            <div className={styles.timelineHead}>
              Fronte <span className={styles.muted}>from Creative Agency</span>
              <p className={classNames(styles.muted, styles.timelineDate)}>May, 2015 - present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
