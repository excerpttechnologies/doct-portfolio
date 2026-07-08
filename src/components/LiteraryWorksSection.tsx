










// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import Footer from "./Footer";
// import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import bookCover1 from "@/assets/book1.webp";
// import bookCover2 from "@/assets/book2.webp";
// import bookCover3 from "@/assets/book3.webp";
// import bookCover4 from "@/assets/book4.webp";
// import bookCover5 from "@/assets/book5.webp";
// import bookCover6 from "@/assets/book6.webp";

// /* ─────────────────────────────────────────
//    THEME TOKENS — darkened for readability on cream/light backgrounds
// ───────────────────────────────────────── */
// const T = {
//   title:   "#1e2a4a",
//   body:    "#3a3a3a",
//   muted:   "#6b7280",
//   gold:    "#b8860b",
//   goldBg:  "rgba(184,134,11,0.10)",
//   goldBd:  "rgba(184,134,11,0.40)",
//   divider: "rgba(184,134,11,0.35)",
//   cardBg:  "rgba(30,42,74,0.04)",
//   cardBd:  "rgba(184,134,11,0.20)",
// };

// /* ─────────────────────────────────────────
//    DATA
// ───────────────────────────────────────── */
// const tabs = [
//   { id: "books",    label: "Books",    icon: BookOpen },
//   { id: "articles", label: "Articles", icon: FileText },
// ];

// const booksWithCovers = [
//   { kannada: "ದೇವರಾಯನದುರ್ಗ ದಿವ್ಯದರ್ಶನ",          title: "Devarayanadurga Divyadarshan",   year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
//   { kannada: "ತುಮಕೂರು ಜಿಲ್ಲಾ ದೇವಾಲಯಗಳು",            title: "Tumkur District Temples",        year: "", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
//   { kannada: "ನೇಕಾರ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಚರಿತ್ರೆ",          title: "Weaver Culture and History",     year: "", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
//   { kannada: "'ನನ್ನ ಮನ, ನನ್ನ ಜನ' ಲೇಖನ ಸಂಗ್ರಹ",       title: "My Mind, My People",             year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
//   { kannada: "'ಬೆಳ್ಳಿ ಬಟ್ಟಲು' ಕವನ ಸಂಕಲನ",            title: "Silver Bowl (Poetry Collection)", year: "", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
//   { kannada: "'ನೆನಪಿನ ಋತುಗಳಲ್ಲಿ' ಕವನ ಸಂಕಲನ",        title: "Seasons of Memory (Poetry)",     year: "", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
// ];

// const booksWithoutCovers = [
//   { kannada: "ಕನ್ನಡ ವ್ಯಾಕರಣ, ಸಂಗ್ರಹ",                          title: "Kannada Grammar" },
//   { kannada: "ಶ್ರೀಕ್ಷೇತ್ರ ಶಿವಗಂಗೆ",                             title: "Srikshetra Shivagange" },
//   { kannada: "ಮಹಾಲಕ್ಷ್ಮೀ ಕ್ಷೇತ್ರ ಗೊರವನಹಳ್ಳಿ",                   title: "Mahalakshmi Kshetra Goravanahalli" },
//   { kannada: "ಶ್ರೀಕ್ಷೇತ್ರ ಸಿದ್ಧರಬೆಟ್ಟ",                          title: "Srikshetra Sidharbetta" },
//   { kannada: "ಶ್ರೀ ಕಾಮಾಕ್ಷಿ ಶಾರದಾಂಬ, ಹೆಬ್ಬೂರು",                  title: "Sri Kamakshi Sharadamba, Hebbur" },
//   { kannada: "ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯ",                              title: "Vidyashankar Temple" },
//   { kannada: "ಸಿದ್ಧಗಂಗಾ ಮಹಾಕ್ಷೇತ್ರ",                            title: "Siddaganga Mahakshetra" },
//   { kannada: "ಮಿಂಚಕಲ್ ಗೊಲ್ಲಹಳ್ಳಿ ಅಂಜನೇಯಸ್ವಾಮಿ",                 title: "Minchakal Gollahalli Anjaneyaswamy" },
//   { kannada: " ಲಕ್ಷ್ಮೀನರಸಿಂಹಸ್ವಾಮಿ",                         title: "Sheebi Lakshminarasimhaswamy" },
//   { kannada: "ಉದ್ಯಾನ ವೀರಭದ್ರಸ್ವಾಮಿ, ಹಳೆನಿಜಗಲ್ಲು",               title: "Uddhana Veerabhadraswamy, Halenijagallu" },
//   { kannada: "ಶ್ರೀ ಲಕ್ಷ್ಮೀನರಸಿಂಹಸ್ವಾಮಿ, ದೊಡ್ಡದಲವಾಟ್ಟ",           title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu" },
//   { kannada: "ಅರಳುಗುಪ್ಪೆ ಚನ್ನಕೇಶವಸ್ವಾಮಿ",                       title: "Araluguppe Channakesavaswamy" },
//   { kannada: "ಮಲ್ಲಿಕಾರ್ಜುನಸ್ವಾಮಿ, ಪಂಕಜಹಳ್ಳಿ",                   title: "Mallikarjunaswamy, Pankajahalli" },
//   { kannada: "ಯೋಗಮಾಧವಸ್ವಾಮಿ, ಶೆಟ್ಟಿಗೆರೆ",                       title: "Yogamadhavaswamy, Shettigere" },
//   { kannada: "ಕೇದಾರೇಶ್ವರ ದೇವಾಲಯ, ನಾಗಲಾಪುರ",                    title: "Kedareshwar Temple, Nagalapuram" },
//   { kannada: "ವಿಘ್ನಸಂತೆ ದೇವಾಲಯಗಳು",                            title: "Vighnasante Temples" },
//   { kannada: "ನೊಣವಿನಕೆರೆ ದೇವಾಲಯಗಳು",                           title: "Nonavinakere Temples" },
//   { kannada: "ಕೊಡಿಯಾಲ ಪದ್ಶಾಲಿ ಇತಿಹಾಸ ಸಂಸ್ಕೃತಿ",                title: "Kodiyala Padmashali History and Culture" },
//   { kannada: "History & Culture of Traditional Weavers of South India", title: "History & Culture of Traditional Weavers of South India" },
// ];

