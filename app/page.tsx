"use client";

import { useState } from "react";

import styles from "./home.module.css";

export default function Home() {
  const [clicks, setClicks] = useState<number>(0);

  function increaseCount() {
    setClicks(clicks + 1);
  };

  return (
    <div className={`${styles.page}`}>
      <h1>You have {clicks} cookies!</h1>

      <button onClick={increaseCount}>
        <img src="https://v5.airtableusercontent.com/v3/u/48/48/1765699200000/768XxJwp2bNRSB1kR-_xVw/28Sw9qD83o2_JHIZd3Sni3yr5i2uzcxM0ZCbo2_hBcQFR7i9y46Z2YyLaeyL7LaI9gckclUvr0dY9vS9NMHY65jELfFk4nhoOYy_K_D1SBMM8HAJdg89_9KM2qwlhvduLmAbVAdp0nsWx1NyXH7x9gDFHQmSrlQXidwv5vGaJZI/9XMQaNlYaG0RomxARuwkHRuw_6yTARfEtqqOIZg4frM" alt="Orpheus Plushie" />
      </button>
    </div>
  );
};