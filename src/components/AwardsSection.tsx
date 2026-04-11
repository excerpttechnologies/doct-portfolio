// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Trophy, Star, Medal, Award, BookOpen, Globe } from "lucide-react";

// const awards = [
//   { 
//     title: "Kendra Sahitya Akademi Award", 
//     year: "1998", 
//     desc: "For outstanding contribution to Kannada literature.", 
//     icon: Trophy 
//   },

//   { 
//     title: "Karnataka Jnanpith State Award", 
//     year: "2005", 
//     desc: "For excellence in Kannada literary achievements.", 
//     icon: Star 
//   },

//   { 
//     title: "Karnataka Pampa Award", 
//     year: "2010", 
//     desc: "For lifetime contribution to Kannada literature.", 
//     icon: Medal 
//   },

//   { 
//     title: "Pampa Award", 
//     year: "2012", 
//     desc: "Highest literary honour by Karnataka Government.", 
//     icon: Award 
//   },

//   { 
//     title: "Padma Bhushan Award", 
//     year: "2018", 
//     desc: "For distinguished service in literature and education.", 
//     icon: Trophy 
//   },

//   { 
//     title: "Vrittidaya Sadhaka Award", 
//     year: "2014", 
//     desc: "For dedication towards literary and social service.", 
//     icon: Medal 
//   },

//   { 
//     title: "Bhavana Muni Vardhane Award", 
//     year: "2013", 
//     desc: "For contribution to cultural and literary development.", 
//     icon: Star 
//   },

//   { 
//     title: "Markandeya Recognition Award", 
//     year: "2016", 
//     desc: "For excellence in Kannada literary works.", 
//     icon: Award 
//   },

//   { 
//     title: "Bharatiya Sahitya Award", 
//     year: "2011", 
//     desc: "For contribution to Indian literature.", 
//     icon: BookOpen 
//   },

//   { 
//     title: "R. V. Devaraja Seva Pratishthana Award", 
//     year: "2017", 
//     desc: "For service in literature and social upliftment.", 
//     icon: Medal 
//   },

//   { 
//     title: "Kannada Sirigandha Award", 
//     year: "2015", 
//     desc: "For promoting Kannada language and culture.", 
//     icon: Star 
//   },

//   { 
//     title: "Kannada Seva Ratna Award", 
//     year: "2016", 
//     desc: "For outstanding service to Kannada community.", 
//     icon: Trophy 
//   },

//   { 
//     title: "Karnataka Yuva Sahitya Shri Award", 
//     year: "2008", 
//     desc: "For excellence in young literary contributions.", 
//     icon: BookOpen 
//   },

//   { 
//     title: "World Literary Award – Kannada Sangha, Toronto, Canada", 
//     year: "2019", 
//     desc: "For global recognition in Kannada literature.", 
//     icon: Globe 
//   },
// ];

// const AwardsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="awards" className="section-padding bg-gradient-navy relative overflow-hidden" ref={ref}>
//       {/* Decorative light streaks */}
//       <motion.div
//         animate={{
//           x: ["-100%", "200%"],
//           opacity: [0, 0.3, 0],
//         }}
//         transition={{ duration: 8, repeat: Infinity, repeatDelay: 3 }}
//         className="absolute top-1/3 left-0 w-96 h-px bg-gradient-to-r from-transparent via-gold to-transparent pointer-events-none"
//       />

//       <div className="container mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-gold uppercase text-sm font-medium mb-2"
//           >
//             Recognition
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
//             Awards & <span className="text-gradient-gold">Honours</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {awards.map((award, i) => (
//             <motion.div
//               key={award.title}
//               initial={{ opacity: 0, y: 50, rotateX: 20 }}
//               animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 0 40px -5px hsla(40,52%,54%,0.3)",
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative bg-navy-light/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/60 transition-all duration-500"
//             >
//               {/* Glow effect on hover */}
//               <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="relative z-10">
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
//                   className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"
//                 >
//                   <award.icon size={28} className="text-gold" />
//                 </motion.div>
//                 <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-1">{award.title}</h3>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : {}}
//                   transition={{ delay: 0.7 + i * 0.1 }}
//                   className="text-gold text-sm font-medium mb-3"
//                 >
//                   {award.year}
//                 </motion.p>
//                 <p className="text-primary-foreground/60 text-sm leading-relaxed">{award.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;









// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Trophy, Star, Medal, Award, BookOpen, Globe } from "lucide-react";

// const awards = [
//   { title: "Kendra Sahitya Akademi Award", year: "1998", desc: "For outstanding contribution to Kannada literature.", icon: Trophy },
//   { title: "Karnataka Jnanpith State Award", year: "2005", desc: "For excellence in Kannada literary achievements.", icon: Star },
//   { title: "Karnataka Pampa Award", year: "2010", desc: "For lifetime contribution to Kannada literature.", icon: Medal },
//   { title: "Pampa Award", year: "2012", desc: "Highest literary honour by Karnataka Government.", icon: Award },
//   { title: "Padma Bhushan Award", year: "2018", desc: "For distinguished service in literature and education.", icon: Trophy },
//   { title: "Vrittidaya Sadhaka Award", year: "2014", desc: "For dedication towards literary and social service.", icon: Medal },
//   { title: "Bhavana Muni Vardhane Award", year: "2013", desc: "For contribution to cultural and literary development.", icon: Star },
//   { title: "Markandeya Recognition Award", year: "2016", desc: "For excellence in Kannada literary works.", icon: Award },
//   { title: "Bharatiya Sahitya Award", year: "2011", desc: "For contribution to Indian literature.", icon: BookOpen },
//   { title: "R. V. Devaraja Seva Pratishthana Award", year: "2017", desc: "For service in literature and social upliftment.", icon: Medal },
//   { title: "Kannada Sirigandha Award", year: "2015", desc: "For promoting Kannada language and culture.", icon: Star },
//   { title: "Kannada Seva Ratna Award", year: "2016", desc: "For outstanding service to Kannada community.", icon: Trophy },
//   { title: "Karnataka Yuva Sahitya Shri Award", year: "2008", desc: "For excellence in young literary contributions.", icon: BookOpen },
//   { title: "World Literary Award – Kannada Sangha, Toronto, Canada", year: "2019", desc: "For global recognition in Kannada literature.", icon: Globe },
// ];

// const AwardsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="awards" className="section-padding bg-background relative overflow-hidden" ref={ref}>
//       <div className="container mx-auto relative z-10">

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             style={{ color: "#8a5e00", fontWeight: 700 }}
//             className="uppercase text-sm mb-2 tracking-[0.2em]"
//           >
//             Recognition
//           </motion.p>

