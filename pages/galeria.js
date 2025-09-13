// pages/galeria.js
"use client";
import Menu333 from "../components/Menu333";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAllImages, getImagesByCategory, categorias, searchImages } from "../data/galeria";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

export default function Galeria() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState(getAllImages());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filteredImages = getImagesByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      filteredImages = searchImages(searchQuery).filter(img => 
        selectedCategory === "Todas" || img.category === selectedCategory
      );
    }
    
    setImages(filteredImages);
  }, [selectedCategory, searchQuery]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Urbana": "bg-blue-900/30 text-blue-300 border-blue-700/50",
      "Macro": "bg-green-900/30 text-green-300 border-green-700/50",
      "Abstracta": "bg-purple-900/30 text-purple-300 border-purple-700/50",
      "Conceptual": "bg-yellow-900/30 text-yellow-300 border-yellow-700/50",
      "Retrato": "bg-pink-900/30 text-pink-300 border-pink-700/50",
      "Espiritual": "bg-indigo-900/30 text-indigo-300 border-indigo-700/50",
      "Lifestyle": "bg-orange-900/30 text-orange-300 border-orange-700/50",
      "Nocturna": "bg-gray-900/30 text-gray-300 border-gray-700/50"
    };
    return colors[category] || "bg-gray-900/30 text-gray-300 border-gray-700/50";
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
            RINCÓN DE FOTOGRAFÍA
          </h1>
          <p className="text-purple-200 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
            Capturando momentos, creando eternidad
          </p>
        </motion.div>

        {/* Controles */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Buscador */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Buscar fotografías..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-700/50 rounded-xl text-purple-100 placeholder-purple-400 focus:outline-none focus:border-purple-600 transition-colors"
              style={{ fontFamily: "Dosis, sans-serif" }}
            />
          </div>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setSelectedCategory(categoria)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === categoria
                    ? "bg-purple-600 text-white border-purple-500"
                    : "bg-purple-900/20 text-purple-300 border-purple-700/50 hover:bg-purple-800/30"
                } border`}
                style={{ fontFamily: "Dosis, sans-serif" }}
              >
                {categoria}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de imágenes */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(image)}
              layout
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/30">
                {/* Placeholder para imagen */}
                <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black/60 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">📸</span>
                    <p className="text-purple-300 text-sm" style={{ fontFamily: "Dosis, sans-serif" }}>
                      {image.title}
                    </p>
                  </div>
                </div>
                
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-lg text-xs border ${getCategoryColor(image.category)}`}>
                        {image.category}
                      </span>
                      <span className="text-purple-300 text-xs">📍 {image.location}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "Emblema One, sans-serif" }}>
                      {image.title}
                    </h3>
                    <p className="text-purple-200 text-xs line-clamp-2" style={{ fontFamily: "Dosis, sans-serif" }}>
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {images.length === 0 && (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-purple-400 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
              No se encontraron fotografías con esos criterios
            </p>
          </div>
        )}
      </div>

      {/* Modal para imagen completa */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-900/40 to-black/60 border border-purple-700/50 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Imagen */}
                <div className="lg:w-2/3 relative aspect-square lg:aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black/60 flex items-center justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                    <div className="text-center">
                      <span className="text-8xl mb-4 block">📸</span>
                      <p className="text-purple-300" style={{ fontFamily: "Dosis, sans-serif" }}>
                        {selectedImage.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Información */}
                <div className="lg:w-1/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-lg text-sm border ${getCategoryColor(selectedImage.category)}`}>
                      {selectedImage.category}
                    </span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-purple-400 hover:text-purple-300 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  <h1
                    className="text-purple-100 text-2xl font-bold mb-3"
                    style={{ fontFamily: "Emblema One, sans-serif" }}
                  >
                    {selectedImage.title}
                  </h1>

                  <p
                    className="text-purple-200 leading-relaxed mb-6"
                    style={{ fontFamily: "Dosis, sans-serif" }}
                  >
                    {selectedImage.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">📅</span>
                      <span className="text-purple-200">{formatDate(selectedImage.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">📍</span>
                      <span className="text-purple-200">{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">📷</span>
                      <span className="text-purple-200">{selectedImage.camera}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">⚙️</span>
                      <span className="text-purple-200">{selectedImage.settings}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-purple-700/30">
                    {selectedImage.tags.map((tag, i) => (
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
