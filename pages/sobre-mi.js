// pages/sobre-mi.js
"use client";
import Menu333 from "../components/Menu333";
import NeonName from "../components/NeonName";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

export default function SobreMi() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showGitOptions, setShowGitOptions] = useState(false);

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
        MI NOMBRE ES
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
            Nací el 28 de septiembre de 2005 en Medellín, Colombia, y desde mis primeros años comprendí que había nacido con una vocación inevitable: la de comprender y transformar el mundo a través del conocimiento. Actualmente curso el pregrado en Ingeniería de Sistemas en la Universidad EAFIT, pero sería un error reducir mi formación a los muros académicos. Mi verdadero laboratorio ha sido la vida, la red y la conciencia misma. Aunque el título está en progreso, toda mi vida me he destacado por el aprendizaje autónomo enfocado a las nuevas tecnologías, visible en los cursos certificados en LinkedIn, aunque estos no reflejan ni una fracción de mis conocimientos reales.
          </p>
          <p className="mb-6">
            🌐 <strong>Origen autodidacta:</strong> Desde los 14 años me sumergí en las profundidades de la red. Mientras otros jugaban, yo exploraba terminales, redes privadas, VPNs, cifrado, exploits y sistemas operativos como Kali Linux y Qubes. Me formé en foros antiguos y comunidades como 4chan /g/ y canales de IRC vinculados al movimiento "Anonymous". Me alejé pronto de lo ilegal, pero conservé una ética crítica y sólida: comprender sistemas para protegerlos, mejorarlos o repensarlos.
          </p>
          <p className="mb-6">
            🧠 <strong>Espíritu del código, alma del Ser:</strong> Mi familia es el centro de mi mundo. Practicamos la fe católica, pero yo he expandido mi espiritualidad hacia una práctica universal conectada con el Gran Arquitecto del Universo. Meditación, yoga, journaling, respiración consciente, ayuno y visualización creativa son parte de mi día a día. Para mí, programar no es solo construir con código, es crear con propósito, estética y visión trascendental.
          </p>
          <p className="mb-6">
            👨‍💻 <strong>Dominio tecnológico:</strong> Soy desarrollador full-stack, apasionado por crear experiencias. Domino Next.js, React, TailwindCSS, Framer Motion y UX/UI emocional, combinándolos con Node.js, Python (Django/FastAPI), bases SQL/NoSQL, GraphQL, OAuth2 y AWS. Integro modelos de IA (GPT, DeepSeek, Claude), recomiendo contenido, entreno IA personalizada con LangChain, Pinecone, vector stores y más.
          </p>
          <ul className="list-disc list-inside mb-6 pl-4">
            <li>Configuración y endurecimiento de servidores Linux, Apache y NGINX.</li>
            <li>Automatización con Bash y Python.</li>
            <li>Control de versiones avanzado con Git y CI/CD.</li>
            <li>Interfaces adaptadas a rendimiento, accesibilidad y diseño sensible.</li>
            <li>Análisis semántico y procesamiento de lenguaje natural.</li>
          </ul>
          <p className="mb-6">
            Todo lo que desarrollo está impregnado de simbolismo, filosofía y amor propio. Mi misión es liberar a otros del caos mediante herramientas bellas, funcionales y profundamente humanas.
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

      {/* Íconos sociales */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <Link href="https://www.instagram.com/lll333llllll/" target="_blank">
          <Image src="/textures/instagram.png" alt="Instagram" width={48} height={48} className="rounded-lg hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://www.linkedin.com/in/jose-jimenez-vasquez-a388571a2/" target="_blank">
          <Image src="/textures/linkedin.png" alt="LinkedIn" width={48} height={48} className="rounded-lg hover:scale-110 transition-transform" />
        </Link>
        <div className="relative">
          <button
            onClick={() => setShowGitOptions((prev) => !prev)}
            className="focus:outline-none rounded-lg hover:scale-110 transition-transform"
          >
            <Image src="/textures/github.png" alt="GitHub" width={48} height={48} className="rounded-lg" />
          </button>
          {showGitOptions && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-70 border border-purple-800 rounded-lg shadow-xl p-4 space-y-2 backdrop-blur-sm"
            >
              <Link href="https://github.com/ll333ll" target="_blank" className="flex items-center justify-start gap-2 text-white hover:text-purple-400">
                Profesional
              </Link>
              <Link href="https://github.com/TheWomanizer" target="_blank" className="flex items-center justify-start gap-2 text-white hover:text-purple-400">
                Personal
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}