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

//                 <div
//                   className="absolute inset-0 rounded-r-md overflow-hidden"
//                   style={{
//                     boxShadow: idx === current
//                       ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)"
//                       : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.4)",
//                   }}
//                 >
//                   <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                   {/* Inner shadow for depth */}
//                   <div className="absolute inset-0 pointer-events-none"
//                     style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.3)" }}
//                   />
//                 </div>
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











// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
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

//   const getStyle = (idx) => {
//     const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
//     const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
//     const abs = Math.abs(normalized);
//     const sign = Math.sign(normalized) || 1;

//     if (abs === 0) return { zIndex: 30, x: "0%",           scale: 1,    opacity: 1,    rotateY:  0,       blur: 0 };
//     if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`, scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0 };
//     if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5, rotateY: sign * -35, blur: 1 };
//     return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2 };
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
//               <div className="relative" style={{ width: 200, height: 290 }}>
//                 <div className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
//                   style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }}
//                 />
//                 <div className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
//                   style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }}
//                 />
//                 <div
//                   className="absolute inset-0 rounded-r-md overflow-hidden"
//                   style={{
//                     boxShadow: idx === current
//                       ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)"
//                       : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.4)",
//                   }}
//                 >
//                   <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                   <div className="absolute inset-0 pointer-events-none"
//                     style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.3)" }}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}

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
//   // amount: "0px" means it triggers as soon as ANY part is in view (works on standalone page too)
//   const isInView = useInView(ref, { once: true, amount: 0 });

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
//               <BookshelfSlider />

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
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







// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
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
//    CINEMATIC BOOKSHELF SLIDER
//    LEFT  → original horizontal fan carousel
//    RIGHT → book title + description panel
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

//   /* exact same position logic as original */
//   const getStyle = (idx) => {
//     const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
//     const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
//     const abs = Math.abs(normalized);
//     const sign = Math.sign(normalized) || 1;
//     if (abs === 0) return { zIndex: 30, x: "0%",            scale: 1,    opacity: 1,    rotateY:  0,        blur: 0 };
//     if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`,  scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0 };
//     if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5,  rotateY: sign * -35, blur: 1 };
//     return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2 };
//   };

//   return (
//     <div className="w-full flex flex-col gap-14">

//       {/* ── TOP: carousel LEFT  +  info RIGHT ── */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">

//         {/* LEFT — original horizontal fan */}
//         <div className="flex-shrink-0 flex flex-col items-center">
//           <div
//             className="relative flex items-center justify-center"
//             style={{ width: 420, height: 310, perspective: 1200 }}
//           >
//             {booksWithCovers.map((b, idx) => {
//               const s = getStyle(idx);
//               return (
//                 <motion.div
//                   key={b.title}
//                   className="absolute cursor-pointer"
//                   style={{ width: 180, transformStyle: "preserve-3d" }}
//                   animate={{
//                     x: s.x,
//                     scale: s.scale,
//                     opacity: s.opacity,
//                     rotateY: s.rotateY,
//                     filter: `blur(${s.blur}px)`,
//                     zIndex: s.zIndex,
//                   }}
//                   transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
//                   onClick={() => { if (idx !== current) goTo(idx); }}
//                 >
//                   <div className="relative" style={{ width: 180, height: 262 }}>
//                     <div className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
//                       style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }} />
//                     <div className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
//                       style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }} />
//                     <div
//                       className="absolute inset-0 rounded-r-md overflow-hidden"
//                       style={{
//                         boxShadow: idx === current
//                           ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)"
//                           : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.4)",
//                       }}
//                     >
//                       <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 pointer-events-none"
//                         style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.3)" }} />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//             <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
//               style={{ background: "linear-gradient(to top, rgba(10,18,40,0.6), transparent)" }} />
//           </div>

//           {/* Controls under carousel */}
//           <div className="flex items-center gap-4 mt-5">
//             <button onClick={prev}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}>
//               <ChevronLeft size={16} />
//             </button>

//             <div className="flex gap-2 items-center">
//               {booksWithCovers.map((_, i) => (
//                 <button key={i} onClick={() => goTo(i)}
//                   className="transition-all duration-300 rounded-full"
//                   style={{
//                     width: i === current ? 22 : 7, height: 7,
//                     background: i === current ? "#c9a84c" : "rgba(201,168,76,0.25)",
//                     border: "1px solid rgba(201,168,76,0.35)",
//                   }} />
//               ))}
//             </div>

//             <button onClick={next}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}>
//               <ChevronRight size={16} />
//             </button>

//             <button onClick={() => setIsPlaying(p => !p)}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: "rgba(201,168,76,0.65)" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.18)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.06)"}>
//               {isPlaying ? <Pause size={14} /> : <Play size={14} />}
//             </button>
//           </div>

//           {isPlaying && (
//             <div className="w-40 h-0.5 rounded-full overflow-hidden mt-3" style={{ background: "rgba(201,168,76,0.15)" }}>
//               <motion.div
//                 key={`${current}-${isPlaying}`}
//                 className="h-full rounded-full"
//                 style={{ background: "#c9a84c" }}
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
//               />
//             </div>
//           )}
//         </div>

//         {/* RIGHT — title + description */}
//         <div className="flex-1 flex flex-col justify-center pt-0 lg:pt-6">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 28 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -18 }}
//               transition={{ duration: 0.42 }}
              
//               className="flex flex-col gap-5"
//             >
//               <p className="text-xs tracking-widest uppercase"
//                 style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//                 {String(current + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(TOTAL).padStart(2, "0")}
//               </p>

//               <h3 className="text-2xl md:text-3xl font-medium leading-tight"
//                 style={{ color: "#f0e8d0", fontFamily: "Georgia, serif" }}>
//                 {book.title}
//               </h3>

//               <div className="w-12 h-px" style={{ background: "#c9a84c" }} />

//               <span className="self-start px-3 py-1 rounded-full text-xs tracking-wider"
//                 style={{
//                   background: "rgba(201,168,76,0.12)",
//                   border: "1px solid rgba(201,168,76,0.3)",
//                   color: "#c9a84c",
//                   fontFamily: "Georgia, serif",
//                 }}>
//                 {book.year}
//               </span>

//               <p className="text-sm leading-relaxed"
//                 style={{
//                   color: "rgba(220,210,240,0.65)",
//                   fontFamily: "Georgia, serif",
//                   fontStyle: "italic",
//                   maxWidth: 380,
//                 }}>
//                 {book.desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* ── Also Published ── */}
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
//           <p className="text-xs tracking-widest uppercase" style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//             Also Published
//           </p>
//           <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
//           {booksWithoutCovers.map((book, i) => (
//             <motion.div
//               key={book.title}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.03 }}
//               whileHover={{ x: 4 }}
//               className="flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-default transition-all duration-200"
//               style={{ background: "rgba(255,255,255,0.02)" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.05)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
//             >
//               <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
//               <div>
//                 <p className="text-xs font-medium leading-snug transition-colors duration-200 group-hover:text-amber-400"
//                   style={{ fontFamily: "Georgia, serif", color: "#d4c8a8" }}>
//                   {book.title}
//                 </p>
//                 <p className="text-xs mt-0.5" style={{ color: "rgba(201,168,76,0.45)" }}>{book.year}</p>
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
//     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)" }}
//     onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
//     onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
//   >
//     <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
//       style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
//       <FileText size={16} style={{ color: "#c9a84c" }} />
//     </div>
//     <div>
//       <h4 className="font-medium text-sm leading-snug transition-colors duration-300 group-hover:text-amber-400"
//         style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>{article.title}</h4>
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
//     initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.15 }}
//     whileHover={{ y: -6, transition: { duration: 0.3 } }}
//     className="rounded-xl p-7 text-center relative overflow-hidden group cursor-default"
//     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}
//   >
//     {[["top-3 left-3","borderTop","borderLeft"],["top-3 right-3","borderTop","borderRight"],
//       ["bottom-3 left-3","borderBottom","borderLeft"],["bottom-3 right-3","borderBottom","borderRight"]].map(([pos,a,b],i) => (
//       <div key={i} className={`absolute ${pos} w-4 h-4 pointer-events-none`}
//         style={{ [a]: "1px solid rgba(201,168,76,0.35)", [b]: "1px solid rgba(201,168,76,0.35)" }} />
//     ))}
//     <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 12 }} transition={{ duration: 0.3 }} className="inline-flex mb-4">
//       <Feather size={20} style={{ color: "#c9a84c" }} />
//     </motion.div>
//     <h4 className="text-base font-medium mb-4 transition-colors duration-300 group-hover:text-amber-400"
//       style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>{poem.title}</h4>
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
//   const isInView = useInView(ref, { once: true, amount: 0 });

//   return (
//     <section id="works" ref={ref} className="relative py-24 overflow-hidden"
//       style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)" }}>
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
//           style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }} />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }} className="text-center mb-14">
//           <motion.p initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.22em" } : {}}
//             transition={{ duration: 1.1, delay: 0.2 }}
//             className="text-xs font-medium uppercase mb-3"
//             style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//             Bibliography
//           </motion.p>
//           <h2 className="text-4xl md:text-5xl font-medium mb-4"
//             style={{ fontFamily: "Georgia, serif", color: "#f0e8d0", letterSpacing: "-0.01em" }}>
//             Literary <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Works</span>
//           </h2>
//           <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="w-20 h-px mx-auto origin-center"
//             style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />
//         </motion.div>

//         {/* Tabs */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center gap-1 mb-14">
//           {tabs.map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
//               style={{
//                 fontFamily: "Georgia, serif",
//                 color: activeTab === tab.id ? "#c9a84c" : "rgba(201,168,76,0.45)",
//                 background: activeTab === tab.id ? "rgba(201,168,76,0.1)" : "transparent",
//                 border: `1px solid ${activeTab === tab.id ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}`,
//               }}>
//               <tab.icon size={14} />
//               {tab.label}
//               {activeTab === tab.id && (
//                 <motion.div layoutId="tabUnderline" className="absolute -bottom-0.5 left-4 right-4 h-px"
//                   style={{ background: "#c9a84c" }}
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
//           {activeTab === "poems" && (
//             <motion.div key="poems" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-6">
//               {poems.map((p, i) => <PoemCard key={p.title} poem={p} index={i} />)}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default LiteraryWorksSection;













// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
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
//    CINEMATIC BOOKSHELF SLIDER
//    LEFT  → original horizontal fan carousel
//    RIGHT → book title + description panel
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

//   /* exact same position logic as original */
//   const getStyle = (idx) => {
//     const offset = ((idx - current + TOTAL) % TOTAL + TOTAL) % TOTAL;
//     const normalized = offset > TOTAL / 2 ? offset - TOTAL : offset;
//     const abs = Math.abs(normalized);
//     const sign = Math.sign(normalized) || 1;
//     if (abs === 0) return { zIndex: 30, x: "0%",            scale: 1,    opacity: 1,    rotateY:  0,        blur: 0 };
//     if (abs === 1) return { zIndex: 20, x: `${sign * 62}%`,  scale: 0.82, opacity: 0.8,  rotateY: sign * -22, blur: 0 };
//     if (abs === 2) return { zIndex: 10, x: `${sign * 105}%`, scale: 0.65, opacity: 0.5,  rotateY: sign * -35, blur: 1 };
//     return             { zIndex:  5, x: `${sign * 135}%`, scale: 0.50, opacity: 0.15, rotateY: sign * -45, blur: 2 };
//   };

//   return (
//     <div className="w-full flex flex-col gap-14">

//       {/* ── TOP: carousel LEFT  +  info RIGHT ── */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 max-w-4xl mx-auto w-full">

//         {/* LEFT — original horizontal fan */}
//         <div className="flex-shrink-0 flex flex-col items-center">
//           <div
//             className="relative flex items-center justify-center"
//             style={{ width: 420, height: 310, perspective: 1200 }}
//           >
//             {booksWithCovers.map((b, idx) => {
//               const s = getStyle(idx);
//               return (
//                 <motion.div
//                   key={b.title}
//                   className="absolute cursor-pointer"
//                   style={{ width: 180, transformStyle: "preserve-3d" }}
//                   animate={{
//                     x: s.x,
//                     scale: s.scale,
//                     opacity: s.opacity,
//                     rotateY: s.rotateY,
//                     filter: `blur(${s.blur}px)`,
//                     zIndex: s.zIndex,
//                   }}
//                   transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
//                   onClick={() => { if (idx !== current) goTo(idx); }}
//                 >
//                   <div className="relative" style={{ width: 180, height: 262 }}>
//                     <div className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
//                       style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }} />
//                     <div className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
//                       style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }} />
//                     <div
//                       className="absolute inset-0 rounded-r-md overflow-hidden"
//                       style={{
//                         boxShadow: idx === current
//                           ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)"
//                           : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.4)",
//                       }}
//                     >
//                       <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 pointer-events-none"
//                         style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.3)" }} />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//             <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
//               style={{ background: "linear-gradient(to top, rgba(10,18,40,0.6), transparent)" }} />
//           </div>

