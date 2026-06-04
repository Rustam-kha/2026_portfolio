// src/components/Certificates.jsx
import { useState } from "react";
import { 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaDownload,
  FaExpand,
  FaCertificate,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Certificate Data with your actual images
  const certificates = [
    {
      id: 1,
      title: "Code Alpha Internship",
      issuer: "CodeAlpha",
      image: "/CODE_ALPHA_INTERNSHIP_CERTIFICATE.jpg",
      description: "Web Development Internship Certificate",
    },
    {
      id: 2,
      title: "Communication Skills",
      issuer: "Dgskills",
      image: "/Communication_certificate.jpg",
      description: "Professional Communication Certification",
    },
    {
      id: 3,
      title: "HTML Certification",
      issuer: "KG Coding",
      image: "/HTML_CERTIFICATE.jpg",
      description: "HTML Development Certification",
    },
    {
      id: 4,
      title: "JavaScript Certification",
      issuer: "KG Coding",
      image: "/JS_CERTIFICATE.jpg",
      description: "JavaScript Development Certification",
    },
    {
      id: 5,
      title: "SEO Certification",
      issuer: "Dgskills",
      image: "/seo_certificate.jpg",
      description: "Search Engine Optimization Certification",
    },
    {
      id: 6,
      title: "WordPress Certification",
      issuer: "Learning by Earning",
      image: "/WORPDRESS_CERTIFICATE.jpg",
      description: "WordPress Development Certification",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(certificates[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % certificates.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(certificates[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(certificates[prevIndex]);
  };

  // Download function
  const handleDownload = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(selectedImage.image);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${selectedImage.title.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    }
  };

  // Keyboard navigation
  useState(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div name="Certificates" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <FaCertificate className="text-5xl text-cyan-400" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Certificates
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Professional certifications and achievements</p>
        </motion.div>

        {/* Certificate Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
                {/* Certificate Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x400/1a1a1a/06b6d4?text=Certificate";
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="p-3 rounded-full bg-cyan-500/90 text-white">
                      <FaExpand size={24} />
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                </div>

                {/* Animated Border */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ${
                  hoveredCard === cert.id ? "w-full" : "w-0"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <FaTimes size={24} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 transition-colors z-10"
              >
                <FaChevronLeft size={24} className="text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 transition-colors z-10"
              >
                <FaChevronRight size={24} className="text-white" />
              </button>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/1200x800/1a1a1a/06b6d4?text=Certificate";
                  }}
                />
                
                {/* Info Overlay with Download Button */}
                <div className="p-6 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                      <p className="text-gray-300 mt-1">{selectedImage.issuer}</p>
                    </div>
                    
                    <button
                      onClick={handleDownload}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      <FaDownload size={16} />
                      Download Certificate
                    </button>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <div className="text-center mt-4 text-sm text-gray-500">
                {currentIndex + 1} / {certificates.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificates;