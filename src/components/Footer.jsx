// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaTerminal, FaArrowUp, FaCode, FaRocket, FaStar } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/Rustam-kha", 
      label: "GitHub", 
      color: "hover:text-gray-300",
      gradient: "from-gray-700 to-gray-900"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/rustam-khan-87a7302b6/", 
      label: "LinkedIn", 
      color: "hover:text-blue-400",
      gradient: "from-blue-600 to-blue-800"
    },
    { 
      icon: FaEnvelope, 
      href: "mailto:rmkhan0332@gmail.com", 
      label: "Email", 
      color: "hover:text-red-400",
      gradient: "from-red-500 to-orange-500"
    },
  ];

  const quickLinks = [
    { name: "Home", to: "Home", icon: "🏠" },
    { name: "About", to: "About", icon: "👤" },
    { name: "Portfolio", to: "Portfolio", icon: "💼" },
    { name: "Experience", to: "Experience", icon: "⚡" },
    { name: "Contact", to: "Contacts", icon: "📧" },
  ];

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, type: "spring" } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Animated Top Border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all duration-300"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md animate-pulse" />
                <FaTerminal className="text-cyan-400 text-2xl relative" />
              </div>
              <h2 className="text-2xl font-mono font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Rustam<span className="text-cyan-400">.dev</span>
              </h2>
            </motion.div>
            
            <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
              MERN Stack Developer | WordPress Expert | Building scalable web applications with modern technologies.
            </p>
            
            {/* Animated Status */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-400">Available for work</span>
            </div> 

            
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <FaCode className="text-cyan-400 text-sm" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm cursor-pointer flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.name}</span>
                    {hoveredLink === link.name && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1 h-1 rounded-full bg-cyan-400"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Info Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <FaRocket className="text-cyan-400 text-sm" />
              Connect
            </h3>
            
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, href, label, color, gradient }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-3 rounded-full bg-gradient-to-br ${gradient} backdrop-blur-sm border border-white/10 text-gray-400 ${color} transition-all duration-300 hover:border-cyan-400/50 shadow-lg`}
                  aria-label={label}
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-lg p-3 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xs text-gray-400 mb-1 flex items-center justify-center md:justify-start gap-1">
                <span>📧</span> Email
              </p>
              <a 
                href="mailto:uettaxilarmkhan2454@gmail.com"
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors break-all hover:underline"
              >
                rmkhan0332@gmail.com
              </a>
            </motion.div>

            {/* Response Time */}
            <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-[10px] text-gray-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span>Fast response within 24 hours</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 text-xs" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-[10px] text-gray-600">
              <span>© {currentYear} Rustam Khan</span>
              <span>•</span>
              <span>All rights reserved</span>
              <span>•</span>
              <motion.span 
                className="flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaStar className="text-yellow-500 text-[8px]" />
                Portfolio v3.0
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;