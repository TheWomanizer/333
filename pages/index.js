"use client";
import NeonName from "../components/NeonName";
import Menu333 from "../components/Menu333";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@fontsource/emblema-one";

export default function Home() {
  const [pageTime, setPageTime] = useState(0);
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

  // Aumenta interacciones solo si se hace clic en elementos interactivos
  const handleInteraction = (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.onclick || e.target.role === "button") {
      setInteractions((prev) => prev + 1);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white relative bg-gradient-to-br from-black via-[#000000] to-[#0c0115]"
      onClick={handleInteraction}
    >
      {/* Hora (clickeable) */}
      <div
        onClick={() => (window.location.href = "/reloj")}
        className="absolute top-4 right-6 text-purple-400 text-xl sm:text-2xl font-bold cursor-pointer"
        style={{ fontFamily: "Emblema One, sans-serif" }}
        title="Ver modo reloj"
      >
        {currentTime.toLocaleTimeString("es-ES", { hour12: false })}
      </div>

      {/* Menú 333 */}
      <Menu333 />

      {/* Contenedor que controla animación del nombre */}
      <motion.div
        ref={nameWrapperRef}
        animate={{
          scale: scrolled ? 0.6 : 1,
          y: scrolled ? -60 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-40"
      >
        <NeonName />
      </motion.div>

      </div>
  );
}