//           {/* Controls under carousel */}
//           <div className="flex items-center gap-4 mt-5">
//             <button onClick={prev}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}>
//               <ChevronLeft size={16} />
//             </button>

//             <div className="flex gap-2 items-center">
//               {booksWithCovers.map((_, i) => (
//                 <button key={i} onClick={() => goTo(i)}
//                   className="transition-all duration-300 rounded-full"
//                   style={{
//                     width: i === current ? 22 : 7, height: 7,
//                     background: i === current ? "#c9a84c" : "rgba(201,168,76,0.25)",
//                     border: "1px solid rgba(201,168,76,0.35)",
//                   }} />
//               ))}
//             </div>

//             <button onClick={next}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#c9a84c" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.08)"}>
//               <ChevronRight size={16} />
//             </button>

//             <button onClick={() => setIsPlaying(p => !p)}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: "rgba(201,168,76,0.65)" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.18)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.06)"}>
//               {isPlaying ? <Pause size={14} /> : <Play size={14} />}
//             </button>
//           </div>

//           {isPlaying && (
//             <div className="w-40 h-0.5 rounded-full overflow-hidden mt-3" style={{ background: "rgba(201,168,76,0.15)" }}>
//               <motion.div
//                 key={`${current}-${isPlaying}`}
//                 className="h-full rounded-full"
//                 style={{ background: "#c9a84c" }}
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
//               />
//             </div>
//           )}
//         </div>

//         {/* RIGHT — title + description */}
//         <div className="flex-1 flex flex-col justify-center pt-0 lg:pt-0">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 28 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -18 }}
//               transition={{ duration: 0.42 }}
//               className="flex flex-col gap-5"
//             >
//               <p className="text-xs tracking-widest uppercase"
//                 style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//                 {String(current + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(TOTAL).padStart(2, "0")}
//               </p>

//               <h3 className="text-2xl md:text-3xl font-medium leading-tight"
//                 style={{ color: "#f0e8d0", fontFamily: "Georgia, serif" }}>
//                 {book.title}
//               </h3>

//               <div className="w-12 h-px" style={{ background: "#c9a84c" }} />

//               <span className="self-start px-3 py-1 rounded-full text-xs tracking-wider"
//                 style={{
//                   background: "rgba(201,168,76,0.12)",
//                   border: "1px solid rgba(201,168,76,0.3)",
//                   color: "#c9a84c",
//                   fontFamily: "Georgia, serif",
//                 }}>
//                 {book.year}
//               </span>

//               <p className="text-sm leading-relaxed"
//                 style={{
//                   color: "rgba(220,210,240,0.65)",
//                   fontFamily: "Georgia, serif",
//                   fontStyle: "italic",
//                   maxWidth: 380,
//                 }}>
//                 {book.desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* ── Also Published ── */}
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
//           <p className="text-xs tracking-widest uppercase" style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//             Also Published
//           </p>
//           <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
//           {booksWithoutCovers.map((book, i) => (
//             <motion.div
//               key={book.title}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.03 }}
//               whileHover={{ x: 4 }}
//               className="flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-default transition-all duration-200"
//               style={{ background: "rgba(255,255,255,0.02)" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.05)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
//             >
//               <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
//               <div>
//                 <p className="text-xs font-medium leading-snug transition-colors duration-200 group-hover:text-amber-400"
//                   style={{ fontFamily: "Georgia, serif", color: "#d4c8a8" }}>
//                   {book.title}
//                 </p>
//                 <p className="text-xs mt-0.5" style={{ color: "rgba(201,168,76,0.45)" }}>{book.year}</p>
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
//     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)" }}
//     onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
//     onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
//   >
//     <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
//       style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
//       <FileText size={16} style={{ color: "#c9a84c" }} />
//     </div>
//     <div>
//       <h4 className="font-medium text-sm leading-snug transition-colors duration-300 group-hover:text-amber-400"
//         style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>{article.title}</h4>
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
//     initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.15 }}
//     whileHover={{ y: -6, transition: { duration: 0.3 } }}
//     className="rounded-xl p-7 text-center relative overflow-hidden group cursor-default"
//     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}
//   >
//     {[["top-3 left-3","borderTop","borderLeft"],["top-3 right-3","borderTop","borderRight"],
//       ["bottom-3 left-3","borderBottom","borderLeft"],["bottom-3 right-3","borderBottom","borderRight"]].map(([pos,a,b],i) => (
//       <div key={i} className={`absolute ${pos} w-4 h-4 pointer-events-none`}
//         style={{ [a]: "1px solid rgba(201,168,76,0.35)", [b]: "1px solid rgba(201,168,76,0.35)" }} />
//     ))}
//     <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 12 }} transition={{ duration: 0.3 }} className="inline-flex mb-4">
//       <Feather size={20} style={{ color: "#c9a84c" }} />
//     </motion.div>
//     <h4 className="text-base font-medium mb-4 transition-colors duration-300 group-hover:text-amber-400"
//       style={{ fontFamily: "Georgia, serif", color: "#f0e8d0" }}>{poem.title}</h4>
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
//   const isInView = useInView(ref, { once: true, amount: 0 });

//   return (
//     <section id="works" ref={ref} className="relative py-24 overflow-hidden"
//       style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)" }}>
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
//           style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }} />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }} className="text-center mb-14">
//           <motion.p initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.22em" } : {}}
//             transition={{ duration: 1.1, delay: 0.2 }}
//             className="text-xs font-medium uppercase mb-3"
//             style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
//             Bibliography
//           </motion.p>
//           <h2 className="text-4xl md:text-5xl font-medium mb-4"
//             style={{ fontFamily: "Georgia, serif", color: "#f0e8d0", letterSpacing: "-0.01em" }}>
//             Literary <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Works</span>
//           </h2>
//           <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="w-20 h-px mx-auto origin-center"
//             style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />
//         </motion.div>

//         {/* Tabs */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center gap-1 mb-14">
//           {tabs.map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
//               style={{
//                 fontFamily: "Georgia, serif",
//                 color: activeTab === tab.id ? "#c9a84c" : "rgba(201,168,76,0.45)",
//                 background: activeTab === tab.id ? "rgba(201,168,76,0.1)" : "transparent",
//                 border: `1px solid ${activeTab === tab.id ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}`,
//               }}>
//               <tab.icon size={14} />
//               {tab.label}
//               {activeTab === tab.id && (
//                 <motion.div layoutId="tabUnderline" className="absolute -bottom-0.5 left-4 right-4 h-px"
//                   style={{ background: "#c9a84c" }}
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
//           {activeTab === "poems" && (
//             <motion.div key="poems" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-6">
//               {poems.map((p, i) => <PoemCard key={p.title} poem={p} index={i} />)}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default LiteraryWorksSection;

















// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import bookCover1 from "@/assets/book1.jpeg";
// import bookCover2 from "@/assets/book2.jpeg";
// import bookCover3 from "@/assets/book3.jpeg";
// import bookCover4 from "@/assets/book4.jpeg";
// import bookCover5 from "@/assets/book5.jpeg";
// import bookCover6 from "@/assets/book6.jpeg";

// /* ─────────────────────────────────────────
//    THEME TOKENS  — darkened for readability on cream/light backgrounds
// ───────────────────────────────────────── */
// const T = {
//   title:   "#1a0f07",        // very dark brown — was #2c1810 (too light)
//   body:    "#3d2410",        // dark brown — was #5a3e2b
//   muted:   "#5c3d22",        // medium brown — was #7a6652
//   gold:    "#8a5e00",        // deep dark gold — was #b8860b (too pale on cream)
//   goldBg:  "rgba(138,94,0,0.10)",
//   goldBd:  "rgba(138,94,0,0.40)",
//   divider: "rgba(138,94,0,0.35)",
//   cardBg:  "rgba(0,0,0,0.05)",
//   cardBd:  "rgba(138,94,0,0.20)",
// };

// /* ─────────────────────────────────────────
//    DATA
// ───────────────────────────────────────── */
// const tabs = [
//   { id: "books",    label: "Books",    icon: BookOpen },
//   { id: "articles", label: "Articles", icon: FileText },
//   { id: "poems",    label: "Poems",    icon: Feather },
// ];

// const booksWithCovers = [
//   { title: "Devarayanadurga Divyadarshan", year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
//   { title: "Tumkur District Temples",      year: "", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
//   { title: "Weaver Culture and History",   year: "", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
//   { title: "My Mind, My People",           year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
//   { title: "Silver Bowl",                  year: "", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
//   { title: "Seasons of Memory",            year: "", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
// ];

// const booksWithoutCovers = [
//   { title: "Kannada Grammar", },
//   { title: "Srikshetra Shivagange",  },
//   { title: "Mahalakshmi Kshetra Goravanahalli",  },
//   { title: "Srikshetra Sidharbetta",},
//   { title: "Sri Kamakshi Sharadamba, Hebbar", },
//   { title: "Vidyashankar Temple",  },
//   { title: "Siddaganga Mahakshetra", },
//   { title: "Minchakal Gollahalli Anjaneyaswamy", },
//   { title: "Sheebi Lakshminarayana Swamy",  },
//   { title: "Uddhana Veerabhadraswamy, Halenijagallu",  },
//   { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu", },
//   { title: "Araluguppe Channakesavaswamy", },
//   { title: "Mallikarjunaswamy, Pankajahalli",  },
//   { title: "Yogamadhavaswamy, Shettigere",  },
//   { title: "Kedareshwar Temple, Nagalapuram",  },
//   { title: "Vighnasante Temples",  },
//   { title: "Nonavinakere Temples",  },
//   { title: "Kodiyala Padmashali History and Culture", },
//   { title: "History & Culture of Traditional Weavers of South India",  },
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

//   return (
//     <div className="w-full flex flex-col gap-14">

//       {/* carousel LEFT + info RIGHT */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 max-w-4xl mx-auto w-full">

//         {/* LEFT — horizontal fan carousel */}
//         <div className="flex-shrink-0 flex flex-col items-center">
//           <div className="relative flex items-center justify-center"
//             style={{ width: 420, height: 310, perspective: 1200 }}>
//             {booksWithCovers.map((b, idx) => {
//               const s = getStyle(idx);
//               return (
//                 <motion.div
//                   key={b.title}
//                   className="absolute cursor-pointer"
//                   style={{ width: 180, transformStyle: "preserve-3d" }}
//                   animate={{
//                     x: s.x, scale: s.scale, opacity: s.opacity,
//                     rotateY: s.rotateY, filter: `blur(${s.blur}px)`, zIndex: s.zIndex,
//                   }}
//                   transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
//                   onClick={() => { if (idx !== current) goTo(idx); }}
//                 >
//                   <div className="relative" style={{ width: 180, height: 262 }}>
//                     <div className="absolute left-0 top-0 bottom-0 w-4 rounded-l-sm z-10"
//                       style={{ background: "linear-gradient(to right, #0d0700, rgba(0,0,0,0.7), transparent)" }} />
//                     <div className="absolute right-0 top-1 bottom-1 w-3 rounded-r z-10"
//                       style={{ background: "repeating-linear-gradient(to bottom,#f5ead0 0,#f5ead0 1.2px,#ddc898 1.2px,#ddc898 2.4px)" }} />
//                     <div className="absolute inset-0 rounded-r-md overflow-hidden"
//                       style={{
//                         boxShadow: idx === current
//                           ? "inset 3px 0 10px rgba(0,0,0,0.35), 6px 12px 40px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)"
//                           : "inset 2px 0 6px rgba(0,0,0,0.25), 4px 8px 20px rgba(0,0,0,0.2)",
//                       }}>
//                       <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 pointer-events-none"
//                         style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.2)" }} />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Controls */}
//           <div className="flex items-center gap-4 mt-5">
//             <button onClick={prev}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: `1px solid ${T.goldBd}`, background: T.goldBg, color: T.gold }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.18)"}
//               onMouseLeave={e => e.currentTarget.style.background = T.goldBg}>
//               <ChevronLeft size={16} />
//             </button>

//             <div className="flex gap-2 items-center">
//               {booksWithCovers.map((_, i) => (
//                 <button key={i} onClick={() => goTo(i)}
//                   className="transition-all duration-300 rounded-full"
//                   style={{
//                     width: i === current ? 22 : 7, height: 7,
//                     background: i === current ? T.gold : "rgba(138,94,0,0.30)",
//                     border: `1px solid ${T.goldBd}`,
//                   }} />
//               ))}
//             </div>

//             <button onClick={next}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: `1px solid ${T.goldBd}`, background: T.goldBg, color: T.gold }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.18)"}
//               onMouseLeave={e => e.currentTarget.style.background = T.goldBg}>
//               <ChevronRight size={16} />
//             </button>

