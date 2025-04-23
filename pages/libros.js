// pages/libros.js
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
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative bg-gradient-to-br from-black via-[#000000] to-[#0c0115]">
      {/* Título */}
      <div
        className="absolute top-4 right-6 text-purple-400 text-xl sm:text-2xl font-bold"
        style={{ fontFamily: "Emblema One, sans-serif" }}
      >
        RINCON DE LECTURA
      </div>

      {/* Menú 333 */}
      <Menu333 />
    </div>
  );
}