// pages/libros.js
"use client";
import Menu333 from "../components/Menu333";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllLibros, getLibrosByCategoria, getLibrosByEstado, categorias, estados, searchLibros, getEstadisticas } from "../data/libros";
import { SITE_CONFIG } from "../config/content";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

export default function Libros() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState("Todas");
  const [selectedEstado, setSelectedEstado] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [libros, setLibros] = useState(getAllLibros());
  const [showStats, setShowStats] = useState(false);

  const stats = getEstadisticas();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filteredLibros = getAllLibros();
    
    if (selectedCategoria !== "Todas") {
      filteredLibros = filteredLibros.filter(l => l.categoria === selectedCategoria);
    }
    
    if (selectedEstado !== "Todos") {
      filteredLibros = filteredLibros.filter(l => l.estado === selectedEstado);
    }
    
    if (searchQuery.trim()) {
      filteredLibros = searchLibros(searchQuery).filter(l => 
        (selectedCategoria === "Todas" || l.categoria === selectedCategoria) &&
        (selectedEstado === "Todos" || l.estado === selectedEstado)
      );
    }
    
    setLibros(filteredLibros);
  }, [selectedCategoria, selectedEstado, searchQuery]);

  const getEstadoColor = (estado) => {
    const colors = {
      "Leído": "bg-green-900/30 text-green-300 border-green-700/50",
      "Releído": "bg-blue-900/30 text-blue-300 border-blue-700/50",
      "En Progreso": "bg-yellow-900/30 text-yellow-300 border-yellow-700/50",
      "Consultado": "bg-orange-900/30 text-orange-300 border-orange-700/50",
      "Estudiando": "bg-purple-900/30 text-purple-300 border-purple-700/50"
    };
    return colors[estado] || "bg-gray-900/30 text-gray-300 border-gray-700/50";
  };

  const getCategoriaIcon = (categoria) => {
    const icons = {
      "Distopía": "🌆",
      "Espiritualidad": "🧘",
      "Historia": "📚",
      "Programación": "💻",
      "Estrategia": "♟️",
      "Ciencia Ficción": "🚀",
      "Arquitectura": "🏗️",
      "Filosofía": "🤔"
    };
    return icons[categoria] || "📖";
  };

  const renderStars = (rating) => {
    return Array.from({length: 5}, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0c0115] via-black to-black pt-24 px-4 pb-16">
      <Menu333 />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-purple-400 text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Emblema One, sans-serif", letterSpacing: "0.05em" }}
          >
            {SITE_CONFIG.pages.books.title}
          </h1>
          <p className="text-purple-200 text-lg mb-6" style={{ fontFamily: "Dosis, sans-serif" }}>
            {SITE_CONFIG.pages.books.subtitle}
          </p>

          {/* Estadísticas */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{stats.total}</div>
              <div className="text-sm text-purple-300">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{stats.leidos}</div>
              <div className="text-sm text-purple-300">Leídos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.enProgreso}</div>
              <div className="text-sm text-purple-300">En Progreso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{stats.promedioRating}★</div>
              <div className="text-sm text-purple-300">Promedio</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Controles */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Buscador */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Buscar libros..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-700/50 rounded-xl text-purple-100 placeholder-purple-400 focus:outline-none focus:border-purple-600 transition-colors"
              style={{ fontFamily: "Dosis, sans-serif" }}
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-purple-400 text-sm px-3 py-2">Categoría:</span>
              {categorias.slice(0, 5).map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setSelectedCategoria(categoria)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                    selectedCategoria === categoria
                      ? "bg-purple-600 text-white border-purple-500"
                      : "bg-purple-900/20 text-purple-300 border-purple-700/50 hover:bg-purple-800/30"
                  } border`}
                  style={{ fontFamily: "Dosis, sans-serif" }}
                >
                  {categoria}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-purple-400 text-sm px-3 py-2">Estado:</span>
              {estados.slice(0, 4).map((estado) => (
                <button
                  key={estado}
                  onClick={() => setSelectedEstado(estado)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                    selectedEstado === estado
                      ? "bg-green-600 text-white border-green-500"
                      : "bg-purple-900/20 text-purple-300 border-purple-700/50 hover:bg-purple-800/30"
                  } border`}
                  style={{ fontFamily: "Dosis, sans-serif" }}
                >
                  {estado}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid de libros */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {libros.map((libro, index) => (
            <motion.article
              key={libro.id}
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/30 rounded-2xl overflow-hidden hover:from-purple-800/30 hover:to-purple-700/20 hover:border-purple-600/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedLibro(libro)}
              layout
            >
              {/* Portada placeholder */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-purple-900/40 to-black/60 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-2 block">{getCategoriaIcon(libro.categoria)}</span>
                  <p className="text-purple-300 text-sm font-bold px-4" style={{ fontFamily: "Emblema One, sans-serif" }}>
                    {libro.title}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-lg text-xs border ${getEstadoColor(libro.estado)}`}>
                    {libro.estado}
                  </span>
                  <div className="flex">
                    {renderStars(libro.rating)}
                  </div>
                </div>

                <h3 className="text-purple-100 font-bold text-sm mb-1" style={{ fontFamily: "Emblema One, sans-serif" }}>
                  {libro.title}
                </h3>
                <p className="text-purple-300 text-xs mb-3" style={{ fontFamily: "Dosis, sans-serif" }}>
                  por {libro.author}
                </p>

                <p className="text-purple-300 text-xs leading-relaxed line-clamp-3" style={{ fontFamily: "Dosis, sans-serif" }}>
                  {libro.resumen}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {libro.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-purple-400 text-xs px-2 py-1 bg-purple-900/30 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {libros.length === 0 && (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-purple-400 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
              No se encontraron libros con esos criterios
            </p>
          </div>
        )}
      </div>

      {/* Modal para libro completo */}
      <AnimatePresence>
        {selectedLibro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLibro(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-900/40 to-black/60 border border-purple-700/50 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Portada */}
                <div className="lg:w-1/3 relative aspect-[3/4] lg:aspect-auto">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black/60 flex items-center justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                    <div className="text-center">
                      <span className="text-8xl mb-4 block">{getCategoriaIcon(selectedLibro.categoria)}</span>
                      <p className="text-purple-300 font-bold" style={{ fontFamily: "Emblema One, sans-serif" }}>
                        {selectedLibro.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Información */}
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-lg text-sm border ${getEstadoColor(selectedLibro.estado)}`}>
                      {selectedLibro.estado}
                    </span>
                    <button
                      onClick={() => setSelectedLibro(null)}
                      className="text-purple-400 hover:text-purple-300 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  <h1 className="text-purple-100 text-2xl font-bold mb-2" style={{ fontFamily: "Emblema One, sans-serif" }}>
                    {selectedLibro.title}
                  </h1>
                  <p className="text-purple-300 text-lg mb-4" style={{ fontFamily: "Dosis, sans-serif" }}>
                    por {selectedLibro.author}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex">{renderStars(selectedLibro.rating)}</div>
                    <span className="text-purple-400 text-sm">{selectedLibro.categoria}</span>
                    <span className="text-purple-400 text-sm">{selectedLibro.fechaLectura}</span>
                  </div>

                  <div className="space-y-4 text-sm" style={{ fontFamily: "Dosis, sans-serif" }}>
                    <div>
                      <h3 className="text-purple-400 font-bold mb-2">Resumen:</h3>
                      <p className="text-purple-200 leading-relaxed">{selectedLibro.resumen}</p>
                    </div>

                    <div>
                      <h3 className="text-purple-400 font-bold mb-2">Cita Favorita:</h3>
                      <blockquote className="text-purple-200 italic border-l-4 border-purple-600 pl-4">
                        "{selectedLibro.citaFavorita}"
                      </blockquote>
                    </div>

                    <div>
                      <h3 className="text-purple-400 font-bold mb-2">Impacto Personal:</h3>
                      <p className="text-purple-200 leading-relaxed">{selectedLibro.impactoPersonal}</p>
                    </div>

                    <div>
                      <h3 className="text-purple-400 font-bold mb-2">Notas Clave:</h3>
                      <ul className="text-purple-200 space-y-1">
                        {selectedLibro.notas.map((nota, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400 text-lg">•</span>
                            <span>{nota}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-700/30">
                      {selectedLibro.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-purple-400 text-xs px-2 py-1 bg-purple-900/30 rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
