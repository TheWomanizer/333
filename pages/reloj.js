"use client";
import { useEffect, useState } from "react";
import NeonName from "../components/NeonName";
import "@fontsource/emblema-one";

export default function ClockPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#000000] to-[#0c0115] text-white relative">
      
      {/* NeonName reducido como botón Home */}
      <div className="absolute top-4 left-4 z-50">
        <NeonName />
      </div>

      {/* Hora gigante al centro */}
      <h1
        className="text-[clamp(40px,10vw,160px)] font-bold text-purple-300 tracking-widest"
        style={{ fontFamily: "Emblema One, sans-serif" }}
      >
        {currentTime.toLocaleTimeString("es-ES", { hour12: false })}
      </h1>
    </div>
  );
}