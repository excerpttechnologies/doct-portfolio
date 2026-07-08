// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { BookMarked, ExternalLink, FileText, GraduationCap } from "lucide-react";

// const publications = [
//   {
//     category: "Research Papers",
//     icon: GraduationCap,
//     items: [
//       { title: "The Evolution of Vachana Literature in Modern Kannada", journal: "Indian Journal of Literary Studies", year: "", doi: "10.xxxx/ijls.2019.045" },
//       { title: "Folk Narratives and Their Socio-Political Undercurrents", journal: "South Asian Literature Review", year: "", doi: "10.xxxx/salr.2016.102" },
//       { title: "Language Policy and Cultural Identity in Post-Independence Karnataka", journal: "Journal of Indian Public Administration", year: "", doi: "10.xxxx/jipa.2012.033" },
//     ],
//   },
//   {
//     category: "Edited Volumes",
//     icon: BookMarked,
//     items: [
//       { title: "Voices of the Deccan: An Anthology of Modern Kannada Poetry", journal: "Oxford University Press India", year: "", doi: "" },
//       { title: "Governance, Ethics and Society: Essays in Honour of Dr. H. Narasimhaiah", journal: "Sahitya Akademi", year: "", doi: "" },
//     ],
//   },
//   {
//     category: "Critical Essays",
//     icon: FileText,
//     items: [
//       { title: "Kuvempu and the Modernist Tradition", journal: "Prajavani Literary Supplement", year: "", doi: "" },
//       { title: "The Aesthetics of Silence in D. R. Bendre's Poetry", journal: "Kannada Sahitya Parishat Journal", year: "", doi: "" },
//       { title: "Administrative Literature: A New Genre?", journal: "Deccan Herald Sunday Magazine", year: "", doi: "" },
//     ],
//   },
// ];

// const PublicationsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

//   return (
//     <section id="publications" className="section-padding bg-background relative" ref={ref}>
//       <div className="container mx-auto">
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
//             Academic Work
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Research & <span className="text-gold">Publications</span>
//           </h2>
//         </motion.div>

//         <div className="space-y-12">
//           {publications.map((group, gi) => (
//             <motion.div
//               key={group.category}
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
//             >
//               {/* Category header */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
//                 className="flex items-center gap-3 mb-6"
//               >
//                 <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
//                   <group.icon size={18} className="text-gold" />
//                 </div>
//                 <h3 className="font-heading font-semibold text-xl text-foreground">{group.category}</h3>
//                 <div className="flex-1 h-px bg-border" />
//               </motion.div>

//               {/* Items */}
//               <div className="space-y-3 pl-4 md:pl-12">
//                 {group.items.map((item, ii) => (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, y: 20, x: -10 }}
//                     animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
//                     transition={{ duration: 0.5, delay: 0.5 + gi * 0.2 + ii * 0.1 }}
//                     whileHover={{ x: 8, transition: { duration: 0.2 } }}
//                     className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border"
//                   >
//                     <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
//                     <div className="flex-1">
//                       <h4 className="font-medium text-foreground group-hover:text-gold transition-colors leading-snug">
//                         {item.title}
//                       </h4>
//                       <p className="text-muted-foreground text-sm mt-1">
//                         {item.journal} · <span className="text-gold">{item.year}</span>
//                       </p>
//                     </div>
//                     {item.doi && (
//                       <ExternalLink size={14} className="text-muted-foreground group-hover:text-gold transition-colors mt-1 flex-shrink-0" />
//                     )}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PublicationsSection;


// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { BookMarked, ExternalLink, FileText, GraduationCap, Star } from "lucide-react";