//             <button onClick={() => setIsPlaying(p => !p)}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
//               style={{ border: `1px solid rgba(138,94,0,0.25)`, background: "rgba(138,94,0,0.06)", color: T.gold }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.15)"}
//               onMouseLeave={e => e.currentTarget.style.background = "rgba(138,94,0,0.06)"}>
//               {isPlaying ? <Pause size={14} /> : <Play size={14} />}
//             </button>
//           </div>

//           {isPlaying && (
//             <div className="w-40 h-0.5 rounded-full overflow-hidden mt-3" style={{ background: "rgba(138,94,0,0.15)" }}>
//               <motion.div
//                 key={`${current}-${isPlaying}`}
//                 className="h-full rounded-full"
//                 style={{ background: T.gold }}
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
//               />
//             </div>
//           )}
//         </div>

//         {/* RIGHT — title + description */}
//         <div className="flex-1 flex flex-col justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 28 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -18 }}
//               transition={{ duration: 0.42 }}
//               className="flex flex-col gap-5"
//             >
//               {/* Counter — dark enough to read */}
//               <p className="text-xs tracking-widest uppercase"
//                 style={{ color: T.gold, fontFamily: "Georgia, serif", fontWeight: 600 }}>
//                 {String(current + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(TOTAL).padStart(2, "0")}
//               </p>

//               {/* Book title */}
//               <h3 className="text-2xl md:text-3xl font-medium leading-tight"
//                 style={{ color: T.title, fontFamily: "Georgia, serif" }}>
//                 {book.title}
//               </h3>

//               <div className="w-12 h-px" style={{ background: T.gold }} />

//               {/* Year badge */}
//               <span className="self-start px-3 py-1 rounded-full text-xs tracking-wider font-semibold"
//                 style={{ background: T.goldBg, border: `1px solid ${T.goldBd}`, color: T.gold, fontFamily: "Georgia, serif" }}>
//                 {book.year}
//               </span>

//               {/* Description */}
//               <p className="text-sm leading-relaxed"
//                 style={{ color: T.body, fontFamily: "Georgia, serif", fontStyle: "italic", maxWidth: 380 }}>
//                 {book.desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Also Published */}
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex-1 h-px" style={{ background: T.divider }} />
//           <p className="text-xs tracking-widest uppercase font-semibold"
//             style={{ color: T.gold, fontFamily: "Georgia, serif" }}>
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
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.06)"}
//               onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//             >
//               <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: T.gold }} />
//               <div>
//                 {/* Book title — now visibly dark */}
//                 <p className="text-xs font-semibold leading-snug transition-colors duration-200 group-hover:text-amber-800"
//                   style={{ fontFamily: "Georgia, serif", color: T.body }}>
//                   {book.title}
//                 </p>
//                 <p className="text-xs mt-0.5 font-medium" style={{ color: T.muted }}>{}</p>
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
//     onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(138,94,0,0.45)"}
//     onMouseLeave={e => e.currentTarget.style.borderColor = T.cardBd}
//   >
//     <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
//       style={{ background: T.goldBg, border: `1px solid ${T.goldBd}` }}>
//       <FileText size={16} style={{ color: T.gold }} />
//     </div>
//     <div>
//       <h4 className="font-semibold text-sm leading-snug transition-colors duration-300 group-hover:text-amber-800"
//         style={{ fontFamily: "Georgia, serif", color: T.title }}>{article.title}</h4>
//       <p className="text-xs mt-1 font-medium" style={{ color: T.muted }}>
//         {article.venue} · <span style={{ color: T.gold }}>{article.year}</span>
//       </p>
//     </div>
//   </motion.div>
// );

// /* ─────────────────────────────────────────
//    POEM CARD
// ───────────────────────────────────────── */
// const PoemCard = ({ poem, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.15 }}
//     whileHover={{ y: -6, transition: { duration: 0.3 } }}
//     className="rounded-xl p-7 text-center relative overflow-hidden group cursor-default"
//     style={{ background: T.cardBg, border: `1px solid ${T.cardBd}` }}
//   >
//     {[["top-3 left-3","borderTop","borderLeft"],["top-3 right-3","borderTop","borderRight"],
//       ["bottom-3 left-3","borderBottom","borderLeft"],["bottom-3 right-3","borderBottom","borderRight"]].map(([pos,a,b],i) => (
//       <div key={i} className={`absolute ${pos} w-4 h-4 pointer-events-none`}
//         style={{ [a]: `1px solid ${T.goldBd}`, [b]: `1px solid ${T.goldBd}` }} />
//     ))}
//     <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 12 }} transition={{ duration: 0.3 }} className="inline-flex mb-4">
//       <Feather size={20} style={{ color: T.gold }} />
//     </motion.div>
//     <h4 className="text-base font-semibold mb-4 transition-colors duration-300 group-hover:text-amber-800"
//       style={{ fontFamily: "Georgia, serif", color: T.title }}>{poem.title}</h4>
//     <div className="w-8 h-px mx-auto mb-4" style={{ background: T.divider }} />
//     <p className="text-xs leading-relaxed italic"
//       style={{ color: T.body, fontFamily: "Georgia, serif" }}>
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
//   const isInView = useInView(ref, { once: true, amount: 0 });

//   return (
//     <section id="works" ref={ref} className="relative py-24 overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">

//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }} className="text-center mb-14">
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.22em" } : {}}
//             transition={{ duration: 1.1, delay: 0.2 }}
//             className="text-xs font-bold uppercase mb-3"
//             style={{ color: T.gold, fontFamily: "Georgia, serif" }}>
//             Bibliography
//           </motion.p>
//           {/* Section heading — dark brown, fully readable */}
//           <h2 className="text-4xl md:text-5xl font-medium mb-4"
//             style={{ fontFamily: "Georgia, serif", color: T.title, letterSpacing: "-0.01em" }}>
//             Literary <span style={{ color: T.gold, fontStyle: "italic" }}>Works</span>
//           </h2>
//           <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="w-20 h-px mx-auto origin-center"
//             style={{ background: `linear-gradient(to right, transparent, ${T.gold}, transparent)` }} />
//         </motion.div>

//         {/* Tabs */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center gap-1 mb-14">
//           {tabs.map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
//               style={{
//                 fontFamily: "Georgia, serif",
//                 // Active tab: dark gold text; inactive: dark brown (not washed-out gray)
//                 color: activeTab === tab.id ? T.gold : T.body,
//                 background: activeTab === tab.id ? T.goldBg : "transparent",
//                 border: `1px solid ${activeTab === tab.id ? T.goldBd : "rgba(138,94,0,0.25)"}`,
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
//           {activeTab === "poems" && (
//             <motion.div key="poems" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-6">
//               {poems.map((p, i) => <PoemCard key={p.title} poem={p} index={i} />)}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default LiteraryWorksSection;









// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import bookCover1 from "@/assets/book1.jpeg";
// import bookCover2 from "@/assets/book2.jpeg";
// import bookCover3 from "@/assets/book3.jpeg";
// import bookCover4 from "@/assets/book4.jpeg";
// import bookCover5 from "@/assets/book5.jpeg";
// import bookCover6 from "@/assets/book6.jpeg";

// /* ─────────────────────────────────────────
//    THEME TOKENS — darkened for readability on cream/light backgrounds
// ───────────────────────────────────────── */
// const T = {
//   title:   "#1a0f07",        // very dark brown — was #2c1810 (too light)
//   body:    "#3d2410",        // dark brown — was #5a3e2b
//   muted:   "#5c3d22",        // medium brown — was #7a6652
//   gold:    "#8a5e00",        // deep dark gold — was #b8860b (too pale on cream)
//   goldBg:  "rgba(138,94,0,0.10)",
//   goldBd:  "rgba(138,94,0,0.40)",
//   divider: "rgba(138,94,0,0.35)",
//   cardBg:  "rgba(0,0,0,0.05)",
//   cardBd:  "rgba(138,94,0,0.20)",
// };

// /* ─────────────────────────────────────────
//    DATA — descriptions and book names without spaces
// ───────────────────────────────────────── */
// const tabs = [
//   { id: "books",    label: "Books",    icon: BookOpen },
//   { id: "articles", label: "Articles", icon: FileText },
 
// ];

// const booksWithCovers = [
//   { title: "Devarayanadurga Divyadarshan", year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
//   { title: "Tumkur District Temples",      year: "", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
//   { title: "Weaver Culture and History",   year: "", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
//   { title: "My Mind, My People",           year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
//   { title: "Silver Bowl",                  year: "", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
//   { title: "Seasons of Memory",            year: "", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
// ];

// const booksWithoutCovers = [
//   { title: "Kannada Grammar" },
//   { title: "Srikshetra Shivagange" },
//   { title: "Mahalakshmi Kshetra Goravanahalli" },
//   { title: "Srikshetra Sidharbetta" },
//   { title: "Sri Kamakshi Sharadamba, Hebbar" },
//   { title: "Vidyashankar Temple" },
//   { title: "Siddaganga Mahakshetra" },
//   { title: "Minchakal Gollahalli Anjaneyaswamy" },
//   { title: "Sheebi Lakshminarayana Swamy" },
//   { title: "Uddhana Veerabhadraswamy, Halenijagallu" },
//   { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu" },
//   { title: "Araluguppe Channakesavaswamy" },
//   { title: "Mallikarjunaswamy, Pankajahalli" },
//   { title: "Yogamadhavaswamy, Shettigere" },
//   { title: "Kedareshwar Temple, Nagalapuram" },
//   { title: "Vighnasante Temples" },
//   { title: "Nonavinakere Temples" },
//   { title: "Kodiyala Padmashali History and Culture" },
//   { title: "History & Culture of Traditional Weavers of South India" },
// ];

// const articles = [
//  { title: "Public Inspiration for the Change That Is Needed", venue: "", year: "" },
//   { title: "Subheeksha (Prosperity / Well-being)", venue: "", year: "" },
//   { title: "India Today", venue: "India Today", year: "" },
//   { title: "Samyukta Karnataka (Special Article)", venue: "Samyukta Karnataka", year: "" },
//   { title: "E Sanje (Special Report)", venue: "E Sanje", year: "" },
//   { title: "Vijayavani Article", venue: "Vijayavani", year: "" }, 
//   { title: "Special Magazine Feature Article", venue: "Special Magazine", year: "" },
// ];



// /* ─────────────────────────────────────────
//    BOOKSHELF SLIDER
// ───────────────────────────────────────── */
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

//   /* ── Flower Rangoli SVG ── */
//   const FlowerRangoli = () => (
//     <svg
//       viewBox="0 0 120 120"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ width: 72, height: 72, flexShrink: 0, opacity: 0.82 }}
//     >
//       <g transform="translate(60,60)">
//         {/* outer ring — 8 petals offset 22.5° */}
//         {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((deg, i) => (
//           <ellipse
//             key={`o${i}`}
//             cx="0" cy="-32" rx="4" ry="9"
//             fill="#fbd5df" opacity="0.38"
//             transform={`rotate(${deg})`}
//           />
//         ))}
//         {/* inner ring — 8 petals */}
//         {[0,45,90,135,180,225,270,315].map((deg, i) => (
//           <ellipse
//             key={`i${i}`}
//             cx="0" cy="-18" rx="5" ry="10"
//             fill="#f9c8d4" opacity="0.58"
//             transform={`rotate(${deg})`}
//           />
//         ))}
//         {/* tiny dot ring */}
//         {[0,45,90,135,180,225,270,315].map((deg, i) => (
//           <circle
//             key={`d${i}`}
//             cx={Math.round(Math.sin((deg * Math.PI) / 180) * 10)}
//             cy={Math.round(-Math.cos((deg * Math.PI) / 180) * 10)}
//             r="1.2"
//             fill="#f7a8bf" opacity="0.55"
//           />
//         ))}
//         {/* centre */}
//         <circle r="6" fill="#f7b6c8" opacity="0.75" />
//         <circle r="3" fill="#fde8ee" opacity="1" />
//       </g>
//     </svg>
//   );

//   return (
//     <div className="w-full flex flex-col gap-14">

//       {/* ── MAIN ROW: LEFT books | CENTER rangoli | RIGHT info+controls ── */}
//       <div
//         className="w-full max-w-5xl mx-auto"
//         style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0 32px" }}
//       >

//         {/* ── LEFT: book carousel ── */}
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
//                         <div
//                           className="absolute inset-0 pointer-events-none"
//                           style={{ boxShadow: "inset 6px 0 18px rgba(0,0,0,0.2)" }}
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ── CENTER: flower rangoli ── */}
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
//           <FlowerRangoli />
//           {/* thin vertical line above and below */}
//           <div style={{ width: 1, height: 48, background: "rgba(249,200,212,0.45)" }} />
//         </div>

