"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import "@fontsource/caveat/700.css"; // Negrita
import "@fontsource/caveat/latin.css"; // Itálica

// 🔹 Nombre desglosado letra por letra (incluye espacios)
const nameText = [
  "J",
  "o",
  "s",
  "e",
  "\u00A0",
  "A",
  "l",
  "e",
  "j",
  "a",
  "n",
  "d",
  "r",
  "o",
  "\u00A0",
  "J",
  "i",
  "m",
  "é",
  "n",
  "e",
  "z",
  "\u00A0",
  "V",
  "á",
  "s",
  "q",
  "u",
  "e",
  "z",
];

const mnzzIndices = [17, 19, 21, 29]; // "m", "n", "z", "z"

export default function NeonName() {
  const [litIndices, setLitIndices] = useState([]);
  const [glitchIndex, setGlitchIndex] = useState(null);
  const [fontSize, setFontSize] = useState(20); // Inicia pequeño y se agranda dinámicamente
  const nameRef = useRef(null);
  const neonSoundRef = useRef(null);

  useEffect(() => {
    if (!neonSoundRef.current) {
      neonSoundRef.current = new Howl({ src: "/neon-on.mp3", volume: 0.3 });
    }

    const playSound = () => {
      if (neonSoundRef.current.state() === "loaded") {
        neonSoundRef.current.play();
      }
    };

    // 🔹 Ajusta el tamaño del texto al cargar y cuando se cambia el tamaño de la ventana
    const adjustFontSize = () => {
      if (nameRef.current) {
        const parentWidth = window.innerWidth * 0.88; // Usa 88% del ancho de la ventana
        const newSize = (parentWidth / nameText.length) * 2; // Escala dinámicamente

        setFontSize(newSize); // Aplica el nuevo tamaño
      }
    };

    // Aplica la función de ajuste en carga y en redimensionamiento
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    let sequence = [
      [], // 🔹 Apagado total
      [0, 1, 2, 3, 4, 15], // 🔹 "Jose" + "J" de "Jiménez"
      [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // 🔹 "Alejandro"
      [15, 16, 17, 18, 19, 20, 21], // 🔹 "Jiménez"
      [0, 1, 2, 3, 4, 15, 16, 17, 18, 19, 20, 21], // 🔹 "Jose" + "Jiménez"
      [], // 🔹 Apagado total
      [...Array(nameText.length).keys()], // 🔹 Nombre completo
      [0, 5, 15, 23], // 🔹 "J", "A", "J", "V"
      mnzzIndices, // 🔹 Solo "mnzz"
      [], // 🔹 Apagado total
      [...Array(nameText.length).keys()], // 🔹 Restaurar nombre completo
    ];

    sequence.forEach((step, i) => {
      setTimeout(() => {
        setLitIndices(step);
        playSound();
      }, i * 3000);
    });

    // Titileo cada 3 minutos
    const titileoInterval = setInterval(() => {
      setLitIndices([]);
      setTimeout(() => setLitIndices([...Array(nameText.length).keys()]), 500);
      playSound();
    }, 3 * 60 * 1000);

    // Efecto de apagado aleatorio cada 30 segundos (simulación de neón real)
    const glitchInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * nameText.length);
      setGlitchIndex(randomIndex);
      setTimeout(() => setGlitchIndex(null), 3000);
    }, 10000);

    // Apagado y reinicio cada 33 minutos
    const fullResetInterval = setInterval(() => {
      setLitIndices([]);
      setTimeout(() => {
        sequence.forEach((step, i) => {
          setTimeout(() => {
            setLitIndices(step);
            playSound();
          }, i * 5000);
        });
      }, 33000);
    }, 33 * 60 * 1000);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
      clearInterval(titileoInterval);
      clearInterval(glitchInterval);
      clearInterval(fullResetInterval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <motion.h1
      ref={nameRef}
      className="text-center"
      style={{
        fontFamily: "Caveat, cursive",
        fontStyle: "italic",
        fontSize: `${fontSize}px`, // 🔹 Se ajusta automáticamente al tamaño correcto
        color: "#d896ff",
        textShadow:
          "0px 0px 15px #9b5de5, 0px 0px 25px #c77dff, 0px 0px 35px #f72585",
        maxWidth: "94vw", // 🔹 Usa el 94% del ancho de la ventana
        whiteSpace: "normal", // 🔹 Permite saltos de línea automáticos
        textAlign: "center", // 🔹 Centrado en la pantalla
        wordWrap: "break-word", // 🔹 Ajusta el texto si es necesario
      }}
    >
      {nameText.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{
            opacity: glitchIndex === i ? 0.2 : litIndices.includes(i) ? 1 : 0.1,
            transition: { duration: glitchIndex === i ? 0.1 : 0.3 },
          }}
          style={{
            color: litIndices.includes(i) ? "#d896ff" : "#111",
            textShadow: litIndices.includes(i)
              ? "0px 0px 10px #9b5de5, 0px 0px 20px #c77dff, 0px 0px 30px #f72585"
              : "none",
            margin: "0 2px",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
