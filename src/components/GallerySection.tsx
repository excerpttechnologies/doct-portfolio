// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { X, ZoomIn } from "lucide-react";
// import gallery1 from "@/assets/hero-portrait.jpg";
// import gallery2 from "@/assets/hero-portrait.jpg";
// import gallery3 from "@/assets/hero-portrait.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
// import gallery6 from "@/assets/gallery6.webp";
// import gallery7 from "@/assets/gallery7.webp";
// import gallery8 from "@/assets/gallery8.webp";
// import gallery9 from "@/assets/gallery9.webp";
// import gallery10 from "@/assets/gallery10.webp";
// import gallery11 from "@/assets/gallery11.webp";
// import gallery12 from "@/assets/gallery12.webp";
// import gallery13 from "@/assets/gallery13.webp";
// import gallery14 from "@/assets/gallery14.webp";
// import gallery15 from "@/assets/gallery15.webp";
// import gallery16 from "@/assets/gallery16.webp";
// import gallery17 from "@/assets/gallery17.webp";
// import gallery18 from "@/assets/gallery18.webp";
// import gallery19 from "@/assets/gallery19.webp";
// import gallery20 from "@/assets/gallery20.webp";
// import gallery21 from "@/assets/gallery21.webp";
// import gallery22 from "@/assets/gallery22.webp";
// import gallery23 from "@/assets/gallery23.webp";
// import gallery24 from "@/assets/gallery24.webp";
// import gallery25 from "@/assets/gallery25.webp";
// import gallery26 from "@/assets/gallery26.webp";
// import gallery27 from "@/assets/gallery27.webp";
// import gallery28 from "@/assets/gallery28.webp";
// import gallery29 from "@/assets/gallery29.webp";
// import gallery30 from "@/assets/gallery30.webp";
// import gallery31 from "@/assets/gallery31.webp";
// import gallery32 from "@/assets/gallery32.webp";
// import gallery33 from "@/assets/gallery33.webp";
// import gallery34 from "@/assets/gallery34.webp";
// import gallery35 from "@/assets/gallery35.webp";
// import gallery36 from "@/assets/gallery36.webp";
// import gallery37 from "@/assets/gallery37.webp";
// import gallery38 from "@/assets/gallery38.webp";
// import gallery39 from "@/assets/gallery39.webp";
// import gallery40 from "@/assets/gallery40.webp";
// import gallery41 from "@/assets/gallery41.webp";
// import gallery42 from "@/assets/gallery42.webp";
// import gallery43 from "@/assets/gallery43.webp";
// import gallery44 from "@/assets/gallery44.webp";
// import gallery45 from "@/assets/gallery45.webp";
// import gallery46 from "@/assets/gallery46.webp";
// import gallery47 from "@/assets/gallery47.webp";
// import gallery48 from "@/assets/gallery48.webp";
// import gallery49 from "@/assets/gallery49.webp";
// import gallery50 from "@/assets/gallery50.webp";

// const images = [
//   { src: gallery1, title: "Keynote Address at Literary Festival", span: "md:col-span-2 md:row-span-2" },
//   { src: gallery3, title: "Receiving the Rajyotsava Award", span: "" },
//   { src: gallery2, title: "Book Launch Event", span: "" },
// { src: gallery6, title: "Book Launch Event", span: "" },
//   { src: gallery4, title: "With Fellow Writers at Sahitya Sammelan", span: "" },
//   { src: gallery3, title: "Cultural Address at Hampi", span: "" },
//   { src: gallery6, title: "Book Launch Event", span: "" },
//   { src: gallery7, title: "Book Launch Event", span: "" },
//     { src: gallery8, title: "Book Launch Event", span: "" },
//         { src: gallery9, title: "Book Launch Event", span: "" },
//             { src: gallery10, title: "Book Launch Event", span: "" },
//          { src: gallery11, title: "Book Launch Event", span: "" },
//           { src: gallery12, title: "Book Launch Event", span: "" },
//  { src: gallery13, title: "Book Launch Event", span: "" },
//  { src: gallery14, title: "Book Launch Event", span: "" },
//   { src: gallery15, title: "Book Launch Event", span: "" },
//   { src: gallery16, title: "Book Launch Event", span: "" },
//   { src: gallery17, title: "Book Launch Event", span: "" },
//   { src: gallery18, title: "Book Launch Event", span: "" },
//   { src: gallery19, title: "Book Launch Event", span: "" },
//   { src: gallery20, title: "Book Launch Event", span: "" },
//   { src: gallery21, title: "Book Launch Event", span: "" },
//   { src: gallery22, title: "Book Launch Event", span: "" },
//   { src: gallery23, title: "Book Launch Event", span: "" },
//   { src: gallery24, title: "Book Launch Event", span: "" },
//   { src: gallery26, title: "Book Launch Event", span: "" },
//   { src: gallery27, title: "Book Launch Event", span: "" },
//   { src: gallery28, title: "Book Launch Event", span: "" },
//   { src: gallery29, title: "Book Launch Event", span: "" },
//   { src: gallery30, title: "Book Launch Event", span: "" },
//   { src: gallery31, title: "Book Launch Event", span: "" },
//   { src: gallery32, title: "Book Launch Event", span: "" },
//   { src: gallery33, title: "Book Launch Event", span: "" },
//   { src: gallery34, title: "Book Launch Event", span: "" },
//   { src: gallery35, title: "Book Launch Event", span: "" },
//   { src: gallery36, title: "Book Launch Event", span: "" },
//   { src: gallery37, title: "Book Launch Event", span: "" },
//   { src: gallery38, title: "Book Launch Event", span: "" },
//   { src: gallery39, title: "Book Launch Event", span: "" },
//   { src: gallery40, title: "Book Launch Event", span: "" },
//   { src: gallery41, title: "Book Launch Event", span: "" },
//   { src: gallery42, title: "Book Launch Event", span: "" },
//   { src: gallery43, title: "Book Launch Event", span: "" },
//   { src: gallery44, title: "Book Launch Event", span: "" },
//   { src: gallery45, title: "Book Launch Event", span: "" },
//   { src: gallery46, title: "Book Launch Event", span: "" },
//   { src: gallery47, title: "Book Launch Event", span: "" },
//   { src: gallery48, title: "Book Launch Event", span: "" },
//   { src: gallery49, title: "Book Launch Event", span: "" },
//   { src: gallery50, title: "Book Launch Event", span: "" },