//         {/* ── RIGHT: book info + nav controls ── */}
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
//                 <p
//                   style={{
//                     fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
//                     color: T.gold, fontFamily: "Georgia, serif", fontWeight: 600, margin: 0,
//                   }}
//                 >
//                   {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
//                 </p>
//                 <h3
//                   style={{
//                     fontSize: "clamp(1.3rem,2.5vw,1.75rem)", fontWeight: 500, lineHeight: 1.25,
//                     color: T.title, fontFamily: "Georgia, serif", margin: 0,
//                   }}
//                 >
//                   {book.title}
//                 </h3>
//                 <div style={{ width: 48, height: 1, background: T.gold }} />
//                 <span
//                   style={{
//                     display: "inline-block", alignSelf: "flex-start",
//                     padding: "3px 12px", borderRadius: 999, fontSize: 11,
//                     letterSpacing: "0.1em", fontWeight: 600,
//                     background: T.goldBg, border: `1px solid ${T.goldBd}`,
//                     color: T.gold, fontFamily: "Georgia, serif",
//                   }}
//                 >
//                   {book.year}
//                 </span>
//                 <p
//                   style={{
//                     fontSize: 13, lineHeight: 1.75, color: T.body,
//                     fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0,
//                   }}
//                 >
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
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.18)"}
//                 onMouseLeave={e => e.currentTarget.style.background = T.goldBg}
//               >
//                 <ChevronLeft size={16} />
//               </button>

//               {/* dots */}
//               <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
//                 {booksWithCovers.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => goTo(i)}
//                     style={{
//                       width: i === current ? 22 : 7, height: 7,
//                       borderRadius: 999, cursor: "pointer", padding: 0,
//                       background: i === current ? T.gold : "rgba(138,94,0,0.30)",
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
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.18)"}
//                 onMouseLeave={e => e.currentTarget.style.background = T.goldBg}
//               >
//                 <ChevronRight size={16} />
//               </button>

//               <button
//                 onClick={() => setIsPlaying(p => !p)}
//                 style={{
//                   width: 36, height: 36, borderRadius: "50%", display: "flex",
//                   alignItems: "center", justifyContent: "center", cursor: "pointer",
//                   border: `1px solid rgba(138,94,0,0.25)`,
//                   background: "rgba(138,94,0,0.06)", color: T.gold,
//                   transition: "background 0.2s",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.15)"}
//                 onMouseLeave={e => e.currentTarget.style.background = "rgba(138,94,0,0.06)"}
//               >
//                 {isPlaying ? <Pause size={14} /> : <Play size={14} />}
//               </button>
//             </div>

//             {/* progress bar */}
//             {isPlaying && (
//               <div
//                 style={{
//                   width: 140, height: 2, borderRadius: 999, overflow: "hidden",
//                   background: "rgba(138,94,0,0.15)", marginTop: 10,
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

//       {/* ── Also Published ── */}
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex-1 h-px" style={{ background: T.divider }} />
//           <p className="text-xs tracking-widest uppercase font-semibold"
//             style={{ color: T.gold, fontFamily: "Georgia, serif" }}>
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
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(138,94,0,0.06)"}
//               onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//             >
//               <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: T.gold }} />
//               <div>
//                 <p className="text-xs font-semibold leading-snug transition-colors duration-200 group-hover:text-amber-800"
//                   style={{ fontFamily: "Georgia, serif", color: T.body }}>
//                   {book.title}
//                 </p>
//                 <p className="text-xs mt-0.5 font-medium" style={{ color: T.muted }}></p>
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
//     onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(138,94,0,0.45)"}
//     onMouseLeave={e => e.currentTarget.style.borderColor = T.cardBd}
//   >
//     <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
//       style={{ background: T.goldBg, border: `1px solid ${T.goldBd}` }}>
//       <FileText size={16} style={{ color: T.gold }} />
//     </div>
//     <div>
//       <h4 className="font-semibold text-sm leading-snug transition-colors duration-300 group-hover:text-amber-800"
//         style={{ fontFamily: "Georgia, serif", color: T.title }}>{article.title}</h4>
//       <p className="text-xs mt-1 font-medium" style={{ color: T.muted }}>
//         {article.venue &&  <span style={{ color: T.gold }}>{article.year}</span>}
//       </p>
//     </div>
//   </motion.div>
// );

// /* ─────────────────────────────────────────
//    POEM CARD
// ───────────────────────────────────────── */
// const PoemCard = ({ poem, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.15 }}
//     whileHover={{ y: -6, transition: { duration: 0.3 } }}
//     className="rounded-xl p-7 text-center relative overflow-hidden group cursor-default"
//     style={{ background: T.cardBg, border: `1px solid ${T.cardBd}` }}
//   >
//     {[["top-3 left-3","borderTop","borderLeft"],["top-3 right-3","borderTop","borderRight"],
//       ["bottom-3 left-3","borderBottom","borderLeft"],["bottom-3 right-3","borderBottom","borderRight"]].map(([pos,a,b],i) => (
//       <div key={i} className={`absolute ${pos} w-4 h-4 pointer-events-none`}
//         style={{ [a]: `1px solid ${T.goldBd}`, [b]: `1px solid ${T.goldBd}` }} />
//     ))}
//     <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 12 }} transition={{ duration: 0.3 }} className="inline-flex mb-4">
//       <Feather size={20} style={{ color: T.gold }} />
//     </motion.div>
//     <h4 className="text-base font-semibold mb-4 transition-colors duration-300 group-hover:text-amber-800"
//       style={{ fontFamily: "Georgia, serif", color: T.title }}>{poem.title}</h4>
//     <div className="w-8 h-px mx-auto mb-4" style={{ background: T.divider }} />
//     <p className="text-xs leading-relaxed italic"
//       style={{ color: T.body, fontFamily: "Georgia, serif" }}>
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
//   const isInView = useInView(ref, { once: true, amount: 0 });

//   return (
//     <section id="works" ref={ref} className="relative py-24 overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">

//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }} className="text-center mb-14">
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.22em" } : {}}
//             transition={{ duration: 1.1, delay: 0.2 }}
//             className="text-xs font-bold uppercase mb-3"
//             style={{ color: T.gold, fontFamily: "Georgia, serif" }}>
//             Bibliography
//           </motion.p>
//           <h2 className="text-4xl md:text-5xl font-medium mb-4"
//             style={{ fontFamily: "Georgia, serif", color: T.title, letterSpacing: "-0.01em" }}>
//             Literary <span style={{ color: T.gold, fontStyle: "italic" }}>Works</span>
//           </h2>
//           <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="w-20 h-px mx-auto origin-center"
//             style={{ background: `linear-gradient(to right, transparent, ${T.gold}, transparent)` }} />
//         </motion.div>

