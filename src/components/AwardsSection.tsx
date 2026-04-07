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












import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const awards = [
  { title: "Kendra Sahitya Akademi Award", desc: "For outstanding contribution to Kannada literature.", icon: "trophy" },
  { title: "Karnataka Jnanpith State Award", desc: "For excellence in Kannada literary achievements.", icon: "star" },
  { title: "Karnataka Pampa Award", desc: "For lifetime contribution to Kannada literature.", icon: "medal" },
  { title: "Pampa Award", desc: "Highest literary honour by Karnataka Government.", icon: "award" },
  { title: "Padma Bhushan Award", desc: "For distinguished service in literature and education.", icon: "trophy" },
  { title: "Vrittidaya Sadhaka Award", desc: "For dedication towards literary and social service.", icon: "medal" },
  { title: "Bhavana Muni Vardhane Award", desc: "For contribution to cultural and literary development.", icon: "star" },
  { title: "Markandeya Recognition Award", desc: "For excellence in Kannada literary works.", icon: "award" },
  { title: "Bharatiya Sahitya Award", desc: "For contribution to Indian literature.", icon: "book" },
  { title: "R. V. Devaraja Seva Pratishthana Award", desc: "For service in literature and social upliftment.", icon: "medal" },
  { title: "Kannada Sirigandha Award", desc: "For promoting Kannada language and culture.", icon: "star" },
  { title: "Kannada Seva Ratna Award", desc: "For outstanding service to Kannada community.", icon: "trophy" },
  { title: "Karnataka Yuva Sahitya Shri Award", desc: "For excellence in young literary contributions.", icon: "book" },
  { title: "World Literary Award – Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: "globe" },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="awards" 
      className="py-28 md:py-36 relative"
      style={{ backgroundColor: "#FFFFFF" }}
      ref={ref}
    >
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-50/40 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber-50/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-50/20 blur-3xl" />
        
        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" style={{ minHeight: "100%" }}>
          <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke="#C8A45D" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        {/* Header - Luxury Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Gold decorative line top */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, #C8A45D, #C8A45D, #C8A45D, transparent)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span 
              className="text-xs uppercase tracking-[0.3em] font-light mb-4 inline-block"
              style={{ color: "#C8A45D", letterSpacing: "0.3em" }}
            >
              Legacy of Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6"
            style={{ color: "#1A1A1A" }}
          >
            Awards &{" "}
            <span className="font-semibold relative inline-block">
              Honours
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-2 left-0 right-0 h-0.5 origin-left"
                style={{ backgroundColor: "#C8A45D", transformOrigin: "left" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg max-w-2xl mx-auto font-light"
            style={{ color: "#888888" }}
          >
            Recognized nationally and internationally for exceptional contributions to Kannada literature
          </motion.p>

          {/* Gold decorative line bottom */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-px mx-auto mt-8"
            style={{ background: "linear-gradient(90deg, transparent, #C8A45D, #C8A45D, #C8A45D, transparent)" }}
          />
        </motion.div>

        {/* Premium Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Premium Card */}
              <div 
                className="relative rounded-2xl p-7 transition-all duration-500 h-full flex flex-col"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(200, 164, 93, 0.15)",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Hover Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "0 20px 40px -15px rgba(200, 164, 93, 0.15), inset 0 0 0 1px rgba(200, 164, 93, 0.3)",
                  }}
                />

                {/* Icon Section with Premium Design */}
                <div className="relative mb-6">
                  {/* Animated ring on hover */}
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-full border border-amber-200/50 animate-ping" />
                  </div>
                  
                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      delay: 0.2 + i * 0.05,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #FDF8F2 0%, #FFFFFF 100%)",
                      border: "1.5px solid rgba(200, 164, 93, 0.3)",
                    }}
                  >
                    {/* Icon based on type */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      {award.icon === "trophy" && (
                        <path d="M12 15C8.68629 15 6 12.3137 6 9V3H18V9C18 12.3137 15.3137 15 12 15Z" stroke="#C8A45D" strokeWidth="1.5" fill="none"/>
                      )}
                      {award.icon === "star" && (
                        <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" fill="#C8A45D" opacity="0.9"/>
                      )}
                      {award.icon === "medal" && (
                        <path d="M12 15C9.23858 15 7 12.7614 7 10V4H17V10C17 12.7614 14.7614 15 12 15Z" stroke="#C8A45D" strokeWidth="1.5" fill="none"/>
                      )}
                      {award.icon === "award" && (
                        <circle cx="12" cy="10" r="5" stroke="#C8A45D" strokeWidth="1.5" fill="none"/>
                      )}
                      {award.icon === "book" && (
                        <path d="M4 6H20V18H4V6Z" stroke="#C8A45D" strokeWidth="1.5" fill="none"/>
                      )}
                      {award.icon === "globe" && (
                        <circle cx="12" cy="12" r="8" stroke="#C8A45D" strokeWidth="1.5" fill="none"/>
                      )}
                      {(award.icon === "trophy" || award.icon === "star" || award.icon === "medal" || award.icon === "award" || award.icon === "book" || award.icon === "globe") && null}
                    </svg>
                  </motion.div>
                </div>

                {/* Gold Accent Line */}
                <div className="flex justify-center mb-5">
                  <div className="w-8 h-px rounded-full transition-all duration-300 group-hover:w-12" style={{ backgroundColor: "#C8A45D", opacity: 0.5 }} />
                </div>

                {/* Title */}
                <h3 
                  className="font-serif text-base font-medium text-center mb-2 transition-colors duration-300 group-hover:text-amber-700 leading-tight"
                  style={{ color: "#2C2C2C" }}
                >
                  {award.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-center leading-relaxed font-light" style={{ color: "#999999" }}>
                  {award.desc}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M0 12L12 0M12 12L0 0" stroke="#C8A45D" strokeWidth="0.5" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-20 pt-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ backgroundColor: "#FDF8F2" }}>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C8A45D" }} />
            <span className="text-xs tracking-wide font-light" style={{ color: "#C8A45D", letterSpacing: "0.1em" }}>
              A JOURNEY OF LITERARY EXCELLENCE
            </span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C8A45D" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;