"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import "@fontsource/caveat/700.css";
import "@fontsource/caveat/latin.css";

const nameText = [
  "J","o","s","e","\u00A0","A","l","e","j","a","n","d","r","o","\u00A0",
  "J","i","m","é","n","e","z","\u00A0","V","á","s","q","u","e","z",
];

const mnzzIndices = [17, 19, 21, 29];

export default function NeonName() {
  const [litIndices, setLitIndices] = useState([]);
  const [glitchIndex, setGlitchIndex] = useState(null);
  const [fontSize, setFontSize] = useState(20);
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

    const adjustFontSize = () => {
      if (nameRef.current) {
        const parentWidth = window.innerWidth * 0.88;
        const newSize = (parentWidth / nameText.length) * 2;
        setFontSize(newSize);
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    let sequence = [
      [],
      [0, 1, 2, 3, 4, 15],
      [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [0, 1, 2, 3, 4, 15, 16, 17, 18, 19, 20, 21],
      [],
      [...Array(nameText.length).keys()],
      [0, 5, 15, 23],
      mnzzIndices,
      [],
      [...Array(nameText.length).keys()],
    ];

    sequence.forEach((step, i) => {
      setTimeout(() => {
        setLitIndices(step);
        if (i === sequence.length - 1) playSound();
      }, i * 2222);
    });

    const titileoInterval = setInterval(() => {
      setLitIndices([]);
      setTimeout(() => setLitIndices([...Array(nameText.length).keys()]), 500);
    }, 3 * 60 * 1000);

    const glitchInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * nameText.length);
      setGlitchIndex(randomIndex);
      setTimeout(() => setGlitchIndex(null), 3000);
    }, 10000);

    const fullResetInterval = setInterval(() => {
      setLitIndices([]);
      setTimeout(() => {
        sequence.forEach((step, i) => {
          setTimeout(() => {
            setLitIndices(step);
            if (i === sequence.length - 1) playSound();
          }, i * 2222);
        });
      }, 33000);
    }, 33 * 60 * 1000);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
      clearInterval(titileoInterval);
      clearInterval(glitchInterval);
      clearInterval(fullResetInterval);
    };
  }, []);

  return (
    <motion.div
      ref={nameRef}
      className={`$ {
        typeof window !== "undefined" && window.location.pathname !== "/"
          ? "fixed top-4 left-4 z-50 cursor-pointer"
          : "text-center"
      }`}
      style={{
        fontFamily: "Caveat, cursive",
        fontStyle: "italic",
        fontSize:
          typeof window !== "undefined" && window.location.pathname !== "/"
            ? "clamp(16px, 2vw, 22px)"
            : `${fontSize}px`,
        color: "#d896ff",
        textShadow:
          "0 0 10px #a855f7, 0 0 20px #9333ea, 0 0 30px #6b21a8",
        maxWidth:
          typeof window !== "undefined" && window.location.pathname !== "/"
            ? "auto"
            : "94vw",
        whiteSpace: "normal",
        textAlign: "center",
        wordWrap: "break-word",
      }}
      onClick={() => {
        if (
          typeof window !== "undefined" &&
          window.location.pathname !== "/"
        ) {
          window.location.href = "/";
        }
      }}
    >
      {nameText.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{
            opacity: glitchIndex === i ? 0.2 : litIndices.includes(i) ? 1 : 0.1,
            transition: { duration: glitchIndex === i ? 0.1 : 0.2 },
          }}
          style={{
            color: litIndices.includes(i) ? "#d896ff" : "#111",
            textShadow: litIndices.includes(i)
              ? "0 0 10px #a855f7, 0 0 20px #9333ea, 0 0 30px #6b21a8"
              : "none",
            margin: "0 2px",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}