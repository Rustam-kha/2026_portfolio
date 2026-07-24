// // src/components/Contact.jsx
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { useState, useEffect } from "react";
// import { 
//   FaEnvelope, 
//   FaGithub, 
//   FaLinkedin, 
//   FaUser, 
//   FaPaperPlane, 
//   FaCheckCircle,
//   FaTwitter,
//   FaMapMarkerAlt,
//   FaClock,
//   FaPhoneAlt,
//   FaRegSmile,
//   FaRocket,
//   FaArrowRight,
//   FaHeart,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/bxoozwla", userInfo);
//       toast.success("✨ Message sent successfully! I'll get back to you soon.");
//       reset();
//     } catch (error) {
//       console.log(error);
//       toast.error("❌ Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Floating particles animation
//   const particles = Array.from({ length: 30 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     duration: Math.random() * 4 + 2,
//     delay: Math.random() * 5,
//     size: Math.random() * 3 + 1,
//   }));

//   const contactInfo = [
//     {
//       icon: FaEnvelope,
//       title: "Email Me",
//       value: "rmkhan0332@gmail.com",
//       link: "mailto:rmkhan0332@gmail.com",
//       color: "from-cyan-500 to-blue-500",
//       gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
//     },
//     {
//       icon: FaGithub,
//       title: "GitHub",
//       value: "@Rustam-khan",
//       link: "https://github.com/Rustam-kha",
//       color: "from-gray-600 to-gray-800",
//       gradient: "linear-gradient(135deg, #4b5563, #1f2937)",
//     },
//     {
//       icon: FaLinkedin,
//       title: "LinkedIn",
//       value: "Rustam Khan",
//       link: "https://www.linkedin.com/in/rustam-khan-87a7302b6/",
//       color: "from-blue-600 to-blue-800",
//       gradient: "linear-gradient(135deg, #2563eb, #1e40af)",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: "spring" } },
//   };

//   return (
//     <div name="Contact" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />
        
//         {/* Floating Particles */}
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-cyan-400"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: particle.size,
//               height: particle.size,
//             }}
//             animate={{
//               y: [0, -50, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               delay: particle.delay,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Premium Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, type: "spring" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="inline-block mb-4"
//           >
//             <FaHeart className="text-5xl text-red-500" />
//           </motion.div>
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
//               Let's Connect
//             </span>
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's collaborate and create something amazing together.
//           </p>
//         </motion.div>

//         {/* Contact Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col lg:flex-row gap-8"
//         >
//           {/* Contact Form */}
//           <motion.div variants={itemVariants} className="w-full lg:w-2/3">
//             <div className="relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
//               <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8">
//                 <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                   <FaPaperPlane className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
//                   Send a Message
//                 </h2>
                
//                 <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
//                   {/* Name Field */}
//                   <div className="mb-6">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       Full Name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaUser className={`text-gray-500 transition-colors ${focusedField === 'name' ? 'text-cyan-400' : ''}`} />
//                       </div>
//                       <input
//                         {...register("name", { required: "Name is required" })}
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="John Doe"
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
//                         style={{ borderColor: focusedField === 'name' ? '#06b6d4' : 'rgba(255,255,255,0.2)' }}
//                       />
//                     </div>
//                     <AnimatePresence>
//                       {errors.name && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="mt-1 text-sm text-red-400"
//                         >
//                           {errors.name.message}
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   {/* Email Field */}
//                   <div className="mb-6">
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaEnvelope className={`text-gray-500 transition-colors ${focusedField === 'email' ? 'text-cyan-400' : ''}`} />
//                       </div>
//                       <input
//                         {...register("email", { 
//                           required: "Email is required",
//                           pattern: {
//                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                             message: "Invalid email address"
//                           }
//                         })}
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="you@example.com"
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
//                         style={{ borderColor: focusedField === 'email' ? '#06b6d4' : 'rgba(255,255,255,0.2)' }}
//                       />
//                     </div>
//                     <AnimatePresence>
//                       {errors.email && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="mt-1 text-sm text-red-400"
//                         >
//                           {errors.email.message}
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   {/* Message Field */}
//                   <div className="mb-6">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       {...register("message", { required: "Message is required" })}
//                       id="message"
//                       name="message"
//                       rows="5"
//                       placeholder="Tell me about your project..."
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       className="w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
//                       style={{ borderColor: focusedField === 'message' ? '#06b6d4' : 'rgba(255,255,255,0.2)' }}
//                     />
//                     <AnimatePresence>
//                       {errors.message && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="mt-1 text-sm text-red-400"
//                         >
//                           {errors.message.message}
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                         Send Message
//                         <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                       </>
//                     )}
//                   </motion.button>
//                 </form>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div variants={itemVariants} className="w-full lg:w-1/3">
//             <div className="relative group h-full">
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
//               <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
//                 <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                   <FaRegSmile className="text-cyan-400" />
//                   Get in Touch
//                 </h2>
                
//                 <div className="space-y-6">
//                   {contactInfo.map((info, idx) => (
//                     <motion.a
//                       key={idx}
//                       href={info.link}
//                       target={info.title !== "Email Me" ? "_blank" : undefined}
//                       rel="noopener noreferrer"
//                       whileHover={{ x: 8 }}
//                       className="flex items-start gap-4 group/link cursor-pointer"
//                     >
//                       <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover/link:scale-110 transition-transform duration-300`}>
//                         <info.icon className="text-white text-lg" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-medium text-gray-400 mb-1">{info.title}</h3>
//                         <p className="text-white hover:text-cyan-400 transition-colors">
//                           {info.value}
//                         </p>
//                       </div>
//                     </motion.a>
//                   ))}
//                 </div>

//                 {/* Availability Status */}
//                 <div className="mt-8 pt-6 border-t border-white/10">
//                   <div className="flex items-center gap-3">
//                     <div className="relative">
//                       <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                       <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-white">Currently Available</p>
//                       <p className="text-xs text-gray-500">For freelance & full-time opportunities</p>
//                     </div>
//                   </div>
                  
//                   {/* Response Time */}
//                   <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
//                     <FaClock />
//                     <span>Typically replies within 24 hours</span>
//                   </div>
//                 </div>

//                 {/* Decorative Element */}
//                 <div className="mt-6 pt-4 text-center">
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                     className="inline-block"
//                   >
//                     <FaRocket className="text-2xl text-cyan-400 opacity-50" />
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

        
//       </div>
//     </div>
//   );
// }

// export default Contact;
