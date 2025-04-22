"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Menu333() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  const baseGlow =
    "shadow-[0_0_6px_#a855f7,0_0_15px_#9333ea,0_0_30px_#6b21a8] transition-all duration-500";
  const darkPurple = "#2e0854";

  const mainLinks = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "El Blog", href: "/blogs" },
    { name: "Sobre Mi", href: "/sobre-mi" },
    { name: "Archivos", href: "/archivos" },
    { name: "La Galeria", href: "/galeria" },
    { name: "Libros", href: "/libros" },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.6, -0.05, 0.01, 0.99] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Botón 333 siempre visible */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100]">
        <motion.div
          initial={{ width: 88, borderRadius: "2rem" }}
          animate={{
            width: open ? 300 : 88,
            borderRadius: open ? "1.75rem" : "2rem",
            backgroundColor: darkPurple,
          }}
          transition={{ duration: 0.45, ease: [0.6, -0.05, 0.01, 0.99] }}
          className={`text-white text-center font-bold ${baseGlow} overflow-hidden cursor-pointer`}
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          <div className="py-1 text-lg">333</div>
        </motion.div>
      </div>

      {/* Menú full-screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-[3px] px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{ fontFamily: "Teko, sans-serif" }}
          >
            <motion.div
              className="flex flex-col items-center gap-5 text-3xl sm:text-4xl md:text-5xl pt-24"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {mainLinks.map(({ name, href }) => (
                <motion.div key={name} variants={item}>
                  <Link href={href}>
                    <span
                      onClick={() => setOpen(false)}
                      className="text-purple-200 hover:text-purple-400 transition-transform cursor-pointer"
                      style={{
                        textShadow: "0px 0px 4px #9333ea, 0px 0px 8px #9333ea",
                      }}
                    >
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}