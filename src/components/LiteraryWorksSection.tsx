// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { BookOpen, FileText, Feather } from "lucide-react";
// import bookCover1 from "@/assets/book1.jpeg";
// import bookCover2 from "@/assets/book2.jpeg";
// import bookCover3 from "@/assets/book3.jpeg";
// import bookCover4 from "@/assets/book4.jpeg";
// import bookCover5 from "@/assets/book5.jpeg";
// import bookCover6 from "@/assets/book6.jpeg";

// const tabs = [
//   { id: "books", label: "Books", icon: BookOpen },
//   { id: "articles", label: "Articles", icon: FileText },
//   { id: "poems", label: "Poems", icon: Feather },
// ];

// const books = [
//   { title: "Devarayanadurga Divyadarshan", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
//   { title: "Tumkur District Temples", year: "2001", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
//   { title: "Governance and the Soul", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
// { title: "Weaver culture and history", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
// { title: "'My Mind, My People' ", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
//   { title: "'Silver Bowl' ", year: "2008", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
  
//   { title: "'Seasons of Memory'", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover4 },
    


// ];


// const booksWithoutCovers = [
//   { title: "Kannada Grammar", year: "2015" },
//   { title: "Srikshetra Shivagange", year: "2015" },
//   { title: "Mahalakshmi Kshetra Goravanahalli", year: "2015" },
//   { title: "Srikshetra Sidharbetta", year: "2015" },
//   { title: "Sri Kamakshi Sharadamba, Hebbar", year: "2015" },
//   { title: "Vidyashankar Temple", year: "2015" },
//   { title: "Siddaganga Mahakshetra", year: "2015" },
//   { title: "Minchakal Gollahalli Anjaneyaswamy", year: "2015" },
//   { title: "Sheebi Lakshminarayana Swamy", year: "2015" },
//   { title: "Uddhana Veerabhadraswamy, Halenijagallu", year: "2015" },
//   { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu", year: "2015" },
//   { title: "Araluguppe Channakesavaswamy", year: "2015" },
//   { title: "Mallikarjunaswamy, Pankajahalli", year: "2015" },
//   { title: "Yogamadhavaswamy, Shettigere", year: "2015" },
//   { title: "Kedareshwar Temple, Nagalapuram", year: "2015" },
//   { title: "Vighnasante Temples", year: "2015" },
//   { title: "Nonavinakere Temples", year: "2015" },
//   { title: "Kodiyala Padmashali History and Culture", year: "2015" },
//   { title: "History & Culture of Traditional Weavers of South India", year: "2015" },
// ];

// const articles = [
//   { title: "The Role of Vernacular Literature in Nation Building", venue: "Indian Literary Review", year: "2010" },
//   { title: "Cultural Policy and Regional Identity", venue: "Karnataka Journal of Public Affairs", year: "2012" },
//   { title: "Language, Identity, and the Modern State", venue: "The Hindu Literary Supplement", year: "2018" },
//   { title: "Preserving Folk Traditions in the Digital Age", venue: "Deccan Herald", year: "2020" },
// ];

// const poems = [
//   { title: "The River Remembers", excerpt: "The river remembers what we forget — / the footsteps of ancestors on wet clay, / the songs that carried across the fields / before silence claimed the horizon." },
//   { title: "Monsoon Letters", excerpt: "Each raindrop is a letter / written by the sky to the parched earth, / a promise renewed, a covenant / older than memory itself." },
//   { title: "The Banyan's Witness", excerpt: "Under the banyan's ancient arms / I learned the patience of roots, / the courage of branches reaching / toward light they may never touch." },
// ];

// const tabContentVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.98 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
//   exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const LiteraryWorksSection = () => {
//   const [activeTab, setActiveTab] = useState("books");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="works" className="section-padding bg-muted/50" ref={ref}>
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-gold uppercase text-sm font-medium mb-2"
//           >
//             Bibliography
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Literary <span className="text-gold">Works</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         {/* Tabs with animated indicator */}
//         <div className="flex justify-center gap-2 mb-12 relative">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`relative flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-all z-10 ${
//                 activeTab === tab.id
//                   ? "text-gold"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               {activeTab === tab.id && (
//                 <motion.div
//                   layoutId="activeTabBg"
//                   className="absolute inset-0 bg-navy rounded-md shadow-lg"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//               <span className="relative z-10 flex items-center gap-2">
//                 <tab.icon size={16} />
//                 {tab.label}
//               </span>
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait">
//           {/* Books Grid */}
//           {activeTab === "books" && (
//             <motion.div
//               key="books"
//               variants={tabContentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid md:grid-cols-3 gap-8"
//             >
//               {books.map((book, i) => (
//                 <motion.div
//                   key={book.title}
//                   variants={itemVariants}
//                   whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                   className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
//                 >
//                   <div className="aspect-[2/3] overflow-hidden relative">
//                     <img
//                       src={book.cover}
//                       alt={book.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       loading="lazy"
//                       width={640}
//                       height={960}
//                     />
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent flex items-end p-6"
//                     >
//                       <p className="text-primary-foreground text-sm leading-relaxed">{book.desc}</p>
//                     </motion.div>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-gold transition-colors">{book.title}</h3>
//                     <p className="text-gold text-sm mt-1">{book.year}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}




//           {/* Articles */}
//           {activeTab === "articles" && (
//             <motion.div
//               key="articles"
//               variants={tabContentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="max-w-2xl mx-auto space-y-4"
//             >
//               {articles.map((article, i) => (
//                 <motion.div
//                   key={article.title}
//                   variants={itemVariants}
//                   whileHover={{ x: 10, transition: { duration: 0.2 } }}
//                   className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gold/20 cursor-pointer"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
//                     <FileText size={18} className="text-gold" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground hover:text-gold transition-colors">{article.title}</h4>
//                     <p className="text-muted-foreground text-sm mt-1">{article.venue} · <span className="text-gold">{article.year}</span></p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}

