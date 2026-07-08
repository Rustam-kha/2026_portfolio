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
      {/* Animated Background - Responsive */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Animated Top Border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Scroll to Top Button - Responsive */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all duration-300"
          >
            <FaArrowUp size={14} className="sm:text-[18px]" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Brand Section - Responsive */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 text-center lg:text-left">
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md animate-pulse" />
                <FaTerminal className="text-cyan-400 text-xl sm:text-2xl relative" />
              </div>
              <h2 className="text-xl sm:text-2xl font-mono font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Rustam<span className="text-cyan-400">.dev</span>
              </h2>
            </motion.div>
            
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto lg:mx-0 leading-relaxed">
              MERN Stack Developer | WordPress Expert | Building scalable web applications with modern technologies.
            </p>
            
            {/* Animated Status */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
              <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-400">Available for work</span>
            </div>
          </motion.div>

          {/* Quick Links - Responsive */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2">
              <FaCode className="text-cyan-400 text-xs sm:text-sm" />
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
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
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-xs sm:text-sm cursor-pointer flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 group"
                  >
                    <span className="text-sm sm:text-base">{link.icon}</span>
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

          {/* Social & Info Section - Responsive */}
          <motion.div variants={itemVariants} className="text-center lg:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2">
              <FaRocket className="text-cyan-400 text-xs sm:text-sm" />
              Connect
            </h3>
            
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              {socialLinks.map(({ icon: Icon, href, label, color, gradient }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-2.5 sm:p-3 rounded-full bg-gradient-to-br ${gradient} backdrop-blur-sm border border-white/10 text-gray-400 ${color} transition-all duration-300 hover:border-cyan-400/50 shadow-lg`}
                  aria-label={label}
                >
                  <Icon size={16} className="sm:text-[18px] group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Contact Info - Responsive */}
            <motion.div 
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-lg p-2.5 sm:p-3 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1 flex items-center justify-center lg:justify-start gap-1">
                <span>📧</span> Email
              </p>
              <a 
                href="mailto:rmkhan0332@gmail.com"
                className="text-[10px] sm:text-xs text-cyan-400 hover:text-cyan-300 transition-colors break-all hover:underline"
              >
                rmkhan0332@gmail.com
              </a>
            </motion.div>

            {/* Response Time - Responsive */}
            <div className="mt-2.5 sm:mt-3 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] text-gray-500">
              <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-green-500"></span>
              </span>
              <span>Fast response within 24 hours</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs text-gray-500">
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 text-[8px] sm:text-[10px]" />
              </motion.div>
              <span>using React &amp; Tailwind CSS</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-4 text-[8px] sm:text-[10px] text-gray-600">
              <span>© {currentYear} Rustam Khan</span>
              <span className="hidden xs:inline">•</span>
              <span>All rights reserved</span>
              <span className="hidden xs:inline">•</span>
              <motion.span 
                className="flex items-center gap-0.5 sm:gap-1 cursor-pointer hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaStar className="text-yellow-500 text-[6px] sm:text-[8px]" />
                <span>Portfolio v3.0</span>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
