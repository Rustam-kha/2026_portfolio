import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaCertificate,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { name: "Home", icon: FaHome },
  { name: "About", icon: FaUser },
  { name: "Portfolio", icon: FaBriefcase },
  { name: "Experience", icon: FaCode },
  { name: "Certificates", icon: FaCertificate },
  { name: "Resume", icon: FaFileAlt },
  { name: "Contact", icon: FaEnvelope },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <Link
              to="Home"
              smooth
              spy
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-11 h-11 rounded-full border border-cyan-400 object-cover"
                />

                <div>
                  <h1 className="font-bold text-lg text-white">
                    Rustam
                    <span className="text-cyan-400">.dev</span>
                  </h1>

                  <p className="text-xs text-gray-400">
                    Full Stack Engineer
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop */}

            <nav className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-lg">
              {navItems.map(({ name }) => (
                <Link
                  key={name}
                  to={name}
                  spy
                  smooth
                  duration={500}
                  offset={-70}
                  activeClass="text-cyan-400 after:w-full"
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300"
                >
                  {name}
                </Link>
              ))}
            </nav>

            {/* Mobile Button */}

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white p-2 rounded-lg border border-white/10 bg-white/5"
            >
              <HiOutlineMenuAlt3 size={25} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: .35 }}
              className="fixed top-0 right-0 z-50 h-screen w-80 bg-[#0b0b0b] border-l border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-white font-semibold text-xl">
                  Menu
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white"
                >
                  <IoClose size={28} />
                </button>
              </div>

              <nav className="flex flex-col mt-8 px-6">
                {navItems.map(({ name, icon: Icon }) => (
                  <Link
                    key={name}
                    to={name}
                    smooth
                    spy
                    duration={500}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    activeClass="bg-cyan-500/20 text-cyan-400"
                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition cursor-pointer mb-2"
                  >
                    <Icon size={18} />

                    {name}
                  </Link>
                ))}
              </nav>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-gray-500 text-sm">
                  © 2026 Rustam Khan
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