// ];

// const GallerySection = () => {
//   const [lightbox, setLightbox] = useState<number | null>(null);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="gallery" className="section-padding bg-muted/50" ref={ref}>
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
//             Moments
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Photo <span className="text-gold">Gallery</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{ scale: 1.02 }}
//               className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.span}`}
//               onClick={() => setLightbox(i)}
//             >
//               <img
//                 src={img.src}
//                 alt={img.title}
//                 className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
//                 loading="lazy"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-4 md:p-6">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileHover={{ scale: 1 }}
//                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
//                     <ZoomIn size={20} className="text-gold" />
//                   </div>
//                 </motion.div>
//                 <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base text-center">{img.title}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Enhanced Lightbox */}
//         <AnimatePresence>
//           {lightbox !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
//               onClick={() => setLightbox(null)}
//             >
//               <motion.button
//                 initial={{ opacity: 0, rotate: -90 }}
//                 animate={{ opacity: 1, rotate: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10"
//                 onClick={() => setLightbox(null)}
//               >
//                 <X size={20} />
//               </motion.button>
//               <motion.img
//                 initial={{ scale: 0.7, opacity: 0, rotateY: -15 }}
//                 animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//                 exit={{ scale: 0.7, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 src={images[lightbox].src}
//                 alt={images[lightbox].title}
//                 className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
//               />
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute bottom-8 text-primary-foreground font-heading text-lg"
//               >
//                 {images[lightbox].title}
//               </motion.p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;










// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
// import gallery1 from "@/assets/hero-portrait.jpg";
// import gallery2 from "@/assets/hero-portrait.jpg";
// import gallery3 from "@/assets/hero-portrait.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
// import gallery6 from "@/assets/gallery6.webp";
// import gallery7 from "@/assets/gallery7.webp";
// import gallery8 from "@/assets/gallery8.webp";
// import gallery9 from "@/assets/gallery9.webp";
// import gallery10 from "@/assets/gallery10.webp";
// import gallery11 from "@/assets/gallery11.webp";
// import gallery12 from "@/assets/gallery12.webp";
// import gallery13 from "@/assets/gallery13.webp";
// import gallery14 from "@/assets/gallery14.webp";
// import gallery15 from "@/assets/gallery15.webp";
// import gallery16 from "@/assets/gallery16.webp";
// import gallery17 from "@/assets/gallery17.webp";
// import gallery18 from "@/assets/gallery18.webp";
// import gallery19 from "@/assets/gallery19.webp";
// import gallery20 from "@/assets/gallery20.webp";
// import gallery21 from "@/assets/gallery21.webp";
// import gallery22 from "@/assets/gallery22.webp";
// import gallery23 from "@/assets/gallery23.webp";
// import gallery24 from "@/assets/gallery24.webp";
// import gallery25 from "@/assets/gallery25.webp";
// import gallery26 from "@/assets/gallery26.webp";
// import gallery27 from "@/assets/gallery27.webp";
// import gallery28 from "@/assets/gallery28.webp";
// import gallery29 from "@/assets/gallery29.webp";
// import gallery30 from "@/assets/gallery30.webp";
// import gallery31 from "@/assets/gallery31.webp";
// import gallery32 from "@/assets/gallery32.webp";
// import gallery33 from "@/assets/gallery33.webp";
// import gallery34 from "@/assets/gallery34.webp";
// import gallery35 from "@/assets/gallery35.webp";
// import gallery36 from "@/assets/gallery36.webp";
// import gallery37 from "@/assets/gallery37.webp";
// import gallery38 from "@/assets/gallery38.webp";
// import gallery39 from "@/assets/gallery39.webp";
// import gallery40 from "@/assets/gallery40.webp";
// import gallery41 from "@/assets/gallery41.webp";
// import gallery42 from "@/assets/gallery42.webp";
// import gallery43 from "@/assets/gallery43.webp";
// import gallery44 from "@/assets/gallery44.webp";
// import gallery45 from "@/assets/gallery45.webp";
// import gallery46 from "@/assets/gallery46.webp";
// import gallery47 from "@/assets/gallery47.webp";
// import gallery48 from "@/assets/gallery48.webp";
// import gallery49 from "@/assets/gallery49.webp";
// import gallery50 from "@/assets/gallery50.webp";

