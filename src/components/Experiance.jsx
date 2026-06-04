// src/components/Experience.jsx
import {
  FaCode,
  FaWordpress,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaAward,
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaTrophy,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Professional Experience Data
  const professionalExperiences = [
    {
      id: 1,
      title: "Web Development Intern",
      company: "CodeAlpha",
      location: "Remote",
      period: "3 Months",
      date: "2024",
      type: "Internship",
      icon: FaCode,
      iconColor: "from-blue-500 to-cyan-500",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: [
        "Completed intensive web development training program",
        "Built responsive web applications using modern technologies",
        "Collaborated on real-world projects with industry mentors",
        "Gained hands-on experience in full-stack development",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      achievements: [
        "Successfully delivered 5+ projects",
        "Received outstanding performer recognition",
      ],
    },
    {
      id: 2,
      title: "Junior WordPress Developer",
      company: "Logic Lumen System",
      location: "Peshawar, Pakistan (Onsite)",
      period: "1.5 Months Summer Internship",
      date: "2025",
      type: "Internship",
      icon: FaWordpress,
      iconColor: "from-blue-600 to-cyan-600",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: [
        "Worked onsite as a Junior WordPress Developer",
        "Customized WordPress themes and plugins for client requirements",
        "Collaborated with senior developers on live projects",
        "Gained practical experience in CMS development and deployment",
      ],
      technologies: ["WordPress", "PHP", "Elementor", "WooCommerce", "CSS/HTML"],
      achievements: [
        "Assisted in 3 client projects",
        "Learned professional workflow practices",
      ],
    },
    {
      id: 3,
      title: "WordPress Freelance Developer",
      company: "Self-Employed / Freelance",
      location: "Remote",
      period: "2023 - Present",
      date: "2023-Present",
      type: "Freelance",
      icon: FaLaptopCode,
      iconColor: "from-purple-500 to-pink-500",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description: [
        "Designed and developed custom WordPress websites for multiple clients",
        "Provided ongoing maintenance and support for client websites",
        "Implemented responsive designs and optimized performance",
        "Managed client relationships and delivered projects on time",
      ],
      technologies: ["WordPress", "Elementor", "WPBakery", "Wix", "SEO"],
      achievements: [
        "Successfully delivered 10+ client projects",
        "5-star client satisfaction rating",
      ],
    },
  ];

  // Technical Skills with detailed info
  const technicalSkills = [
    { name: "MERN Stack", level: 85, icon: FaCode, color: "from-green-500 to-emerald-500", projects: "8+", experience: "2 years" },
    { name: "Next.js", level: 75, icon: SiNextdotjs, color: "from-gray-600 to-gray-400", projects: "4+", experience: "1.5 years" },
    { name: "WordPress", level: 90, icon: FaWordpress, color: "from-blue-600 to-cyan-600", projects: "15+", experience: "3 years" },
    { name: "React.js", level: 85, icon: SiReact, color: "from-cyan-500 to-blue-500", projects: "10+", experience: "2 years" },
    { name: "Node.js/Express", level: 80, icon: SiExpress, color: "from-green-600 to-green-500", projects: "6+", experience: "1.5 years" },
    { name: "MongoDB", level: 75, icon: SiMongodb, color: "from-green-700 to-green-500", projects: "5+", experience: "1.5 years" },
    { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, color: "from-teal-400 to-cyan-500", projects: "12+", experience: "2 years" },
    { name: "JavaScript", level: 90, icon: SiJavascript, color: "from-yellow-400 to-orange-500", projects: "20+", experience: "3 years" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, type: "spring" } },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring" } },
  };

  return (
    <div
      name="Experience"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
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
            <FaBriefcase className="text-5xl text-cyan-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From intern to expert - my path of continuous growth and excellence
          </p>
        </motion.div>

        <div ref={ref}>
          {/* Timeline Experience Section */}
          <div className="relative mb-20">
            {/* Central Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
            
            {professionalExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-10 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.iconColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Shine Effect */}
                    <motion.div
                      animate={{
                        x: hoveredCard === exp.id ? ["0%", "100%"] : "0%",
                      }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.iconColor} flex items-center justify-center shadow-lg`}>
                            <exp.icon className="text-white text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-cyan-400 text-sm">{exp.company}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {exp.type}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-cyan-400 text-xs" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-cyan-400 text-xs" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Achievements */}
                        {exp.achievements && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <p className="text-xs text-cyan-400 mb-2 flex items-center gap-1">
                              <FaTrophy size={10} /> Key Achievements:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.achievements.map((achievement, i) => (
                                <span key={i} className="text-xs text-gray-400 flex items-center gap-1">
                                  <FaCheckCircle className="text-green-500 text-xs" />
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Animated Border */}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${exp.iconColor} transition-all duration-500 ${
                        hoveredCard === exp.id ? "w-full" : "w-0"
                      }`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Technical <span className="text-cyan-400">Proficiency</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {technicalSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={skillVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                        <skill.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{skill.name}</h3>
                        <p className="text-gray-500 text-xs">{skill.experience}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-2 border-t border-white/10 flex justify-between text-xs">
                      <span className="text-gray-500">Projects</span>
                      <span className="text-cyan-400">{skill.projects}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Success Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
              <FaUsers className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-3">Client Success Stories</h3>
              <p className="text-gray-300 mb-6">
                Delivering excellence and building lasting relationships with clients worldwide
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">5★</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <ScrollLink to="Portfolio" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;