//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold"
//             style={{ color: "#1a0f07" }}
//           >
//             Awards &amp; <span style={{ color: "#8a5e00" }}>Honours</span>
//           </h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 mx-auto mt-4 origin-center"
//             style={{ backgroundColor: "#8a5e00" }}
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {awards.map((award, i) => (
//             <motion.div
//               key={award.title}
//               initial={{ opacity: 0, y: 50, rotateX: 20 }}
//               animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               className="group relative rounded-xl p-6 text-center transition-all duration-500"
//               style={{
//                 backgroundColor: "rgba(138,94,0,0.05)",
//                 border: "1px solid rgba(138,94,0,0.20)",
//               }}
//             >
//               <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                 style={{ backgroundColor: "rgba(138,94,0,0.05)" }} />

//               <div className="relative z-10">
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
//                   className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
//                   style={{ backgroundColor: "rgba(138,94,0,0.10)", border: "1px solid rgba(138,94,0,0.30)" }}
//                 >
//                   <award.icon size={28} style={{ color: "#8a5e00" }} />
//                 </motion.div>

//                 <h3
//                   className="font-heading font-semibold text-base mb-1 leading-snug"
//                   style={{ color: "#1a0f07" }}
//                 >
//                   {award.title}
//                 </h3>

//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : {}}
//                   transition={{ delay: 0.7 + i * 0.1 }}
//                   className="text-sm font-bold mb-3"
//                   style={{ color: "#8a5e00" }}
//                 >
//                   {award.year}
//                 </motion.p>

//                 <p className="text-sm leading-relaxed" style={{ color: "#3d2410" }}>
//                   {award.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;














// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const awards = [
//   { title: "Kendra Sahitya Akademi Award", desc: "For outstanding contribution to Kannada literature.", icon: "trophy" },
//   { title: "Karnataka Jnanpith State Award", desc: "For excellence in Kannada literary achievements.", icon: "star" },
//   { title: "Karnataka Pampa Award", desc: "For lifetime contribution to Kannada literature.", icon: "medal" },
//   { title: "Pampa Award", desc: "Highest literary honour by Karnataka Government.", icon: "award" },
//   { title: "Padma Bhushan Award", desc: "For distinguished service in literature and education.", icon: "trophy" },
//   { title: "Vrittidaya Sadhaka Award", desc: "For dedication towards literary and social service.", icon: "medal" },
//   { title: "Bhavana Muni Vardhane Award", desc: "For contribution to cultural and literary development.", icon: "star" },
//   { title: "Markandeya Recognition Award", desc: "For excellence in Kannada literary works.", icon: "award" },
//   { title: "Bharatiya Sahitya Award", desc: "For contribution to Indian literature.", icon: "book" },
//   { title: "R. V. Devaraja Seva Pratishthana Award", desc: "For service in literature and social upliftment.", icon: "medal" },
//   { title: "Kannada Sirigandha Award", desc: "For promoting Kannada language and culture.", icon: "star" },
//   { title: "Kannada Seva Ratna Award", desc: "For outstanding service to Kannada community.", icon: "trophy" },
//   { title: "Karnataka Yuva Sahitya Shri Award", desc: "For excellence in young literary contributions.", icon: "book" },
//   { title: "World Literary Award – Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: "globe" },
// ];

// const iconPaths = {
//   trophy: (
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 38 }}>
//       <path d="M10 6h20v14a10 10 0 01-20 0V6z" fill="#c8973a" opacity="0.18" stroke="#8a5e00" strokeWidth="1.5" strokeLinejoin="round"/>
//       <path d="M10 10H6a4 4 0 004 4" stroke="#8a5e00" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M30 10h4a4 4 0 01-4 4" stroke="#8a5e00" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M20 20v6" stroke="#8a5e00" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M14 34h12" stroke="#8a5e00" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M17 26h6v4a3 3 0 01-6 0v-4z" fill="#c8973a" opacity="0.3" stroke="#8a5e00" strokeWidth="1.5"/>
//       <path d="M17 8l1.5 3 3.5.5-2.5 2.5.5 3.5L20 16l-3.5 2 .5-3.5L14.5 12l3.5-.5L17 8z" fill="#8a5e00" opacity="0.7"/>
//     </svg>
//   ),
//   star: (
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 38 }}>
//       <polygon points="20,5 23.5,14.5 34,14.5 25.5,21 28.5,31 20,25 11.5,31 14.5,21 6,14.5 16.5,14.5" fill="#c8973a" opacity="0.22" stroke="#8a5e00" strokeWidth="1.5" strokeLinejoin="round"/>
//       <polygon points="20,9 22.5,16 30,16 24,20.5 26.5,28 20,23.5 13.5,28 16,20.5 10,16 17.5,16" fill="#8a5e00" opacity="0.55"/>
//     </svg>
//   ),
//   medal: (
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 38 }}>
//       <path d="M15 5l-4 9" stroke="#8a5e00" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M25 5l4 9" stroke="#8a5e00" strokeWidth="1.5" strokeLinecap="round"/>
//       <circle cx="20" cy="26" r="10" fill="#c8973a" opacity="0.18" stroke="#8a5e00" strokeWidth="1.5"/>
//       <circle cx="20" cy="26" r="6.5" fill="#c8973a" opacity="0.3" stroke="#8a5e00" strokeWidth="1"/>
//       <path d="M20 21.5l1.2 3.6 3.8.2-3 2.3 1 3.7-3-2-3 2 1-3.7-3-2.3 3.8-.2z" fill="#8a5e00" opacity="0.7"/>
//     </svg>
//   ),
//   award: (
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 38 }}>
//       <circle cx="20" cy="16" r="11" fill="#c8973a" opacity="0.18" stroke="#8a5e00" strokeWidth="1.5"/>
//       <path d="M14 25l-3 10 9-5 9 5-3-10" fill="#c8973a" opacity="0.28" stroke="#8a5e00" strokeWidth="1.5" strokeLinejoin="round"/>
//       <circle cx="20" cy="16" r="7" fill="#c8973a" opacity="0.3" stroke="#8a5e00" strokeWidth="1"/>
//       <path d="M20 11l1.5 4.5L26 16l-3.5 3 1 4.5-3.5-2.5-3.5 2.5 1-4.5L14 16l4.5-.5z" fill="#8a5e00" opacity="0.7"/>
//     </svg>
//   ),
//   book: (
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 38 }}>
//       <rect x="8" y="7" width="24" height="28" rx="2" fill="#c8973a" opacity="0.18" stroke="#8a5e00" strokeWidth="1.5"/>
//       <path d="M8 7h4v28H8" fill="#c8973a" opacity="0.3" stroke="#8a5e00" strokeWidth="1"/>
//       <line x1="16" y1="14" x2="28" y2="14" stroke="#8a5e00" strokeWidth="1.2" strokeLinecap="round"/>
//       <line x1="16" y1="19" x2="28" y2="19" stroke="#8a5e00" strokeWidth="1.2" strokeLinecap="round"/>
//       <line x1="16" y1="24" x2="24" y2="24" stroke="#8a5e00" strokeWidth="1.2" strokeLinecap="round"/>
//       <path d="M20 28l2 3 2-3" stroke="#8a5e00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   ),
//   globe: (
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 38 }}>
//       <circle cx="20" cy="20" r="13" fill="#c8973a" opacity="0.18" stroke="#8a5e00" strokeWidth="1.5"/>
//       <ellipse cx="20" cy="20" rx="6" ry="13" fill="none" stroke="#8a5e00" strokeWidth="1.2"/>
//       <line x1="7" y1="20" x2="33" y2="20" stroke="#8a5e00" strokeWidth="1.2"/>
//       <path d="M9 14h22M9 26h22" stroke="#8a5e00" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
//     </svg>
//   ),
// };