// const images = [
//   { src: gallery1, title: "Keynote Address at Literary Festival" },
//   { src: gallery3, title: "Receiving the Rajyotsava Award" },
//   { src: gallery2, title: "Book Launch Event" },
//   { src: gallery6, title: "Book Launch Event" },
//   { src: gallery4, title: "With Fellow Writers at Sahitya Sammelan" },
//   { src: gallery3, title: "Cultural Address at Hampi" },
//   { src: gallery6, title: "Book Launch Event" },
//   { src: gallery7, title: "Book Launch Event" },
//   { src: gallery8, title: "Book Launch Event" },
//   { src: gallery9, title: "Book Launch Event" },
//   { src: gallery10, title: "Book Launch Event" },
//   { src: gallery11, title: "Book Launch Event" },
//   { src: gallery12, title: "Book Launch Event" },
//   { src: gallery13, title: "Book Launch Event" },
//   { src: gallery14, title: "Book Launch Event" },
//   { src: gallery15, title: "Book Launch Event" },
//   { src: gallery16, title: "Book Launch Event" },
//   { src: gallery17, title: "Book Launch Event" },
//   { src: gallery18, title: "Book Launch Event" },
//   { src: gallery19, title: "Book Launch Event" },
//   { src: gallery20, title: "Book Launch Event" },
//   { src: gallery21, title: "Book Launch Event" },
//   { src: gallery22, title: "Book Launch Event" },
//   { src: gallery23, title: "Book Launch Event" },
//   { src: gallery24, title: "Book Launch Event" },
//   { src: gallery26, title: "Book Launch Event" },
//   { src: gallery27, title: "Book Launch Event" },
//   { src: gallery28, title: "Book Launch Event" },
//   { src: gallery29, title: "Book Launch Event" },
//   { src: gallery30, title: "Book Launch Event" },
//   { src: gallery31, title: "Book Launch Event" },
//   { src: gallery32, title: "Book Launch Event" },
//   { src: gallery33, title: "Book Launch Event" },
//   { src: gallery34, title: "Book Launch Event" },
//   { src: gallery35, title: "Book Launch Event" },
//   { src: gallery36, title: "Book Launch Event" },
//   { src: gallery37, title: "Book Launch Event" },
//   { src: gallery38, title: "Book Launch Event" },
//   { src: gallery39, title: "Book Launch Event" },
//   { src: gallery40, title: "Book Launch Event" },
//   { src: gallery41, title: "Book Launch Event" },
//   { src: gallery42, title: "Book Launch Event" },
//   { src: gallery43, title: "Book Launch Event" },
//   { src: gallery44, title: "Book Launch Event" },
//   { src: gallery45, title: "Book Launch Event" },
//   { src: gallery46, title: "Book Launch Event" },
//   { src: gallery47, title: "Book Launch Event" },
//   { src: gallery48, title: "Book Launch Event" },
//   { src: gallery49, title: "Book Launch Event" },
//   { src: gallery50, title: "Book Launch Event" },
// ];

// const IMAGES_PER_FRAME = 10;
// const COLS = 5;

// const GallerySection = () => {
//   const [lightbox, setLightbox] = useState<number | null>(null);
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const totalFrames = Math.ceil(images.length / IMAGES_PER_FRAME);

//   const goToFrame = useCallback(
//     (next: number, dir: number) => {
//       if (isAnimating) return;
//       setDirection(dir);
//       setIsAnimating(true);
//       setCurrentFrame(next);
//     },
//     [isAnimating]
//   );

//   const goToNext = useCallback(() => {
//     goToFrame((currentFrame + 1) % totalFrames, 1);
//   }, [currentFrame, totalFrames, goToFrame]);

//   const goToPrev = useCallback(() => {
//     goToFrame((currentFrame - 1 + totalFrames) % totalFrames, -1);
//   }, [currentFrame, totalFrames, goToFrame]);

//   // Auto-slide every 6 seconds, pauses on hover
//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(goToNext, 6000);
//     return () => clearInterval(timer);
//   }, [goToNext, isHovered]);

//   const frameImages = images.slice(
//     currentFrame * IMAGES_PER_FRAME,
//     currentFrame * IMAGES_PER_FRAME + IMAGES_PER_FRAME
//   );