// const articles = [
//   { kannada: "ಬದಲಾವಣೆಗೆ ಸಾರ್ವಜನಿಕ ಸ್ಫೂರ್ತಿ",   title: "Public Inspiration for the Change That Is Needed", venue: "", year: "" },
//   { kannada: "ಸುಭೀಕ್ಷ",                         title: "Subheeksha (Prosperity / Well-being)",             venue: "", year: "" },
//   { kannada: "ಇಂಡಿಯಾ ಟುಡೇ",                    title: "India Today",                                      venue: "India Today", year: "" },
//   { kannada: "ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ (ವಿಶೇಷ ಲೇಖನ)", title: "Samyukta Karnataka (Special Article)",             venue: "Samyukta Karnataka", year: "" },
//   { kannada: "ಇ ಸಂಜೆ (ವಿಶೇಷ ವರದಿ)",           title: "E Sanje (Special Report)",                        venue: "E Sanje", year: "" },
//   { kannada: "ವಿಜಯವಾಣಿ ಲೇಖನ",                 title: "Vijayavani Article",                               venue: "Vijayavani", year: "" },
//   { kannada: "ವಿಶೇಷ ಮ್ಯಾಗಜೀನ್ ಲೇಖನ",          title: "Special Magazine Feature Article",                 venue: "Special Magazine", year: "" },
// ];

// /* ─────────────────────────────────────────
//    BOOKSHELF SLIDER
// ───────────────────────────────────────── */
// const BookshelfSlider = () => {
//   const [current, setCurrent] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const timerRef = useRef(null);
//   const TOTAL = booksWithCovers.length;
//   const AUTO_MS = 4000;

//   const goTo = useCallback((idx) => {
//     if (isFlipping) return;
//     setIsFlipping(true);
//     setTimeout(() => { setCurrent(idx); setIsFlipping(false); }, 500);
//   }, [isFlipping]);

//   const next = useCallback(() => goTo((current + 1) % TOTAL), [current, goTo, TOTAL]);
//   const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL), [current, goTo, TOTAL]);

//   useEffect(() => {
//     if (!isPlaying) { clearInterval(timerRef.current); return; }
//     timerRef.current = setInterval(next, AUTO_MS);
//     return () => clearInterval(timerRef.current);
//   }, [isPlaying, next]);

//   const book = booksWithCovers[current];

//   const getStyle = (idx) => {
//     const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
//     const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
//     const abs = Math.abs(normalized);
//     const sign = Math.sign(normalized) || 1;
//     if (abs === 0) return { zIndex: 30, x: "0%",             scale: 1,    opacity: 1,    rotateY: 0,          blur: 0 };
//     if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`,  scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0 };
//     if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5,  rotateY: sign * -35, blur: 1 };
//     return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2 };
//   };

