// import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import {
//   FaHome,
//   FaUser,
//   FaBriefcase,
//   FaCode,
//   FaCertificate,
//   FaFileAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const navItems = [
//   { name: "Home", icon: FaHome },
//   { name: "About", icon: FaUser },
//   { name: "Portfolio", icon: FaBriefcase },
//   { name: "Certificates", icon: FaCertificate },
//   { name: "Resume", icon: FaFileAlt },
//    { name: "Experience", icon: FaCode },
//   { name: "Contact", icon: FaEnvelope },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const scrollHandler = () => setScrolled(window.scrollY > 30);

//     window.addEventListener("scroll", scrollHandler);

//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="h-20 flex items-center justify-between">
//             {/* Logo */}

//             <Link
//               to="Home"
//               smooth
//               spy
//               duration={500}
//               offset={-70}
//               className="cursor-pointer"
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                   src="/profile.png"
//                   alt="Profile"
//                   className="w-11 h-11 rounded-full border border-cyan-400 object-cover"
//                 />

//                 <div>
//                   <h1 className="font-bold text-lg text-white">
//                     Rustam
//                     <span className="text-cyan-400">.dev</span>
//                   </h1>

//                   <p className="text-xs text-gray-400">
//                     Full Stack Engineer
//                   </p>
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop */}

//             <nav className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-lg">
//               {navItems.map(({ name }) => (
//                 <Link
//                   key={name}
//                   to={name}
//                   spy
//                   smooth
//                   duration={500}
//                   offset={-70}
//                   activeClass="text-cyan-400 after:w-full"
//                   className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300"
//                 >
//                   {name}
//                 </Link>
//               ))}
//             </nav>

//             {/* Mobile Button */}

//             <button
//               onClick={() => setMenuOpen(true)}
//               className="md:hidden text-white p-2 rounded-lg border border-white/10 bg-white/5"
//             >
//               <HiOutlineMenuAlt3 size={25} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Drawer */}

//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             <motion.div
//               onClick={() => setMenuOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
//             />

//             <motion.aside
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: .35 }}
//               className="fixed top-0 right-0 z-50 h-screen w-80 bg-[#0b0b0b] border-l border-white/10"
//             >
//               <div className="flex items-center justify-between p-6 border-b border-white/10">
//                 <h2 className="text-white font-semibold text-xl">
//                   Menu
//                 </h2>

//                 <button
//                   onClick={() => setMenuOpen(false)}
//                   className="text-white"
//                 >
//                   <IoClose size={28} />
//                 </button>
//               </div>

//               <nav className="flex flex-col mt-8 px-6">
//                 {navItems.map(({ name, icon: Icon }) => (
//                   <Link
//                     key={name}
//                     to={name}
//                     smooth
//                     spy
//                     duration={500}
//                     offset={-70}
//                     onClick={() => setMenuOpen(false)}
//                     activeClass="bg-cyan-500/20 text-cyan-400"
//                     className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition cursor-pointer mb-2"
//                   >
//                     <Icon size={18} />

//                     {name}
//                   </Link>
//                 ))}
//               </nav>

//               <div className="absolute bottom-8 left-0 right-0 text-center">
//                 <p className="text-gray-500 text-sm">
//                   © 2026 Rustam Khan
//                 </p>
//               </div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="text-cyan-400 text-2xl" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rustam Khan
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
