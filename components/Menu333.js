"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@fontsource/teko";
import "@fontsource/bebas-neue";

export default function Menu333() {
  const [open, setOpen] = useState(false);
  const [vh, setVh] = useState(100);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    const handleResize = () => {
      const realVh = window.innerHeight * 0.01;
      setVh(realVh);
    };
    document.addEventListener("keydown", esc);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      document.removeEventListener("keydown", esc);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseGlow =
    "shadow-[0_0_6px_#a855f7,0_0_15px_#9333ea,0_0_30px_#6b21a8] transition-all duration-500";
  const darkPurple = "#2e0854";

  const mainLinks = [
    { name: "Inicio", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sobre Mi", href: "/sobre-mi" },
    { name: "Archivos", href: "/archivos" },
    { name: "Galeria", href: "/galeria" },
    { name: "Libros", href: "/libros" },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100]">
        <motion.div
          initial={{ width: 88, borderRadius: "2rem" }}
          animate={{
            width: open ? 444 : 88,
            borderRadius: open ? "1.75rem" : "2rem",
            backgroundColor: darkPurple,
            scale: open ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.65, -0.3, 0.35, 1.3] }}
          className={`text-white text-center font-bold ${baseGlow} overflow-hidden cursor-pointer`}
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.06 }}
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          <div className="py-1 text-lg tracking-widest">333</div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-[#1e0033] to-black/90 backdrop-blur-[4px] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ fontFamily: "Teko, sans-serif" }}
          >
            <motion.div
              className="flex flex-col items-center gap-5 pt-24 pb-16 w-full max-w-[92%] md:max-w-screen-sm mx-auto overflow-y-auto"
              style={{
                maxHeight: `${vh * 100 - 96}px`,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {mainLinks.map(({ name, href }) => (
                <motion.div key={name} variants={item} className="w-full">
                  <Link href={href} legacyBehavior>
                    <a
                      onClick={() => setOpen(false)}
                      className="text-purple-200 hover:text-purple-400 transition-all duration-300 ease-in-out cursor-pointer block text-center text-[clamp(1.6rem,6.5vw,2.4rem)] px-4 tracking-wide"
                      style={{
                        textShadow: "0px 0px 4px #9333ea, 0px 0px 8px #9333ea",
                      }}
                    >
                      {name}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}