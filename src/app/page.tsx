'use client';

import styles from "./page.module.css";
import {useEffect, useState} from "react";

interface HourlyData {
  time: Array<string> // A list of times
  temperature_2m: Array<number> // A list of temperatures at those respective times, corresponding to index
}

export default function Home() {
  const [hourlyData, setHourlyData] = useState<HourlyData>()

  /*
  TODO: I want you to display all the temperatures in ºF!
   */

  async function fetchWeather() {
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=29.72&longitude=-95.4&hourly=temperature_2m&forecast_days=1')
    const json = await data.json()
    const hourly = json.hourly as HourlyData
    setHourlyData(hourly);
  }

  // Run once on mount
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {hourlyData?.time.map((time, index) => (
            <li key={index}>
              {time}: <strong>{hourlyData?.temperature_2m[index]}°C</strong>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