// const AwardsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="awards" className="section-padding bg-background relative overflow-hidden" ref={ref}>
//       <div className="container mx-auto relative z-10">

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             style={{ color: "#8a5e00", fontWeight: 700 }}
//             className="uppercase text-sm mb-2 tracking-[0.2em]"
//           >
//             Recognition
//           </motion.p>

//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold"
//             style={{ color: "#1a0f07" }}
//           >
//             Awards &amp; <span style={{ color: "#8a5e00" }}>Honours</span>
//           </h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 mx-auto mt-4 origin-center"
//             style={{ backgroundColor: "#8a5e00" }}
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {awards.map((award, i) => (
//             <motion.div
//               key={award.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{ y: -8, transition: { duration: 0.25 } }}
//               className="group relative rounded-2xl p-6 text-center transition-all duration-300"
//               style={{
//                 background: "linear-gradient(145deg, rgba(200,151,58,0.07) 0%, rgba(138,94,0,0.03) 100%)",
//                 border: "1px solid rgba(138,94,0,0.18)",
//                 boxShadow: "0 2px 16px 0 rgba(138,94,0,0.04)",
//               }}
//             >
//               {/* Hover shimmer layer */}
//               <div
//                 className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
//                 style={{ background: "linear-gradient(145deg, rgba(200,151,58,0.13) 0%, rgba(138,94,0,0.06) 100%)" }}
//               />

//               <div className="relative z-10 flex flex-col items-center">
//                 {/* Icon container — decorative ring */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -30 }}
//                   animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.35 + i * 0.08, type: "spring", stiffness: 180, damping: 14 }}
//                   className="mb-5 relative flex items-center justify-center"
//                   style={{
//                     width: 72,
//                     height: 72,
//                     borderRadius: "50%",
//                     background: "rgba(200,151,58,0.10)",
//                     border: "1.5px solid rgba(138,94,0,0.22)",
//                     boxShadow: "0 0 0 6px rgba(200,151,58,0.06)",
//                   }}
//                 >
//                   {iconPaths[award.icon]}
//                 </motion.div>

//                 {/* Subtle gold divider line below icon */}
//                 <div
//                   className="w-8 h-px mb-4 rounded-full"
//                   style={{ background: "linear-gradient(90deg, transparent, #8a5e00, transparent)", opacity: 0.4 }}
//                 />

//                 <h3
//                   className="font-heading font-semibold text-sm leading-snug mb-2"
//                   style={{ color: "#1a0f07" }}
//                 >
//                   {award.title}
//                 </h3>

//                 <p className="text-xs leading-relaxed mt-1" style={{ color: "#6b4010", opacity: 0.85 }}>
//                   {award.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;









// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import awardImg from "@/assets/award.jpeg";
// import {
//   Trophy,
//   Star,
//   Medal,
//   Award,
//   BookOpen,
//   Globe,
//   ShieldCheck,
//   Sparkles,
//   ChevronRight,
//   Crown,
//   Heart,
// } from "lucide-react";
// import Header from "@/components/Header";

// // ========================
// // AWARDS DATA (14 prestigious recognitions)
// // ========================
// const awards = [
//   { title: "Central Government Sanman Award", desc: "For outstanding contribution to Kannada literature.", icon: Trophy },
//   { title: "Karnataka Bhushan State Award", desc: "For excellence in Kannada literary achievements.", icon: Star },
//   { title: "Karnataka 'Ekalavya Shri' Award", desc: "For lifetime contribution to Kannada literature.", icon: Medal },
//   { title: "Pamparatna Award", desc: "Highest literary honour by Karnataka Government.", icon: Award },
//   { title: "Nekara Ratna Award", desc: "For distinguished service in literature and education.", icon: ShieldCheck },
//   { title: "Hometown Achievement Award", desc: "For dedication towards literary and social service.", icon: Heart },
//   { title: "Bhavana Rishi Padma Peetha Award", desc: "For contribution to cultural and literary development.", icon: Sparkles },
//   { title: "Markandeya Gurupeeth Award", desc: "For excellence in Kannada literary works.", icon: Crown },
//   { title: "Indian 'Sahityasree' Award", desc: "For contribution to Indian literature.", icon: BookOpen },
//   { title: "R. V. Devaraja Seva Foundation Award", desc: "For service in literature and social upliftment.", icon: Globe },
//   { title: "Kannada Sirigandha Award", desc: "For promoting Kannada language and culture.", icon: Trophy },
//   { title: "Kannada Seva Ratna Award", desc: "For outstanding service to Kannada community.", icon: Medal },
//   { title: "Kannada Yuva Sahitya Shri Award", desc: "For excellence in young literary contributions.", icon: BookOpen },
//   { title: "Vishwa Sahitya Shri Award – Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: Globe },
// ];

// const GOLD = "#C8A45D";
// const GOLD_DARK = "#A57C3C";
// const SOFT_GOLD_BG = "rgba(200,164,93,0.06)";

// // Helper: animated number for stats
// const AnimatedNumber = ({ value }: { value: number }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });
//   return (
//     <motion.span
//       ref={ref}
//       initial={{ opacity: 0, y: 10 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       style={{ display: "inline-block" }}
//     >
//       {isInView ? value : 0}
//     </motion.span>
//   );
// };

// export default function AwardsSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         background: "#FFFFFF",
//         fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif",
//         padding: "80px 0 120px",
//         minHeight: "100vh",
//         position: "relative",
//         overflowX: "hidden",
//       }}
//     >
//       {/* subtle animated background pattern */}
//       <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
//         <div style={{ position: "absolute", top: "10%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,164,93,0.03) 0%, rgba(200,164,93,0) 70%)" }} />
//         <div style={{ position: "absolute", bottom: "5%", left: "-3%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,164,93,0.02) 0%, rgba(200,164,93,0) 70%)" }} />
//       </div>

//       {/* main container */}
//       <div
//         style={{
//           maxWidth: 1400,
//           margin: "0 auto",
//           padding: "0 32px",
//           display: "flex",
//           gap: 64,
//           alignItems: "flex-start",
//           flexWrap: "wrap",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {/* ========= LEFT SIDE - FIXED IMAGE FRAME (as per screenshot specification) ========= */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.25, 0.1, 0.1, 1] }}
//           style={{
//             flex: 1.2,
//             minWidth: 280,
//             position: "relative",
//           }}
//         >
//           {/* Decorative outer rings - elegant frame effect */}
//           <div
//             style={{
//               position: "absolute",
//               top: -20,
//               left: -20,
//               width: 120,
//               height: 120,
//               border: `2px solid ${GOLD}`,
//               borderRadius: "50%",
//               opacity: 0.2,
//               pointerEvents: "none",
//               zIndex: 0,
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: -20,
//               right: -20,
//               width: 90,
//               height: 90,
//               border: `2px solid ${GOLD}`,
//               borderRadius: "50%",
//               opacity: 0.2,
//               pointerEvents: "none",
//               zIndex: 0,
//             }}
//           />
          
//           {/* Corner decorative accents - premium frame look */}
//           <div style={{ position: "absolute", top: -8, left: -8, width: 40, height: 40, borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
//           <div style={{ position: "absolute", top: -8, right: -8, width: 40, height: 40, borderTop: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
//           <div style={{ position: "absolute", bottom: -8, left: -8, width: 40, height: 40, borderBottom: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
//           <div style={{ position: "absolute", bottom: -8, right: -8, width: 40, height: 40, borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />

//           {/* main image container with elegant frame and shadow */}
//           <motion.div
//             whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
//             style={{
//               position: "relative",
//               borderRadius: 28,
//               overflow: "hidden",
//               boxShadow: "0 30px 50px -20px rgba(0,0,0,0.3), 0 0 0 1px rgba(200,164,93,0.3)",
//               transition: "box-shadow 0.3s ease",
//             }}
//           >
//             {/* 
//               ====================================================
//               IMPORTANT: Replace this image URL with your actual 
//               award ceremony photo of Dr. K. G. Lakshmi Narayanappa
//               ====================================================
//             */}
//             <img
//               // src="https://placehold.co/900x1100/f5f0e8/C8A45D?text=Dr.+K.+G.+Lakshmi+Narayanappa%0A%F0%9F%8F%86+Award+Ceremony+%F0%9F%8F%86&font=playfair"
             
             
//                src={awardImg}
             
//               alt="Dr. K. G. Lakshmi Narayanappa receiving award - literary excellence ceremony"
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 display: "block",
//                 objectFit: "cover",
//                 aspectRatio: "4/5",
//                 filter: "brightness(0.98) contrast(1.02)",
//               }}
//             />
//             {/* gold gradient overlay for richness */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "linear-gradient(145deg, rgba(200,164,93,0.1) 0%, rgba(0,0,0,0.1) 100%)",
//                 pointerEvents: "none",
//               }}
//             />
//             {/* elegant badge on image */}
//             <div style={{ 
//               position: "absolute", 
//               bottom: 20, 
//               right: 20, 
//               background: "rgba(255,255,255,0.85)", 
//               backdropFilter: "blur(8px)", 
//               borderRadius: 40, 
//               padding: "6px 16px", 
//               fontSize: 11, 
//               fontWeight: 600, 
//               color: GOLD_DARK, 
//               letterSpacing: "0.5px", 
//               fontFamily: "'Inter', sans-serif",
//               border: `1px solid ${GOLD}40`,
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
//             }}>
//               ✦ Literary Legend ✦
//             </div>
//           </motion.div>

//           {/* caption with elegant line */}
//           <motion.p
//             initial={{ opacity: 0, y: 8 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.25, duration: 0.5 }}
//             style={{
//               marginTop: 24,
//               textAlign: "center",
//               fontSize: 12,
//               letterSpacing: "0.25em",
//               fontFamily: "'Inter', sans-serif",
//               color: GOLD,
//               textTransform: "uppercase",
//               fontWeight: 400,
//             }}
//           >
//             — Prestigious Moments —
//           </motion.p>

//           {/* stat block with awards count + years */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             style={{
//               marginTop: 28,
//               display: "flex",
//               justifyContent: "center",
//               gap: 28,
//               background: SOFT_GOLD_BG,
//               borderRadius: 80,
//               padding: "12px 28px",
//               border: `1px solid rgba(200,164,93,0.25)`,
//               backdropFilter: "blur(2px)",
//             }}
//           >
          
            
//           </motion.div>
//         </motion.div>

//         {/* ========= RIGHT SIDE - AWARDS LIST (BOLD RECOGNITION HEADER) ========= */}
//         <div style={{ flex: 1.8, minWidth: 380 }}>
//           {/* Header with Dr. K. G. Lakshmi Narayanappa in bold and Recognition & Honours bold */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             style={{ marginBottom: 48 }}
//           >
//             {/* name line - BOLD as requested */}
//             <p
//               style={{
//                 fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//                 fontSize: 14,
//                 letterSpacing: "0.2em",
//                 color: "#5a4a2a",
//                 textTransform: "uppercase",
//                 fontWeight: 800,
//                 marginBottom: 8,
//               }}
//             >
//               Dr. K. G. Lakshmi Narayanappa
//             </p>

//             {/* Recognition & Honours - BOLD (as requested) */}
//             <p
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//                 fontSize: 13,
//                 letterSpacing: "0.28em",
//                 color: GOLD,
//                 textTransform: "uppercase",
//                 fontWeight: 800,
//                 marginBottom: 18,
//                 background: "linear-gradient(135deg, #C8A45D 0%, #B58E48 100%)",
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 color : "transparent",
//                 display: "inline-block",
//               }}
//             >
//               RECOGNITION &amp; HONOURS
//             </p>

//             {/* main title with animation */}
//             <h2
//               style={{
//                 fontSize: "clamp(42px, 6vw, 58px)",
//                 fontWeight: 500,
//                 color: "#121212",
//                 margin: "0 0 18px",
//                 lineHeight: 1.12,
//                 letterSpacing: "-0.02em",
//                 fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               }}
//             >
//               Awards &amp;{" "}
//               <span style={{ color: GOLD, fontWeight: 700, borderBottom: `2px solid ${GOLD}40`, display: "inline-block" }}>
//                 Achievements
//               </span>
//             </h2>

//             {/* Decorative divider with gold animation */}
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={isInView ? { width: 70 } : {}}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//                 style={{ height: 2, background: `linear-gradient(90deg, ${GOLD}, rgba(200,164,93,0.3))` }}
//               />
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ duration: 0.4, delay: 0.45 }}
//                 style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD }}
//               />
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={isInView ? { width: 50 } : {}}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//                 style={{ height: 1, background: `linear-gradient(90deg, ${GOLD}, rgba(200,164,93,0.1))` }}
//               />
//             </div>

//             {/* Subtitle */}
//             <p
//               style={{
//                 marginTop: 16,
//                 fontSize: 15,
//                 lineHeight: 1.55,
//                 color: "#4a4a4a",
//                 fontFamily: "'Inter', sans-serif",
//                 maxWidth: "92%",
//                 fontWeight: 400,
//               }}
//             >
//               A distinguished journey spanning decades of literary excellence,
//               recognized by national and international institutions. Each honour reflects deep contribution to Kannada literature and cultural renaissance.
//             </p>
//           </motion.div>

//           {/* Awards Scrollable List */}
//           <div
//             style={{
//               maxHeight: "calc(100vh - 330px)",
//               overflowY: "auto",
//               paddingRight: 8,
//               scrollbarWidth: "thin",
//               scrollbarColor: `${GOLD} #e2e2e2`,
//             }}
//             className="custom-scroll"
//           >
//             {awards.map((award, idx) => {
//               const Icon = award.icon;
//               return (
                
//                 <motion.div
//                   key={award.title}
//                   initial={{ opacity: 0, x: -22 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.45, delay: 0.05 + idx * 0.035 }}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 18,
//                     padding: "18px 14px 18px 0",
//                     borderBottom: "1px solid rgba(200, 164, 93, 0.12)",
//                     cursor: "default",
//                     transition: "all 0.2s ease",
//                     borderRadius: 12,
//                     marginBottom: 2,
//                   }}
//                   whileHover={{
//                     backgroundColor: "rgba(200,164,93,0.05)",
//                     paddingLeft: 8,
//                     borderRadius: 16,
//                     transition: { duration: 0.2 },
//                   }}
//                 >
//                   {/* Index number with gold accent */}
//                   <span
//                     style={{
//                       fontFamily: "'Inter', monospace",
//                       fontSize: 13,
//                       fontWeight: 600,
//                       color: GOLD,
//                       minWidth: 36,
//                       textAlign: "right",
//                       letterSpacing: "0.5px",
//                     }}
//                   >
//                     {String(idx + 1).padStart(2, "0")}
//                   </span>

//                   {/* Icon circle */}
//                   <motion.div
//                     whileHover={{ scale: 1.05, borderColor: GOLD }}
//                     style={{
//                       width: 46,
//                       height: 46,
//                       borderRadius: "50%",
//                       background: `linear-gradient(135deg, rgba(200,164,93,0.1) 0%, rgba(200,164,93,0.02) 100%)`,
//                       border: `1px solid rgba(200,164,93,0.25)`,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                       transition: "all 0.2s",
//                     }}
//                   >
//                     <Icon size={19} color={GOLD} strokeWidth={1.6} />
//                   </motion.div>

//                   {/* Title + description */}
//                   <div style={{ flex: 1 }}>
//                     <p
//                       style={{
//                         margin: 0,
//                         fontSize: 16.5,
//                         fontWeight: 600,
//                         color: "#1a1a1a",
//                         lineHeight: 1.3,
//                         letterSpacing: "-0.2px",
//                       }}
//                     >
//                       {award.title}
//                     </p>
//                     <p
//                       style={{
//                         margin: "6px 0 0",
//                         fontSize: 12.5,
//                         color: "#6f6f6f",
//                         fontFamily: "'Inter', sans-serif",
//                         fontWeight: 400,
//                         lineHeight: 1.4,
//                       }}
//                     >
//                       {award.desc}
//                     </p>
//                   </div>

//                   <ChevronRight
//                     size={15}
//                     color={GOLD}
//                     style={{ opacity: 0.3, transition: "opacity 0.2s" }}
//                     className="chevron-icon"
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Footer badge with "A Journey of Literary Excellence" */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 1.1, duration: 0.6 }}
//             style={{ textAlign: "center", marginTop: 48 }}
//           >
//             <div
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 14,
//                 padding: "12px 28px",
//                 borderRadius: 100,
//                 background: "#FDF9F2",
//                 border: `1px solid rgba(200,164,93,0.3)`,
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
//               }}
//             >
//               <span
//                 style={{
//                   width: 6,
//                   height: 6,
//                   borderRadius: "50%",
//                   backgroundColor: GOLD,
//                   display: "inline-block",
//                 }}
//               />
//               <span
//                 style={{
//                   fontSize: 11,
//                   letterSpacing: "0.25em",
//                   fontFamily: "'Inter', sans-serif",
//                   color: GOLD_DARK,
//                   textTransform: "uppercase",
//                   fontWeight: 700,
//                 }}
//               >
//                 A Journey of Literary Excellence
//               </span>
//               <span
//                 style={{
//                   width: 6,
//                   height: 6,
//                   borderRadius: "50%",
//                   backgroundColor: GOLD,
//                   display: "inline-block",
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* custom styles for scroll & chevron hover */}
//       <style>{`
//         .custom-scroll::-webkit-scrollbar {
//           width: 5px;
//         }
//         .custom-scroll::-webkit-scrollbar-track {
//           background: #f0ede8;
//           border-radius: 8px;
//         }
//         .custom-scroll::-webkit-scrollbar-thumb {
//           background: #C8A45D;
//           border-radius: 8px;
//         }
//         .chevron-icon {
//           opacity: 0.3;
//           transition: opacity 0.2s ease, transform 0.2s;
//         }
//         div:hover > .chevron-icon {
//           opacity: 0.8;
//           transform: translateX(3px);
//         }
//         @keyframes softGlow {
//           0% { box-shadow: 0 0 0 0 rgba(200,164,93,0.1); }
//           100% { box-shadow: 0 0 0 8px rgba(200,164,93,0); }
//         }
//         img {
//           transition: transform 0.5s ease;
//         }
//         img:hover {
//           transform: scale(1.02);
//         }
//       `}</style>
//     </section>
//   );
// }












// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import awardImg from "@/assets/award.jpeg";
// import awardImg2 from "@/assets/award2.jpeg";
// import {
//   Trophy,
//   Star,
//   Medal,
//   Award,
//   BookOpen,
//   Globe,
//   ShieldCheck,
//   Sparkles,
//   ChevronRight,
//   Crown,
//   Heart,
// } from "lucide-react";
// import Header from "@/components/Header";

// const awards = [
//   { title: "Central Government Sanman Award", desc: "For outstanding contribution to Kannada literature.", icon: Trophy },
//   { title: "Karnataka Bhushan State Award", desc: "For excellence in Kannada literary achievements.", icon: Star },
//   { title: "Karnataka 'Ekalavya Shri' Award", desc: "For lifetime contribution to Kannada literature.", icon: Medal },
//   { title: "Pamparatna Award", desc: "Highest literary honour by Karnataka Government.", icon: Award },
//   { title: "Nekara Ratna Award", desc: "For distinguished service in literature and education.", icon: ShieldCheck },
//   { title: "Hometown Achievement Award", desc: "For dedication towards literary and social service.", icon: Heart },
//   { title: "Bhavana Rishi Padma Peetha Award", desc: "For contribution to cultural and literary development.", icon: Sparkles },
//   { title: "Markandeya Gurupeeth Award", desc: "For excellence in Kannada literary works.", icon: Crown },
//   { title: "Indian 'Sahityasree' Award", desc: "For contribution to Indian literature.", icon: BookOpen },
//   { title: "R. V. Devaraja Seva Foundation Award", desc: "For service in literature and social upliftment.", icon: Globe },
//   { title: "Kannada Sirigandha Award", desc: "For promoting Kannada language and culture.", icon: Trophy },
//   { title: "Kannada Seva Ratna Award", desc: "For outstanding service to Kannada community.", icon: Medal },
//   { title: "Kannada Yuva Sahitya Shri Award", desc: "For excellence in young literary contributions.", icon: BookOpen },
//   { title: "Vishwa Sahitya Shri Award – Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: Globe },
// ];

