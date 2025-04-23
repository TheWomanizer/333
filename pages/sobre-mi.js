// pages/sobre-mi.js
"use client";
import Menu333 from "../components/Menu333";
import NeonName from "../components/NeonName";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fontsource/emblema-one";

export default function SobreMi() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-white relative bg-gradient-to-b from-[#0c0115] via-black to-black overflow-x-hidden pt-36 sm:pt-28 px-6 pb-16">
      {/* Menú 333 */}
      <Menu333 />

      {/* Título principal */}
      <motion.div
        className="text-purple-400 text-xl sm:text-2xl font-bold text-center mb-4"
        style={{ fontFamily: "Emblema One, sans-serif" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        MI NOMBRE ES
      </motion.div>

      <div className="mb-8">
        <NeonName />
      </div>

      {/* Párrafo descriptivo */}
      <div
        className="max-w-3xl text-justify text-[clamp(14px,2.4vw,18px)] text-purple-100"
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
        <ul className="list-disc list-inside mb-6 pl-2">
          <li>Configuración y endurecimiento de servidores Linux, Apache y NGINX.</li>
          <li>Automatización con Bash y Python.</li>
          <li>Control de versiones avanzado con Git y CI/CD.</li>
          <li>Interfaces adaptadas a rendimiento, accesibilidad y diseño sensible.</li>
          <li>Análisis semántico y procesamiento de lenguaje natural.</li>
        </ul>
        <p>
          Todo lo que desarrollo está impregnado de simbolismo, filosofía y amor propio. Mi misión es liberar a otros del caos mediante herramientas bellas, funcionales y profundamente humanas.
        </p>
      </div>
    </div>
  );
}
