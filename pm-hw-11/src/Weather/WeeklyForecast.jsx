import React from "react";
import DailyWeatherBlock from "./DailyForecast/DailyForecast";

import styles from "./WeeklyForecast.module.css";

const forecastList = [
  {
    id: 1,
    date: "2021/02/22",
    lowestTemp: "20",
    highestTemp: "40",
    weatherForecast: "sun",
    wind: "W 11 kmph",
    humidity: "70%",
    pressure: "760 mm Hg",
    uvLevel: "7"
  },
  {
    id: 2,
    date: "2021/02/23",
    lowestTemp: "-23",
    highestTemp: "-10",
    weatherForecast: "cloud",
    wind: "NW 15 kmph",
    humidity: "60%",
    pressure: "860 mm Hg",
    uvLevel: "2"
  },
  {
    id: 3,
    date: "2021/02/24",
    lowestTemp: "-10",
    highestTemp: "-5",
    weatherForecast: "snowy",
    wind: "E 20 kmph",
    humidity: "85%",
    pressure: "780 mm Hg",
    uvLevel: "3"
  },
  {
    id: 4,
    date: "2021/02/25",
    lowestTemp: "5",
    highestTemp: "10",
    weatherForecast: "rainy",
    wind: "NE 25 kmph",
    humidity: "90%",
    pressure: "800 mm Hg",
    uvLevel: "4"
  },
  {
    id: 5,
    date: "2021/02/26",
    lowestTemp: "10",
    highestTemp: "15",
    weatherForecast: "cloudy",
    wind: "S 15 kmph",
    humidity: "65%",
    pressure: "810 mm Hg",
    uvLevel: "3"
  },
  {
    id: 6,
    date: "2021/02/27",
    lowestTemp: "6",
    highestTemp: "12",
    weatherForecast: "storm-rainy",
    wind: "SW 22 kmph",
    humidity: "92%",
    pressure: "750 mm Hg",
    uvLevel: "5"
  },
  {
    id: 7,
    date: "2021/02/28",
    lowestTemp: "8",
    highestTemp: "16",
    weatherForecast: "storm",
    wind: "SE 18 kmph",
    humidity: "75%",
    pressure: "710 mm Hg",
    uvLevel: "6"
  }
]

class WeeklyForecast extends React.Component {
  render() {
    return (
      <div className={styles["container"]}>
        {forecastList.map((forecast) => {
          return <DailyWeatherBlock key={forecast.id} {...forecast} />
        })}
      </div>
    );
  }
}

export default WeeklyForecast;