// const GOLD = "#C8A45D";
// const GOLD_DARK = "#A57C3C";
// const SOFT_GOLD_BG = "rgba(200,164,93,0.06)";

// export default function AwardsSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   return (
//     <>
//       <Header />

//       <section
//         ref={sectionRef}
//         style={{
//           background: "#FFFFFF",
//           fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif",
//           padding: "80px 0 120px",
//           minHeight: "100vh",
//           position: "relative",
//           overflowX: "hidden",
//         }}
//       >
//         {/* subtle background pattern */}
//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
//           <div style={{ position: "absolute", top: "10%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,164,93,0.03) 0%, rgba(200,164,93,0) 70%)" }} />
//           <div style={{ position: "absolute", bottom: "5%", left: "-3%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,164,93,0.02) 0%, rgba(200,164,93,0) 70%)" }} />
//         </div>

//         <div
//           style={{
//             maxWidth: 1400,
//             margin: "0 auto",
//             padding: "0 32px",
//             display: "flex",
//             gap: 64,
//             alignItems: "flex-start",
//             flexWrap: "wrap",
//             position: "relative",
//             zIndex: 2,
//           }}
//         >
//           {/* ===== LEFT SIDE - TWO AWARD IMAGES ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.25, 0.1, 0.1, 1] }}
//             style={{
//               flex: 1.2,
//               minWidth: 280,
//               position: "relative",
//               display: "flex",
//               flexDirection: "column",
//               gap: 24,
//             }}
//           >
//             {/* Decorative rings */}
//             <div style={{ position: "absolute", top: -20, left: -20, width: 120, height: 120, border: `2px solid ${GOLD}`, borderRadius: "50%", opacity: 0.2, pointerEvents: "none", zIndex: 0 }} />
//             <div style={{ position: "absolute", bottom: -20, right: -20, width: 90, height: 90, border: `2px solid ${GOLD}`, borderRadius: "50%", opacity: 0.2, pointerEvents: "none", zIndex: 0 }} />

