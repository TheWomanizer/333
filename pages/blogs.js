// pages/blogs.js
"use client";
import Menu333 from "../components/Menu333";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getAllBlogs, searchBlogs } from "../data/blogs";
import { SITE_CONFIG } from "../config/content";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

export default function Blogs() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState(getAllBlogs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      setBlogs(searchBlogs(searchQuery));
    } else {
      setBlogs(getAllBlogs());
    }
  }, [searchQuery]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Tecnología": "bg-blue-900/30 text-blue-300 border-blue-700/50",
      "Reflexión": "bg-purple-900/30 text-purple-300 border-purple-700/50",
      "Inteligencia Artificial": "bg-green-900/30 text-green-300 border-green-700/50"
    };
    return colors[category] || "bg-gray-900/30 text-gray-300 border-gray-700/50";
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0c0115] via-black to-black pt-24 px-4 pb-16">
      <Menu333 />

      <div className="max-w-6xl mx-auto">
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
            {SITE_CONFIG.pages.blogs.title}
          </h1>
          <p className="text-purple-200 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
            {SITE_CONFIG.pages.blogs.subtitle}
          </p>
        </motion.div>

        {/* Buscador */}
        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Buscar reflexiones..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-purple-900/20 border border-purple-700/50 rounded-xl text-purple-100 placeholder-purple-400 focus:outline-none focus:border-purple-600 transition-colors"
            style={{ fontFamily: "Dosis, sans-serif" }}
          />
        </motion.div>

        {/* Grid de blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/30 rounded-2xl p-6 hover:from-purple-800/30 hover:to-purple-700/20 hover:border-purple-600/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm border ${getCategoryColor(blog.category)}`}>
                  {blog.category}
                </span>
                <span className="text-purple-400 text-sm" style={{ fontFamily: "Dosis, sans-serif" }}>
                  {formatDate(blog.date)}
                </span>
              </div>

              <h2
                className="text-purple-100 text-xl font-bold mb-3 line-clamp-2"
                style={{ fontFamily: "Emblema One, sans-serif" }}
              >
                {blog.title}
              </h2>

              <p
                className="text-purple-300 text-sm leading-relaxed mb-4 line-clamp-3"
                style={{ fontFamily: "Dosis, sans-serif" }}
              >
                {blog.preview}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {blog.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-purple-400 text-xs px-2 py-1 bg-purple-900/30 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 text-sm">{blog.readTime} lectura</span>
              </div>
            </motion.article>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-purple-400 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
              No se encontraron reflexiones con ese término
            </p>
          </div>
        )}
      </div>

      {/* Modal para blog completo */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-900/40 to-black/60 border border-purple-700/50 rounded-2xl max-w-4xl max-h-[80vh] overflow-y-auto p-8 backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm border ${getCategoryColor(selectedBlog.category)}`}>
                  {selectedBlog.category}
                </span>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-purple-400 hover:text-purple-300 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <h1
                className="text-purple-100 text-3xl font-bold mb-4"
                style={{ fontFamily: "Emblema One, sans-serif" }}
              >
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-4 mb-8 text-purple-400 text-sm">
                <span>{formatDate(selectedBlog.date)}</span>
                <span>•</span>
                <span>{selectedBlog.readTime} de lectura</span>
              </div>

              <div
                className="text-purple-200 leading-relaxed prose prose-purple max-w-none"
                style={{ fontFamily: "Dosis, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              <div className="flex gap-2 mt-8 pt-6 border-t border-purple-700/30">
                {selectedBlog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-purple-400 text-sm px-3 py-1 bg-purple-900/30 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .prose h3 {
          color: #c084fc;
          font-family: "Emblema One", sans-serif;
          font-size: 1.25rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose blockquote {
          border-left: 4px solid #9333ea;
          padding-left: 1rem;
          margin: 2rem 0;
          font-style: italic;
          color: #c4b5fd;
        }
        .prose ul, .prose ol {
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        .prose li {
          margin: 0.5rem 0;
          color: #c4b5fd;
        }
        .prose strong {
          color: #a855f7;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
