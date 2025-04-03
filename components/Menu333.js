// 🔱 Menu333.js – Organización sagrada por simetría y experiencia responsiva total
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu333() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsCompact(width < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseGlow =
    "shadow-[0_0_6px_#a855f7,0_0_15px_#9333ea,0_0_30px_#6b21a8] transition-all duration-500";
  const darkPurple = "#2e0854";

  const mainLinks = [
    { name: "Proyectos", href: "/proyectos" },
    { name: "Blogs", href: "/blogs" },
    { name: "Sobre Mi", href: "/sobre-mi" },
    { name: "Archivos", href: "/archivos" },
    { name: "Galeria", href: "/galeria" },
    { name: "Libros", href: "/libros" },
  ];

  const left = mainLinks.slice(0, 3);
  const right = mainLinks.slice(3);

  return (
    <>
      {open && isCompact && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />
      )}

      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ width: 88, borderRadius: "2rem" }}
          animate={{
            width: open ? (isCompact ? 300 : 640) : 88,
            borderRadius: open ? (isCompact ? "1.75rem" : "3rem") : "2rem",
            backgroundColor: darkPurple,
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className={`relative text-white text-center font-bold ${baseGlow} overflow-hidden z-50`}
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          <div className="py-1 text-lg">333</div>

          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.7 }}
                className={`absolute top-full left-0 w-full py-2 px-4 text-sm text-purple-200 transition-all duration-700 ease-in-out ${
                  isCompact
                    ? "flex flex-col items-center gap-2 bg-black/80 backdrop-blur-sm rounded-b-xl"
                    : "flex flex-row items-center justify-between gap-6"
                }`}
              >
                {isCompact && (
                  <a
                    href="/"
                    className="hover:text-purple-400 hover:scale-105 transition-transform duration-300"
                    style={{ fontFamily: "Teko, sans-serif" }}
                  >
                    Inicio
                  </a>
                )}

                {!isCompact && (
                  <>
                    <div className="flex gap-4">
                      {left.map(({ name, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="hover:text-purple-400 hover:scale-105 transition-transform duration-300"
                          style={{ fontFamily: "Teko, sans-serif" }}
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {right.map(({ name, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="hover:text-purple-400 hover:scale-105 transition-transform duration-300"
                          style={{ fontFamily: "Teko, sans-serif" }}
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {open && isCompact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-1 rounded-full bg-purple-900 text-purple-200 font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Cerrar
          </button>
        </motion.div>
      )}
    </>
  );
}