//   const FlowerRangoli = () => (
//     <svg
//       viewBox="0 0 120 120"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ width: 72, height: 72, flexShrink: 0, opacity: 0.82 }}
//     >
//       <g transform="translate(60,60)">
//         {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((deg, i) => (
//           <ellipse key={`o${i}`} cx="0" cy="-32" rx="4" ry="9" fill="#fbd5df" opacity="0.38" transform={`rotate(${deg})`} />
//         ))}
//         {[0,45,90,135,180,225,270,315].map((deg, i) => (
//           <ellipse key={`i${i}`} cx="0" cy="-18" rx="5" ry="10" fill="#f9c8d4" opacity="0.58" transform={`rotate(${deg})`} />
//         ))}
//         {[0,45,90,135,180,225,270,315].map((deg, i) => (
//           <circle
//             key={`d${i}`}
//             cx={Math.round(Math.sin((deg * Math.PI) / 180) * 10)}
//             cy={Math.round(-Math.cos((deg * Math.PI) / 180) * 10)}
//             r="1.2" fill="#f7a8bf" opacity="0.55"
//           />
//         ))}
//         <circle r="6" fill="#f7b6c8" opacity="0.75" />
//         <circle r="3" fill="#fde8ee" opacity="1" />
//       </g>
//     </svg>
//   );

//   return (
//     <>
//     <div className="w-full flex flex-col gap-14">
//       <div
//         className="w-full max-w-5xl mx-auto"
//         style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0 32px" }}
//       >
//         {/* LEFT: book carousel */}
//         <div style={{ display: "flex", justifyContent: "flex-end" }}>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <div
//               className="relative flex items-center justify-center"
//               style={{ width: 420, height: 310, perspective: 1200 }}
//             >
//               {booksWithCovers.map((b, idx) => {
//                 const s = getStyle(idx);
//                 return (
//                   <motion.div
//                     key={b.title}
//                     className="absolute cursor-pointer"
//                     style={{ width: 180, transformStyle: "preserve-3d" }}
//                     animate={{
//                       x: s.x, scale: s.scale, opacity: s.opacity,
//                       rotateY: s.rotateY, filter: `blur(${s.blur}px)`, zIndex: s.zIndex,
//                     }}
//                     transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
//                     onClick={() => { if (idx !== current) goTo(idx); }}
//                   >
//                     <div className="relative" style={{ width: 180, height: 262 }}>
//                       <div
//                         className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
//                         style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }}
//                       />
//                       <div
//                         className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
//                         style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }}
//                       />
//                       <div
//                         className="absolute inset-0 rounded-r-md overflow-hidden"
//                         style={{
//                           boxShadow: idx === current
//                             ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)"
//                             : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 20px rgba(0,0,0,0.2)",
//                         }}
//                       >
//                         <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                         <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.2)" }} />
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* CENTER: flower rangoli */}
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
//           <FlowerRangoli />
//           <div style={{ width: 1, height: 48, background: "rgba(249,200,212,0.45)" }} />
//         </div>

//         {/* RIGHT: book info + nav controls */}
//         <div style={{ display: "flex", justifyContent: "flex-start" }}>
//           <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 380, width: "100%" }}>

//             {/* Book info */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0, x: 28 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -18 }}
//                 transition={{ duration: 0.42 }}
//                 style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}
//               >
//                 {/* Counter */}
//                 <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: T.gold }}>
//                   {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
//                 </p>

//                 {/* Kannada title */}
//                 <h3 className="font-heading font-bold text-xl md:text-2xl leading-tight" style={{ color: T.title, margin: 0 }}>
//                   {book.kannada}
//                 </h3>

//                 {/* English title */}
//                 <p className="text-sm font-semibold tracking-wide" style={{ color: T.gold, margin: 0 }}>
//                   {book.title}
//                 </p>

//                 <div style={{ width: 48, height: 1, background: T.gold }} />

//                 {/* Year badge */}
//                 {book.year && (
//                   <span
//                     className="font-medium text-xs tracking-[0.1em] uppercase inline-block self-start px-3 py-1 rounded-full"
//                     style={{ background: T.goldBg, border: `1px solid ${T.goldBd}`, color: T.gold }}
//                   >
//                     {book.year}
//                   </span>
//                 )}

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed italic" style={{ color: T.body, margin: 0 }}>
//                   {book.desc}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             {/* Nav controls */}
//             <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
//               <button
//                 onClick={prev}
//                 style={{
//                   width: 36, height: 36, borderRadius: "50%", display: "flex",
//                   alignItems: "center", justifyContent: "center", cursor: "pointer",
//                   border: `1px solid ${T.goldBd}`, background: T.goldBg, color: T.gold,
//                   transition: "background 0.2s",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.18)"}
//                 onMouseLeave={e => e.currentTarget.style.background = T.goldBg}
//               >
//                 <ChevronLeft size={16} />
//               </button>

