// src/components/Resume.jsx
import { useState } from "react";
import { 
  FaDownload, 
  FaEye, 
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  // Update this path to your actual CV file location
  const cvPath = "/Rustam_Khan_CV.pdf";
  const cvFileName = "Rustam_Khan_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div name="Resume" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Resume
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            View or download my professional resume
          </p>
        </motion.div>

        {/* Two Cards - View and Download */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* View CV Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaEye className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">View Resume</h3>
            <p className="text-gray-400 mb-6">Preview my complete resume online</p>
            <button
              onClick={() => setShowPdf(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <FaEye size={16} />
              View Online
            </button>
          </motion.div>

          {/* Download CV Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaDownload className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Download Resume</h3>
            <p className="text-gray-400 mb-6">Get my complete CV in PDF format</p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              <FaDownload size={16} />
              Download PDF
            </button>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <ScrollLink to="Contacts" smooth={true} duration={500} offset={-70}>
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 group">
              Hire Me
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollLink>
        </motion.div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {showPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setShowPdf(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl h-[85vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* PDF Viewer */}
              <iframe
                src={`${cvPath}#toolbar=0`}
                className="w-full h-full"
                title="Resume Viewer"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setShowPdf(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-white/20 transition-colors text-white text-xl flex items-center justify-center"
              >
                ✕
              </button>

              {/* Download Button in Modal */}
              <button
                onClick={handleDownload}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                <FaDownload size={14} />
                Download
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Resume;