//         {/* Tabs */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center gap-1 mb-14">
//           {tabs.map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
//               style={{
//                 fontFamily: "Georgia, serif",
//                 color: activeTab === tab.id ? T.gold : T.body,
//                 background: activeTab === tab.id ? T.goldBg : "transparent",
//                 border: `1px solid ${activeTab === tab.id ? T.goldBd : "rgba(138,94,0,0.25)"}`,
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
//   );
// };

// export default LiteraryWorksSection;














import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, Feather, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import bookCover1 from "@/assets/book1.jpeg";
import bookCover2 from "@/assets/book2.jpeg";
import bookCover3 from "@/assets/book3.jpeg";
import bookCover4 from "@/assets/book4.jpeg";
import bookCover5 from "@/assets/book5.jpeg";
import bookCover6 from "@/assets/book6.jpeg";

/* ─────────────────────────────────────────
   THEME TOKENS — darkened for readability on cream/light backgrounds
───────────────────────────────────────── */
const T = {
  title:   "#1e2a4a",           // dark navy — headings like "Higher Education", "Government Service"
  body:    "#3a3a3a",           // dark gray — body paragraph text
  muted:   "#6b7280",           // medium gray — secondary/muted text
  gold:    "#b8860b",           // gold — year labels like "1950", "1975–2010"
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
  { title: "Devarayanadurga Divyadarshan", year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover6 },
  { title: "Tumkur District Temples",      year: "", desc: "A sweeping narrative exploring the moral fabric of rural Karnataka, blending folklore with modern dilemmas.", cover: bookCover1 },
  { title: "Weaver Culture and History",   year: "", desc: "Essays on public service, ethics, and the role of literature in shaping civil society.", cover: bookCover5 },
  { title: "My Mind, My People",           year: "", desc: "Essays on the intersection of public service, ethics, and the role of literature in shaping civil society.", cover: bookCover3 },
  { title: "Silver Bowl",                  year: "", desc: "A poetry collection celebrating the landscapes, seasons, and spiritual rhythms of the Deccan plateau.", cover: bookCover2 },
  { title: "Seasons of Memory",            year: "", desc: "Essays on the intersection of public service, ethics, and cultural memory.", cover: bookCover4 },
];

const booksWithoutCovers = [
  { title: "Kannada Grammar" },
  { title: "Srikshetra Shivagange" },
  { title: "Mahalakshmi Kshetra Goravanahalli" },
  { title: "Srikshetra Sidharbetta" },
  { title: "Sri Kamakshi Sharadamba, Hebbar" },
  { title: "Vidyashankar Temple" },
  { title: "Siddaganga Mahakshetra" },
  { title: "Minchakal Gollahalli Anjaneyaswamy" },
  { title: "Sheebi Lakshminarayana Swamy" },
  { title: "Uddhana Veerabhadraswamy, Halenijagallu" },
  { title: "Sri Lakshmi Narasimhaswamy, Doddadalivattu" },
  { title: "Araluguppe Channakesavaswamy" },
  { title: "Mallikarjunaswamy, Pankajahalli" },
  { title: "Yogamadhavaswamy, Shettigere" },
  { title: "Kedareshwar Temple, Nagalapuram" },
  { title: "Vighnasante Temples" },
  { title: "Nonavinakere Temples" },
  { title: "Kodiyala Padmashali History and Culture" },
  { title: "History & Culture of Traditional Weavers of South India" },
];

const articles = [
  { title: "Public Inspiration for the Change That Is Needed", venue: "", year: "" },
  { title: "Subheeksha (Prosperity / Well-being)", venue: "", year: "" },
  { title: "India Today", venue: "India Today", year: "" },
  { title: "Samyukta Karnataka (Special Article)", venue: "Samyukta Karnataka", year: "" },
  { title: "E Sanje (Special Report)", venue: "E Sanje", year: "" },
  { title: "Vijayavani Article", venue: "Vijayavani", year: "" },
  { title: "Special Magazine Feature Article", venue: "Special Magazine", year: "" },
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
                {/* Counter — matches AboutSection's tracking-[0.2em] uppercase text-sm */}
                <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: T.gold }}>
                  {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                </p>

                {/* Title — matches AboutSection's font-heading font-bold text-3xl */}
                <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ color: T.title, margin: 0 }}>
                  {book.title}
                </h3>

                <div style={{ width: 48, height: 1, background: T.gold }} />

                {/* Year badge */}
                <span
                  className="font-medium text-xs tracking-[0.1em] uppercase inline-block self-start px-3 py-1 rounded-full"
                  style={{
                    background: T.goldBg, border: `1px solid ${T.goldBd}`, color: T.gold,
                  }}
                >
                  {book.year}
                </span>

                {/* Description — matches AboutSection's muted-foreground leading-relaxed */}
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
          {/* "Also Published" label — matches AboutSection's tracking-[0.2em] uppercase text-sm font-medium text-gold */}
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
                {/* Book title — matches AboutSection's font-heading font-semibold text-sm */}
                <p className="font-heading font-semibold text-sm leading-snug tracking-wide transition-colors duration-200 group-hover:text-[#2c3e6b]"
                  style={{ color: T.title, fontSize : "15px", fontWeight  : 1000 }}>
                  {book.title}
                </p>
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
      {/* Article title — matches AboutSection's font-heading font-semibold text-lg */}
      <h4 className="font-heading font-semibold text-sm leading-snug transition-colors duration-300 group-hover:text-[#2c3e6b]"
        style={{ color: T.title }}>{article.title}</h4>
      <p className="text-xs mt-1 font-medium" style={{ color: T.muted }}>
        {article.venue && <span style={{ color: T.gold }}>{article.year}</span>}
      </p>
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

        {/* Header — mirrors AboutSection header structure exactly */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }} className="text-center mb-14">

          {/* "Bibliography" label — matches AboutSection's text-gold tracking-[0.2em] uppercase text-sm font-medium */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-sm font-medium uppercase tracking-[0.2em] mb-2"
            style={{ color: T.gold }}
          >
            Bibliography
          </motion.p>

          {/* Main heading — matches AboutSection's font-heading font-bold text-3xl md:text-4xl lg:text-5xl */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            style={{ color: T.title }}>
            Literary <span style={{ color: T.gold, fontStyle: "italic" }}>Works</span>
          </h2>

          {/* Divider line — matches AboutSection's gold underline */}
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