//             {/* Corner accents */}
//             <div style={{ position: "absolute", top: -8, left: -8, width: 40, height: 40, borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
//             <div style={{ position: "absolute", top: -8, right: -8, width: 40, height: 40, borderTop: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
//             <div style={{ position: "absolute", bottom: -8, left: -8, width: 40, height: 40, borderBottom: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
//             <div style={{ position: "absolute", bottom: -8, right: -8, width: 40, height: 40, borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />

//             {/* First Award Image */}
//             <motion.div
//               whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
//               style={{
//                 position: "relative",
//                 borderRadius: 28,
//                 overflow: "hidden",
//                 boxShadow: "0 30px 50px -20px rgba(0,0,0,0.3), 0 0 0 1px rgba(200,164,93,0.3)",
//               }}
//             >
//               <img
//                 src={awardImg}
//                 alt="Dr. K. G. Lakshmi Narayanappa receiving award"
//                 style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", aspectRatio: "4/5", filter: "brightness(0.98) contrast(1.02)" }}
//               />
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, rgba(200,164,93,0.1) 0%, rgba(0,0,0,0.1) 100%)", pointerEvents: "none" }} />
//               <div style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 40, padding: "6px 16px", fontSize: 11, fontWeight: 600, color: GOLD_DARK, letterSpacing: "0.5px", border: `1px solid ${GOLD}40` }}>
//                 ✦ Literary Legend ✦
//               </div>
//             </motion.div>

            

//             {/* Caption */}
//             <motion.p
//               initial={{ opacity: 0, y: 8 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.25, duration: 0.5 }}
//               style={{ marginTop: 8, textAlign: "center", fontSize: 12, letterSpacing: "0.25em", fontFamily: "'Inter', sans-serif", color: GOLD, textTransform: "uppercase", fontWeight: 400 }}
//             >
//               — Prestigious Moments —
//             </motion.p>

//             {/* Stat block placeholder */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               style={{ display: "flex", justifyContent: "center", gap: 28, background: SOFT_GOLD_BG, borderRadius: 80, padding: "12px 28px", border: `1px solid rgba(200,164,93,0.25)` }}
//             />
//           </motion.div>

//           {/* ===== RIGHT SIDE - AWARDS LIST ===== */}
//           <div style={{ flex: 1.8, minWidth: 380 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               style={{ marginBottom: 48 }}
//             >
//               <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, letterSpacing: "0.2em", color: "#5a4a2a", textTransform: "uppercase", fontWeight: 800, marginBottom: 8 }}>
//                 Dr. K. G. Lakshmi Narayanappa
//               </p>
//               <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 800, marginBottom: 18, background: "linear-gradient(135deg, #C8A45D 0%, #B58E48 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", display: "inline-block" }}>
//                 RECOGNITION &amp; HONOURS
//               </p>

//               <h2 style={{ fontSize: "clamp(42px, 6vw, 58px)", fontWeight: 500, color: "#121212", margin: "0 0 18px", lineHeight: 1.12, letterSpacing: "-0.02em", fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
//                 Awards &amp;{" "}
//                 <span style={{ color: GOLD, fontWeight: 700, borderBottom: `2px solid ${GOLD}40`, display: "inline-block" }}>Achievements</span>
//               </h2>

//               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
//                 <motion.div initial={{ width: 0 }} animate={isInView ? { width: 70 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ height: 2, background: `linear-gradient(90deg, ${GOLD}, rgba(200,164,93,0.3))` }} />
//                 <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.45 }} style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD }} />
//                 <motion.div initial={{ width: 0 }} animate={isInView ? { width: 50 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ height: 1, background: `linear-gradient(90deg, ${GOLD}, rgba(200,164,93,0.1))` }} />
//               </div>

             
//             </motion.div>