//   return (
//     <section id="gallery" className="section-padding bg-muted/50" ref={ref}>
//       <div className="container mx-auto">
//         {/* Header */}
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
//             Moments
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Photo <span className="text-gold">Gallery</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         {/* Carousel */}
//         <div
//           className="relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Prev Button */}
//           <button
//             onClick={goToPrev}
//             disabled={isAnimating}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-11 h-11 rounded-full bg-navy/80 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 disabled:opacity-40 transition-all duration-300 shadow-lg"
//             aria-label="Previous"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             disabled={isAnimating}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-11 h-11 rounded-full bg-navy/80 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 disabled:opacity-40 transition-all duration-300 shadow-lg"
//             aria-label="Next"
//           >
//             <ChevronRight size={20} />
//           </button>

//           {/* Slide Track */}
//           <div className="overflow-hidden rounded-xl">
//             <AnimatePresence
//               custom={direction}
//               mode="popLayout"
//               onExitComplete={() => setIsAnimating(false)}
//             >
//               <motion.div
//                 key={currentFrame}
//                 custom={direction}
//                 variants={{ 
//                   initial: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
//                   exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }) 
//                 }}
//                 initial="initial"
//                 animate={{ x: 0 }}
//                 exit="exit"
//                 transition={{
//                   x: {
//                     duration: 1.2,
//                     ease: [0.16, 1, 0.3, 1], // expo out — slow graceful settle
//                   },
//                 }}
//                 className="grid gap-3 md:gap-4"
//                 style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
//               >
//                 {frameImages.map((img, i) => {
//                   const globalIndex = currentFrame * IMAGES_PER_FRAME + i;
//                   return (
//                     <motion.div
//                       key={i}
//                       whileHover={{ scale: 1.04 }}
//                       transition={{ duration: 0.35, ease: "easeOut" }}
//                       className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
//                       onClick={() => setLightbox(globalIndex)}
//                     >
//                       <img
//                         src={img.src}
//                         alt={img.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                       />
//                       {/* Hover overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-3">
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
//                             <ZoomIn size={16} className="text-gold" />
//                           </div>
//                         </div>
//                         <p className="text-primary-foreground font-heading font-semibold text-xs text-center leading-tight line-clamp-2">
//                           {img.title}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Progress bar */}
//           <div className="w-full h-0.5 bg-gold/10 rounded-full mt-5 overflow-hidden">
//             <motion.div
//               key={`progress-${currentFrame}-${isHovered}`}
//               className="h-full bg-gold rounded-full"
//               initial={{ width: "0%" }}
//               animate={{ width: isHovered ? "0%" : "100%" }}
//               transition={
//                 isHovered
//                   ? { duration: 0 }
//                   : { duration: 6, ease: "linear" }
//               }
//             />
//           </div>

//           {/* Dot Indicators */}
//           <div className="flex justify-center gap-2 mt-5">
//             {Array.from({ length: totalFrames }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   if (i === currentFrame) return;
//                   goToFrame(i, i > currentFrame ? 1 : -1);
//                 }}
//                 className={`transition-all duration-500 rounded-full ${
//                   i === currentFrame
//                     ? "w-7 h-2 bg-gold"
//                     : "w-2 h-2 bg-gold/30 hover:bg-gold/60"
//                 }`}
//                 aria-label={`Go to frame ${i + 1}`}
//               />
//             ))}
//           </div>

//           {/* Counter */}
//           <p className="text-center text-sm text-muted-foreground mt-2 font-medium tracking-wide">
//             {currentFrame + 1} <span className="text-gold">/</span> {totalFrames}
//           </p>
//         </div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {lightbox !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
//               onClick={() => setLightbox(null)}
//             >
//               <motion.button
//                 initial={{ opacity: 0, rotate: -90 }}
//                 animate={{ opacity: 1, rotate: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10"
//                 onClick={() => setLightbox(null)}
//               >
//                 <X size={20} />
//               </motion.button>

//               <button
//                 className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setLightbox((prev) => (prev! - 1 + images.length) % images.length);
//                 }}
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setLightbox((prev) => (prev! + 1) % images.length);
//                 }}
//               >
//                 <ChevronRight size={20} />
//               </button>

//               <motion.img
//                 key={lightbox}
//                 initial={{ scale: 0.88, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.88, opacity: 0 }}
//                 transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//                 src={images[lightbox].src}
//                 alt={images[lightbox].title}
//                 className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               />

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute bottom-8 text-primary-foreground font-heading text-lg"
//               >
//                 {images[lightbox].title}
//               </motion.p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;










// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
// import Footer from "./Footer";