// const publications = [
//   {
//     category: "Books on Temple Heritage",
//     icon: GraduationCap,
//     items: [
//       { title: "ದೇವರಾಯನದುರ್ಗ ದಿವ್ಯದರ್ಶನ (Devarayanadurga Divyadarshana)", journal: "Tumkur District Temple Heritage", year: "", doi: "" },
//       { title: "ತುಮಕೂರು ಜಿಲ್ಲಾ ದೇವಾಲಯಗಳು (Tumkuru Zilla Devalayagalu)", journal: "Tumkur District Temples", year: "", doi: "" },
//       { title: "ಶ್ರೀಕ್ಷೇತ್ರ ಶಿವಗಂಗೆ (Shrikashetra Shivagange)", journal: "Temple Kshetra Series", year: "", doi: "" },
//       { title: "ಮಹಾಲಕ್ಷ್ಮೀ ಕ್ಷೇತ್ರ ಗೊರವನಹಳ್ಳಿ (Mahalakshmi Kshetra Goravanalli)", journal: "Temple Kshetra Series", year: "", doi: "" },
//       { title: "ಶ್ರೀಕ್ಷೇತ್ರ ಸಿದ್ಧರಬೆಟ್ಟ (Shrikashetra Siddharabetta)", journal: "Temple Kshetra Series", year: "", doi: "" },
//       { title: "ಶ್ರೀ ಕಾಮಾಕ್ಷಿ ಶಾರದಾಂಬ, ಹೆಬ್ಬೂರು (Sri Kamakshi Sharadamba, Hebburu)", journal: "Temple Kshetra Series", year: "", doi: "" },
//       { title: "ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯ (Vidyashankara Devalaya)", journal: "Temple Heritage", year: "", doi: "" },
//       { title: "ಸಿದ್ಧಗಂಗಾ ಮಹಾಕ್ಷೇತ್ರ (Siddhaganga Mahakshetra)", journal: "Temple Kshetra Series", year: "", doi: "" },
//     ],
//   },
//   {
//     category: "Research & Historical Works",
//     icon: BookMarked,
//     items: [
//       { title: "ಪದ್ಶಾಲಿ ಇತಿಹಾಸ ಸಂಶೋಧನಾ ಗ್ರಂಥ (Padshali Itihasa Samshodhana Grantha)", journal: "Historical Research Volume", year: "", doi: "" },
//       { title: "ನೇಕಾರ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಚರಿತ್ರೆ (Nekara Sanskriti mattu Charitre)", journal: "Cultural History", year: "", doi: "" },
//       { title: "ಕೊಡಿಯಾಲ ಪದ್ಶಾಲಿ ಇತಿಹಾಸ ಸಂಸ್ಕೃತಿ (Kodiyala Padshali Itihasa Sanskriti)", journal: "Cultural History Series", year: "", doi: "" },
//       { title: "History & Culture of Traditional Weavers of South India", journal: "Ph.D. Thesis — American University", year: "", doi: "" },
//     ],
//   },
//   {
//     category: "Literary Works (Poetry & Essays)",
//     icon: FileText,
//     items: [
//       { title: "'ನನ್ನ ಮನ, ನನ್ನ ಜನ' ಲೇಖನ ಸಂಗ್ರಹ ('Nanna Mana, Nanna Jana' Essay Collection)", journal: "Kannada Essays", year: "", doi: "" },
//       { title: "'ಬೆಳ್ಳಿ ಬಟ್ಟಲು' ಕವನ ಸಂಕಲನ ('Belli Battalu' Poetry Collection)", journal: "Kannada Poetry", year: "", doi: "" },
//       { title: "'ನೆನಪಿನ ಹುತುಗಳಲ್ಲಿ' ಕವನ ಸಂಕಲನ ('Nenapin Hutugalalli' Poetry Collection)", journal: "Kannada Poetry", year: "", doi: "" },
//       { title: "ಕನ್ನಡ ವ್ಯಾಕರಣ, ಸಂಗ್ರಹ (Kannada Vyakarana, Sangraha)", journal: "Kannada Grammar & Language", year: "", doi: "" },
//     ],
//   },
// ];

// const awards = [
//   "Central Government 'Sanman' Award",
//   "Karnataka Bhooshana Rajya Prashasti",
//   "Karnataka 'Ekalavya Shree' Prashasti",
//   "Paddaratna Prashasti",
//   "Nekararatna Prashasti",
//   "Putturu Sadhaka Prashasti",
//   "Bhavana Rushi Padyakeeta Prashasti",
//   "Markandeya Gurushita Prashasti",
//   "Bharatiya 'Sahitya Shree' Prashasti",
//   "R.V. Devaraja Seva Pratishthana Prashasti",
//   "Kannada Sirigandha Prashasti",
//   "Kannada Sevaratna Prashasti",
//   "Karnataka Yuva Sahitya Shree Prashasti",
//   "'Vishwa Sahitya Shree Prashasti' — Kannada Sangha, Toronto, Canada",
// ];

// const PublicationsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

//   return (
//     <section id="publications" className="section-padding bg-background relative" ref={ref}>
//       <div className="container mx-auto">
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
//             Academic Work
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Research & <span className="text-gold">Publications</span>
//           </h2>
//         </motion.div>

//         {/* Publications */}
//         <div className="space-y-12">
//           {publications.map((group, gi) => (
//             <motion.div
//               key={group.category}
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
//             >
//               {/* Category header */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
//                 className="flex items-center gap-3 mb-6"
//               >
//                 <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
//                   <group.icon size={18} className="text-gold" />
//                 </div>
//                 <h3 className="font-heading font-semibold text-xl text-foreground">{group.category}</h3>
//                 <div className="flex-1 h-px bg-border" />
//               </motion.div>

