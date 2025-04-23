// pages/sobre-mi.js
"use client";
import Menu333 from "../components/Menu333";
import { useState, useEffect } from "react";
import "@fontsource/emblema-one";

export default function Proyectos() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative bg-gradient-to-br from-black via-[#000000] to-[#0c0115] pt-32 sm:pt-24 px-4">
      {/* Título responsivo */}
      <div
        className="text-purple-400 text-xl sm:text-2xl font-bold text-center mt-4 sm:mt-0"
        style={{ fontFamily: "Emblema One, sans-serif" }}
      >
        ¿QUIEN SOY YO?
      </div>

      {/* Menú 333 */}
      <Menu333 />
    </div>
  );
}
