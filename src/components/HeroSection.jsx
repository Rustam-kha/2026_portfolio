// src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  ctaText = 'Get Started', 
  ctaLink = '/contact',
  badge = null,
  reversed = false 
}) => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                {badge}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            
            {subtitle && (
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                {subtitle}
              </h2>
            )}
            
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to={ctaLink}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 group"
              >
                {ctaText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {ctaLink !== '/contact' && (
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Contact Me
                </Link>
              )}
            </div>
          </motion.div>

          {/* Optional right side content */}
          {!reversed && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              {/* Can add additional content here if needed */}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
