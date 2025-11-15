'use client';

import {useEffect, useState} from "react";

const styles = {
  page: {
    alignItems: "center",
    justifyItems: "center",
    gap: "64px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  }
} as const;

export default function Home() {
  async function fetchWeather() {
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=29.72&longitude=-95.4&hourly=temperature_2m&forecast_days=1')
    const json = await data.json()
    // TODO
  }

  // Run once on mount
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <ul>
          // TODO
        </ul>
      </main>
    </div>
  );
}
