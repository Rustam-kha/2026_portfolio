// src/components/About.jsx
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaBrain,
  FaUserGraduate,
  FaAward,
  FaHeart,
  FaStar,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiCanva,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTensorflow,
  SiWix,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, type: "spring" } },
  };

  const educationData = [
    {
      degree: "Matriculation",
      score: "1082/1100 (98.3%)",
      institution: "Ghazali Public School Jamrud, District Khyber",
      board: "BISE Peshawar",
      year: "2021",
      color: "from-green-500 to-emerald-500",
      icon: FaUserGraduate,
      grade: "A+",
    },
    {
      degree: "Intermediate",
      score: "1024/1100 (93.1%)",
      institution: "Afridi Model School & College, Bara, District Khyber",
      board: "BISE Peshawar",
      year: "2023",
      color: "from-blue-500 to-cyan-500",
      icon: FaUserGraduate,
      grade: "A",
    },
    {
      degree: "Bachelor's in Software Engineering",
      score: "In Progress",
      institution: "University of Engineering & Technology, Taxila",
      year: "2023-Present",
      color: "from-purple-500 to-pink-500",
      icon: FaUserGraduate,
      grade: "Ongoing",
    },
  ];

  const techCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-cyan-400" />,
      gradient: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React.js", icon: FaReact, color: "text-cyan-400", level: 88 },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: 82 },
        { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500", level: 80 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", level: 90 },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", level: 92 },
        { name: "HTML5/CSS3", icon: FaHtml5, color: "text-orange-500", level: 95 },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: 88 },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      icon: <FaDatabase className="text-green-400" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 85 },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400", level: 82 },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", level: 80 },
        { name: "Python", icon: FaPython, color: "text-yellow-400", level: 78 },
        { name: "Java", icon: FaJava, color: "text-red-500", level: 75 },
        { name: "C++", icon: SiCplusplus, color: "text-blue-500", level: 80 },
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-500", level: 70 },
      ],
    },
    {
      title: "CMS & Emerging Tech",
      icon: <FaBrain className="text-purple-400" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "WordPress", icon: FaWordpress, color: "text-blue-600", level: 92 },
        { name: "Wix", icon: SiWix, color: "text-cyan-500", level: 85 },
        { name: "AI/ML", icon: SiTensorflow, color: "text-orange-400", level: 65 },
        { name: "Canva", icon: SiCanva, color: "text-blue-500", level: 88 },
      ],
    },
  ];

  const statsData = [
    { label: "Projects Completed", value: "15+", icon: FaCode, gradient: "from-cyan-500 to-blue-500" },
    { label: "Technologies", value: "14+", icon: FaReact, gradient: "from-purple-500 to-pink-500" },
    { label: "Happy Clients", value: "12+", icon: FaRocket, gradient: "from-green-500 to-emerald-500" },
    { label: "Learning", value: "AI/ML", icon: FaBrain, gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <div name="About" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <FaUserGraduate className="text-5xl text-cyan-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer on a mission to create exceptional digital experiences
          </p>
        </motion.div>

        <div ref={ref} className="space-y-20">
          {/* Introduction Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-10 md:p-14 overflow-hidden group"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Shine Effect */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
              />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  Introduction
                  <FaHeart className="text-red-500 animate-pulse" />
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hello, I'm{" "}
                  <span className="text-cyan-400 font-bold text-xl">Rustam Khan</span>,
                  a passionate Full-Stack Developer with a love for crafting
                  intuitive and engaging web solutions. With expertise in{" "}
                  <span className="text-cyan-400 font-semibold">MERN Stack</span>,{" "}
                  <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
                  <span className="text-purple-400 font-semibold">WordPress</span>, and
                  expanding into{" "}
                  <span className="text-orange-400 font-semibold">Artificial Intelligence</span>,
                  I focus on creating scalable, responsive, and user-friendly
                  experiences that make a difference in the digital world.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, y: -8 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center group-hover:border-cyan-500/50 transition-all duration-300">
                  <stat.icon className="text-4xl text-cyan-400 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Education Journey
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `linear-gradient(135deg, ${edu.color.split(' ')[1]}, ${edu.color.split(' ')[3]})` }}
                  />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full group-hover:border-transparent transition-all duration-300 overflow-hidden">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <edu.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 text-sm mb-2 font-semibold">{edu.score}</p>
                    <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.board}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{edu.year}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-cyan-400">
                        {edu.grade}
                      </span>
                    </div>
                    
                    {/* Animated Border */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${edu.color} transition-all duration-500 ${
                      hoveredCard === idx ? "w-full" : "w-0"
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Technical Expertise
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              <p className="text-gray-400 mt-3">Technologies I master to build exceptional solutions</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {techCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{ x: 8 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className={`text-lg ${skill.color}`} />
                            <span className="text-gray-300 text-sm group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.05 * skillIdx }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl animate-pulse" />
            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-10 md:p-14 text-center overflow-hidden">
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-5 left-5 opacity-20"
              >
                <FaStar className="text-4xl text-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-5 right-5 opacity-20"
              >
                <FaTrophy className="text-4xl text-yellow-400" />
              </motion.div>
              
              <FaRocket className="text-6xl text-cyan-400 mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mission Statement
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                My mission is to create scalable, intuitive, and aesthetically
                pleasing digital solutions that elevate user experiences and
                contribute to technological innovation. I'm committed to
                continuous learning and leveraging emerging technologies like
                AI to build smarter, more efficient applications that make a 
                real difference in people's lives.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <ScrollLink to="Portfolio" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                Explore My Work
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;