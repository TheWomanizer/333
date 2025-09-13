// pages/sobre-mi.js
"use client";
import Menu333 from "../components/Menu333";
import NeonName from "../components/NeonName";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "../config/content";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

export default function SobreMi() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center text-white bg-gradient-to-b from-[#0c0115] via-black to-black pt-36 sm:pt-28 px-4 pb-16">
      <Menu333 />

      <motion.h2
        className="text-purple-400 text-xl sm:text-2xl font-bold text-center mb-1"
        style={{ fontFamily: "Emblema One, sans-serif", letterSpacing: "0.05em" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {SITE_CONFIG.pages.about.title}
      </motion.h2>

      <div className="mb-6 w-full max-w-3xl px-4">
        <NeonName className="w-full max-w-[300px] mx-auto sm:mx-0" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-6xl px-4">
        {/* Texto */}
        <div
          className="w-full md:w-1/2 text-justify text-[clamp(14px,2vw,16px)] text-purple-100"
          style={{ fontFamily: "Dosis, sans-serif", lineHeight: "1.75" }}
        >
          <p className="mb-6">
            Nací el {SITE_CONFIG.personal.birthDate} en {SITE_CONFIG.personal.location}, y desde mis primeros años comprendí que había nacido con una vocación inevitable: la de comprender y transformar el mundo a través del conocimiento. Actualmente curso el pregrado en {SITE_CONFIG.personal.degree} en la {SITE_CONFIG.personal.university}, pero sería un error reducir mi formación a los muros académicos. Mi verdadero laboratorio ha sido la vida, la red y la conciencia misma. Aunque el título está en progreso, toda mi vida me he destacado por el aprendizaje autónomo enfocado a las nuevas tecnologías, visible en los cursos certificados en LinkedIn, aunque estos no reflejan ni una fracción de mis conocimientos reales.
          </p>
          {SITE_CONFIG.pages.about.biography.map((section, index) => (
            <p key={index} className="mb-6">
              {section.emoji} <strong>{section.title}</strong> {section.content}
            </p>
          ))}
          <ul className="list-disc list-inside mb-6 pl-4">
            {SITE_CONFIG.pages.about.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p className="mb-6">
            {SITE_CONFIG.pages.about.mission}
          </p>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/textures/sobre-mi.jpg"
            alt="Foto sobre mí"
            width={270}
            height={400}
            className="rounded-2xl shadow-[0_0_20px_#9333ea] object-cover"
            priority
          />
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex items-center justify-center gap-4 mt-12">
        {Object.entries(SITE_CONFIG.social).map(([key, social]) => (
          <Link key={key} href={social.url} target="_blank">
            <motion.div 
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-700/50 rounded-xl backdrop-blur-sm hover:from-purple-800/40 hover:to-purple-700/40 hover:border-purple-600/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{social.emoji}</span>
              <span className="text-purple-200 font-medium" style={{ fontFamily: "Dosis, sans-serif" }}>
                {social.label}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}