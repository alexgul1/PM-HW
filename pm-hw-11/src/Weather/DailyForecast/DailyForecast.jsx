import React from "react";
import ForecastDetails from "./ForecastDetails/ForecastDetails";

import styles from "./DailyForecast.module.css";

const dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weatherImgList = {
  'sun': './img/sun.svg',
  'cloud': './img/cloud.svg',
  'snowy': './img/snowy.svg',
  'rainy': './img/rainy.svg',
  'cloudy': './img/cloudy.svg',
  'storm-rainy': './img/storm-rainy.svg',
  'storm': './img/storm.svg',
}

class DailyForecast extends React.Component {

  formatDate(dateStr) {
    const date = new Date(dateStr);

    const day = date.getDay();
    const monthDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${dayArr[day]}, ${monthDay} ${monthsArr[month]} ${year}`;
  }

  render() {
    const {date, lowestTemp, highestTemp, weatherForecast, wind, humidity, pressure, uvLevel} = this.props;

    const formattedDate = this.formatDate(date);

    return (
      <div className={styles["daily-forecast"]}>
        <div className={styles["date"]}>{formattedDate}</div>
        <div className={styles["short-info"]}>
          <div className={styles["temperature"]}>
            <img className={styles["temperature-icon"]} src="./img/warm.svg" alt=""/>
            {highestTemp}°C / {lowestTemp}°C
            <img className={styles["weather-icon"]} src={weatherImgList[weatherForecast]} alt={weatherForecast}
                 title={weatherForecast}/>
          </div>
        </div>
        <ForecastDetails wind={wind} humidity={humidity} pressure={pressure} uvLevel={uvLevel}/>
      </div>
    );
  }
}

export default DailyForecast;