// import img1 from "@/assets/hero-portrait.jpg";
// import img2 from "@/assets/hero-portrait.jpg";
// import img3 from "@/assets/hero-portrait.jpg";
// import gallery1 from "@/assets/gallery1.webp";
// import gallery2 from "@/assets/gallery2.webp";
// import gallery3 from "@/assets/gallery3.webp";
// import gallery4 from "@/assets/gallery4.webp"; 
// import gallery5 from "@/assets/gallery5.webp";
// import gallery6 from "@/assets/gallery6.webp";
// import gallery7 from "@/assets/gallery7.webp";
// import gallery8 from "@/assets/gallery8.webp";
// import gallery9 from "@/assets/gallery9.webp";
// import gallery10 from "@/assets/gallery10.webp";
// import gallery11 from "@/assets/gallery11.webp";
// import gallery12 from "@/assets/gallery12.webp";
// import gallery13 from "@/assets/gallery13.webp";
// import gallery14 from "@/assets/gallery14.webp";
// import gallery15 from "@/assets/gallery15.webp";
// import gallery16 from "@/assets/gallery16.webp";
// import gallery17 from "@/assets/gallery17.webp";
// import gallery18 from "@/assets/gallery18.webp";
// import gallery19 from "@/assets/gallery19.webp";
// import gallery20 from "@/assets/gallery20.webp";
// import gallery21 from "@/assets/gallery21.webp";
// import gallery22 from "@/assets/gallery22.webp";
// import gallery23 from "@/assets/gallery23.webp";
// import gallery24 from "@/assets/gallery24.webp";
// import gallery25 from "@/assets/gallery25.webp";
// import gallery26 from "@/assets/gallery26.webp";
// import gallery27 from "@/assets/gallery27.webp";
// import gallery28 from "@/assets/gallery28.webp";
// import gallery29 from "@/assets/gallery29.webp";
// import gallery30 from "@/assets/gallery30.webp";
// import gallery31 from "@/assets/gallery31.webp";
// import gallery32 from "@/assets/gallery32.webp";
// import gallery33 from "@/assets/gallery33.webp";
// import gallery34 from "@/assets/gallery34.webp";
// import gallery35 from "@/assets/gallery35.webp";
// import gallery36 from "@/assets/gallery36.webp";
// import gallery37 from "@/assets/gallery37.webp";
// import gallery38 from "@/assets/gallery38.webp";
// import gallery39 from "@/assets/gallery39.webp";
// import gallery40 from "@/assets/gallery40.webp";
// import gallery41 from "@/assets/gallery41.webp";
// import gallery42 from "@/assets/gallery42.webp";
// import gallery43 from "@/assets/gallery43.webp";
// import gallery44 from "@/assets/gallery44.webp";
// import gallery45 from "@/assets/gallery45.webp";
// import gallery46 from "@/assets/gallery46.webp";
// import gallery47 from "@/assets/gallery47.webp";
// import gallery48 from "@/assets/gallery48.webp";
// import gallery49 from "@/assets/gallery49.webp";
// import gallery50 from "@/assets/gallery50.webp";

// const images = [
 




//     { src: img1, title: "Keynote Address at Literary Festival" },
//   { src: img3, title: "Receiving the Rajyotsava Award" },
//   { src: img2, title: "Book Launch Event" },
//   { src: gallery1, title: "Book Launch Event" },
//   { src: gallery2, title: "Book Launch Event" },
//   { src: gallery3, title: "Book Launch Event" },
//   { src: gallery4, title: "Book Launch Event" },
//   { src: gallery5, title: "Book Launch Event" },
//   { src: gallery6, title: "Book Launch Event" },
//   { src: gallery7, title: "Book Launch Event" },
//   { src: gallery8, title: "Book Launch Event" },
//   { src: gallery9, title: "Book Launch Event" },
//   { src: gallery10, title: "Book Launch Event" },
//   { src: gallery11, title: "Book Launch Event" },
//   { src: gallery12, title: "Book Launch Event" },
//   { src: gallery13, title: "Book Launch Event" },
//   { src: gallery14, title: "Book Launch Event" },
//   { src: gallery15, title: "Book Launch Event" },
//   { src: gallery16, title: "Book Launch Event" },
//   { src: gallery17, title: "Book Launch Event" },
//   { src: gallery18, title: "Book Launch Event" },
//   { src: gallery19, title: "Book Launch Event" },
//   { src: gallery20, title: "Book Launch Event" },
//   { src: gallery21, title: "Book Launch Event" },
//   { src: gallery22, title: "Book Launch Event" },
//   { src: gallery23, title: "Book Launch Event" },
//   { src: gallery24, title: "Book Launch Event" },
//   { src: gallery25, title: "Book Launch Event" },
//   { src: gallery26, title: "Book Launch Event" },
//   { src: gallery27, title: "Book Launch Event" },
//   { src: gallery28, title: "Book Launch Event" },
//   { src: gallery29, title: "Book Launch Event" },
//   { src: gallery30, title: "Book Launch Event" },
//   { src: gallery31, title: "Book Launch Event" },
//   { src: gallery32, title: "Book Launch Event" },
//   { src: gallery33, title: "Book Launch Event" },
//   { src: gallery34, title: "Book Launch Event" },
//   { src: gallery35, title: "Book Launch Event" },
//   { src: gallery36, title: "Book Launch Event" },
//   { src: gallery37, title: "Book Launch Event" },
//   { src: gallery38, title: "Book Launch Event" },
//   { src: gallery39, title: "Book Launch Event" },
//   { src: gallery40, title: "Book Launch Event" },
//   { src: gallery41, title: "Book Launch Event" },
//   { src: gallery42, title: "Book Launch Event" },
//   { src: gallery43, title: "Book Launch Event" },
//   { src: gallery44, title: "Book Launch Event" },
//   { src: gallery45, title: "Book Launch Event" },
//   { src: gallery46, title: "Book Launch Event" },
//   { src: gallery47, title: "Book Launch Event" },
//   { src: gallery48, title: "Book Launch Event" },
//   { src: gallery49, title: "Book Launch Event" },
//   { src: gallery50, title: "Book Launch Event" },
  
