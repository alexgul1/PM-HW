import React from "react";
import classNames from 'classnames';
import {useSelector} from "react-redux";

import selector from "./Resume.selector";

import styles from './Resume.module.css';

const Resume = () => {
  const {info, education, experience} = useSelector(selector);

  return (
    <div>
      <div className={classNames(styles.infoContainer, styles.userInfo)}>
        <h2 className={styles.name}>{info.firstName} {info.lastName}</h2>
        <p className={styles.position}>{info.position}</p>
        <div className={styles.userSocial}>
          <div>Email: {info.email}</div>
          <div>Phone: {info.phone}</div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Work Experience</h2>
        <div className={styles.timeline}>
          {experience.map(({position, company, startDate, endDate}) => (
            <div className={classNames(styles.timelineCard, styles.workBorderColor)}>
              <div className={styles.timelineHead}>
                {position} <span className={styles.muted}>at {company}</span>
                <p className={classNames(styles.muted, styles.timelineDate)}>{startDate} - {endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.timeline}>
          {education.map(({school, speciality, startDate, endDate}) => (
            <div className={classNames(styles.timelineCard, styles.eduBorderColor)}>
              <div className={styles.timelineHead}>
                {speciality} <span className={styles.muted}>from {school}</span>
                <p className={classNames(styles.muted, styles.timelineDate)}>{startDate} - {endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume;