//           {/* Poems */}
//           {activeTab === "poems" && (
//             <motion.div
//               key="poems"
//               variants={tabContentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid md:grid-cols-3 gap-8"
//             >
//               {poems.map((poem, i) => (
//                 <motion.div
//                   key={poem.title}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
//                   className="bg-navy rounded-xl p-8 text-center group relative overflow-hidden"
//                 >
//                   {/* Animated background gradient */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <div className="relative z-10">
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       whileHover={{ rotate: 15 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Feather size={24} className="text-gold mx-auto mb-4" />
//                     </motion.div>
//                     <h4 className="font-heading text-xl font-semibold text-primary-foreground mb-4 group-hover:text-gold transition-colors">{poem.title}</h4>
//                     <p className="text-primary-foreground/70 italic leading-relaxed text-sm font-light">{poem.excerpt}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default LiteraryWorksSection;

























// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { BookOpen, FileText, Feather } from "lucide-react";
// import bookCover1 from "@/assets/book1.jpeg";
// import bookCover2 from "@/assets/book2.jpeg";
// import bookCover3 from "@/assets/book3.jpeg";
// import bookCover4 from "@/assets/book4.jpeg";
// import bookCover5 from "@/assets/book5.jpeg";
// import bookCover6 from "@/assets/book6.jpeg";

// const tabs = [
//   { id: "books", label: "Books", icon: BookOpen },
//   { id: "articles", label: "Articles", icon: FileText },
//   { id: "poems", label: "Poems", icon: Feather },
// ];

// const booksWithCovers = [
//   { title: "Devarayanadurga Divyadarshan", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
//   { title: "Tumkur District Temples", year: "2001", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
  
//   { title: "Weaver culture and history", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
//   { title: "'My Mind, My People'", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
//   { title: "'Silver Bowl'", year: "2008", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
//   { title: "'Seasons of Memory'", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover4 },
// ];

// const booksWithoutCovers = [
//   { title: "Kannada Grammar", year: "2015" },
//   { title: "Srikshetra Shivagange", year: "2015" },
//   { title: "Mahalakshmi Kshetra Goravanahalli", year: "2015" },
//   { title: "Srikshetra Sidharbetta", year: "2015" },
//   { title: "Sri Kamakshi Sharadamba, Hebbar", year: "2015" },
//   { title: "Vidyashankar Temple", year: "2015" },
//   { title: "Siddaganga Mahakshetra", year: "2015" },
//   { title: "Minchakal Gollahalli Anjaneyaswamy", year: "2015" },
//   { title: "Sheebi Lakshminarayana Swamy", year: "2015" },
//   { title: "Uddhana Veerabhadraswamy, Halenijagallu", year: "2015" },
//   { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu", year: "2015" },
//   { title: "Araluguppe Channakesavaswamy", year: "2015" },
//   { title: "Mallikarjunaswamy, Pankajahalli", year: "2015" },
//   { title: "Yogamadhavaswamy, Shettigere", year: "2015" },
//   { title: "Kedareshwar Temple, Nagalapuram", year: "2015" },
//   { title: "Vighnasante Temples", year: "2015" },
//   { title: "Nonavinakere Temples", year: "2015" },
//   { title: "Kodiyala Padmashali History and Culture", year: "2015" },
//   { title: "History & Culture of Traditional Weavers of South India", year: "2015" },
// ];

// const articles = [
//   { title: "The Role of Vernacular Literature in Nation Building", venue: "Indian Literary Review", year: "2010" },
//   { title: "Cultural Policy and Regional Identity", venue: "Karnataka Journal of Public Affairs", year: "2012" },
//   { title: "Language, Identity, and the Modern State", venue: "The Hindu Literary Supplement", year: "2018" },
//   { title: "Preserving Folk Traditions in the Digital Age", venue: "Deccan Herald", year: "2020" },
// ];

// const poems = [
//   { title: "The River Remembers", excerpt: "The river remembers what we forget — / the footsteps of ancestors on wet clay, / the songs that carried across the fields / before silence claimed the horizon." },
//   { title: "Monsoon Letters", excerpt: "Each raindrop is a letter / written by the sky to the parched earth, / a promise renewed, a covenant / older than memory itself." },
//   { title: "The Banyan's Witness", excerpt: "Under the banyan's ancient arms / I learned the patience of roots, / the courage of branches reaching / toward light they may never touch." },
// ];

// const tabContentVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.98 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
//   exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const LiteraryWorksSection = () => {
//   const [activeTab, setActiveTab] = useState("books");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="works" className="section-padding bg-muted/50" ref={ref}>
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-gold uppercase text-sm font-medium mb-2"
//           >
//             Bibliography
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Literary <span className="text-gold">Works</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         {/* Tabs with animated indicator */}
//         <div className="flex justify-center gap-2 mb-12 relative">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`relative flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-all z-10 ${
//                 activeTab === tab.id
//                   ? "text-gold"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               {activeTab === tab.id && (
//                 <motion.div
//                   layoutId="activeTabBg"
//                   className="absolute inset-0 bg-navy rounded-md shadow-lg"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//               <span className="relative z-10 flex items-center gap-2">
//                 <tab.icon size={16} />
//                 {tab.label}
//               </span>
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait">
//           {/* Books Grid */}
//           {activeTab === "books" && (
//             <motion.div
//               key="books"
//               variants={tabContentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {/* Books WITH covers — image grid */}
//               <div className="grid md:grid-cols-3 gap-8 mb-12">
//                 {booksWithCovers.map((book) => (
//                   <motion.div
//                     key={book.title}
//                     variants={itemVariants}
//                     whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                     className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
//                   >
//                     <div className="aspect-[2/3] overflow-hidden relative">
//                       <img
//                         src={book.cover}
//                         alt={book.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                         width={640}
//                         height={960}
//                       />
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent flex items-end p-6"
//                       >
//                         <p className="text-primary-foreground text-sm leading-relaxed">{book.desc}</p>
//                       </motion.div>
//                     </div>
//                     <div className="p-5">
//                       <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-gold transition-colors">{book.title}</h3>
//                       <p className="text-gold text-sm mt-1">{book.year}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Books WITHOUT covers — simple list */}
//               <motion.div variants={itemVariants} className="border-t border-gold/20 pt-10">
//                 <p className="text-gold uppercase text-xs font-medium tracking-widest mb-6 text-center">
//                   Also Published
//                 </p>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
//                   {booksWithoutCovers.map((book, i) => (
//                     <motion.div
//                       key={book.title}
//                       variants={itemVariants}
//                       whileHover={{ x: 4, transition: { duration: 0.2 } }}
//                       className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-card transition-colors group cursor-default"
//                     >
//                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
//                       <div>
//                         <p className="text-foreground text-sm font-medium group-hover:text-gold transition-colors leading-snug">
//                           {book.title}
//                         </p>
//                         <p className="text-muted-foreground text-xs mt-0.5">{book.year}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* Articles */}
//           {activeTab === "articles" && (
//             <motion.div
//               key="articles"
//               variants={tabContentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="max-w-2xl mx-auto space-y-4"
//             >
//               {articles.map((article) => (
//                 <motion.div
//                   key={article.title}
//                   variants={itemVariants}
//                   whileHover={{ x: 10, transition: { duration: 0.2 } }}
//                   className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gold/20 cursor-pointer"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
//                     <FileText size={18} className="text-gold" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground hover:text-gold transition-colors">{article.title}</h4>
//                     <p className="text-muted-foreground text-sm mt-1">{article.venue} · <span className="text-gold">{article.year}</span></p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}

//           {/* Poems */}
//           {activeTab === "poems" && (
//             <motion.div
//               key="poems"
//               variants={tabContentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid md:grid-cols-3 gap-8"
//             >
//               {poems.map((poem) => (
//                 <motion.div
//                   key={poem.title}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
//                   className="bg-navy rounded-xl p-8 text-center group relative overflow-hidden"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <div className="relative z-10">
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       whileHover={{ rotate: 15 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Feather size={24} className="text-gold mx-auto mb-4" />
//                     </motion.div>
//                     <h4 className="font-heading text-xl font-semibold text-primary-foreground mb-4 group-hover:text-gold transition-colors">{poem.title}</h4>
//                     <p className="text-primary-foreground/70 italic leading-relaxed text-sm font-light">{poem.excerpt}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default LiteraryWorksSection;




import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import bookCover1 from "@/assets/book1.jpeg";
import bookCover2 from "@/assets/book2.jpeg";
import bookCover3 from "@/assets/book3.jpeg";
import bookCover4 from "@/assets/book4.jpeg";
import bookCover5 from "@/assets/book5.jpeg";
import bookCover6 from "@/assets/book6.jpeg";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const tabs = [
  { id: "books",    label: "Books",    icon: BookOpen },
  { id: "articles", label: "Articles", icon: FileText },
  { id: "poems",    label: "Poems",    icon: Feather },
];

const booksWithCovers = [
  { title: "Devarayanadurga Divyadarshan", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
  { title: "Tumkur District Temples",       year: "2001", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
  { title: "Weaver Culture and History",    year: "2015", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
  { title: "My Mind, My People",            year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
  { title: "Silver Bowl",                   year: "2008", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
  { title: "Seasons of Memory",             year: "2015", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
];

const booksWithoutCovers = [
  { title: "Kannada Grammar", year: "2015" },
  { title: "Srikshetra Shivagange", year: "2015" },
  { title: "Mahalakshmi Kshetra Goravanahalli", year: "2015" },
  { title: "Srikshetra Sidharbetta", year: "2015" },
  { title: "Sri Kamakshi Sharadamba, Hebbar", year: "2015" },
  { title: "Vidyashankar Temple", year: "2015" },
  { title: "Siddaganga Mahakshetra", year: "2015" },
  { title: "Minchakal Gollahalli Anjaneyaswamy", year: "2015" },
  { title: "Sheebi Lakshminarayana Swamy", year: "2015" },
  { title: "Uddhana Veerabhadraswamy, Halenijagallu", year: "2015" },
  { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu", year: "2015" },
  { title: "Araluguppe Channakesavaswamy", year: "2015" },
  { title: "Mallikarjunaswamy, Pankajahalli", year: "2015" },
  { title: "Yogamadhavaswamy, Shettigere", year: "2015" },
  { title: "Kedareshwar Temple, Nagalapuram", year: "2015" },
  { title: "Vighnasante Temples", year: "2015" },
  { title: "Nonavinakere Temples", year: "2015" },
  { title: "Kodiyala Padmashali History and Culture", year: "2015" },
  { title: "History & Culture of Traditional Weavers of South India", year: "2015" },
];

const articles = [
  { title: "The Role of Vernacular Literature in Nation Building", venue: "Indian Literary Review", year: "2010" },
  { title: "Cultural Policy and Regional Identity", venue: "Karnataka Journal of Public Affairs", year: "2012" },
  { title: "Language, Identity, and the Modern State", venue: "The Hindu Literary Supplement", year: "2018" },
  { title: "Preserving Folk Traditions in the Digital Age", venue: "Deccan Herald", year: "2020" },
];

const poems = [
  { title: "The River Remembers", excerpt: "The river remembers what we forget — the footsteps of ancestors on wet clay, the songs that carried across the fields before silence claimed the horizon." },
  { title: "Monsoon Letters", excerpt: "Each raindrop is a letter written by the sky to the parched earth, a promise renewed, a covenant older than memory itself." },
  { title: "The Banyan's Witness", excerpt: "Under the banyan's ancient arms I learned the patience of roots, the courage of branches reaching toward light they may never touch." },
];

/* ─────────────────────────────────────────
   CINEMATIC BOOK CARD — 3-D hover + flip
───────────────────────────────────────── */
const BookCard3D = ({ book, index, isActive, onClick }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / rect.height) * -14);
    rotateY.set(((e.clientX - cx) / rect.width) * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer"
      style={{ perspective: 900 }}
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="relative group"
      >
        {/* Book cover */}
        <div className="relative aspect-[2/3] overflow-hidden rounded-r-lg rounded-l-sm shadow-2xl"
          style={{ boxShadow: "inset 4px 0 12px rgba(0,0,0,0.4), 8px 16px 40px rgba(0,0,0,0.5)" }}
        >
          {/* Spine highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-3 z-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1), transparent)" }}
          />
          {/* Page edges (right side) */}
          <div className="absolute right-0 top-1 bottom-1 w-2 z-20 pointer-events-none rounded-r"
            style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0px,#f5ead0 1px,#e0cfa0 1px,#e0cfa0 2px)", opacity: 0.6 }}
          />

          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Hover overlay with desc */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex flex-col justify-end p-5 z-10"
            style={{ background: "linear-gradient(to top, rgba(10,18,40,0.96) 0%, rgba(10,18,40,0.6) 55%, transparent 100%)" }}
          >
            <p className="text-white/90 text-xs leading-relaxed font-light" style={{ fontFamily: "'Georgia', serif" }}>
              {book.desc}
            </p>
          </motion.div>

          {/* Sheen on hover */}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileHover={{ opacity: 1, x: "200%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 z-30 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)", skewX: -15 }}
          />
        </div>

        {/* Info below */}
        <div className="mt-4 px-1">
          <h3
            className="text-sm font-medium leading-snug transition-colors duration-300 group-hover:text-amber-400"
            style={{ fontFamily: "'Georgia', serif", color: "#f0e8d0" }}
          >
            {book.title}
          </h3>
          <p className="mt-1 text-xs" style={{ color: "#c9a84c" }}>{book.year}</p>
        </div>

        {/* 3-D lift shadow */}
        <motion.div
          className="absolute -bottom-3 left-4 right-4 h-6 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)", filter: "blur(6px)" }}
          initial={{ scaleX: 0.8, opacity: 0.4 }}
          whileHover={{ scaleX: 1, opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   CINEMATIC BOOKSHELF SLIDER
───────────────────────────────────────── */
const BookshelfSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState(1);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const TOTAL = booksWithCovers.length;
  const AUTO_MS = 4000;

  const goTo = useCallback((idx, dir = 1) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDir(dir);
    setTimeout(() => {
      setCurrent(idx);
      setIsFlipping(false);
    }, 500);
  }, [isFlipping]);

  const next = useCallback(() => goTo((current + 1) % TOTAL, 1), [current, goTo, TOTAL]);
  const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL, -1), [current, goTo, TOTAL]);

  useEffect(() => {
    if (!isPlaying) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(next, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, [isPlaying, next]);

  const book = booksWithCovers[current];

  /* positions for carousel */
  const getStyle = (idx) => {
    const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
    const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
    const abs = Math.abs(normalized);
    const sign = Math.sign(normalized) || 1;

    if (abs === 0) return { zIndex: 30, x: "0%", scale: 1,    opacity: 1,    rotateY:  0,  blur: 0  };
    if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`, scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0  };
    if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5,  rotateY: sign * -35, blur: 1  };
    return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2  };
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 select-none">
      {/* Stage */}
      <div className="relative w-full flex items-center justify-center" style={{ height: 380, perspective: 1200 }}>
        {booksWithCovers.map((b, idx) => {
          const s = getStyle(idx);
          return (
            <motion.div
              key={b.title}
              className="absolute cursor-pointer"
              style={{ width: 200, transformStyle: "preserve-3d" }}
              animate={{
                x: s.x,
                scale: s.scale,
                opacity: s.opacity,
                rotateY: s.rotateY,
                filter: `blur(${s.blur}px)`,
                zIndex: s.zIndex,
              }}
              transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
              onClick={() => { if (idx !== current) goTo(idx, idx > current ? 1 : -1); }}
            >
              {/* Book shell */}
              <div className="relative" style={{ width: 200, height: 290 }}>
                {/* Left spine */}
                <div className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
                  style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }}
                />
                {/* Page stack right */}
                <div className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
                  style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }}
                />

                <div
                  className="absolute inset-0 rounded-r-md overflow-hidden"
                  style={{
                    boxShadow: idx === current
                      ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)"
                      : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.3)" }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Floor reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,18,40,0.6), transparent)" }}
        />
      </div>

      {/* Active book info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="text-center flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase" style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
            {current + 1} / {TOTAL}
          </p>
          <h3 className="text-xl font-medium" style={{ color: "#f0e8d0", fontFamily: "Georgia, serif" }}>
            {book.title}
          </h3>
          <p className="text-sm" style={{ color: "#c9a84c" }}>{book.year}</p>
          <p className="text-sm max-w-md leading-relaxed mt-1" style={{ color: "rgba(220,210,240,0.6)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            {book.desc}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center gap-5">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {booksWithCovers.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#c9a84c" : "rgba(201,168,76,0.25)",
                border: "1px solid rgba(201,168,76,0.35)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={() => setIsPlaying(p => !p)}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: "rgba(201,168,76,0.65)" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.18)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.06)"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Progress bar */}
      {isPlaying && (
        <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(201,168,76,0.15)" }}>
          <motion.div
            key={`${current}-${isPlaying}`}
            className="h-full rounded-full"
            style={{ background: "#c9a84c" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────
   ARTICLE CARD
───────────────────────────────────────── */
const ArticleCard = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ x: 8, transition: { duration: 0.2 } }}
    className="flex items-start gap-4 rounded-xl p-5 cursor-pointer group transition-all duration-300"
    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)" }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
      <FileText size={16} style={{ color: "#c9a84c" }} />
    </div>
    <div>
      <h4 className="font-medium text-sm leading-snug transition-colors duration-300 group-hover:text-amber-400"
        style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>
        {article.title}
      </h4>
      <p className="text-xs mt-1" style={{ color: "rgba(201,168,76,0.6)" }}>
        {article.venue} · <span style={{ color: "#c9a84c" }}>{article.year}</span>
      </p>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   POEM CARD
───────────────────────────────────────── */
const PoemCard = ({ poem, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="rounded-xl p-7 text-center relative overflow-hidden group cursor-default"
    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}
  >
    {/* Corner ornaments */}
    <div className="absolute top-3 left-3 w-4 h-4 pointer-events-none"
      style={{ borderTop: "1px solid rgba(201,168,76,0.35)", borderLeft: "1px solid rgba(201,168,76,0.35)" }} />
    <div className="absolute top-3 right-3 w-4 h-4 pointer-events-none"
      style={{ borderTop: "1px solid rgba(201,168,76,0.35)", borderRight: "1px solid rgba(201,168,76,0.35)" }} />
    <div className="absolute bottom-3 left-3 w-4 h-4 pointer-events-none"
      style={{ borderBottom: "1px solid rgba(201,168,76,0.35)", borderLeft: "1px solid rgba(201,168,76,0.35)" }} />
    <div className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none"
      style={{ borderBottom: "1px solid rgba(201,168,76,0.35)", borderRight: "1px solid rgba(201,168,76,0.35)" }} />

    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 12 }}
      transition={{ duration: 0.3 }}
      className="inline-flex mb-4"
    >
      <Feather size={20} style={{ color: "#c9a84c" }} />
    </motion.div>

    <h4 className="text-base font-medium mb-4 transition-colors duration-300 group-hover:text-amber-400"
      style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>
      {poem.title}
    </h4>

    <div className="w-8 h-px mx-auto mb-4" style={{ background: "rgba(201,168,76,0.4)" }} />

    <p className="text-xs leading-relaxed italic" style={{ color: "rgba(220,210,240,0.55)", fontFamily: "Georgia, serif" }}>
      {poem.excerpt}
    </p>
  </motion.div>
);

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
const LiteraryWorksSection = () => {
  const [activeTab, setActiveTab] = useState("books");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="works"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)" }}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.22em" } : {}}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-xs font-medium uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}
          >
            Bibliography
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-medium mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#f0e8d0", letterSpacing: "-0.01em" }}>
            Literary{" "}
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Works</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="w-20 h-px mx-auto origin-center"
            style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }}
          />
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center gap-1 mb-14"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "Georgia, serif",
                color: activeTab === tab.id ? "#c9a84c" : "rgba(201,168,76,0.45)",
                background: activeTab === tab.id ? "rgba(201,168,76,0.1)" : "transparent",
                border: `1px solid ${activeTab === tab.id ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}`,
              }}
            >
              <tab.icon size={14} />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute -bottom-0.5 left-4 right-4 h-px"
                  style={{ background: "#c9a84c" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">

          {/* BOOKS TAB */}
          {activeTab === "books" && (
            <motion.div
              key="books"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Cinematic bookshelf slider */}
              <BookshelfSlider />

              {/* Also published list */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0., delay: 0.2 }}
                className="mt-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
                  <p className="text-xs tracking-widest uppercase"
                    style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
                    Also Published
                  </p>
                  <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
                  {booksWithoutCovers.map((book, i) => (
                    <motion.div
                      key={book.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-default transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.05)"}
                      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                    >
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
                      <div>
                        <p className="text-xs font-medium leading-snug transition-colors duration-200 group-hover:text-amber-400"
                          style={{ fontFamily: "Georgia, serif", color: "#d4c8a8" }}>
                          {book.title}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(201,168,76,0.45)" }}>{book.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ARTICLES TAB */}
          {activeTab === "articles" && (
            <motion.div
              key="articles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto space-y-3"
            >
              {articles.map((article, i) => (
                <ArticleCard key={article.title} article={article} index={i} />
              ))}
            </motion.div>
          )}

          {/* POEMS TAB */}
          {activeTab === "poems" && (
            <motion.div
              key="poems"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {poems.map((poem, i) => (
                <PoemCard key={poem.title} poem={poem} index={i} />
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default LiteraryWorksSection;













// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
// import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import bookCover1 from "@/assets/book1.jpeg";
// import bookCover2 from "@/assets/book2.jpeg";
// import bookCover3 from "@/assets/book3.jpeg";
// import bookCover4 from "@/assets/book4.jpeg";
// import bookCover5 from "@/assets/book5.jpeg";
// import bookCover6 from "@/assets/book6.jpeg";

// /* ─────────────────────────────────────────
//    DATA
// ───────────────────────────────────────── */
// const tabs = [
//   { id: "books",    label: "Books",    icon: BookOpen },
//   { id: "articles", label: "Articles", icon: FileText },
//   { id: "poems",    label: "Poems",    icon: Feather },
// ];

// const booksWithCovers = [
//   { title: "Devarayanadurga Divyadarshan", year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
//   { title: "Tumkur District Temples",       year: "2001", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
//   { title: "Weaver Culture and History",    year: "2015", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
//   { title: "My Mind, My People",            year: "2015", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
//   { title: "Silver Bowl",                   year: "2008", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
//   { title: "Seasons of Memory",             year: "2015", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
// ];

// const booksWithoutCovers = [
//   { title: "Kannada Grammar", year: "2015" },
//   { title: "Srikshetra Shivagange", year: "2015" },
//   { title: "Mahalakshmi Kshetra Goravanahalli", year: "2015" },
//   { title: "Srikshetra Sidharbetta", year: "2015" },
//   { title: "Sri Kamakshi Sharadamba, Hebbar", year: "2015" },
//   { title: "Vidyashankar Temple", year: "2015" },
//   { title: "Siddaganga Mahakshetra", year: "2015" },
//   { title: "Minchakal Gollahalli Anjaneyaswamy", year: "2015" },
//   { title: "Sheebi Lakshminarayana Swamy", year: "2015" },
//   { title: "Uddhana Veerabhadraswamy, Halenijagallu", year: "2015" },
//   { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu", year: "2015" },
//   { title: "Araluguppe Channakesavaswamy", year: "2015" },
//   { title: "Mallikarjunaswamy, Pankajahalli", year: "2015" },
//   { title: "Yogamadhavaswamy, Shettigere", year: "2015" },
//   { title: "Kedareshwar Temple, Nagalapuram", year: "2015" },
//   { title: "Vighnasante Temples", year: "2015" },
//   { title: "Nonavinakere Temples", year: "2015" },
//   { title: "Kodiyala Padmashali History and Culture", year: "2015" },
//   { title: "History & Culture of Traditional Weavers of South India", year: "2015" },
// ];

// const articles = [
//   { title: "The Role of Vernacular Literature in Nation Building", venue: "Indian Literary Review", year: "2010" },
//   { title: "Cultural Policy and Regional Identity", venue: "Karnataka Journal of Public Affairs", year: "2012" },
//   { title: "Language, Identity, and the Modern State", venue: "The Hindu Literary Supplement", year: "2018" },
//   { title: "Preserving Folk Traditions in the Digital Age", venue: "Deccan Herald", year: "2020" },
// ];

// const poems = [
//   { title: "The River Remembers", excerpt: "The river remembers what we forget — the footsteps of ancestors on wet clay, the songs that carried across the fields before silence claimed the horizon." },
//   { title: "Monsoon Letters", excerpt: "Each raindrop is a letter written by the sky to the parched earth, a promise renewed, a covenant older than memory itself." },
//   { title: "The Banyan's Witness", excerpt: "Under the banyan's ancient arms I learned the patience of roots, the courage of branches reaching toward light they may never touch." },
// ];

// /* ─────────────────────────────────────────
//    CINEMATIC BOOK CARD — 3-D hover + flip
// ───────────────────────────────────────── */
// const BookCard3D = ({ book, index, isActive, onClick }) => {
//   const cardRef = useRef(null);
//   const rotateX = useMotionValue(0);
//   const rotateY = useMotionValue(0);
//   const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
//   const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     const cx = rect.left + rect.width / 2;
//     const cy = rect.top + rect.height / 2;
//     rotateX.set(((e.clientY - cy) / rect.height) * -14);
//     rotateY.set(((e.clientX - cx) / rect.width) * 14);
//   };

//   const handleMouseLeave = () => {
//     rotateX.set(0);
//     rotateY.set(0);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="relative cursor-pointer"
//       style={{ perspective: 900 }}
//       initial={{ opacity: 0, y: 60, rotateX: 20 }}
//       animate={{ opacity: 1, y: 0, rotateX: 0 }}
//       transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={onClick}
//       whileTap={{ scale: 0.97 }}
//     >
//       <motion.div
//         style={{
//           rotateX: springX,
//           rotateY: springY,
//           transformStyle: "preserve-3d",
//         }}
//         className="relative group"
//       >
//         {/* Book cover */}
//         <div className="relative aspect-[2/3] overflow-hidden rounded-r-lg rounded-l-sm shadow-2xl"
//           style={{ boxShadow: "inset 4px 0 12px rgba(0,0,0,0.4), 8px 16px 40px rgba(0,0,0,0.5)" }}
//         >
//           {/* Spine highlight */}
//           <div className="absolute left-0 top-0 bottom-0 w-3 z-20 pointer-events-none"
//             style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1), transparent)" }}
//           />
//           {/* Page edges (right side) */}
//           <div className="absolute right-0 top-1 bottom-1 w-2 z-20 pointer-events-none rounded-r"
//             style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0px,#f5ead0 1px,#e0cfa0 1px,#e0cfa0 2px)", opacity: 0.6 }}
//           />

//           <img
//             src={book.cover}
//             alt={book.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             loading="lazy"
//           />

//           {/* Hover overlay with desc */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             transition={{ duration: 0.35 }}
//             className="absolute inset-0 flex flex-col justify-end p-5 z-10"
//             style={{ background: "linear-gradient(to top, rgba(10,18,40,0.96) 0%, rgba(10,18,40,0.6) 55%, transparent 100%)" }}
//           >
//             <p className="text-white/90 text-xs leading-relaxed font-light" style={{ fontFamily: "'Georgia', serif" }}>
//               {book.desc}
//             </p>
//           </motion.div>

//           {/* Sheen on hover */}
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             whileHover={{ opacity: 1, x: "200%" }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="absolute inset-0 w-1/3 z-30 pointer-events-none"
//             style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)", skewX: -15 }}
//           />
//         </div>

//         {/* Info below */}
//         <div className="mt-4 px-1">
//           <h3
//             className="text-sm font-medium leading-snug transition-colors duration-300 group-hover:text-amber-400"
//             style={{ fontFamily: "'Georgia', serif", color: "#f0e8d0" }}
//           >
//             {book.title}
//           </h3>
//           <p className="mt-1 text-xs" style={{ color: "#c9a84c" }}>{book.year}</p>
//         </div>

//         {/* 3-D lift shadow */}
//         <motion.div
//           className="absolute -bottom-3 left-4 right-4 h-6 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)", filter: "blur(6px)" }}
//           initial={{ scaleX: 0.8, opacity: 0.4 }}
//           whileHover={{ scaleX: 1, opacity: 0.7 }}
//           transition={{ duration: 0.3 }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// /* ─────────────────────────────────────────
//    CINEMATIC BOOKSHELF SLIDER
// ───────────────────────────────────────── */
// const BookshelfSlider = () => {
//   const [current, setCurrent] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [flipDir, setFlipDir] = useState(1);
//   const timerRef = useRef(null);
//   const progressRef = useRef(null);
//   const TOTAL = booksWithCovers.length;
//   const AUTO_MS = 4000;

//   const goTo = useCallback((idx, dir = 1) => {
//     if (isFlipping) return;
//     setIsFlipping(true);
//     setFlipDir(dir);
//     setTimeout(() => {
//       setCurrent(idx);
//       setIsFlipping(false);
//     }, 500);
//   }, [isFlipping]);

//   const next = useCallback(() => goTo((current + 1) % TOTAL, 1), [current, goTo, TOTAL]);
//   const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL, -1), [current, goTo, TOTAL]);

//   useEffect(() => {
//     if (!isPlaying) { clearInterval(timerRef.current); return; }
//     timerRef.current = setInterval(next, AUTO_MS);
//     return () => clearInterval(timerRef.current);
//   }, [isPlaying, next]);

//   const book = booksWithCovers[current];

//   /* positions for carousel */
//   const getStyle = (idx) => {
//     const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
//     const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
//     const abs = Math.abs(normalized);
//     const sign = Math.sign(normalized) || 1;

//     if (abs === 0) return { zIndex: 30, x: "0%", scale: 1,    opacity: 1,    rotateY:  0,  blur: 0  };
//     if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`, scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0  };
//     if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5,  rotateY: sign * -35, blur: 1  };
//     return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2  };
//   };

//   return (
//     <div className="w-full flex flex-col items-center gap-8 select-none">
//       {/* Stage */}
//       <div className="relative w-full flex items-center justify-center" style={{ height: 380, perspective: 1200 }}>
//         {booksWithCovers.map((b, idx) => {
//           const s = getStyle(idx);
//           return (
//             <motion.div
//               key={b.title}
//               className="absolute cursor-pointer"
//               style={{ width: 200, transformStyle: "preserve-3d" }}
//               animate={{
//                 x: s.x,
//                 scale: s.scale,
//                 opacity: s.opacity,
//                 rotateY: s.rotateY,
//                 filter: `blur(${s.blur}px)`,
//                 zIndex: s.zIndex,
//               }}
//               transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
//               onClick={() => { if (idx !== current) goTo(idx, idx > current ? 1 : -1); }}
//             >
//               {/* Book shell */}
//               <div className="relative" style={{ width: 200, height: 290 }}>
//                 {/* Left spine */}
//                 <div className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
//                   style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }}
//                 />
//                 {/* Page stack right */}
//                 <div className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
//                   style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }}
//                 />

//                 {/* Flip page animation */}
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`${idx}-${isFlipping && idx === current ? "flipping" : "still"}`}
//                     className="absolute inset-0 rounded-r-md overflow-hidden"
//                     style={{
//                       boxShadow: idx === current
//                         ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)"
//                         : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.4)",
//                       transformOrigin: "left center",
//                     }}
//                     initial={idx === current ? { rotateY: flipDir * -90, opacity: 0.5 } : false}
//                     animate={{ rotateY: 0, opacity: 1 }}
//                     exit={idx === current ? { rotateY: flipDir * 90, opacity: 0.5 } : undefined}
//                     transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//                   >
//                     <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                     {/* Inner shadow for depth */}
//                     <div className="absolute inset-0 pointer-events-none"
//                       style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.3)" }}
//                     />
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}

//         {/* Floor reflection */}
//         <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
//           style={{ background: "linear-gradient(to top, rgba(10,18,40,0.6), transparent)" }}
//         />
//       </div>

//       {/* Active book info */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="text-center flex flex-col items-center gap-2"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -12 }}
//           transition={{ duration: 0.4 }}
//         >
//           <p className="text-xs tracking-widest uppercase" style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//             {current + 1} / {TOTAL}
//           </p>
//           <h3 className="text-xl font-medium" style={{ color: "#f0e8d0", fontFamily: "Georgia, serif" }}>
//             {book.title}
//           </h3>
//           <p className="text-sm" style={{ color: "#c9a84c" }}>{book.year}</p>
//           <p className="text-sm max-w-md leading-relaxed mt-1" style={{ color: "rgba(220,210,240,0.6)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
//             {book.desc}
//           </p>
//         </motion.div>
//       </AnimatePresence>

//       {/* Controls */}
//       <div className="flex items-center gap-5">
//         <button
//           onClick={prev}
//           className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
//           style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
//           onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
//           onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}
//         >
//           <ChevronLeft size={18} />
//         </button>

//         {/* Dot indicators */}
//         <div className="flex gap-2 items-center">
//           {booksWithCovers.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i, i > current ? 1 : -1)}
//               className="transition-all duration-300 rounded-full"
//               style={{
//                 width: i === current ? 24 : 8,
//                 height: 8,
//                 background: i === current ? "#c9a84c" : "rgba(201,168,76,0.25)",
//                 border: "1px solid rgba(201,168,76,0.35)",
//               }}
//             />
//           ))}
//         </div>

//         <button
//           onClick={next}
//           className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
//           style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
//           onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
//           onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}
//         >
//           <ChevronRight size={18} />
//         </button>

//         <button
//           onClick={() => setIsPlaying(p => !p)}
//           className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
//           style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: "rgba(201,168,76,0.65)" }}
//           onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.18)"}
//           onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.06)"}
//         >
//           {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//         </button>
//       </div>

//       {/* Progress bar */}
//       {isPlaying && (
//         <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(201,168,76,0.15)" }}>
//           <motion.div
//             key={`${current}-${isPlaying}`}
//             className="h-full rounded-full"
//             style={{ background: "#c9a84c" }}
//             initial={{ width: "0%" }}
//             animate={{ width: "100%" }}
//             transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// /* ─────────────────────────────────────────
//    ARTICLE CARD
// ───────────────────────────────────────── */
// const ArticleCard = ({ article, index }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -30 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     whileHover={{ x: 8, transition: { duration: 0.2 } }}
//     className="flex items-start gap-4 rounded-xl p-5 cursor-pointer group transition-all duration-300"
//     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)" }}
//     onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
//     onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
//   >
//     <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
//       style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
//       <FileText size={16} style={{ color: "#c9a84c" }} />
//     </div>
//     <div>
//       <h4 className="font-medium text-sm leading-snug transition-colors duration-300 group-hover:text-amber-400"
//         style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>
//         {article.title}
//       </h4>
//       <p className="text-xs mt-1" style={{ color: "rgba(201,168,76,0.6)" }}>
//         {article.venue} · <span style={{ color: "#c9a84c" }}>{article.year}</span>
//       </p>
//     </div>
//   </motion.div>
// );

// /* ─────────────────────────────────────────
//    POEM CARD
// ───────────────────────────────────────── */
// const PoemCard = ({ poem, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.15 }}
//     whileHover={{ y: -6, transition: { duration: 0.3 } }}
//     className="rounded-xl p-7 text-center relative overflow-hidden group cursor-default"
//     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}
//   >
//     {/* Corner ornaments */}
//     <div className="absolute top-3 left-3 w-4 h-4 pointer-events-none"
//       style={{ borderTop: "1px solid rgba(201,168,76,0.35)", borderLeft: "1px solid rgba(201,168,76,0.35)" }} />
//     <div className="absolute top-3 right-3 w-4 h-4 pointer-events-none"
//       style={{ borderTop: "1px solid rgba(201,168,76,0.35)", borderRight: "1px solid rgba(201,168,76,0.35)" }} />
//     <div className="absolute bottom-3 left-3 w-4 h-4 pointer-events-none"
//       style={{ borderBottom: "1px solid rgba(201,168,76,0.35)", borderLeft: "1px solid rgba(201,168,76,0.35)" }} />
//     <div className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none"
//       style={{ borderBottom: "1px solid rgba(201,168,76,0.35)", borderRight: "1px solid rgba(201,168,76,0.35)" }} />

//     <motion.div
//       initial={{ rotate: 0 }}
//       whileHover={{ rotate: 12 }}
//       transition={{ duration: 0.3 }}
//       className="inline-flex mb-4"
//     >
//       <Feather size={20} style={{ color: "#c9a84c" }} />
//     </motion.div>

//     <h4 className="text-base font-medium mb-4 transition-colors duration-300 group-hover:text-amber-400"
//       style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>
//       {poem.title}
//     </h4>

//     <div className="w-8 h-px mx-auto mb-4" style={{ background: "rgba(201,168,76,0.4)" }} />

//     <p className="text-xs leading-relaxed italic" style={{ color: "rgba(220,210,240,0.55)", fontFamily: "Georgia, serif" }}>
//       {poem.excerpt}
//     </p>
//   </motion.div>
// );

// /* ─────────────────────────────────────────
//    MAIN SECTION
// ───────────────────────────────────────── */
// const LiteraryWorksSection = () => {
//   const [activeTab, setActiveTab] = useState("books");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section
//       id="works"
//       ref={ref}
//       className="relative py-24 overflow-hidden"
//       style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)" }}
//     >
//       {/* Ambient background glow */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
//           style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">

//         {/* ── Section Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }}
//           className="text-center mb-14"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.22em" } : {}}
//             transition={{ duration: 1.1, delay: 0.2 }}
//             className="text-xs font-medium uppercase mb-3"
//             style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}
//           >
//             Bibliography
//           </motion.p>

//           <h2 className="text-4xl md:text-5xl font-medium mb-4"
//             style={{ fontFamily: "Georgia, serif", color: "#f0e8d0", letterSpacing: "-0.01em" }}>
//             Literary{" "}
//             <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Works</span>
//           </h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="w-20 h-px mx-auto origin-center"
//             style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }}
//           />
//         </motion.div>

//         {/* ── Tabs ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="flex justify-center gap-1 mb-14"
//         >
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
//               style={{
//                 fontFamily: "Georgia, serif",
//                 color: activeTab === tab.id ? "#c9a84c" : "rgba(201,168,76,0.45)",
//                 background: activeTab === tab.id ? "rgba(201,168,76,0.1)" : "transparent",
//                 border: `1px solid ${activeTab === tab.id ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}`,
//               }}
//             >
//               <tab.icon size={14} />
//               {tab.label}
//               {activeTab === tab.id && (
//                 <motion.div
//                   layoutId="tabUnderline"
//                   className="absolute -bottom-0.5 left-4 right-4 h-px"
//                   style={{ background: "#c9a84c" }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </motion.div>

//         {/* ── Tab Content ── */}
//         <AnimatePresence mode="wait">

//           {/* BOOKS TAB */}
//           {activeTab === "books" && (
//             <motion.div
//               key="books"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               {/* Cinematic bookshelf slider */}
//               <BookshelfSlider />

//               {/* Also published list */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0., delay: 0.2 }}
//                 className="mt-20"
//               >
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
//                   <p className="text-xs tracking-widest uppercase"
//                     style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//                     Also Published
//                   </p>
//                   <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
//                 </div>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
//                   {booksWithoutCovers.map((book, i) => (
//                     <motion.div
//                       key={book.title}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.4, delay: i * 0.03 }}
//                       whileHover={{ x: 4 }}
//                       className="flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-default transition-all duration-200"
//                       style={{ background: "rgba(255,255,255,0.02)" }}
//                       onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.05)"}
//                       onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
//                     >
//                       <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
//                       <div>
//                         <p className="text-xs font-medium leading-snug transition-colors duration-200 group-hover:text-amber-400"
//                           style={{ fontFamily: "Georgia, serif", color: "#d4c8a8" }}>
//                           {book.title}
//                         </p>
//                         <p className="text-xs mt-0.5" style={{ color: "rgba(201,168,76,0.45)" }}>{book.year}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* ARTICLES TAB */}
//           {activeTab === "articles" && (
//             <motion.div
//               key="articles"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="max-w-2xl mx-auto space-y-3"
//             >
//               {articles.map((article, i) => (
//                 <ArticleCard key={article.title} article={article} index={i} />
//               ))}
//             </motion.div>
//           )}

//           {/* POEMS TAB */}
//           {activeTab === "poems" && (
//             <motion.div
//               key="poems"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="grid md:grid-cols-3 gap-6"
//             >
//               {poems.map((poem, i) => (
//                 <PoemCard key={poem.title} poem={poem} index={i} />
//               ))}
//             </motion.div>
//           )}

//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default LiteraryWorksSection;