// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { HiCode } from "react-icons/hi";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaCertificate,
} from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 1, text: "Home", icon: FaHome },
    { id: 2, text: "About", icon: FaUser },
    { id: 3, text: "Portfolio", icon: FaBriefcase },
    { id: 4, text: "Experience", icon: FaCode },
    { id: 5, text: "Certificates", icon: FaCertificate },
    { id: 6, text: "Resume", icon: FaFileAlt },
    { id: 7, text: "Contacts", icon: FaEnvelope },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close mobile menu automatically if the viewport grows past the md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Navbar variants for animations
  const navbarVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Navbar with dynamic background */}
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-white/10 shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo Section - Fully Responsive */}
            <Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-70}
              className="group flex items-center gap-2 sm:gap-3 cursor-pointer relative flex-shrink-0 min-w-0"
            >
              {/* Animated glow behind logo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <img
                  src="/profile.png"
                  className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-white/30 object-cover transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400"
                  alt="Profile"
                />
              </div>

              {/* Logo Text - Hidden on very small screens (< 380px) */}
              <div className="hidden min-[380px]:block min-w-0">
                <h1 className="font-mono font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 truncate">
                  Rustam<span className="text-cyan-400">.dev</span>
                </h1>
                <div className="flex items-center gap-1.5">
                  <p className="text-[8px] min-[380px]:text-[10px] sm:text-xs text-gray-400 flex items-center gap-1 group-hover:text-gray-300 transition-colors">
                    <HiCode className="text-cyan-400 animate-pulse text-[10px] sm:text-sm flex-shrink-0" />
                    <span className="hidden min-[380px]:inline">Full Stack</span>
                    <span className="min-[380px]:hidden">Dev</span>
                  </p>
                  {/* Status Indicator - Mobile Friendly */}
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[6px] min-[380px]:text-[8px] sm:text-[10px] text-green-400 font-medium whitespace-nowrap">
                    Available
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10 shadow-lg overflow-x-auto max-w-full scrollbar-hide">
              {navItems.map(({ id, text, icon: Icon }) => (
                <Link
                  key={id}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onSetActive={() => setActiveSection(text)}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-2.5 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium cursor-pointer transition-all duration-300 overflow-hidden whitespace-nowrap flex-shrink-0 ${
                    activeSection === text
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {/* Active Background */}
                  {activeSection === text && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}

                  {/* Hover Effect */}
                  {hoveredItem === id && activeSection !== text && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 bg-white/10 rounded-full"
                    />
                  )}

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-1.5 lg:gap-2">
                    <Icon size={12} className="lg:text-[14px] flex-shrink-0" />
                    <span className="hidden lg:inline">{text}</span>
                    <span className="lg:hidden">{text.charAt(0)}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <AiOutlineMenu size={20} className="sm:text-[24px]" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu - Enhanced with Animations */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 h-full w-[85vw] max-w-[280px] min-[380px]:max-w-xs sm:max-w-sm z-50 bg-gradient-to-br from-gray-900 via-gray-900 to-black shadow-2xl border-l border-white/10 flex flex-col"
            >
              {/* Drawer Header - Enhanced */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3 min-w-0"
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md animate-pulse"></div>
                    <img
                      src="/profile.png"
                      className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-cyan-400"
                      alt="Profile"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-bold text-white text-base sm:text-lg truncate">
                      Rustam Khan
                    </h2>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[10px] sm:text-xs text-cyan-400 flex items-center gap-1">
                        <HiCode size={10} className="sm:text-[12px] flex-shrink-0" />
                        <span className="hidden min-[380px]:inline">Full Stack</span>
                        <span className="min-[380px]:hidden">Dev</span>
                      </p>
                      <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[8px] sm:text-[10px] text-green-400 font-medium whitespace-nowrap">
                        Available
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0"
                  aria-label="Close menu"
                >
                  <IoCloseSharp size={20} className="sm:text-[24px] text-white" />
                </motion.button>
              </div>

              {/* Drawer Navigation - Enhanced, scrolls independently */}
              <nav className="flex flex-col p-4 sm:p-6 gap-2 sm:gap-3 overflow-y-auto flex-1 min-h-0">
                {navItems.map(({ id, text, icon: Icon }, index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300 font-medium group cursor-pointer ${
                        activeSection === text
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <Icon size={18} className="sm:text-[20px] text-cyan-400 flex-shrink-0" />
                      <span className="flex-1 truncate">{text}</span>
                      {activeSection === text && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 flex-shrink-0"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-t from-black/50 to-transparent flex-shrink-0"
              >
                <div className="text-center space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
                    </span>
                    <span className="text-gray-400">Available for work</span>
                  </div>
                  <p className="text-[8px] sm:text-xs text-gray-500">
                    © 2024 Rustam Khan | All rights reserved
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