// ];

// const IMAGES_PER_FRAME = 10;
// const COLS = 5;

// const GallerySection = () => {
//   const [lightbox, setLightbox] = useState<number | null>(null);
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const totalFrames = Math.ceil(images.length / IMAGES_PER_FRAME);

//   const goToFrame = useCallback(
//     (next: number, dir: number) => {
//       if (isAnimating) return;
//       setDirection(dir);
//       setIsAnimating(true);
//       setCurrentFrame(next);
//     },
//     [isAnimating]
//   );

//   const goToNext = useCallback(() => {
//     goToFrame((currentFrame + 1) % totalFrames, 1);
//   }, [currentFrame, totalFrames, goToFrame]);

//   const goToPrev = useCallback(() => {
//     goToFrame((currentFrame - 1 + totalFrames) % totalFrames, -1);
//   }, [currentFrame, totalFrames, goToFrame]);

//   // Auto-slide every 1 second, pauses on hover
//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(goToNext, 1000);
//     return () => clearInterval(timer);
//   }, [goToNext, isHovered]);

//   const frameImages = images.slice(
//     currentFrame * IMAGES_PER_FRAME,
//     currentFrame * IMAGES_PER_FRAME + IMAGES_PER_FRAME
//   );

//   return (
//     <>
//     <section id="gallery" className="section-padding bg-muted/50" ref={ref}>
//       <div className="container mx-auto">
//         {/* Header */}
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
//             Moments
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Photo <span className="text-gold">Gallery</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         {/* Carousel */}
//         <div
//           className="relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Prev Button */}
//           <button
//             onClick={goToPrev}
//             disabled={isAnimating}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-11 h-11 rounded-full bg-navy/80 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 disabled:opacity-40 transition-all duration-300 shadow-lg"
//             aria-label="Previous"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             disabled={isAnimating}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-11 h-11 rounded-full bg-navy/80 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 disabled:opacity-40 transition-all duration-300 shadow-lg"
//             aria-label="Next"
//           >
//             <ChevronRight size={20} />
//           </button>

//           {/* Slide Track */}
//           <div className="overflow-hidden rounded-xl">
//             <AnimatePresence
//               custom={direction}
//               mode="popLayout"
//               onExitComplete={() => setIsAnimating(false)}
//             >
//               <motion.div
//                 key={currentFrame}
//                 custom={direction}
//                 variants={{
//                   initial: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
//                   exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
//                 }}
//                 initial="initial"
//                 animate={{ x: 0 }}
//                 exit="exit"
//                 transition={{
//                   x: {
//                     duration: 0.45,        // ← was 1.2s, now snappy 0.45s
//                     ease: [0.25, 1, 0.35, 1],
//                   },
//                 }}
//                 className="grid gap-3 md:gap-4"
//                 style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
//               >
//                 {frameImages.map((img, i) => {
//                   const globalIndex = currentFrame * IMAGES_PER_FRAME + i;
//                   return (
//                     <motion.div
//                       key={i}
//                       whileHover={{ scale: 1.04 }}
//                       transition={{ duration: 0.35, ease: "easeOut" }}
//                       className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
//                       onClick={() => setLightbox(globalIndex)}
//                     >
//                       <img
//                         src={img.src}
//                         alt={img.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                       />
//                       {/* Hover overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-3">
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
//                             <ZoomIn size={16} className="text-gold" />
//                           </div>
//                         </div>
//                         <p className="text-primary-foreground font-heading font-semibold text-xs text-center leading-tight line-clamp-2">
//                           {img.title}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Progress bar */}
//           <div className="w-full h-0.5 bg-gold/10 rounded-full mt-5 overflow-hidden">
//             <motion.div
//               key={`progress-${currentFrame}-${isHovered}`}
//               className="h-full bg-gold rounded-full"
//               initial={{ width: "0%" }}
//               animate={{ width: isHovered ? "0%" : "100%" }}
//               transition={
//                 isHovered
//                   ? { duration: 0 }
//                   : { duration: 1, ease: "linear" }  // ← matches 1s interval
//               }
//             />
//           </div>

//           {/* Dot Indicators */}
//           <div className="flex justify-center gap-2 mt-5">
//             {Array.from({ length: totalFrames }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   if (i === currentFrame) return;
//                   goToFrame(i, i > currentFrame ? 1 : -1);
//                 }}
//                 className={`transition-all duration-500 rounded-full ${
//                   i === currentFrame
//                     ? "w-7 h-2 bg-gold"
//                     : "w-2 h-2 bg-gold/30 hover:bg-gold/60"
//                 }`}
//                 aria-label={`Go to frame ${i + 1}`}
//               />
//             ))}
//           </div>

