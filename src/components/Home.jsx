// src/components/Home.jsx
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaDev,
  FaStackOverflow,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiWix,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiGraphql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { RiReactjsLine, RiTailwindCssFill, RiVuejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  const [stats, setStats] = useState({ projects: 0, experience: 0, clients: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse follow for 3D effect
  const springConfig = { damping: 30, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  // Animated stats counter
  useEffect(() => {
    const counters = [
      { key: "projects", target: 15, duration: 2000 },
      { key: "experience", target: 1, duration: 2000 },
      { key: "clients", target: 12, duration: 2000 },
    ];

    counters.forEach(({ key, target, duration }) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    });
  }, []);

  // Track mouse for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('profile-container')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const frontendSkills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500", level: 95 },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", level: 90 },
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500", level: 88 },
    { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400", level: 85 },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white", level: 80 },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600", level: 90 },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "text-teal-500", level: 92 },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", level: 75 },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500", level: 85 },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400", level: 82 },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600", level: 80 },
    { icon: FaDatabase, name: "SQL", color: "text-blue-400", level: 78 },
    { icon: FaPython, name: "Python", color: "text-yellow-400", level: 75 },
    { icon: FaJava, name: "Java", color: "text-red-500", level: 70 },
    { icon: SiGraphql, name: "GraphQL", color: "text-pink-500", level: 72 },
    { icon: SiDocker, name: "Docker", color: "text-blue-500", level: 68 },
  ];

  const otherSkills = [
    { icon: FaWordpress, name: "WordPress", color: "text-blue-600", level: 90 },
    { icon: SiWix, name: "Wix", color: "text-cyan-500", level: 85 },
    { icon: SiTensorflow, name: "AI/ML", color: "text-orange-400", level: 65 },
    { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500", level: 60 },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rustam-kha", color: "hover:text-gray-300", bg: "hover:bg-gray-600/20" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rustam-khan-87a7302b6/", color: "hover:text-blue-500", bg: "hover:bg-blue-500/20" }
    
  ];

  return (
    <div name="Home" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2"
          >
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-400">✨ Available for Work</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Rustam Khan
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6"
            >
              <ReactTyped
                strings={[
                  "MERN Stack Developer 🚀",
                  "Next.js Expert ⚛️",
                  "WordPress Developer 📝",
                  "Wix Specialist 🎨",
                  "Python Developer 🐍",
                  "AI Enthusiast 🤖",
                  "Full Stack Developer 💻",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop={true}
                className="text-cyan-400 font-semibold"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 leading-relaxed mb-8 max-w-xl text-lg"
            >
              Mern-stack developer with <span className="text-cyan-400 font-semibold">1+ years</span> of experience building scalable web applications. 
              Specialized in <span className="text-blue-400">MERN stack</span>, <span className="text-purple-400">Next.js</span>, and <span className="text-green-400">WordPress customization</span>. 
              Currently expanding into <span className="text-orange-400">AI and machine learning</span> to create smarter solutions.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { label: "Projects", value: stats.projects, suffix: "+", icon: FaCode, gradient: "from-cyan-500 to-blue-500" },
                { label: "Experience", value: stats.experience, suffix: " years", icon: FaRocket, gradient: "from-purple-500 to-pink-500" },
                { label: "Clients", value: stats.clients, suffix: "+", icon: FaDatabase, gradient: "from-green-500 to-emerald-500" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{ background: `linear-gradient(135deg, ${stat.gradient.split(' ')[1]}, ${stat.gradient.split(' ')[3]})` }}
                  />
                  <div className="relative text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
                    <stat.icon className="text-cyan-400 text-xl mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-110" />
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <ScrollLink to="Portfolio" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </ScrollLink>
              
              <ScrollLink to="Contacts" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border-2 border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
                >
                  Let's Talk
                </motion.button>
              </ScrollLink>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, color, bg }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${color} ${bg} transition-all duration-300`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div
              id="profile-container"
              className="relative perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative"
              >
                {/* Outer Glow Ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-60 animate-pulse" />
                
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                    style={{ padding: "3px" }}
                  />
                </div>

                {/* Profile Image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="/RUSTAM_KHAN_UPWORK_PROFILE.png"
                    alt="Rustam Khan"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-5 -right-5 p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg"
                >
                  <RiReactjsLine className="text-white text-2xl" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-5 -left-5 p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
                >
                  <SiNextdotjs className="text-white text-2xl" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/2 -right-8 p-3 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg"
                >
                  <FaNodeJs className="text-white text-2xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
                  className="absolute top-1/3 -left-8 p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg"
                >
                  <FaWordpress className="text-white text-2xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Premium Design */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-28"
        >
          <div className="text-center mb-12">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-3"
            >
              <FaCode className="text-4xl text-cyan-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 mt-4">Technologies I work with to bring ideas to life</p>
          </div>

          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-cyan-400"></span>
              Frontend Development
              <span className="w-12 h-px bg-cyan-400"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {frontendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group relative"
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <skill.icon className={`text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                      {skill.name} • {skill.level}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-blue-400"></span>
              Backend & Database
              <span className="w-12 h-px bg-blue-400"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {backendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group relative"
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <skill.icon className={`text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                      {skill.name} • {skill.level}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-purple-400"></span>
              CMS & Emerging Tech
              <span className="w-12 h-px bg-purple-400"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {otherSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group relative"
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <skill.icon className={`text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                      {skill.name} • {skill.level}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
