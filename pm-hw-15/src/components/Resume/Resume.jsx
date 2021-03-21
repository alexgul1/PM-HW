import React from "react";
import classNames from 'classnames';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import selector from "./Resume.selector";
import {dateFormat} from "../../utils/dateUtils";

import styles from './Resume.module.css';

const Resume = () => {
  const history = useHistory();
  const {info, education, experience} = useSelector(selector);

  function onClick() {
    history.push('/resume-builder');
  }

  return (
    <React.Fragment>
      {(Object.keys(info).length === 0 || education.length === 0 || experience.length === 0) ?
        <React.Fragment>
          <h2>You have not filled out all the required information to create a resume</h2>
          <button className={styles.btn} type="button" onClick={onClick}>Create Resume</button>
        </React.Fragment> :
        <React.Fragment>
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
              {experience.map(({position, company, startDate, endDate}, index) => (
                <div key={index} className={classNames(styles.timelineCard, styles.workBorderColor)}>
                  <div className={styles.timelineHead}>
                    {position} <span className={styles.muted}>at {company}</span>
                    <p
                      className={classNames(styles.muted, styles.timelineDate)}>{dateFormat(startDate)} - {dateFormat(endDate)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoContainer}>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.timeline}>
              {education.map(({school, speciality, startDate, endDate}, index) => (
                <div key={index} className={classNames(styles.timelineCard, styles.eduBorderColor)}>
                  <div className={styles.timelineHead}>
                    {speciality} <span className={styles.muted}>from {school}</span>
                    <p
                      className={classNames(styles.muted, styles.timelineDate)}>{dateFormat(startDate)} - {dateFormat(endDate)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.btn} type="button" onClick={onClick}>Update Resume</button>
        </React.Fragment>
      }
    </React.Fragment>


  )
}

export default Resume;