//               <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
//                 {booksWithCovers.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => goTo(i)}
//                     style={{
//                       width: i === current ? 22 : 7, height: 7,
//                       borderRadius: 999, cursor: "pointer", padding: 0,
//                       background: i === current ? T.gold : "rgba(184,134,11,0.30)",
//                       border: `1px solid ${T.goldBd}`,
//                       transition: "all 0.3s",
//                     }}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={next}
//                 style={{
//                   width: 36, height: 36, borderRadius: "50%", display: "flex",
//                   alignItems: "center", justifyContent: "center", cursor: "pointer",
//                   border: `1px solid ${T.goldBd}`, background: T.goldBg, color: T.gold,
//                   transition: "background 0.2s",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.18)"}
//                 onMouseLeave={e => e.currentTarget.style.background = T.goldBg}
//               >
//                 <ChevronRight size={16} />
//               </button>

//               <button
//                 onClick={() => setIsPlaying(p => !p)}
//                 style={{
//                   width: 36, height: 36, borderRadius: "50%", display: "flex",
//                   alignItems: "center", justifyContent: "center", cursor: "pointer",
//                   border: `1px solid rgba(184,134,11,0.25)`,
//                   background: "rgba(184,134,11,0.06)", color: T.gold,
//                   transition: "background 0.2s",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.15)"}
//                 onMouseLeave={e => e.currentTarget.style.background = "rgba(184,134,11,0.06)"}
//               >
//                 {isPlaying ? <Pause size={14} /> : <Play size={14} />}
//               </button>
//             </div>

//             {isPlaying && (
//               <div
//                 style={{
//                   width: 140, height: 2, borderRadius: 999, overflow: "hidden",
//                   background: "rgba(184,134,11,0.15)", marginTop: 10,
//                 }}
//               >
//                 <motion.div
//                   key={`${current}-${isPlaying}`}
//                   style={{ height: "100%", borderRadius: 999, background: T.gold }}
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Also Published */}
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex-1 h-px" style={{ background: T.divider }} />
//           <p className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: T.gold }}>
//             Also Published
//           </p>
//           <div className="flex-1 h-px" style={{ background: T.divider }} />
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
//           {booksWithoutCovers.map((book, i) => (
//             <motion.div
//               key={book.title}
//               initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.03 }}
//               whileHover={{ x: 4 }}
//               className="flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-default transition-all duration-200"
//               style={{ background: "transparent" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.06)"}
//               onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//             >
//               <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: T.gold }} />
//               <div>
//                 <p className="font-heading font-bold text-sm leading-snug tracking-wide transition-colors duration-200 group-hover:text-[#2c3e6b]"
//                   style={{ color: T.title, fontSize: "14px" }}>
//                   {book.kannada}
//                 </p>
//                 {book.kannada !== book.title && (
//                   <p className="text-xs mt-0.5 leading-snug" style={{ color: T.gold }}>
//                     {book.title}
//                   </p>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────
//    ARTICLE CARD
// ───────────────────────────────────────── */
// const ArticleCard = ({ article, index }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     whileHover={{ x: 8, transition: { duration: 0.2 } }}
//     className="flex items-start gap-4 rounded-xl p-5 cursor-pointer group transition-all duration-300"
//     style={{ background: T.cardBg, border: `1px solid ${T.cardBd}` }}
//     onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(184,134,11,0.45)"}
//     onMouseLeave={e => e.currentTarget.style.borderColor = T.cardBd}
//   >
//     <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
//       style={{ background: T.goldBg, border: `1px solid ${T.goldBd}` }}>
//       <FileText size={16} style={{ color: T.gold }} />
//     </div>
//     <div>
//       <h4 className="font-heading font-bold text-sm leading-snug transition-colors duration-300 group-hover:text-[#2c3e6b]"
//         style={{ color: T.title }}>{article.kannada}</h4>
//       <p className="text-xs mt-1 font-semibold" style={{ color: T.gold }}>{article.title}</p>
//       {article.venue && (
//         <p className="text-xs mt-1 font-medium" style={{ color: T.muted }}>{article.venue}</p>
//       )}
//     </div>
//   </motion.div>
// );

// /* ─────────────────────────────────────────
//    MAIN SECTION
// ───────────────────────────────────────── */
// const LiteraryWorksSection = () => {
//   const [activeTab, setActiveTab] = useState("books");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0 });

//   return (
//     <section id="works" ref={ref} className="relative py-24 overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">

//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }} className="text-center mb-14">

