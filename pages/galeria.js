// pages/galeria.js
"use client";
import Menu333 from "../components/Menu333";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useVscoGallery } from "../hooks/useVscoGallery";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

// Categorías disponibles (basadas en las que usa VSCO)
const categorias = [
  "Todas",
  "Urbana",
  "Macro",
  "Abstracta",
  "Conceptual",
  "Retrato",
  "Espiritual",
  "Lifestyle",
  "Nocturna"
];

export default function Galeria() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);

  // Hook para obtener fotos de VSCO
  const {
    photos: vscoPhotos,
    loading: vscoLoading,
    error: vscoError,
    lastUpdated,
    refetch
  } = useVscoGallery('micuentaprincipal');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Solo usar fotos de VSCO
    let filteredImages = [...vscoPhotos];

    // Filtrar por categoría
    if (selectedCategory !== "Todas") {
      filteredImages = filteredImages.filter(img => img.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredImages = filteredImages.filter(img =>
        img.title.toLowerCase().includes(query) ||
        img.description.toLowerCase().includes(query) ||
        img.tags.some(tag => tag.toLowerCase().includes(query)) ||
        img.location.toLowerCase().includes(query)
      );
    }

    // Ordenar por fecha (más recientes primero)
    filteredImages.sort((a, b) => new Date(b.date) - new Date(a.date));

    setImages(filteredImages);
  }, [selectedCategory, searchQuery, vscoPhotos]);

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
            GALERÍA VSCO
          </h1>
          <p className="text-purple-200 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
            Mis fotos directamente desde VSCO • @micuentaprincipal
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-purple-400 text-sm">
            <span>📷</span>
            <span>Actualización automática</span>
          </div>
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
              placeholder="Buscar fotografías..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-700/50 rounded-xl text-purple-100 placeholder-purple-400 focus:outline-none focus:border-purple-600 transition-colors"
              style={{ fontFamily: "Dosis, sans-serif" }}
            />
          </div>

          {/* Estado VSCO */}
          <div className="flex items-center gap-3">
            {vscoLoading && (
              <div className="flex items-center gap-2 text-purple-400 text-sm">
                <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                <span>Cargando fotos de VSCO...</span>
              </div>
            )}
            {vscoError && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <span>⚠️</span>
                <span>{vscoError}</span>
                <button
                  onClick={() => refetch()}
                  className="px-2 py-1 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30 transition-colors"
                >
                  Reintentar
                </button>
              </div>
            )}
            {!vscoLoading && !vscoError && vscoPhotos.length > 0 && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <span>✅</span>
                <span>{vscoPhotos.length} fotos cargadas de VSCO</span>
                {lastUpdated && (
                  <span className="text-purple-400">
                    • Actualizado: {new Date(lastUpdated).toLocaleTimeString()}
                  </span>
                )}
              </div>
            )}
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
                {/* Imagen real de VSCO */}
                <div className="relative w-full h-full">
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback a placeholder si la imagen falla
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black/60 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <span className="text-6xl mb-4 block">📸</span>
                      <p className="text-purple-300 text-sm" style={{ fontFamily: "Dosis, sans-serif" }}>
                        {image.title}
                      </p>
                    </div>
                  </div>
                  {/* Badge VSCO */}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded-lg flex items-center gap-1">
                    <span>📷</span>
                    <span>VSCO</span>
                  </div>
                  {/* Estadísticas VSCO */}
                  {image.vscoData && (
                    <div className="absolute bottom-2 left-2 flex gap-2">
                      {image.vscoData.likes > 0 && (
                        <div className="px-2 py-1 bg-black/70 text-white text-xs rounded-lg flex items-center gap-1">
                          <span>❤️</span>
                          <span>{image.vscoData.likes}</span>
                        </div>
                      )}
                      {image.vscoData.views > 0 && (
                        <div className="px-2 py-1 bg-black/70 text-white text-xs rounded-lg flex items-center gap-1">
                          <span>👁️</span>
                          <span>{image.vscoData.views}</span>
                        </div>
                      )}
                    </div>
                  )}
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
                  <div className="relative w-full h-full">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black/60 flex items-center justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none" style={{ display: 'none' }}>
                      <div className="text-center">
                        <span className="text-8xl mb-4 block">📸</span>
                        <p className="text-purple-300" style={{ fontFamily: "Dosis, sans-serif" }}>
                          {selectedImage.title}
                        </p>
                      </div>
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

                    {/* Información específica de VSCO */}
                    <div className="border-t border-purple-700/30 pt-3 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-purple-400">📷</span>
                        <span className="text-purple-200 font-medium">VSCO Data</span>
                      </div>
                      <div className="space-y-2 ml-6">
                        {selectedImage.vscoData && (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="text-purple-400">❤️</span>
                              <span className="text-purple-200">{selectedImage.vscoData.likes || 0} likes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-purple-400">👁️</span>
                              <span className="text-purple-200">{selectedImage.vscoData.views || 0} views</span>
                            </div>
                            {selectedImage.vscoData.filter && (
                              <div className="flex items-center gap-2">
                                <span className="text-purple-400">🎨</span>
                                <span className="text-purple-200">Filtro: {selectedImage.vscoData.filter}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <span className="text-purple-400">🔗</span>
                              <a
                                href={selectedImage.vscoData.vscoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-purple-200 underline"
                              >
                                Ver en VSCO
                              </a>
                            </div>
                          </>
                        )}
                      </div>
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