//           {/* Counter */}
//           <p className="text-center text-sm text-muted-foreground mt-2 font-medium tracking-wide">
//             {currentFrame + 1} <span className="text-gold">/</span> {totalFrames}
//           </p>
//         </div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {lightbox !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
//               onClick={() => setLightbox(null)}
//             >
//               <motion.button
//                 initial={{ opacity: 0, rotate: -90 }}
//                 animate={{ opacity: 1, rotate: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10"
//                 onClick={() => setLightbox(null)}
//               >
//                 <X size={20} />
//               </motion.button>

//               <button
//                 className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setLightbox((prev) => (prev! - 1 + images.length) % images.length);
//                 }}
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setLightbox((prev) => (prev! + 1) % images.length);
//                 }}
//               >
//                 <ChevronRight size={20} />
//               </button>

//               <motion.img
//                 key={lightbox}
//                 initial={{ scale: 0.88, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.88, opacity: 0 }}
//                 transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//                 src={images[lightbox].src}
//                 alt={images[lightbox].title}
//                 className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               />

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute bottom-8 text-primary-foreground font-heading text-lg"
//               >
//                 {images[lightbox].title}
//               </motion.p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//     <Footer />
//     </> 
//   );
// };

// export default GallerySection;
















import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Footer from "./Footer";

import img1 from "@/assets/event-3a.webp";
import img2 from "@/assets/event-7a.webp";
import img3 from "@/assets/event3.webp";
import gallery1 from "@/assets/gallery1.webp";
import gallery2 from "@/assets/gallery2.webp";
import gallery3 from "@/assets/gallery3.webp";
import gallery4 from "@/assets/gallery4.webp";
import gallery5 from "@/assets/gallery5.webp";
import gallery6 from "@/assets/gallery6.webp";
import gallery7 from "@/assets/gallery7.webp";
import gallery8 from "@/assets/gallery8.webp";
import gallery9 from "@/assets/gallery9.webp";
import gallery10 from "@/assets/gallery10.webp";
import gallery11 from "@/assets/gallery11.webp";
import gallery12 from "@/assets/gallery12.webp";
import gallery13 from "@/assets/gallery13.webp";
import gallery14 from "@/assets/gallery14.webp";
import gallery15 from "@/assets/gallery15.webp";
import gallery16 from "@/assets/gallery16.webp";
import gallery17 from "@/assets/gallery17.webp";
import gallery18 from "@/assets/gallery18.webp";
import gallery19 from "@/assets/gallery19.webp";
import gallery20 from "@/assets/gallery20.webp";
import gallery21 from "@/assets/gallery21.webp";
import gallery22 from "@/assets/gallery22.webp";
import gallery23 from "@/assets/gallery23.webp";
import gallery24 from "@/assets/gallery24.webp";
import gallery25 from "@/assets/gallery25.webp";
import gallery26 from "@/assets/gallery26.webp";
import gallery27 from "@/assets/gallery27.webp";
import gallery28 from "@/assets/gallery28.webp";
import gallery29 from "@/assets/gallery29.webp";
import gallery30 from "@/assets/gallery30.webp";
import gallery31 from "@/assets/gallery31.webp";
import gallery32 from "@/assets/gallery32.webp";
import gallery33 from "@/assets/gallery33.webp";
import gallery34 from "@/assets/gallery34.webp";
import gallery35 from "@/assets/gallery35.webp";
import gallery36 from "@/assets/gallery36.webp";
import gallery37 from "@/assets/gallery37.webp";
import gallery38 from "@/assets/gallery38.webp";
import gallery39 from "@/assets/gallery39.webp";
import gallery40 from "@/assets/gallery40.webp";
import gallery41 from "@/assets/gallery41.webp";
import gallery42 from "@/assets/gallery42.webp";
import gallery43 from "@/assets/gallery43.webp";
import gallery44 from "@/assets/gallery44.webp";
import gallery45 from "@/assets/gallery45.webp";
import gallery46 from "@/assets/gallery46.webp";
import gallery47 from "@/assets/gallery47.webp";
import gallery48 from "@/assets/gallery48.webp";
import gallery49 from "@/assets/gallery49.webp";
import gallery50 from "@/assets/gallery50.webp";