//             {/* Awards List */}
//             <div style={{ maxHeight: "calc(100vh - 330px)", overflowY: "auto", paddingRight: 8, scrollbarWidth: "thin", scrollbarColor: `${GOLD} #e2e2e2` }} className="custom-scroll">
//               {awards.map((award, idx) => {
//                 const Icon = award.icon;
//                 return (
//                   <motion.div
//                     key={award.title}
//                     initial={{ opacity: 0, x: -22 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.45, delay: 0.05 + idx * 0.035 }}
//                     style={{ display: "flex", alignItems: "center", gap: 18, padding: "18px 14px 18px 0", borderBottom: "1px solid rgba(200, 164, 93, 0.12)", cursor: "default", transition: "all 0.2s ease", borderRadius: 12, marginBottom: 2 }}
//                     whileHover={{ backgroundColor: "rgba(200,164,93,0.05)", paddingLeft: 8, borderRadius: 16, transition: { duration: 0.2 } }}
//                   >
//                     <span style={{ fontFamily: "'Inter', monospace", fontSize: 13, fontWeight: 600, color: GOLD, minWidth: 36, textAlign: "right", letterSpacing: "0.5px" }}>
//                       {String(idx + 1).padStart(2, "0")}
//                     </span>
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg, rgba(200,164,93,0.1) 0%, rgba(200,164,93,0.02) 100%)", border: "1px solid rgba(200,164,93,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
//                     >
//                       <Icon size={19} color={GOLD} strokeWidth={1.6} />
//                     </motion.div>
//                     <div style={{ flex: 1 }}>
//                       <p style={{ margin: 0, fontSize: 16.5, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3, letterSpacing: "-0.2px" }}>{award.title}</p>
//                       <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "#6f6f6f", fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.4 }}>{award.desc}</p>
//                     </div>
//                     <ChevronRight size={15} color={GOLD} style={{ opacity: 0.3, transition: "opacity 0.2s" }} className="chevron-icon" />
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Footer badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 1.1, duration: 0.6 }}
//               style={{ textAlign: "center", marginTop: 48 }}
//             >
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "12px 28px", borderRadius: 100, background: "#FDF9F2", border: `1px solid rgba(200,164,93,0.3)` }}>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
//                 <span style={{ fontSize: 11, letterSpacing: "0.25em", fontFamily: "'Inter', sans-serif", color: GOLD_DARK, textTransform: "uppercase", fontWeight: 700 }}>
//                   A Journey of Literary Excellence
//                 </span>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <style>{`
//           .custom-scroll::-webkit-scrollbar { width: 5px; }
//           .custom-scroll::-webkit-scrollbar-track { background: #f0ede8; border-radius: 8px; }
//           .custom-scroll::-webkit-scrollbar-thumb { background: #C8A45D; border-radius: 8px; }
//           .chevron-icon { opacity: 0.3; transition: opacity 0.2s ease, transform 0.2s; }
//           div:hover > .chevron-icon { opacity: 0.8; transform: translateX(3px); }
//         `}</style>
//       </section>
//     </>
//   );
// }

