//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1.1, delay: 0.2 }}
//             className="text-sm font-medium uppercase tracking-[0.2em] mb-2"
//             style={{ color: T.gold }}
//           >
//             Bibliography
//           </motion.p>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
//             style={{ color: T.title }}>
//             Literary <span style={{ color: T.gold, fontStyle: "italic" }}>Works</span>
//           </h2>

//           <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="w-24 h-0.5 mx-auto origin-center"
//             style={{ background: `linear-gradient(to right, transparent, ${T.gold}, transparent)` }} />
//         </motion.div>

//         {/* Tabs */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center gap-1 mb-14">
//           {tabs.map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300"
//               style={{
//                 color: activeTab === tab.id ? T.gold : T.body,
//                 background: activeTab === tab.id ? T.goldBg : "transparent",
//                 border: `1px solid ${activeTab === tab.id ? T.goldBd : "rgba(184,134,11,0.25)"}`,
//               }}>
//               <tab.icon size={14} />
//               {tab.label}
//               {activeTab === tab.id && (
//                 <motion.div layoutId="tabUnderline" className="absolute -bottom-0.5 left-4 right-4 h-px"
//                   style={{ background: T.gold }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }} />
//               )}
//             </button>
//           ))}
//         </motion.div>

//         {/* Tab Content */}
//         <AnimatePresence mode="wait">
//           {activeTab === "books" && (
//             <motion.div key="books" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
//               <BookshelfSlider />
//             </motion.div>
//           )}
//           {activeTab === "articles" && (
//             <motion.div key="articles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }} className="max-w-2xl mx-auto space-y-3">
//               {articles.map((a, i) => <ArticleCard key={a.title} article={a} index={i} />)}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//     <Footer />
//     </>
//   );
// };

// export default LiteraryWorksSection;
















import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import bookCover1 from "@/assets/book1.webp";
import bookCover2 from "@/assets/book2.webp";
import bookCover3 from "@/assets/book3.webp";
import bookCover4 from "@/assets/book4.webp";
import bookCover5 from "@/assets/book5.webp";
import bookCover6 from "@/assets/book6.webp";