//               {/* Items */}
//               <div className="space-y-3 pl-4 md:pl-12">
//                 {group.items.map((item, ii) => (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, y: 20, x: -10 }}
//                     animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
//                     transition={{ duration: 0.5, delay: 0.5 + gi * 0.2 + ii * 0.1 }}
//                     whileHover={{ x: 8, transition: { duration: 0.2 } }}
//                     className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border"
//                   >
//                     <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
//                     <div className="flex-1">
//                       <h4 className="font-medium text-foreground group-hover:text-gold transition-colors leading-snug">
//                         {item.title}
//                       </h4>
//                       <p className="text-muted-foreground text-sm mt-1">
//                         {item.journal} {item.year && <span>· <span className="text-gold">{item.year}</span></span>}
//                       </p>
//                     </div>
//                     {item.doi && (
//                       <ExternalLink size={14} className="text-muted-foreground group-hover:text-gold transition-colors mt-1 flex-shrink-0" />
//                     )}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Awards & Recognitions */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mt-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.9 }}
//             className="flex items-center gap-3 mb-6"
//           >
//             <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
//               <Star size={18} className="text-gold" />
//             </div>
//             <h3 className="font-heading font-semibold text-xl text-foreground">Awards & Honours</h3>
//             <div className="flex-1 h-px bg-border" />
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4 md:pl-12">
//             {awards.map((award, i) => (
//               <motion.div
//                 key={award}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.4, delay: 1.0 + i * 0.06 }}
//                 whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//                 className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-gold/40 hover:bg-muted/40 transition-all"
//               >
//                 <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
//                 <p className="text-sm text-foreground leading-snug">{award}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PublicationsSection;

















import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BookMarked, ExternalLink, FileText, GraduationCap, Star } from "lucide-react";

const publications = [
  {
    category: "Books on Temple Heritage",
    icon: GraduationCap,
    items: [
      { title: "ದೇವರಾಯನದುರ್ಗ ದಿವ್ಯದರ್ಶನ (Devarayanadurga Divyadarshana)", journal: "Tumkur District Temple Heritage", year: "", doi: "" },
      { title: "ತುಮಕೂರು ಜಿಲ್ಲಾ ದೇವಾಲಯಗಳು (Tumkuru Zilla Devalayagalu)", journal: "Tumkur District Temples", year: "", doi: "" },
      { title: "ಶ್ರೀಕ್ಷೇತ್ರ ಶಿವಗಂಗೆ (Shrikashetra Shivagange)", journal: "Temple Kshetra Series", year: "", doi: "" },
      { title: "ಮಹಾಲಕ್ಷ್ಮೀ ಕ್ಷೇತ್ರ ಗೊರವನಹಳ್ಳಿ (Mahalakshmi Kshetra Goravanalli)", journal: "Temple Kshetra Series", year: "", doi: "" },
      { title: "ಶ್ರೀಕ್ಷೇತ್ರ ಸಿದ್ಧರಬೆಟ್ಟ (Shrikashetra Siddharabetta)", journal: "Temple Kshetra Series", year: "", doi: "" },
      { title: "ಶ್ರೀ ಕಾಮಾಕ್ಷಿ ಶಾರದಾಂಬ, ಹೆಬ್ಬೂರು (Sri Kamakshi Sharadamba, Hebburu)", journal: "Temple Kshetra Series", year: "", doi: "" },
      { title: "ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯ (Vidyashankara Devalaya)", journal: "Temple Heritage", year: "", doi: "" },
      { title: "ಸಿದ್ಧಗಂಗಾ ಮಹಾಕ್ಷೇತ್ರ (Siddhaganga Mahakshetra)", journal: "Temple Kshetra Series", year: "", doi: "" },
    ],
  },
  {
    category: "Research & Historical Works",
    icon: BookMarked,
    items: [
      { title: "ಪದ್ಶಾಲಿ ಇತಿಹಾಸ ಸಂಶೋಧನಾ ಗ್ರಂಥ (Padshali Itihasa Samshodhana Grantha)", journal: "Historical Research Volume", year: "", doi: "" },
      { title: "ನೇಕಾರ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಚರಿತ್ರೆ (Nekara Sanskriti mattu Charitre)", journal: "Cultural History", year: "", doi: "" },
      { title: "ಕೊಡಿಯಾಲ ಪದ್ಶಾಲಿ ಇತಿಹಾಸ ಸಂಸ್ಕೃತಿ (Kodiyala Padshali Itihasa Sanskriti)", journal: "Cultural History Series", year: "", doi: "" },
      { title: "History & Culture of Traditional Weavers of South India", journal: "Ph.D. Thesis — American University", year: "", doi: "" },
    ],
  },
  {
    category: "Literary Works (Poetry & Essays)",
    icon: FileText,
    items: [
      { title: "'ನನ್ನ ಮನ, ನನ್ನ ಜನ' ಲೇಖನ ಸಂಗ್ರಹ ('Nanna Mana, Nanna Jana' Essay Collection)", journal: "Kannada Essays", year: "", doi: "" },
      { title: "'ಬೆಳ್ಳಿ ಬಟ್ಟಲು' ಕವನ ಸಂಕಲನ ('Belli Battalu' Poetry Collection)", journal: "Kannada Poetry", year: "", doi: "" },
      { title: "'ನೆನಪಿನ ಹುತುಗಳಲ್ಲಿ' ಕವನ ಸಂಕಲನ ('Nenapin Hutugalalli' Poetry Collection)", journal: "Kannada Poetry", year: "", doi: "" },
      { title: "ಕನ್ನಡ ವ್ಯಾಕರಣ, ಸಂಗ್ರಹ (Kannada Vyakarana, Sangraha)", journal: "Kannada Grammar & Language", year: "", doi: "" },
    ],
  },
];