const images = [
  { src: img1, title: "Keynote Address at Literary Festival" },
  { src: img3, title: "Receiving the Rajyotsava Award" },
  { src: img2, title: "Book Launch Event" },
  { src: gallery1, title: "Book Launch Event" },
  { src: gallery2, title: "Book Launch Event" },
  { src: gallery3, title: "Book Launch Event" },
  { src: gallery4, title: "Book Launch Event" },
  { src: gallery5, title: "Book Launch Event" },
  { src: gallery6, title: "Book Launch Event" },
  { src: gallery7, title: "Book Launch Event" },
  { src: gallery8, title: "Book Launch Event" },
  { src: gallery9, title: "Book Launch Event" },
  { src: gallery10, title: "Book Launch Event" },
  { src: gallery11, title: "Book Launch Event" },
  { src: gallery12, title: "Book Launch Event" },
  { src: gallery13, title: "Book Launch Event" },
  { src: gallery14, title: "Book Launch Event" },
  { src: gallery15, title: "Book Launch Event" },
  { src: gallery16, title: "Book Launch Event" },
  { src: gallery17, title: "Book Launch Event" },
  { src: gallery18, title: "Book Launch Event" },
  { src: gallery19, title: "Book Launch Event" },
  { src: gallery20, title: "Book Launch Event" },
  { src: gallery21, title: "Book Launch Event" },
  { src: gallery22, title: "Book Launch Event" },
  { src: gallery23, title: "Book Launch Event" },
  { src: gallery24, title: "Book Launch Event" },
  { src: gallery25, title: "Book Launch Event" },
  { src: gallery26, title: "Book Launch Event" },
  { src: gallery27, title: "Book Launch Event" },
  { src: gallery28, title: "Book Launch Event" },
  { src: gallery29, title: "Book Launch Event" },
  { src: gallery30, title: "Book Launch Event" },
  { src: gallery31, title: "Book Launch Event" },
  { src: gallery32, title: "Book Launch Event" },
  { src: gallery33, title: "Book Launch Event" },
  { src: gallery34, title: "Book Launch Event" },
  { src: gallery35, title: "Book Launch Event" },
  { src: gallery36, title: "Book Launch Event" },
  { src: gallery37, title: "Book Launch Event" },
  { src: gallery38, title: "Book Launch Event" },
  { src: gallery39, title: "Book Launch Event" },
  { src: gallery40, title: "Book Launch Event" },
  { src: gallery41, title: "Book Launch Event" },
  { src: gallery42, title: "Book Launch Event" },
  { src: gallery43, title: "Book Launch Event" },
  { src: gallery44, title: "Book Launch Event" },
  { src: gallery45, title: "Book Launch Event" },
  { src: gallery46, title: "Book Launch Event" },
  { src: gallery47, title: "Book Launch Event" },
  { src: gallery48, title: "Book Launch Event" },
  { src: gallery49, title: "Book Launch Event" },
  { src: gallery50, title: "Book Launch Event" },
];

const PREVIEW_COUNT = 8;
const PREVIEW_COLS = 4;
const FULL_COLS = 5;

const GallerySection = () => {
  const [viewMode, setViewMode] = useState<"preview" | "full">("preview");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const previewImages = images.slice(0, PREVIEW_COUNT);

  return (
  
      <section id="gallery" className="section-padding bg-muted/50" ref={ref}>
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-gold uppercase text-sm font-medium mb-2"
            >
              Moments
            </motion.p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Photo <span className="text-gold">Gallery</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
            />
            {viewMode === "preview" && (
              <p className="text-sm text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
                <Sparkles size={14} className="text-gold" />
                {PREVIEW_COUNT} memorable moments{" "}
                <span className="text-gold">•</span> Click "See More" for full
                collection
              </p>
            )}
          </motion.div>

          {/* PREVIEW MODE: static 9-image grid */}
          {viewMode === "preview" && (
            <>
              <div
                className="grid gap-3 md:gap-4"
                style={{ gridTemplateColumns: `repeat(${PREVIEW_COLS}, 1fr)` }}
              >
                {previewImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                    onClick={() => setLightbox(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-3">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
                          <ZoomIn size={16} className="text-gold" />
                        </div>
                      </div>
                      <p className="text-primary-foreground font-heading font-semibold text-xs text-center leading-tight line-clamp-2">
                        {img.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* See All button */}
              <div className="flex justify-center mt-10">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setViewMode("full")}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold/50 text-gold font-heading font-medium tracking-wide hover:bg-gold/10 transition-all duration-300"
                >
                  <Sparkles size={16} />
                  See All {images.length}+ Photos
                </motion.button>
              </div>
            </>
          )}

          {/* FULL MODE: every image shown at once, no carousel/arrows */}
          {viewMode === "full" && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-3 md:gap-4"
                style={{ gridTemplateColumns: `repeat(${FULL_COLS}, 1fr)` }}
              >
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.6) }}
                    whileHover={{ scale: 1.04 }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                    onClick={() => setLightbox(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-3">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
                          <ZoomIn size={16} className="text-gold" />
                        </div>
                      </div>
                      <p className="text-primary-foreground font-heading font-semibold text-xs text-center leading-tight line-clamp-2">
                        {img.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Show Less */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setViewMode("preview")}
                  className="text-sm text-gold hover:underline underline-offset-4 font-medium tracking-wide"
                >
                  Show Less
                </button>
              </div>
            </>
          )}
        </div>

        {/* Lightbox — shared between preview and full modes */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10"
                onClick={() => setLightbox(null)}
              >
                <X size={20} />
              </motion.button>

              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => (prev! - 1 + images.length) % images.length);
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => (prev! + 1) % images.length);
                }}
              >
                <ChevronRight size={20} />
              </button>

              <motion.img
                key={lightbox}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                src={images[lightbox].src}
                alt={images[lightbox].title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 text-primary-foreground font-heading text-lg"
              >
                {images[lightbox].title}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      
  );
};

export default GallerySection;