import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import awardImg from "@/assets/award.jpeg";
import awardImg2 from "@/assets/award2.jpeg";
import {
  Trophy,
  Star,
  Medal,
  Award,
  BookOpen,
  Globe,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Crown,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";

const awards = [
  { kannada: "ಕೇಂದ್ರ ಸರಕಾರದ 'ಸನ್ಮಾನ' ಪ್ರಶಸ್ತಿ", title: "Central Government 'Sanman' Prashasti", desc: "For outstanding contribution to Kannada literature.", icon: Trophy },
  { kannada: "ಕರ್ನಾಟಕ ಭೂಷಣರಾಜ್ಯ ಪ್ರಶಸ್ತಿ", title: "Karnataka Bhooshana Rajya Prashasti", desc: "For excellence in Kannada literary achievements.", icon: Star },
  { kannada: "ಕರ್ನಾಟಕ 'ಏಕಲವ್ಯ ಶ್ರೀ' ಪ್ರಶಸ್ತಿ", title: "Karnataka 'Ekalavya Shree' Prashasti", desc: "For lifetime contribution to Kannada literature.", icon: Medal },
  { kannada: "ಪದ್ಮರತ್ನ ಪ್ರಶಸ್ತಿ", title: "Padma ratna Prashasti", desc: "Highest literary honour by Karnataka Government.", icon: Award },
  { kannada: "ನೇಕಾರರತ್ನ ಪ್ರಶಸ್ತಿ", title: "Nekararatna Prashasti", desc: "For distinguished service in literature and education.", icon: ShieldCheck },
  { kannada: "ಹುಟ್ಟೂರು ಸಾಧಕ ಪ್ರಶಸ್ತಿ", title: "Hutturu Sadhaka Prashasti", desc: "For dedication towards literary and social service.", icon: Heart },
  { kannada: "ಭಾವನಾ ಋಷಿ ಪದ್ಮಪೀಠ ಪ್ರಶಸ್ತಿ", title: "Bhavana Rushi Padya Peeta Prashasti", desc: "For contribution to cultural and literary development.", icon: Sparkles },
  { kannada: "ಮಾರ್ಕಾಂಡೇಯ ಗುರುಪೀಠ ಪ್ರಶಸ್ತಿ", title: "Markandeya GuruPeeta Prashasti", desc: "For excellence in Kannada literary works.", icon: Crown },
  { kannada: "ಭಾರತೀಯ 'ಸಾಹಿತ್ಯಶ್ರೀ' ಪ್ರಶಸ್ತಿ", title: "Bharatiya 'Sahitya Shree' Prashasti", desc: "For contribution to Indian literature.", icon: BookOpen },
  { kannada: "ಆರ್. ವಿ. ದೇವರಾಜ್ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ ಪ್ರಶಸ್ತಿ", title: "R.V. Devaraja Seva Pratisthana Prashasti", desc: "For service in literature and social upliftment.", icon: Globe },
  { kannada: "ಕನ್ನಡ ಸಿರಿಗಂಧ ಪ್ರಶಸ್ತಿ", title: "Kannada Sirigandha Prashasti", desc: "For promoting Kannada language and culture.", icon: Trophy },
  { kannada: "ಕನ್ನಡ ಸೇವಾರತ್ನ ಪ್ರಶಸ್ತಿ", title: "Kannada Sevaratna Prashasti", desc: "For outstanding service to Kannada community.", icon: Medal },
  { kannada: "ಕರ್ನಾಟಕ ಯುವ ಸಾಹಿತ್ಯ ಶ್ರೀ ಪ್ರಶಸ್ತಿ", title: "Karnataka Yuva Sahitya Shree Prashasti", desc: "For excellence in young literary contributions.", icon: BookOpen },
  { kannada: "'ವಿಶ್ವ ಸಾಹಿತ್ಯಶ್ರೀ ಪ್ರಶಸ್ತಿ' — ಕನ್ನಡ ಸಂಘ, ಟೊರೆಂಟೊ, ಕೆನಡಾ", title: "Vishwa Sahitya Shree Prashasti' — Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: Globe },
];

const GOLD = "#C8A45D";
const GOLD_DARK = "#A57C3C";
const SOFT_GOLD_BG = "rgba(200,164,93,0.06)";

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header />

      <section
        ref={sectionRef}
        style={{
          background: "#FFFFFF",
          fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif",
          padding: "80px 0 120px",
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* subtle background pattern */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
          <div style={{ position: "absolute", top: "10%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,164,93,0.03) 0%, rgba(200,164,93,0) 70%)" }} />
          <div style={{ position: "absolute", bottom: "5%", left: "-3%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,164,93,0.02) 0%, rgba(200,164,93,0) 70%)" }} />
        </div>

        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            gap: 64,
            alignItems: "flex-start",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ===== LEFT SIDE - TWO AWARD IMAGES ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.1, 1] }}
            style={{
              flex: 1.2,
              minWidth: 280,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Decorative rings */}
            <div style={{ position: "absolute", top: -20, left: -20, width: 120, height: 120, border: `2px solid ${GOLD}`, borderRadius: "50%", opacity: 0.2, pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: -20, right: -20, width: 90, height: 90, border: `2px solid ${GOLD}`, borderRadius: "50%", opacity: 0.2, pointerEvents: "none", zIndex: 0 }} />

            {/* Corner accents */}
            <div style={{ position: "absolute", top: -8, left: -8, width: 40, height: 40, borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", top: -8, right: -8, width: 40, height: 40, borderTop: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", bottom: -8, left: -8, width: 40, height: 40, borderBottom: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", bottom: -8, right: -8, width: 40, height: 40, borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}`, pointerEvents: "none", zIndex: 1 }} />

            {/* First Award Image */}
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 30px 50px -20px rgba(0,0,0,0.3), 0 0 0 1px rgba(200,164,93,0.3)",
              }}
            >
              <img
                src={awardImg}
                alt="Dr. K. G. Lakshmi Narayanappa receiving award"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", aspectRatio: "4/5", filter: "brightness(0.98) contrast(1.02)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, rgba(200,164,93,0.1) 0%, rgba(0,0,0,0.1) 100%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 40, padding: "6px 16px", fontSize: 11, fontWeight: 600, color: GOLD_DARK, letterSpacing: "0.5px", border: `1px solid ${GOLD}40` }}>
                ✦ Literary Legend ✦
              </div>
            </motion.div>

            

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{ marginTop: 8, textAlign: "center", fontSize: 12, letterSpacing: "0.25em", fontFamily: "'Inter', sans-serif", color: GOLD, textTransform: "uppercase", fontWeight: 400 }}
            >
              — Prestigious Moments —
            </motion.p>

            {/* Stat block placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ display: "flex", justifyContent: "center", gap: 28, background: SOFT_GOLD_BG, borderRadius: 80, padding: "12px 28px", border: `1px solid rgba(200,164,93,0.25)` }}
            />
          </motion.div>

          {/* ===== RIGHT SIDE - AWARDS LIST ===== */}
          <div style={{ flex: 1.8, minWidth: 380 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ marginBottom: 48 }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, letterSpacing: "0.2em", color: "#5a4a2a", textTransform: "uppercase", fontWeight: 800, marginBottom: 8 }}>
                Dr. K. G. Lakshmi Narayanappa
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 800, marginBottom: 18, background: "linear-gradient(135deg, #C8A45D 0%, #B58E48 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", display: "inline-block" }}>
                RECOGNITION &amp; HONOURS
              </p>

              <h2 style={{ fontSize: "clamp(42px, 6vw, 58px)", fontWeight: 500, color: "#121212", margin: "0 0 18px", lineHeight: 1.12, letterSpacing: "-0.02em", fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
                Awards &amp;{" "}
                <span style={{ color: GOLD, fontWeight: 700, borderBottom: `2px solid ${GOLD}40`, display: "inline-block" }}>Achievements</span>
              </h2>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <motion.div initial={{ width: 0 }} animate={isInView ? { width: 70 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ height: 2, background: `linear-gradient(90deg, ${GOLD}, rgba(200,164,93,0.3))` }} />
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.45 }} style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD }} />
                <motion.div initial={{ width: 0 }} animate={isInView ? { width: 50 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ height: 1, background: `linear-gradient(90deg, ${GOLD}, rgba(200,164,93,0.1))` }} />
              </div>

             
            </motion.div>

            {/* Awards List */}
            <div style={{ maxHeight: "calc(100vh - 330px)", overflowY: "auto", paddingRight: 8, scrollbarWidth: "thin", scrollbarColor: `${GOLD} #e2e2e2` }} className="custom-scroll">
              {awards.map((award, idx) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, x: -22 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.05 + idx * 0.035 }}
                    style={{ display: "flex", alignItems: "center", gap: 18, padding: "18px 14px 18px 0", borderBottom: "1px solid rgba(200, 164, 93, 0.12)", cursor: "default", transition: "all 0.2s ease", borderRadius: 12, marginBottom: 2 }}
                    whileHover={{ backgroundColor: "rgba(200,164,93,0.05)", paddingLeft: 8, borderRadius: 16, transition: { duration: 0.2 } }}
                  >
                    <span style={{ fontFamily: "'Inter', monospace", fontSize: 13, fontWeight: 600, color: GOLD, minWidth: 36, textAlign: "right", letterSpacing: "0.5px" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg, rgba(200,164,93,0.1) 0%, rgba(200,164,93,0.02) 100%)", border: "1px solid rgba(200,164,93,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                    >
                      <Icon size={19} color={GOLD} strokeWidth={1.6} />
                    </motion.div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, letterSpacing: "-0.2px" }}>{award.kannada}</p>
                      <p style={{ margin: "3px 0 0", fontSize: 13, fontWeight: 500, color: GOLD_DARK, lineHeight: 1.3, letterSpacing: "-0.1px" }}>{award.title}</p>
                      <p style={{ margin: "5px 0 0", fontSize: 12.5, color: "#6f6f6f", fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.4 }}>{award.desc}</p>
                    </div>
                    <ChevronRight size={15} color={GOLD} style={{ opacity: 0.3, transition: "opacity 0.2s" }} className="chevron-icon" />
                  </motion.div>
                );
              })}
            </div>

            {/* Footer badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{ textAlign: "center", marginTop: 48 }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "12px 28px", borderRadius: 100, background: "#FDF9F2", border: `1px solid rgba(200,164,93,0.3)` }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
                <span style={{ fontSize: 11, letterSpacing: "0.25em", fontFamily: "'Inter', sans-serif", color: GOLD_DARK, textTransform: "uppercase", fontWeight: 700 }}>
                  A Journey of Literary Excellence
                </span>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          .custom-scroll::-webkit-scrollbar { width: 5px; }
          .custom-scroll::-webkit-scrollbar-track { background: #f0ede8; border-radius: 8px; }
          .custom-scroll::-webkit-scrollbar-thumb { background: #C8A45D; border-radius: 8px; }
          .chevron-icon { opacity: 0.3; transition: opacity 0.2s ease, transform 0.2s; }
          div:hover > .chevron-icon { opacity: 0.8; transform: translateX(3px); }
        `}</style>
      </section>
    </>
  );
}