/* ─────────────────────────────────────────
   THEME TOKENS — darkened for readability on cream/light backgrounds
───────────────────────────────────────── */
const T = {
  title:   "#1e2a4a",
  body:    "#3a3a3a",
  muted:   "#6b7280",
  gold:    "#b8860b",
  goldBg:  "rgba(184,134,11,0.10)",
  goldBd:  "rgba(184,134,11,0.40)",
  divider: "rgba(184,134,11,0.35)",
  cardBg:  "rgba(30,42,74,0.04)",
  cardBd:  "rgba(184,134,11,0.20)",
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const tabs = [
  { id: "books",    label: "Books",    icon: BookOpen },
  { id: "articles", label: "Articles", icon: FileText },
];

const booksWithCovers = [
  { kannada: "ದೇವರಾಯನದುರ್ಗ ದಿವ್ಯದರ್ಶನ",          title: "Devarayanadurga Divyadarshan",   year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
  { kannada: "ತುಮಕೂರು ಜಿಲ್ಲಾ ದೇವಾಲಯಗಳು",            title: "Tumkur District Temples",        year: "", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
  { kannada: "ನೇಕಾರ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಚರಿತ್ರೆ",          title: "Weaver Culture and History",     year: "", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
  { kannada: "'ನನ್ನ ಮನ, ನನ್ನ ಜನ' ಲೇಖನ ಸಂಗ್ರಹ",       title: "My Mind, My People",             year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
  { kannada: "'ಬೆಳ್ಳಿ ಬಟ್ಟಲು' ಕವನ ಸಂಕಲನ",            title: "Silver Bowl (Poetry Collection)", year: "", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
  { kannada: "'ನೆನಪಿನ ಋತುಗಳಲ್ಲಿ' ಕವನ ಸಂಕಲನ",        title: "Seasons of Memory (Poetry)",     year: "", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
];

const booksWithoutCovers = [
  { kannada: "ಕನ್ನಡ ವ್ಯಾಕರಣ, ಸಂಗ್ರಹ",                          title: "Kannada Grammar" },
  { kannada: "ಶ್ರೀಕ್ಷೇತ್ರ ಶಿವಗಂಗೆ",                             title: "Srikshetra Shivagange" },
  { kannada: "ಮಹಾಲಕ್ಷ್ಮೀ ಕ್ಷೇತ್ರ ಗೊರವನಹಳ್ಳಿ",                   title: "Mahalakshmi Kshetra Goravanahalli" },
  { kannada: "ಶ್ರೀಕ್ಷೇತ್ರ ಸಿದ್ಧರಬೆಟ್ಟ",                          title: "Srikshetra Sidharbetta" },
  { kannada: "ಶ್ರೀ ಕಾಮಾಕ್ಷಿ ಶಾರದಾಂಬ, ಹೆಬ್ಬೂರು",                  title: "Sri Kamakshi Sharadamba, Hebbur" },
  { kannada: "ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯ",                              title: "Vidyashankar Temple" },
  { kannada: "ಸಿದ್ಧಗಂಗಾ ಮಹಾಕ್ಷೇತ್ರ",                            title: "Siddaganga Mahakshetra" },
  { kannada: "ಮಿಂಚಕಲ್ ಗೊಲ್ಲಹಳ್ಳಿ ಅಂಜನೇಯಸ್ವಾಮಿ",                 title: "Minchakal Gollahalli Anjaneyaswamy" },
  { kannada: "ಲಕ್ಷ್ಮೀನರಸಿಂಹಸ್ವಾಮಿ",                         title: "Sheebi Lakshminarasimhaswamy" },
  { kannada: "ಉದ್ಯಾನ ವೀರಭದ್ರಸ್ವಾಮಿ, ಹಳೆನಿಜಗಲ್ಲು",               title: "Uddhana Veerabhadraswamy, Halenijagallu" },
  { kannada: "ಶ್ರೀ ಲಕ್ಷ್ಮೀನರಸಿಂಹಸ್ವಾಮಿ, ದೊಡ್ಡದಲವಾಟ್ಟ",           title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu" },
  { kannada: "ಅರಳುಗುಪ್ಪೆ ಚನ್ನಕೇಶವಸ್ವಾಮಿ",                       title: "Araluguppe Channakesavaswamy" },
  { kannada: "ಮಲ್ಲಿಕಾರ್ಜುನಸ್ವಾಮಿ, ಪಂಕಜಹಳ್ಳಿ",                   title: "Mallikarjunaswamy, Pankajahalli" },
  { kannada: "ಯೋಗಮಾಧವಸ್ವಾಮಿ, ಶೆಟ್ಟಿಗೆರೆ",                       title: "Yogamadhavaswamy, Shettigere" },
  { kannada: "ಕೇದಾರೇಶ್ವರ ದೇವಾಲಯ, ನಾಗಲಾಪುರ",                    title: "Kedareshwar Temple, Nagalapuram" },
  { kannada: "ವಿಘ್ನಸಂತೆ ದೇವಾಲಯಗಳು",                            title: "Vighnasante Temples" },
  { kannada: "ನೊಣವಿನಕೆರೆ ದೇವಾಲಯಗಳು",                           title: "Nonavinakere Temples" },
  { kannada: "ಕೊಡಿಯಾಲ ಪದ್ಶಾಲಿ ಇತಿಹಾಸ ಸಂಸ್ಕೃತಿ",                title: "Kodiyala Padmashali History and Culture" },
  { kannada: "History & Culture of Traditional Weavers of South India", title: "History & Culture of Traditional Weavers of South India" },
];

const articles = [
  { kannada: "ಬದಲಾವಣೆಗೆ ಸಾರ್ವಜನಿಕ ಸ್ಫೂರ್ತಿ",   title: "Public Inspiration for the Change That Is Needed", venue: "", year: "" },
  { kannada: "ಸುಭೀಕ್ಷ",                         title: "Subheeksha (Prosperity / Well-being)",             venue: "", year: "" },
  { kannada: "ಇಂಡಿಯಾ ಟುಡೇ",                    title: "India Today",                                      venue: "India Today", year: "" },
  { kannada: "ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ (ವಿಶೇಷ ಲೇಖನ)", title: "Samyukta Karnataka (Special Article)",             venue: "Samyukta Karnataka", year: "" },
  { kannada: "ಇ ಸಂಜೆ (ವಿಶೇಷ ವರದಿ)",           title: "E Sanje (Special Report)",                        venue: "E Sanje", year: "" },
  { kannada: "ವಿಜಯವಾಣಿ ಲೇಖನ",                 title: "Vijayavani Article",                               venue: "Vijayavani", year: "" },
  { kannada: "ವಿಶೇಷ ಮ್ಯಾಗಜೀನ್ ಲೇಖನ",          title: "Special Magazine Feature Article",                 venue: "Special Magazine", year: "" },
];

/* ─────────────────────────────────────────
   BOOKSHELF SLIDER
───────────────────────────────────────── */
const BookshelfSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const timerRef = useRef(null);
  const TOTAL = booksWithCovers.length;
  const AUTO_MS = 4000;

  const goTo = useCallback((idx) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => { setCurrent(idx); setIsFlipping(false); }, 500);
  }, [isFlipping]);

  const next = useCallback(() => goTo((current + 1) % TOTAL), [current, goTo, TOTAL]);
  const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL), [current, goTo, TOTAL]);

  useEffect(() => {
    if (!isPlaying) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(next, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, [isPlaying, next]);

  const book = booksWithCovers[current];

  const getStyle = (idx) => {
    const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
    const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
    const abs = Math.abs(normalized);
    const sign = Math.sign(normalized) || 1;
    if (abs === 0) return { zIndex: 30, x: "0%",             scale: 1,    opacity: 1,    rotateY: 0,          blur: 0 };
    if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`,  scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0 };
    if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5,  rotateY: sign * -35, blur: 1 };
    return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2 };
  };

  const FlowerRangoli = () => (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 72, height: 72, flexShrink: 0, opacity: 0.82 }}
    >
      <g transform="translate(60,60)">
        {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((deg, i) => (
          <ellipse key={`o${i}`} cx="0" cy="-32" rx="4" ry="9" fill="#fbd5df" opacity="0.38" transform={`rotate(${deg})`} />
        ))}
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <ellipse key={`i${i}`} cx="0" cy="-18" rx="5" ry="10" fill="#f9c8d4" opacity="0.58" transform={`rotate(${deg})`} />
        ))}
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <circle
            key={`d${i}`}
            cx={Math.round(Math.sin((deg * Math.PI) / 180) * 10)}
            cy={Math.round(-Math.cos((deg * Math.PI) / 180) * 10)}
            r="1.2" fill="#f7a8bf" opacity="0.55"
          />
        ))}
        <circle r="6" fill="#f7b6c8" opacity="0.75" />
        <circle r="3" fill="#fde8ee" opacity="1" />
      </g>
    </svg>
  );

  return (
    <div className="w-full flex flex-col gap-14">
      <div
        className="w-full max-w-5xl mx-auto"
        style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0 32px" }}
      >
        {/* LEFT: book carousel */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              className="relative flex items-center justify-center"
              style={{ width: 420, height: 310, perspective: 1200 }}
            >
              {booksWithCovers.map((b, idx) => {
                const s = getStyle(idx);
                return (
                  <motion.div
                    key={b.title}
                    className="absolute cursor-pointer"
                    style={{ width: 180, transformStyle: "preserve-3d" }}
                    animate={{
                      x: s.x, scale: s.scale, opacity: s.opacity,
                      rotateY: s.rotateY, filter: `blur(${s.blur}px)`, zIndex: s.zIndex,
                    }}
                    transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
                    onClick={() => { if (idx !== current) goTo(idx); }}
                  >
                    <div className="relative" style={{ width: 180, height: 262 }}>
                      <div
                        className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
                        style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }}
                      />
                      <div
                        className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
                        style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }}
                      />
                      <div
                        className="absolute inset-0 rounded-r-md overflow-hidden"
                        style={{
                          boxShadow: idx === current
                            ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)"
                            : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 20px rgba(0,0,0,0.2)",
                        }}
                      >
                        <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.2)" }} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CENTER: flower rangoli */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <FlowerRangoli />
          <div style={{ width: 1, height: 48, background: "rgba(249,200,212,0.45)" }} />
        </div>

        {/* RIGHT: book info + nav controls */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 380, width: "100%" }}>

            {/* Book info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.42 }}
                style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}
              >
                {/* Counter */}
                <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: T.gold }}>
                  {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                </p>

                {/* Kannada title */}
                <h3 className="font-heading font-bold text-xl md:text-2xl leading-tight" style={{ color: T.title, margin: 0 }}>
                  {book.kannada}
                </h3>

                {/* English title */}
                <p className="text-sm font-semibold tracking-wide" style={{ color: T.gold, margin: 0 }}>
                  {book.title}
                </p>

                <div style={{ width: 48, height: 1, background: T.gold }} />

                {/* Year badge */}
                {book.year && (
                  <span
                    className="font-medium text-xs tracking-[0.1em] uppercase inline-block self-start px-3 py-1 rounded-full"
                    style={{ background: T.goldBg, border: `1px solid ${T.goldBd}`, color: T.gold }}
                  >
                    {book.year}
                  </span>
                )}

                {/* Description */}
                <p className="text-sm leading-relaxed italic" style={{ color: T.body, margin: 0 }}>
                  {book.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Nav controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={prev}
                style={{
                  width: 36, height: 36, borderRadius: "50%", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                  border: `1px solid ${T.goldBd}`, background: T.goldBg, color: T.gold,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.18)"}
                onMouseLeave={e => e.currentTarget.style.background = T.goldBg}
              >
                <ChevronLeft size={16} />
              </button>

              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {booksWithCovers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === current ? 22 : 7, height: 7,
                      borderRadius: 999, cursor: "pointer", padding: 0,
                      background: i === current ? T.gold : "rgba(184,134,11,0.30)",
                      border: `1px solid ${T.goldBd}`,
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{
                  width: 36, height: 36, borderRadius: "50%", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                  border: `1px solid ${T.goldBd}`, background: T.goldBg, color: T.gold,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.18)"}
                onMouseLeave={e => e.currentTarget.style.background = T.goldBg}
              >
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => setIsPlaying(p => !p)}
                style={{
                  width: 36, height: 36, borderRadius: "50%", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                  border: `1px solid rgba(184,134,11,0.25)`,
                  background: "rgba(184,134,11,0.06)", color: T.gold,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(184,134,11,0.06)"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>

            {isPlaying && (
              <div
                style={{
                  width: 140, height: 2, borderRadius: 999, overflow: "hidden",
                  background: "rgba(184,134,11,0.15)", marginTop: 10,
                }}
              >
                <motion.div
                  key={`${current}-${isPlaying}`}
                  style={{ height: "100%", borderRadius: 999, background: T.gold }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Also Published */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: T.divider }} />
          <p className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: T.gold }}>
            Also Published
          </p>
          <div className="flex-1 h-px" style={{ background: T.divider }} />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
          {booksWithoutCovers.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-default transition-all duration-200"
              style={{ background: "transparent" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(184,134,11,0.06)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: T.gold }} />
              <div>
                <p className="font-heading font-bold text-sm leading-snug tracking-wide transition-colors duration-200 group-hover:text-[#2c3e6b]"
                  style={{ color: T.title, fontSize: "14px" }}>
                  {book.kannada}
                </p>
                {book.kannada !== book.title && (
                  <p className="text-xs mt-0.5 leading-snug" style={{ color: T.gold }}>
                    {book.title}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────
   ARTICLE CARD
───────────────────────────────────────── */
const ArticleCard = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ x: 8, transition: { duration: 0.2 } }}
    className="flex items-start gap-4 rounded-xl p-5 cursor-pointer group transition-all duration-300"
    style={{ background: T.cardBg, border: `1px solid ${T.cardBd}` }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(184,134,11,0.45)"}
    onMouseLeave={e => e.currentTarget.style.borderColor = T.cardBd}
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: T.goldBg, border: `1px solid ${T.goldBd}` }}>
      <FileText size={16} style={{ color: T.gold }} />
    </div>
    <div>
      <h4 className="font-heading font-bold text-sm leading-snug transition-colors duration-300 group-hover:text-[#2c3e6b]"
        style={{ color: T.title }}>{article.kannada}</h4>
      <p className="text-xs mt-1 font-semibold" style={{ color: T.gold }}>{article.title}</p>
      {article.venue && (
        <p className="text-xs mt-1 font-medium" style={{ color: T.muted }}>{article.venue}</p>
      )}
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
const LiteraryWorksSection = () => {
  const [activeTab, setActiveTab] = useState("books");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
  
      <section id="works" ref={ref} className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }} className="text-center mb-14">

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="text-sm font-medium uppercase tracking-[0.2em] mb-2"
              style={{ color: T.gold }}
            >
              Bibliography
            </motion.p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
              style={{ color: T.title }}>
              Literary <span style={{ color: T.gold, fontStyle: "italic" }}>Works</span>
            </h2>

            <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="w-24 h-0.5 mx-auto origin-center"
              style={{ background: `linear-gradient(to right, transparent, ${T.gold}, transparent)` }} />
          </motion.div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center gap-1 mb-14">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300"
                style={{
                  color: activeTab === tab.id ? T.gold : T.body,
                  background: activeTab === tab.id ? T.goldBg : "transparent",
                  border: `1px solid ${activeTab === tab.id ? T.goldBd : "rgba(184,134,11,0.25)"}`,
                }}>
                <tab.icon size={14} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tabUnderline" className="absolute -bottom-0.5 left-4 right-4 h-px"
                    style={{ background: T.gold }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "books" && (
              <motion.div key="books" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                <BookshelfSlider />
              </motion.div>
            )}
            {activeTab === "articles" && (
              <motion.div key="articles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }} className="max-w-2xl mx-auto space-y-3">
                {articles.map((a, i) => <ArticleCard key={a.title} article={a} index={i} />)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
    
  );
};

export default LiteraryWorksSection;