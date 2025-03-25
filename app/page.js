"use client";
import NeonName from "./components/NeonName";
import { useState, useEffect } from "react";
import "@fontsource/emblema-one";

export default function Home() {
  const [pageTime, setPageTime] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setPageTime((prev) => prev + 1);
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-black min-h-screen flex flex-col items-center justify-center text-white relative"
      onClick={() => setClicks(clicks + 1)}
    >
      <div
        className="absolute top-4 right-6 text-purple-400 text-xl sm:text-2xl font-bold"
        style={{ fontFamily: "Emblema One, sans-serif" }}
      >
        {currentTime.toLocaleTimeString("es-ES", { hour12: false })}
      </div>

      <div className="text-purple-400 text-sm cursor-pointer absolute top-4">
        333
      </div>

      <div onClick={() => setInteractions(interactions + 1)}>
        <NeonName />
      </div>

      <div
        className="absolute bottom-4 left-6 text-gray-800 text-xs sm:text-sm italic"
        style={{ fontFamily: "Emblema One, sans-serif" }}
      >
        Tiempo en la página: {Math.floor(pageTime / 60)}m {pageTime % 60}s | Clicks: {clicks} | Interacciones: {interactions}
      </div>
    </div>
  );
}