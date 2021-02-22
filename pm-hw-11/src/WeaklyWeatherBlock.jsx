import React from "react";
import styles from "./WeaklyWeatherBlock.module.css";

const DailyWeatherBlock = ({date, lowestTemp, highestTemp, weatherIcon, wind, humidity, pressure, uvLevel}) => {
  const dateFormatOptions = {weekday: "short", year: "numeric", month: "short", day: "numeric"};

  date = date.split('/').reverse().join('/');
  const dateStr = (new Date(date)).toLocaleDateString("en-US", dateFormatOptions);

  const imgUrl = `./img/${weatherIcon}.svg`;

  return (
    <div className={styles["daily-forecast"]}>
      <div className={styles["date"]}>{dateStr}</div>
      <div className={styles["short-info"]}>
        <div className={styles["temperature"]}>
          <img className={styles["temperature-icon"]} src="./img/warm.svg" alt=""/>
          {highestTemp}°C / {lowestTemp}°C
          <img className={styles["weather-icon"]} src={imgUrl} alt={weatherIcon}/>
        </div>
      </div>
      <WeatherDetails wind={wind} humidity={humidity} pressure={pressure} uvLevel={uvLevel}/>
    </div>
  );

}

const WeatherDetails = ({wind, humidity, pressure, uvLevel}) => {
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

const WeaklyWeatherBlock = () => {
  return (
    <div className={styles["container"]}>
      <DailyWeatherBlock date="22/02/2021" lowestTemp="20" highestTemp="40" weatherIcon="sun" wind="W 11 kmph"
                         humidity="70%" pressure="760 mm Hg" uvLevel="7"/>
      <DailyWeatherBlock date="23/02/2021" lowestTemp="-20" highestTemp="-10" weatherIcon="cloud" wind="NW 15 kmph"
                         humidity="60%" pressure="860 mm Hg" uvLevel="2"/>
      <DailyWeatherBlock date="24/02/2021" lowestTemp="-10" highestTemp="-5" weatherIcon="snowy" wind="E 20 kmph"
                         humidity="85%" pressure="780 mm Hg" uvLevel="3"/>
      <DailyWeatherBlock date="25/02/2021" lowestTemp="5" highestTemp="10" weatherIcon="rainy" wind="NE 25 kmph"
                         humidity="90%" pressure="800 mm Hg" uvLevel="4"/>
      <DailyWeatherBlock date="26/02/2021" lowestTemp="10" highestTemp="15" weatherIcon="cloudy" wind="S 15 kmph"
                         humidity="65%" pressure="810 mm Hg" uvLevel="3"/>
      <DailyWeatherBlock date="27/02/2021" lowestTemp="6" highestTemp="12" weatherIcon="storm-rainy" wind="SW 22 kmph"
                         humidity="92%" pressure="750 mm Hg" uvLevel="5"/>
      <DailyWeatherBlock date="28/02/2021" lowestTemp="8" highestTemp="16" weatherIcon="storm" wind="SE 18 kmph"
                         humidity="75%" pressure="710 mm Hg" uvLevel="6"/>
    </div>
  );
};

export default WeaklyWeatherBlock;
