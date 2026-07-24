// src/components/CTASection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const CTASection = ({ 
  title = "Ready to Start Your Project?",
  subtitle = "Let's bring your ideas to life with cutting-edge technology.",
  buttonText = "Let's Talk",
  buttonLink = "/contact",
  variant = "default" // default, dark, gradient
}) => {
  const variants = {
    default: {
      bg: 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10',
      text: 'text-white'
    },
    dark: {
      bg: 'bg-gray-800/50 border border-white/10',
      text: 'text-white'
    },
    gradient: {
      bg: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      text: 'text-white'
    }
  };

  const currentVariant = variants[variant];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`relative rounded-3xl p-12 text-center overflow-hidden ${currentVariant.bg}`}
        >
          {/* Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <FaRocket className="text-5xl text-cyan-400" />
            </motion.div>

            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${currentVariant.text}`}>
              {title}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto mb-8 ${variant === 'gradient' ? 'text-white/90' : 'text-gray-400'}`}>
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={buttonLink}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group ${
                  variant === 'gradient'
                    ? 'bg-white text-gray-900 hover:shadow-xl hover:shadow-white/25'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                }`}
              >
                {buttonText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {variant !== 'gradient' && (
                <Link
                  to="/portfolio"
                  className="px-8 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View My Work
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
