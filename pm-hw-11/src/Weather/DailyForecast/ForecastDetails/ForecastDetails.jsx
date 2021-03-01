import React from "react";

import styles from "./ForecastDetails.module.css";


class ForecastDetails extends React.Component {
  render() {
    const {wind, humidity, pressure, uvLevel} = this.props;
    return (
      <ul className={styles["details-list"]}>
        <li className={styles["item"]}>
          <img className={styles["icon"]} src="./img/windy.svg" alt="wind"/>
          <div className={styles["info"]}>
            <span className={styles["info-name"]}>Wind Direction</span>
            <span>{wind}</span>
          </div>
        </li>
        <li className={styles["item"]}>
          <img className={styles["icon"]} src="./img/humidity.svg" alt="humidity"/>
          <div className={styles["info"]}>
            <span className={styles["info-name"]}>Humidity</span>
            <span>{humidity}</span>
          </div>
        </li>
        <li className={styles["item"]}>
          <img className={styles["icon"]} src="./img/pressure.svg" alt="atmospheric-pressure"/>
          <div className={styles["info"]}>
            <span className={styles["info-name"]}>Atmospheric Pressure</span>
            <span>{pressure}</span>
          </div>
        </li>
        <li className={styles["item"]}>
          <img className={styles["icon"]} src="./img/uv-level.svg" alt="atmospheric-pressure"/>
          <div className={styles["info"]}>
            <span className={styles["info-name"]}>UV level</span>
            <span>{uvLevel} of 10</span>
          </div>
        </li>
      </ul>
    )
  }
}

export default ForecastDetails;
