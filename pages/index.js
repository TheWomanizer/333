"use client";
import NeonName from "../components/NeonName";
import Menu333 from "../components/Menu333";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@fontsource/emblema-one";

export default function Home() {
  const [pageTime, setPageTime] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const nameWrapperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageTime((prev) => prev + 1);
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white relative bg-gradient-to-br from-black via-[#1a0b26] to-[#2e084c]"
      onClick={() => setClicks(clicks + 1)}
    >
      {/* Hora */}
      <div
        className="absolute top-4 right-6 text-purple-400 text-xl sm:text-2xl font-bold"
        style={{ fontFamily: "Emblema One, sans-serif" }}
      >
        {currentTime.toLocaleTimeString("es-ES", { hour12: false })}
      </div>

      {/* Menú 333 */}
      <Menu333 />

      {/* Contenedor que controla animación del nombre */}
      <motion.div
        ref={nameWrapperRef}
        onClick={() => {
          setInteractions(interactions + 1);
          scrollToTop();
        }}
        animate={{
          scale: scrolled ? 0.6 : 1,
          y: scrolled ? -60 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-40 cursor-pointer"
      >
        <NeonName />
      </motion.div>

      {/* Contador inferior ajustado */}
      <div
        className="absolute bottom-3 left-3 text-purple-950 italic"
        style={{
          fontFamily: "Emblema One, sans-serif",
          fontSize: "clamp(10px, 2vw, 14px)",
          opacity: 0.6,
          maxWidth: "92vw",
          lineHeight: "1.2",
        }}
      >
        Tiempo en la página: {Math.floor(pageTime / 60)}m {pageTime % 60}s | Clicks: {clicks} | Interacciones: {interactions}
      </div>
    </div>
  );
}