const awards = [
  { kannada: "ಕೇಂದ್ರ ಸರಕಾರದ 'ಸನ್ಮಾನ' ಪ್ರಶಸ್ತಿ", english: "Central Government 'Sanman' Prashasti" },
  { kannada: "ಕರ್ನಾಟಕ ಭೂಷಣ ರಾಜ್ಯ ಪ್ರಶಸ್ತಿ", english: "Karnataka Bhooshana Rajya Prashasti" },
  { kannada: "ಕರ್ನಾಟಕ 'ಏಕಲವ್ಯ ಶ್ರೀ' ಪ್ರಶಸ್ತಿ", english: "Karnataka 'Ekalavya Shree' Prashasti" },
  { kannada: "ಪದ್ಮರತ್ನ ಪ್ರಶಸ್ತಿ", english: "Padmaratna Prashasti" },
  { kannada: "ನೇಕಾರರತ್ನ ಪ್ರಶಸ್ತಿ", english: "Nekararatna Prashasti" },
  { kannada: "ಹುಟ್ಟೂರು ಸಾಧಕ ಪ್ರಶಸ್ತಿ", english: "Hutturu Sadhaka Prashasti" },
  { kannada: "ಭಾವನಾ ಋಷಿ ಪದ್ಮಪೀಠ ಪ್ರಶಸ್ತಿ", english: "Bhavana Rushi Padya Peeta Prashasti" },
  { kannada: "ಮಾರ್ಕಂಡೇಯ ಗುರುಪೀಠ ಪ್ರಶಸ್ತಿ", english: "Markandeya GuruPeeta Prashasti" },
  { kannada: "ಭಾರತೀಯ 'ಸಾಹಿತ್ಯಶ್ರೀ' ಪ್ರಶಸ್ತಿ", english: "Bharatiya 'Sahitya Shree' Prashasti" },
  { kannada: "ಆರ್. ವಿ. ದೇವರಾಜ್ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ ಪ್ರಶಸ್ತಿ", english: "R.V. Devaraja Seva Pratisthana Prashasti" },
  { kannada: "ಕನ್ನಡ ಸಿರಿಗಂಧ ಪ್ರಶಸ್ತಿ", english: "Kannada Sirigandha Prashasti" },
  { kannada: "ಕನ್ನಡ ಸೇವಾರತ್ನ ಪ್ರಶಸ್ತಿ", english: "Kannada Sevaratna Prashasti" },
  { kannada: "ಕರ್ನಾಟಕ ಯುವ ಸಾಹಿತ್ಯ ಶ್ರೀ ಪ್ರಶಸ್ತಿ", english: "Karnataka Yuva Sahitya Shree Prashasti" },
  { kannada: "'ವಿಶ್ವ ಸಾಹಿತ್ಯಶ್ರೀ ಪ್ರಶಸ್ತಿ' — ಕನ್ನಡ ಸಂಘ, ಟೊರೆಂಟೊ, ಕೆನಡಾ", english: "'Vishwa Sahitya Shree Prashasti' — Kannada Sangha, Toronto, Canada" },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="publications" className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold uppercase text-sm font-medium mb-2"
          >
            Academic Work
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Research & <span className="text-gold">Publications</span>
          </h2>
        </motion.div>

        {/* Publications */}
        <div className="space-y-12">
          {publications.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
            >
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <group.icon size={18} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">{group.category}</h3>
                <div className="flex-1 h-px bg-border" />
              </motion.div>

              {/* Items */}
              <div className="space-y-3 pl-4 md:pl-12">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20, x: -10 }}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + gi * 0.2 + ii * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-gold transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.journal} {item.year && <span>· <span className="text-gold">{item.year}</span></span>}
                      </p>
                    </div>
                    {item.doi && (
                      <ExternalLink size={14} className="text-muted-foreground group-hover:text-gold transition-colors mt-1 flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
              <Star size={18} className="text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">Awards & Honours</h3>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4 md:pl-12">
            {awards.map((award, i) => (
              <motion.div
                key={award.english}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.06 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-gold/40 hover:bg-muted/40 transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">{award.kannada}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{award.english}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;