"use client";
import { useEffect, useState } from "react";
import NeonName from "../components/NeonName";
import { motion, useAnimation } from "framer-motion";
import "@fontsource/emblema-one";

export default function ClockPage() {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString(undefined, { hour12: false });
  const formattedDate = currentTime.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">

      {/* NeonName reducido como botón Home */}
      <div className="absolute top-4 left-4 z-50">
        <NeonName />
      </div>

      {/* Fondo de nebulosa animada */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `url('/textures/nebula-purple.png')`,
          backgroundSize: "200% 200%",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
          filter: "blur(12px)",
        }}
      />

      {/* Hora gigante con pulso sutil */}
      <motion.h1
        className="z-10 text-[clamp(42px,10vw,180px)] font-bold tracking-widest text-center text-purple-200"
        style={{ fontFamily: "Emblema One, sans-serif" }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {formattedTime}
      </motion.h1>

      {/* Fecha numérica con neón discreto */}
      <motion.div
        className="z-10 mt-2 text-xs text-center text-[#b084f6]"
        style={{
          fontFamily: "Emblema One, sans-serif",
          textShadow: "0 0 3px #a855f7, 0 0 5px #9333ea",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        {formattedDate}
      </motion.div>
    </div>
  );
}