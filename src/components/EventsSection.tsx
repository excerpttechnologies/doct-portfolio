// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
// import Footer from "./Footer";

// const events = [
//   {
//     title: "Karnataka Literary Summit 2026",
//     date: "April 15–17, 2026",
//     time: "10:00 AM",
//     location: "Bangalore International Centre",
//     type: "Keynote Speaker",
//     status: "upcoming",
//     desc: "Delivering the inaugural address on 'The Future of Regional Literature in a Digital World'.",
//   },
//   {
//     title: "National Book Fair — Kannada Pavilion",
//     date: "May 5–10, 2026",
//     time: "11:00 AM",
//     location: "Pragati Maidan, New Delhi",
//     type: "Panel Discussion",
//     status: "upcoming",
//     desc: "Participating in a panel on translation, identity, and cross-cultural literary exchange.",
//   },
//   {
//     title: "Mysore Literary Festival 2025",
//     date: "December 8, 2025",
//     time: "3:00 PM",
//     location: "University of Mysore Auditorium",
//     type: "Guest of Honour",
//     status: "past",
//     desc: "Honoured as Guest of Honour and delivered a lecture on 'Poetry in the Age of Anxiety'.",
//   },
//   {
//     title: "World Kannada Conference",
//     date: "September 20, 2025",
//     time: "9:00 AM",
//     location: "Hampi Heritage Complex",
//     type: "Cultural Address",
//     status: "past",
//     desc: "Presented the cultural address on preserving ancient Kannada manuscripts and inscriptions.",
//   },
// ];

// const EventsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <>
//     <section id="events" className="section-padding bg-muted/50 relative overflow-hidden" ref={ref}>
//       {/* Decorative */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

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
//             Appearances
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Upcoming <span className="text-gold">Events</span>
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-6">
//           {events.map((event, i) => (
//             <motion.div
//               key={event.title}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
//               animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
//               whileHover={{ y: -6, transition: { duration: 0.3 } }}
//               className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30"
//             >
//               {/* Status bar */}
//               <div className={`absolute top-0 left-0 right-0 h-1 ${
//                 event.status === "upcoming"
//                   ? "bg-gradient-to-r from-gold via-gold-light to-gold"
//                   : "bg-gradient-to-r from-muted-foreground/30 via-muted-foreground/50 to-muted-foreground/30"
//               }`} />

//               <div className="p-6 md:p-8">
//                 <div className="flex items-start justify-between mb-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
//                     event.status === "upcoming"
//                       ? "bg-gold/15 text-gold"
//                       : "bg-muted text-muted-foreground"
//                   }`}>
//                     {event.type}
//                   </span>
//                   {event.status === "upcoming" && (
//                     <motion.span
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                       className="w-3 h-3 rounded-full bg-gold"
//                     />
//                   )}
//                 </div>

//                 <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
//                   {event.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>

//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
//                   <span className="flex items-center gap-1.5">
//                     <Calendar size={14} className="text-gold" />
//                     {event.date}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Clock size={14} className="text-gold" />
//                     {event.time}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <MapPin size={14} className="text-gold" />
//                     {event.location}
//                   </span>
//                 </div>

//                 {event.status === "upcoming" && (
//                   <motion.div
//                     initial={{ opacity: 0, width: 0 }}
//                     animate={isInView ? { opacity: 1, width: "auto" } : {}}
//                     transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
//                     className="mt-5"
//                   >
//                     <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-3 transition-all cursor-pointer">
//                       Learn More <ArrowRight size={14} />
//                     </span>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//     <Footer />
//     </>
//   );
// };

// export default EventsSection;












// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Calendar,
//   Clock,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
//   ArrowRight,
//   X,
// } from "lucide-react";
// import Footer from "./Footer";

// // Using images that already exist in your project (from the Gallery section).
// // Swap these for your real event-specific photos whenever you have them —
// // just replace the path on the right, e.g. "@/assets/gunavantha1.jpg"
// import event1Img1 from "@/assets/hero-portrait.jpg";
// import event1Img2 from "@/assets/hero-portrait.jpg";
// import event1Img3 from "@/assets/gallery1.webp";
// import event2Img1 from "@/assets/gallery2.webp";
// import event2Img2 from "@/assets/gallery3.webp";
// import event2Img3 from "@/assets/gallery4.webp";

// interface ConfluenceEvent {
//   id: string;
//   images: string[];
//   tagKn: string;
//   tagEn: string;
//   titleKn: string;
//   titleEn: string;
//   shortDescEn: string;
//   date: string;
//   time: string;
//   locationKn: string;
//   locationEn: string;
//   summaryKn: string;
//   summaryEn: string;
//   highlightsKn: string[];
//   highlightsEn: string[];
//   trust: string;
// }

// const events: ConfluenceEvent[] = [
//   {
//     id: "kannada-sahitya-sangeeta-sambhrama",
//     images: [event1Img1, event1Img2, event1Img3],
//     tagKn: "ರಾಜ್ಯ ಮಟ್ಟದ ಸಮಾರಂಭ",
//     tagEn: "State Level Festival",
//     titleKn: "ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮ",
//     titleEn: "State Level Kannada Literature & Music Festival",
//     shortDescEn:
//       "State-level celebration of the intimate bond between poets and artists through literature and music.",
//     date: "April 19, 2026",
//     time: "10:00 AM – 5:00 PM",
//     locationKn: "ಗಾಂಧಿ ಭವನ, ಬೆಂಗಳೂರು",
//     locationEn: "Gandhi Bhavan, Bengaluru",
//     summaryKn:
//       "ದಿನಾಂಕ 19. 4. 2026ರಂದು ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನದಲ್ಲಿ ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ ವತಿಯಿಂದ ಆಯೋಜಿಸಿದ್ದ ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ಸಮಾರಂಭವನ್ನು ನಾಡಿನ ಖ್ಯಾತ ಸಾಹಿತಿ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ನಾಡೋಜ ಹಂಪನಾ ರವರು ಉದ್ಘಾಟಿಸಿದರು. ಸಮಾರಂಭದ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪನವರು ಮತ್ತು ಅನೇಕ ಸಾಹಿತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಕಾರ್ಯಕ್ರಮದ ಆಯೋಜನೆಯನ್ನು ಡಾಕ್ಟರ್ ಸಿ.ಸಿ. ರವರ ನೇತೃತ್ವದಲ್ಲಿ ಸಂಭ್ರಮದಿಂದ ಜರಗಿತು. ಶುಭಾಗಳಲ್ಲಿ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುವ ಕವಿಗಳಿಗೂ ಕಲಾವಿದರಿಗೂ ನಿಕಟವಾದ ಸಂಬಂಧವಿದೆ ಎಂದು ಸಹಿತಿ ಹಂಚಿ ನಾಗರಾಜಯ್ಯ ಅವರು ಹೇಳಿದರು. ಕಲಾವಿದರು ಕುಂಚಿನ ಸಹಾಯದಿಂದ ದೊಡ್ಡ ಚಿತ್ರವನ್ನು ರೂಪಿಸುತ್ತಾರೆ. ಕವಿಯ ಬಳಿ ಶುಭಗಳು ಮಾತ್ರವಿಲ್ಲ, ಆ ಶುಭಗಳ ಮೂಲಕವೇ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುತ್ತಾರೆ. ಮಹಾನ್ ಕಾವ್ಯ, ಕಥೆಗಳನ್ನು ಕವಿ ಒಂದೇ ಒಂದು ಪ್ರಸ್ತುತಿಯಲ್ಲಿ ಶುಭಚಿತ್ರಗಳಿಗೆ ಸೆರೆಹಿಡಿಯುತ್ತಾನೆ. ಆ ಕಾವ್ಯ ಕಲಾವಿದರಿಗೆ ದೊರೆಯದ ಮಹಾನ್ ಚಿತ್ರವೊಂದು ಮೂಡುತ್ತದೆ. ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ 'ಮನದ ಸಿಂಹ' ಕೃತಿಯ ಲೋಕಾರ್ಪಣೆಗೆ ಚರ್ಚೆಯಾಯಿತು. ಕುಂಚಿ ಕಲಾವಿದ ಹಂತಿ ವಾಸಿ, ಗಾಯಕಿ ಡಾ. ಜಯಶ್ರೀ, ಸಾಹಿತಿ ಡಾ. ಕೆ.ಜಿ.ಎ. ನಾರಾಯಣಪ್ಪ, ಕನ್ನಡ ಪ್ರಾಧ್ಯಾಪಕ ಡಾ. ಎಸ್. ರಾಮಲ್ಲಿಂಗೇಶ್ವರ ಉಪಸ್ಥಿತರಿದ್ದರು.",
//     summaryEn:
//       "On April 19, 2026, the State Level Kannada Literature & Music Festival was organized by the Buddha Basava Gandhi Cultural Trust at Gandhi Bhavan, Bengaluru. The event was inaugurated by the renowned litterateur and honored Nadōja Hampana. Dr. K.G. Lakshmi Narayanappa and several other distinguished writers attended as guests of honor. The program was joyfully executed under the leadership of Dr. C.C. Renowned writer Nagarajayya spoke about the intimate bond between poets and artists. He explained that while artists create grand paintings using their brushes, poets paint pictures using only words — weaving emotions, metaphors, and imagery. Through a single stanza, a poet can capture entire epics and stories, creating a masterpiece that even artists may not fully replicate. The ceremony also featured a discussion on the release of the work 'Manada Simha'. Notable attendees included brush artist Hanti Vasi, singer Dr. Jayashree, writer Dr. K.G.A. Narayanappa, and Kannada professor Dr. S. Ramalingeshwara Uppithar.",
//     highlightsKn: [
//       "ಉದ್ಘಾಟನೆ: ನಾಡೋಜ ಹಂಪನಾ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪ",
//       "ಕವಿ-ಕಲಾವಿದ ಸಂವಾದ",
//       "'ಮನದ ಸಿಂಹ' ಕೃತಿ ಲೋಕಾರ್ಪಣೆ",
//       "ಸಂಗೀತ ಮತ್ತು ಕಾವ್ಯ ವಾಚನ",
//     ],
//     highlightsEn: [
//       "Inauguration: Nadōja Hampana",
//       "Special Presence: Dr. K.G. Lakshmi Narayanappa",
//       "Poet-Artist Dialogue",
//       "'Manada Simha' Book Launch",
//       "Music & Poetry Recitals",
//     ],
//     trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
//   },
//   {
//     id: "gunavantha-manju-gruhapravesha",
//     images: [event2Img1, event2Img2, event2Img3],
//     tagKn: "ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭ",
//     tagEn: "Housewarming Ceremony",
//     titleKn: "ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಗೃಹಪ್ರವೇಶ - ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮ",
//     titleEn: "Dr. Gunavantha Manju's Housewarming Ceremony - Satyanarayana Pooja",
//     shortDescEn:
//       "Housewarming Satyanarayana Pooja ceremony of litterateur, film director, producer and actor Dr. Gunavantha Manju.",
//     date: "April 10, 2026",
//     time: "9:00 AM – 1:00 PM",
//     locationKn: "ಟೀಚರ್ಸ್ ಕಾಲೋನಿ, ಕೆಆರ್ ಪುರಂ, ಬೆಂಗಳೂರು",
//     locationEn: "Teachers Colony, KR Puram, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರಿನ ಕೆಆರ್ ಪುರಂ ಬಳಿಯ ಟೀಚರ್ಸ್ ಕಾಲೋನಿಯಲ್ಲಿ ಸಾಹಿತಿ, ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ, ನಿರ್ಮಾಪಕ ಹಾಗೂ ನಟ ಡಾಕ್ಟರ್ ಗುಣವಂತ ಮಂಜು ರವರು ನೂತನವಾಗಿ ನಿರ್ಮಿಸಿರುವ ಗೃಹಪ್ರವೇಶ ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ವಿಶೇಷವಾಗಿ ಭಾಗವಹಿಸಿದ್ದರು. ಈ ಶುಭ ಸಂದರ್ಭದಲ್ಲಿ ಡಾ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಹೊಸ ನಿವಾಸವನ್ನು ಆಶೀರ್ವದಿಸಿದರು ಮತ್ತು ಅವರ ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಸೇವೆಯನ್ನು ಪ್ರಶಂಸಿಸಿದರು. ಗೃಹಪ್ರವೇಶದ ನಂತರ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯನ್ನು ವೈದಿಕ ವಿಧಿಗಳೊಂದಿಗೆ ನೆರವೇರಿಸಲಾಯಿತು. ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರಮುಖ ಸಾಹಿತಿಗಳು, ಚಲನಚಿತ್ರ ನಟರು, ನಿರ್ದೇಶಕರು ಮತ್ತು ಪತ್ರಕರ್ತರು ಸೇರಿದಂತೆ ಹಲವಾರು ಗಣ್ಯರು ಭಾಗವಹಿಸಿದ್ದರು. ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರು ಎಲ್ಲಾ ಅತಿಥಿಗಳಿಗೆ ಆತಿಥ್ಯ ನೀಡಿದರು ಮತ್ತು ತಮ್ಮ ಮುಂಬರುವ ಚಲನಚಿತ್ರ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಂಡರು. ಈ ಕಾರ್ಯಕ್ರಮವು ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಗಣ್ಯರು ಒಂದು ವೇದಿಕೆಯಲ್ಲಿ ಸೇರಿದ ಮಹತ್ವದ ಸಂದರ್ಭವಾಗಿತ್ತು.",
//     summaryEn:
//       "Dr. K.G. Lakshminarayanappa specially participated in the housewarming Satyanarayana Pooja ceremony of Dr. Gunavantha Manju, a noted litterateur, film director, producer and actor, at his newly constructed residence in Teachers Colony near KR Puram, Bengaluru. On this auspicious occasion, Dr. Lakshminarayanappa blessed Dr. Gunavantha Manju's new residence and appreciated his contributions to literature and the film industry. Following the housewarming, the Satyanarayana Pooja was performed with Vedic rituals. The ceremony witnessed the presence of several dignitaries including prominent writers, film actors, directors, and journalists. Dr. Gunavantha Manju hosted all the guests and shared information about his upcoming film projects. This event marked a significant occasion where luminaries from literature and cinema gathered on a single platform.",
//     highlightsKn: [
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ",
//       "ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ವಿಧಿ",
//       "ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಗಣ್ಯರ ಸಮಾಗಮ",
//       "ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಹೊಸ ಯೋಜನೆಗಳ ಮಾಹಿತಿ",
//     ],
//     highlightsEn: [
//       "Special Presence: Dr. K.G. Lakshminarayanappa",
//       "Satyanarayana Pooja Rituals",
//       "Confluence of Literature & Film Dignitaries",
//       "Announcement of Dr. Gunavantha Manju's Upcoming Projects",
//     ],
//     trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
//   },
// ];

// const EventCard = ({ event, index, isInView }: { event: ConfluenceEvent; index: number; isInView: boolean }) => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [readMoreOpen, setReadMoreOpen] = useState(false);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % event.images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + event.images.length) % event.images.length);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7, delay: 0.15 * index }}
//         className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30"
//       >
//         {/* Image carousel */}
//         <div className="relative aspect-[16/9] overflow-hidden bg-muted">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={imgIndex}
//               src={event.images[imgIndex]}
//               alt={event.titleEn}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="w-full h-full object-cover"
//             />
//           </AnimatePresence>

//           {event.images.length > 1 && (
//             <>
//               <button
//                 onClick={prevImg}
//                 aria-label="Previous image"
//                 className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               <button
//                 onClick={nextImg}
//                 aria-label="Next image"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
//               >
//                 <ChevronRight size={16} />
//               </button>
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//                 {event.images.map((_, i) => (
//                   <span
//                     key={i}
//                     className={`h-1.5 rounded-full transition-all ${
//                       i === imgIndex ? "w-5 bg-gold" : "w-1.5 bg-white/60"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <div className="flex items-start justify-between gap-3 mb-4">
//             <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold whitespace-nowrap">
//               {event.tagKn}
//             </span>
//             <span className="text-xs italic text-muted-foreground text-right">
//               {event.tagEn}
//             </span>
//           </div>

//           <h3 className="font-heading font-bold text-xl text-navy leading-snug mb-1">
//             {event.titleKn}
//           </h3>
//           <p className="text-gold font-medium text-sm mb-3">{event.titleEn}</p>

//           <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//             {event.shortDescEn}
//           </p>

//           <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
//             <span className="flex items-center gap-1.5">
//               <Calendar size={14} className="text-gold" />
//               {event.date}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Clock size={14} className="text-gold" />
//               {event.time}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <MapPin size={14} className="text-gold" />
//               {event.locationKn}
//             </span>
//           </div>

//           <button
//             onClick={() => setReadMoreOpen(true)}
//             className="w-full flex items-center justify-between px-5 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 font-medium"
//           >
//             <span className="flex items-center gap-2">
//               <ExternalLink size={15} />
//               ವಿವರಗಳನ್ನು ಓದಿ / Read More
//             </span>
//             <ArrowRight size={15} />
//           </button>
//         </div>
//       </motion.div>

//       {/* Read More modal */}
//       <AnimatePresence>
//         {readMoreOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4"
//             onClick={() => setReadMoreOpen(false)}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-card rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
//             >
//               {/* Modal image */}
//               <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted">
//                 <img
//                   src={event.images[imgIndex]}
//                   alt={event.titleEn}
//                   className="w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={() => setReadMoreOpen(false)}
//                   className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                   aria-label="Close"
//                 >
//                   <X size={18} />
//                 </button>
//                 {event.images.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImg}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                     >
//                       <ChevronLeft size={18} />
//                     </button>
//                     <button
//                       onClick={nextImg}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                     >
//                       <ChevronRight size={18} />
//                     </button>
//                   </>
//                 )}
//               </div>

//               <div className="p-6 md:p-8">
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold">
//                   {event.tagKn} • {event.tagEn}
//                 </span>

//                 <h2 className="font-heading font-bold text-2xl text-navy mt-4 mb-1">
//                   {event.titleKn}
//                 </h2>
//                 <p className="text-gold font-medium mb-4">{event.titleEn}</p>

//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
//                   <span className="flex items-center gap-1.5">
//                     <Calendar size={14} className="text-gold" />
//                     {event.date}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Clock size={14} className="text-gold" />
//                     {event.time}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <MapPin size={14} className="text-gold" />
//                     {event.locationKn} | {event.locationEn}
//                   </span>
//                 </div>

//                 {/* Kannada summary */}
//                 <h4 className="font-heading font-semibold text-navy mb-2">ಕನ್ನಡ | ಸಾರಾಂಶ</h4>
//                 <p className="text-sm text-foreground/90 leading-relaxed mb-6">
//                   {event.summaryKn}
//                 </p>

//                 {/* English summary */}
//                 <h4 className="font-heading font-semibold text-navy mb-2">English | Summary</h4>
//                 <p className="text-sm text-foreground/90 leading-relaxed mb-6">
//                   {event.summaryEn}
//                 </p>

//                 {/* Highlights */}
//                 <h4 className="font-heading font-semibold text-navy mb-3 flex items-center gap-2">
//                   ✨ ಪ್ರಮುಖ ಅಂಶಗಳು / Key Highlights
//                 </h4>
//                 <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
//                   <ul className="space-y-2">
//                     {event.highlightsKn.map((h, i) => (
//                       <li key={i} className="text-sm text-foreground/90 flex gap-2">
//                         <span className="text-gold">•</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>
//                   <ul className="space-y-2">
//                     {event.highlightsEn.map((h, i) => (
//                       <li key={i} className="text-sm text-muted-foreground flex gap-2">
//                         <span className="text-gold">•</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-xs text-center text-muted-foreground pt-4 border-t border-border">
//                   {event.trust}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const EventsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <>
//       <section
//         id="literary-confluence"
//         className="section-padding bg-background relative overflow-hidden"
//         ref={ref}
//       >
//         <div className="container mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-14"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
//               ಸಾಹಿತ್ಯ <span className="text-gold">ಸಂಗಮ</span> | Literary Confluence
//             </h2>
//             <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
//               ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ನೆನಪುಗಳು — ಸಮಗ್ರ ಮಾಹಿತಿ ಮತ್ತು ವಿವರಗಳು
//               <br />
//               Memories of the Kannada Literature & Music Festival — Complete
//               Information & Details
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {events.map((event, i) => (
//               <EventCard key={event.id} event={event} index={i} isInView={isInView} />
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default EventsSection;














// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Calendar,
//   Clock,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
//   ArrowRight,
//   X,
// } from "lucide-react";
// import Footer from "./Footer";

// // Using images that already exist in your project (from the Gallery section).
// // Swap these for your real event-specific photos whenever you have them —
// // just replace the path on the right, e.g. "@/assets/gunavantha1.jpg"
// import event1Img1 from "@/assets/hero-portrait.jpg";
// import event1Img2 from "@/assets/hero-portrait.jpg";
// import event1Img3 from "@/assets/gallery1.webp";
// import event2Img1 from "@/assets/gallery2.webp";
// import event2Img2 from "@/assets/gallery3.webp";
// import event2Img3 from "@/assets/gallery4.webp";
// import event3Img1 from "@/assets/gallery5.webp";
// import event3Img2 from "@/assets/gallery6.webp";
// import event3Img3 from "@/assets/gallery7.webp";
// import event4Img1 from "@/assets/gallery8.webp";
// import event4Img2 from "@/assets/gallery9.webp";
// import event4Img3 from "@/assets/gallery10.webp";
// import event5Img1 from "@/assets/gallery11.webp";
// import event5Img2 from "@/assets/gallery12.webp";
// import event5Img3 from "@/assets/gallery13.webp";
// import event6Img1 from "@/assets/gallery14.webp";
// import event6Img2 from "@/assets/gallery15.webp";
// import event6Img3 from "@/assets/gallery16.webp";

// interface ConfluenceEvent {
//   id: string;
//   images: string[];
//   tagKn: string;
//   tagEn: string;
//   titleKn: string;
//   titleEn: string;
//   shortDescEn: string;
//   date: string;
//   time: string;
//   locationKn: string;
//   locationEn: string;
//   summaryKn: string;
//   summaryEn: string;
//   highlightsKn: string[];
//   highlightsEn: string[];
//   trust: string;
// }

// const events: ConfluenceEvent[] = [
//   {
//     id: "kannada-sahitya-sangeeta-sambhrama",
//     images: [event1Img1, event1Img2, event1Img3],
//     tagKn: "ರಾಜ್ಯ ಮಟ್ಟದ ಸಮಾರಂಭ",
//     tagEn: "State Level Festival",
//     titleKn: "ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮ",
//     titleEn: "State Level Kannada Literature & Music Festival",
//     shortDescEn:
//       "State-level celebration of the intimate bond between poets and artists through literature and music.",
//     date: "April 19, 2026",
//     time: "10:00 AM – 5:00 PM",
//     locationKn: "ಗಾಂಧಿ ಭವನ, ಬೆಂಗಳೂರು",
//     locationEn: "Gandhi Bhavan, Bengaluru",
//     summaryKn:
//       "ದಿನಾಂಕ 19. 4. 2026ರಂದು ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನದಲ್ಲಿ ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ ವತಿಯಿಂದ ಆಯೋಜಿಸಿದ್ದ ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ಸಮಾರಂಭವನ್ನು ನಾಡಿನ ಖ್ಯಾತ ಸಾಹಿತಿ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ನಾಡೋಜ ಹಂಪನಾ ರವರು ಉದ್ಘಾಟಿಸಿದರು. ಸಮಾರಂಭದ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪನವರು ಮತ್ತು ಅನೇಕ ಸಾಹಿತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಕಾರ್ಯಕ್ರಮದ ಆಯೋಜನೆಯನ್ನು ಡಾಕ್ಟರ್ ಸಿ.ಸಿ. ರವರ ನೇತೃತ್ವದಲ್ಲಿ ಸಂಭ್ರಮದಿಂದ ಜರಗಿತು. ಶುಭಾಗಳಲ್ಲಿ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುವ ಕವಿಗಳಿಗೂ ಕಲಾವಿದರಿಗೂ ನಿಕಟವಾದ ಸಂಬಂಧವಿದೆ ಎಂದು ಸಹಿತಿ ಹಂಚಿ ನಾಗರಾಜಯ್ಯ ಅವರು ಹೇಳಿದರು. ಕಲಾವಿದರು ಕುಂಚಿನ ಸಹಾಯದಿಂದ ದೊಡ್ಡ ಚಿತ್ರವನ್ನು ರೂಪಿಸುತ್ತಾರೆ. ಕವಿಯ ಬಳಿ ಶುಭಗಳು ಮಾತ್ರವಿಲ್ಲ, ಆ ಶುಭಗಳ ಮೂಲಕವೇ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುತ್ತಾರೆ. ಮಹಾನ್ ಕಾವ್ಯ, ಕಥೆಗಳನ್ನು ಕವಿ ಒಂದೇ ಒಂದು ಪ್ರಸ್ತುತಿಯಲ್ಲಿ ಶುಭಚಿತ್ರಗಳಿಗೆ ಸೆರೆಹಿಡಿಯುತ್ತಾನೆ. ಆ ಕಾವ್ಯ ಕಲಾವಿದರಿಗೆ ದೊರೆಯದ ಮಹಾನ್ ಚಿತ್ರವೊಂದು ಮೂಡುತ್ತದೆ. ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ 'ಮನದ ಸಿಂಹ' ಕೃತಿಯ ಲೋಕಾರ್ಪಣೆಗೆ ಚರ್ಚೆಯಾಯಿತು. ಕುಂಚಿ ಕಲಾವಿದ ಹಂತಿ ವಾಸಿ, ಗಾಯಕಿ ಡಾ. ಜಯಶ್ರೀ, ಸಾಹಿತಿ ಡಾ. ಕೆ.ಜಿ.ಎ. ನಾರಾಯಣಪ್ಪ, ಕನ್ನಡ ಪ್ರಾಧ್ಯಾಪಕ ಡಾ. ಎಸ್. ರಾಮಲ್ಲಿಂಗೇಶ್ವರ ಉಪಸ್ಥಿತರಿದ್ದರು.",
//     summaryEn:
//       "On April 19, 2026, the State Level Kannada Literature & Music Festival was organized by the Buddha Basava Gandhi Cultural Trust at Gandhi Bhavan, Bengaluru. The event was inaugurated by the renowned litterateur and honored Nadōja Hampana. Dr. K.G. Lakshmi Narayanappa and several other distinguished writers attended as guests of honor. The program was joyfully executed under the leadership of Dr. C.C. Renowned writer Nagarajayya spoke about the intimate bond between poets and artists. He explained that while artists create grand paintings using their brushes, poets paint pictures using only words — weaving emotions, metaphors, and imagery. Through a single stanza, a poet can capture entire epics and stories, creating a masterpiece that even artists may not fully replicate. The ceremony also featured a discussion on the release of the work 'Manada Simha'. Notable attendees included brush artist Hanti Vasi, singer Dr. Jayashree, writer Dr. K.G.A. Narayanappa, and Kannada professor Dr. S. Ramalingeshwara Uppithar.",
//     highlightsKn: [
//       "ಉದ್ಘಾಟನೆ: ನಾಡೋಜ ಹಂಪನಾ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪ",
//       "ಕವಿ-ಕಲಾವಿದ ಸಂವಾದ",
//       "'ಮನದ ಸಿಂಹ' ಕೃತಿ ಲೋಕಾರ್ಪಣೆ",
//       "ಸಂಗೀತ ಮತ್ತು ಕಾವ್ಯ ವಾಚನ",
//     ],
//     highlightsEn: [
//       "Inauguration: Nadōja Hampana",
//       "Special Presence: Dr. K.G. Lakshmi Narayanappa",
//       "Poet-Artist Dialogue",
//       "'Manada Simha' Book Launch",
//       "Music & Poetry Recitals",
//     ],
//     trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
//   },
//   {
//     id: "gunavantha-manju-gruhapravesha",
//     images: [event2Img1, event2Img2, event2Img3],
//     tagKn: "ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭ",
//     tagEn: "Housewarming Ceremony",
//     titleKn: "ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಗೃಹಪ್ರವೇಶ - ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮ",
//     titleEn: "Dr. Gunavantha Manju's Housewarming Ceremony - Satyanarayana Pooja",
//     shortDescEn:
//       "Housewarming Satyanarayana Pooja ceremony of litterateur, film director, producer and actor Dr. Gunavantha Manju.",
//     date: "April 10, 2026",
//     time: "9:00 AM – 1:00 PM",
//     locationKn: "ಟೀಚರ್ಸ್ ಕಾಲೋನಿ, ಕೆಆರ್ ಪುರಂ, ಬೆಂಗಳೂರು",
//     locationEn: "Teachers Colony, KR Puram, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರಿನ ಕೆಆರ್ ಪುರಂ ಬಳಿಯ ಟೀಚರ್ಸ್ ಕಾಲೋನಿಯಲ್ಲಿ ಸಾಹಿತಿ, ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ, ನಿರ್ಮಾಪಕ ಹಾಗೂ ನಟ ಡಾಕ್ಟರ್ ಗುಣವಂತ ಮಂಜು ರವರು ನೂತನವಾಗಿ ನಿರ್ಮಿಸಿರುವ ಗೃಹಪ್ರವೇಶ ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ವಿಶೇಷವಾಗಿ ಭಾಗವಹಿಸಿದ್ದರು. ಈ ಶುಭ ಸಂದರ್ಭದಲ್ಲಿ ಡಾ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಹೊಸ ನಿವಾಸವನ್ನು ಆಶೀರ್ವದಿಸಿದರು ಮತ್ತು ಅವರ ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಸೇವೆಯನ್ನು ಪ್ರಶಂಸಿಸಿದರು. ಗೃಹಪ್ರವೇಶದ ನಂತರ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯನ್ನು ವೈದಿಕ ವಿಧಿಗಳೊಂದಿಗೆ ನೆರವೇರಿಸಲಾಯಿತು. ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರಮುಖ ಸಾಹಿತಿಗಳು, ಚಲನಚಿತ್ರ ನಟರು, ನಿರ್ದೇಶಕರು ಮತ್ತು ಪತ್ರಕರ್ತರು ಸೇರಿದಂತೆ ಹಲವಾರು ಗಣ್ಯರು ಭಾಗವಹಿಸಿದ್ದರು. ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರು ಎಲ್ಲಾ ಅತಿಥಿಗಳಿಗೆ ಆತಿಥ್ಯ ನೀಡಿದರು ಮತ್ತು ತಮ್ಮ ಮುಂಬರುವ ಚಲನಚಿತ್ರ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಂಡರು. ಈ ಕಾರ್ಯಕ್ರಮವು ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಗಣ್ಯರು ಒಂದು ವೇದಿಕೆಯಲ್ಲಿ ಸೇರಿದ ಮಹತ್ವದ ಸಂದರ್ಭವಾಗಿತ್ತು.",
//     summaryEn:
//       "Dr. K.G. Lakshminarayanappa specially participated in the housewarming Satyanarayana Pooja ceremony of Dr. Gunavantha Manju, a noted litterateur, film director, producer and actor, at his newly constructed residence in Teachers Colony near KR Puram, Bengaluru. On this auspicious occasion, Dr. Lakshminarayanappa blessed Dr. Gunavantha Manju's new residence and appreciated his contributions to literature and the film industry. Following the housewarming, the Satyanarayana Pooja was performed with Vedic rituals. The ceremony witnessed the presence of several dignitaries including prominent writers, film actors, directors, and journalists. Dr. Gunavantha Manju hosted all the guests and shared information about his upcoming film projects. This event marked a significant occasion where luminaries from literature and cinema gathered on a single platform.",
//     highlightsKn: [
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ",
//       "ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ವಿಧಿ",
//       "ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಗಣ್ಯರ ಸಮಾಗಮ",
//       "ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಹೊಸ ಯೋಜನೆಗಳ ಮಾಹಿತಿ",
//     ],
//     highlightsEn: [
//       "Special Presence: Dr. K.G. Lakshminarayanappa",
//       "Satyanarayana Pooja Rituals",
//       "Confluence of Literature & Film Dignitaries",
//       "Announcement of Dr. Gunavantha Manju's Upcoming Projects",
//     ],
//     trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
//   },
//   {
//     id: "kannada-rajya-ratna-award",
//     images: [event3Img1, event3Img2, event3Img3],
//     tagKn: "ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ ಸಮಾರಂಭ",
//     tagEn: "Award Presentation",
//     titleKn: "ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ",
//     titleEn: "Kannada Rajya Ratna Award Presentation",
//     shortDescEn:
//       "Dr. K.G. Lakshminarayanappa honored with the Kannada Rajya Ratna award in a ceremony graced by revered spiritual and cultural dignitaries.",
//     date: "May 2, 2026",
//     time: "To be updated",
//     locationKn: "ನಯನ ಸಭಾಂಗಣ, ಕನ್ನಡ ಭವನ, ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರ ಆವರಣ, ಬೆಂಗಳೂರು",
//     locationEn: "Nayana Sabhangana, Kannada Bhavana, Ravindra Kalakshetra Campus, Bengaluru",
//     summaryKn:
//       "ದಿನಾಂಕ 2 ಮೇ 2026 ರಂದು ಬೆಂಗಳೂರು ನಗರದ ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರದ ಆವರಣದ ಕನ್ನಡ ಭವನದ ನಯನ ಸಭಾಂಗಣದಲ್ಲಿ ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ ವತಿಯಿಂದ ಡಾ.ಕೆ.ಜಿ ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರಿಗೆ ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ ರಾಜ್ಯ ಪ್ರಶಸ್ತಿಯನ್ನು ಹಲವು ಗಣ್ಯ ಅತಿಥಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಬೇಲಿ ಮಠದ ಮಹಾಸಂಸ್ಥಾನದ ಶ್ರೀ ಶ್ರೀ ಶಿವರುದ್ರ ಮಹಾಸ್ವಾಮಿಗಳ ಅಮೃತ ಹಸ್ತದಿಂದ ಸಂಸ್ಥೆಯ ಅಧ್ಯಕ್ಷರಾದ ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಸಮ್ಮುಖದಲ್ಲಿ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಮಾಡಿದ ಸಂದರ್ಭ.",
//     summaryEn:
//       "On May 2, 2026, at the Nayana Sabhangana in Kannada Bhavana within the Ravindra Kalakshetra campus, Bengaluru, the Atmashree Kannada Cultural Foundation conferred the 'Kannada Rajya Ratna' award upon Dr. K.G. Lakshminarayanappa in the presence of several distinguished guests. The award was presented by the revered Sri Sri Shivarudra Mahaswamigalu of the Beli Mutt Mahasansthana, in the presence of Dr. Gunavantha Manju, President of the institution.",
//     highlightsKn: [
//       "ಪ್ರಶಸ್ತಿ: ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ",
//       "ಪ್ರದಾನ: ಶ್ರೀ ಶ್ರೀ ಶಿವರುದ್ರ ಮಹಾಸ್ವಾಮಿಗಳು",
//       "ಸಮ್ಮುಖ: ಡಾ. ಗುಣವಂತ ಮಂಜು",
//       "ಆಯೋಜನೆ: ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ",
//     ],
//     highlightsEn: [
//       "Award: Kannada Rajya Ratna",
//       "Conferred by: Sri Sri Shivarudra Mahaswamigalu",
//       "In Presence of: Dr. Gunavantha Manju",
//       "Organized by: Atmashree Kannada Cultural Foundation",
//     ],
//     trust: "ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ | Atmashree Kannada Cultural Foundation",
//   },
//   {
//     id: "aarathi-madam-felicitation",
//     images: [event4Img1, event4Img2, event4Img3],
//     tagKn: "ಸನ್ಮಾನ ಸಮಾರಂಭ",
//     tagEn: "Felicitation Ceremony",
//     titleKn: "ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ ಅವರಿಗೆ ಸನ್ಮಾನ",
//     titleEn: "Felicitation of Smt. Aarathi Madam",
//     shortDescEn:
//       "Bengaluru Doordarshan Director Smt. Aarathi Madam felicitated by Dr. K.G. Lakshminarayanappa and friends following her Media Academy Award.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಬೆಂಗಳೂರು",
//     locationEn: "Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ದೂರದರ್ಶನ ನಿರ್ದೇಶಕರಾದ ಗೌರವಾನ್ವಿತ ಸನ್ಮಾನ್ಯ ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ ರವರಿಗೆ ಇತ್ತೀಚೆಗೆ ಮಾಧ್ಯಮ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ ದೊರೆತಿದೆ ಹಾಗೂ ಅವರಿಗೆ ಹಲವು ಪ್ರಶಸ್ತಿ ದೊರಕಿರುವುದರಿಂದ ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮಿ ನಾರಾಯಣಪ್ಪ ಮತ್ತು ಅವರ ಆತ್ಮೀಯ ಮಿತ್ರ ಬಳಗ ಮೇಡಂ ಅವರವರನ್ನು ಸನ್ಮಾನಿಸಿ ಗೌರವಿಸಿ ಶುಭ ಹಾರೈಸಿದರು. ಈ ಸಂದರ್ಭದಲ್ಲಿ ನಾಡೋಜ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ಹಂಪನಾ ಹಾಗೂ ಖ್ಯಾತ ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ ಹಾಗೂ ನಿರ್ಮಾಪಕರಾದ ರಾಜೇಂದ್ರ ಸಿಂಗ್ ಬಾಬು ರವರು ಸಹ ಉಪಸ್ಥಿತರಿದ್ದರು.",
//     summaryEn:
//       "Smt. Aarathi Madam, the respected Director of Bengaluru Doordarshan, recently received the Media Academy Award along with several other honors. To celebrate her achievements, Dr. K.G. Lakshminarayanappa and his close circle of friends felicitated and congratulated her, wishing her continued success. Nadoja Sri Hampana and renowned film director-producer Rajendra Singh Babu were also present on the occasion.",
//     highlightsKn: [
//       "ಗೌರವ: ಮಾಧ್ಯಮ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ",
//       "ಸನ್ಮಾನಿತರು: ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ನಾಡೋಜ ಹಂಪನಾ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ರಾಜೇಂದ್ರ ಸಿಂಗ್ ಬಾಬು",
//     ],
//     highlightsEn: [
//       "Honor: Media Academy Award",
//       "Felicitated: Smt. Aarathi Madam",
//       "Special Presence: Nadoja Hampana",
//       "Special Presence: Rajendra Singh Babu",
//     ],
//     trust: "ಆತ್ಮೀಯ ಮಿತ್ರ ಬಳಗ | Close Friends Circle",
//   },
//   {
//     id: "mahila-sahitya-sammelana",
//     images: [event5Img1, event5Img2, event5Img3],
//     tagKn: "ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
//     tagEn: "Literary Conference",
//     titleKn: "ಮಹಿಳಾ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
//     titleEn: "Women's Literature Conference",
//     shortDescEn:
//       "A conference celebrating women's contribution to literature, bringing together noted litterateurs and music scholars in Bengaluru.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಕುವೆಂಪು ಸಭಾಂಗಣ, ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತು, ಬೆಂಗಳೂರು",
//     locationEn: "Kuvempu Sabhangana, Kannada Sahitya Parishat, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತಿನ ಕುವೆಂಪು ಸಭಾಂಗಣದಲ್ಲಿ ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ ವತಿಯಿಂದ ಮಹಿಳಾ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದಲ್ಲಿ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಮನು ಬಳಿಗಾರ, ಡಾಕ್ಟರ್ ಸುನಂದಮ್ಮ ಮತ್ತು ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಹಾಗೂ ಅನೇಕ ಸಂಗೀತ ವಿದ್ವಾಂಸರುಗಳು ಭಾಗವಹಿಸಿದ್ದರು.",
//     summaryEn:
//       "At the Kuvempu Sabhangana of the Kannada Sahitya Parishat in Bengaluru, the Samartha Sahitya and Cultural Foundation organized a Women's Literature Conference. Nadoja Dr. Manu Baligar, Dr. Sunandamma, Dr. K.G. Lakshminarayanappa, and several eminent music scholars participated in the event.",
//     highlightsKn: [
//       "ಆಯೋಜನೆ: ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ",
//       "ಭಾಗವಹಿಸಿದವರು: ನಾಡೋಜ ಡಾ. ಮನು ಬಳಿಗಾರ",
//       "ಭಾಗವಹಿಸಿದವರು: ಡಾ. ಸುನಂದಮ್ಮ",
//       "ಸಂಗೀತ ವಿದ್ವಾಂಸರ ಸಮ್ಮಿಳನ",
//     ],
//     highlightsEn: [
//       "Organized by: Samartha Sahitya & Cultural Foundation",
//       "Participant: Nadoja Dr. Manu Baligar",
//       "Participant: Dr. Sunandamma",
//       "Confluence of Music Scholars",
//     ],
//     trust: "ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ | Samartha Sahitya & Cultural Foundation",
//   },
//   {
//     id: "book-launch-ke-radhakrishna",
//     images: [event6Img1, event6Img2, event6Img3],
//     tagKn: "ಪುಸ್ತಕ ಬಿಡುಗಡೆ",
//     tagEn: "Book Launch",
//     titleKn: "ಪುಸ್ತಕ ಲೋಕಾರ್ಪಣೆ ಸಮಾರಂಭ",
//     titleEn: "Book Launch Ceremony",
//     shortDescEn:
//       "Release of K.E. Radhakrishna's new book by retired Justice Chandrashekhar, attended by eminent literary, political, and film personalities.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಜೈನ್ ವಿಶ್ವವಿದ್ಯಾಲಯ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
//     locationEn: "Jain University Auditorium, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಜೈನ್ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸಭಾಂಗಣದಲ್ಲಿ ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ ರವರಿಂದ ಪ್ರಖ್ಯಾತ ಆಂಗ್ಲ ವಿದ್ವಾಂಸರಾದ ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ ರವರು ರಚಿಸಿರುವ ಪುಸ್ತಕವನ್ನು ವಿಶ್ರಾಂತ ನ್ಯಾಯಮೂರ್ತಿ ಜಸ್ಟಿಸ್ ಚಂದ್ರಶೇಖರ್ ಅವರು ಲೋಕಾರ್ಪಣೆ ಮಾಡಿದರು. ಸಮಾರಂಭದಲ್ಲಿ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಮಾಜಿ ಸಚಿವರು ಶ್ರೀ ಸುರೇಶ್ ಕುಮಾರ್, ಶ್ರೀ ನರೇಶ್ ನರಸಿಂಹ, ಚಲನಚಿತ್ರ ನಟ ಸುಂದರ್ ರಾಜ್, ಕೆ.ಸಿ. ರಾಮ್ಮೂರ್ತಿ ಹಾಗೂ ಅನೇಕ ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಸಮಾರಂಭದಲ್ಲಿ ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮಿ ನಾರಾಯಣಪ್ಪ ಮತ್ತು ಅವರ ಆತ್ಮೀಯ ಸ್ನೇಹಿತರು ಸಹ ಪಾಲ್ಗೊಂಡಿದ್ದರು.",
//     summaryEn:
//       "At the Jain University auditorium in Bengaluru, Ankita Pustaka Prakashana released a new book authored by the celebrated English scholar K.E. Radhakrishna. The book was launched by retired Justice Chandrashekhar. Former minister Sri Suresh Kumar, Sri Naresh Narasimha, film actor Sundar Raj, K.C. Rammurthy, and several other dignitaries attended as chief guests. Dr. K.G. Lakshminarayanappa and his close friends were also present at the ceremony.",
//     highlightsKn: [
//       "ಲೇಖಕರು: ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ",
//       "ಲೋಕಾರ್ಪಣೆ: ನ್ಯಾಯಮೂರ್ತಿ ಚಂದ್ರಶೇಖರ್",
//       "ಪ್ರಕಾಶನ: ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ",
//       "ಗಣ್ಯರ ಸಮ್ಮಿಳನ",
//     ],
//     highlightsEn: [
//       "Author: K.E. Radhakrishna",
//       "Released by: Justice Chandrashekhar",
//       "Publisher: Ankita Pustaka Prakashana",
//       "Confluence of Dignitaries",
//     ],
//     trust: "ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ | Ankita Pustaka Prakashana",
//   },
// ];

// const EventCard = ({ event, index, isInView }: { event: ConfluenceEvent; index: number; isInView: boolean }) => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [readMoreOpen, setReadMoreOpen] = useState(false);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % event.images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + event.images.length) % event.images.length);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7, delay: 0.15 * index }}
//         className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30"
//       >
//         {/* Image carousel */}
//         <div className="relative aspect-[16/9] overflow-hidden bg-muted">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={imgIndex}
//               src={event.images[imgIndex]}
//               alt={event.titleEn}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="w-full h-full object-cover"
//             />
//           </AnimatePresence>

//           {event.images.length > 1 && (
//             <>
//               <button
//                 onClick={prevImg}
//                 aria-label="Previous image"
//                 className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               <button
//                 onClick={nextImg}
//                 aria-label="Next image"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
//               >
//                 <ChevronRight size={16} />
//               </button>
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//                 {event.images.map((_, i) => (
//                   <span
//                     key={i}
//                     className={`h-1.5 rounded-full transition-all ${
//                       i === imgIndex ? "w-5 bg-gold" : "w-1.5 bg-white/60"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <div className="flex items-start justify-between gap-3 mb-4">
//             <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold whitespace-nowrap">
//               {event.tagKn}
//             </span>
//             <span className="text-xs italic text-muted-foreground text-right">
//               {event.tagEn}
//             </span>
//           </div>

//           <h3 className="font-heading font-bold text-xl text-navy leading-snug mb-1">
//             {event.titleKn}
//           </h3>
//           <p className="text-gold font-medium text-sm mb-3">{event.titleEn}</p>

//           <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//             {event.shortDescEn}
//           </p>

//           <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
//             <span className="flex items-center gap-1.5">
//               <Calendar size={14} className="text-gold" />
//               {event.date}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Clock size={14} className="text-gold" />
//               {event.time}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <MapPin size={14} className="text-gold" />
//               {event.locationKn}
//             </span>
//           </div>

//           <button
//             onClick={() => setReadMoreOpen(true)}
//             className="w-full flex items-center justify-between px-5 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 font-medium"
//           >
//             <span className="flex items-center gap-2">
//               <ExternalLink size={15} />
//               ವಿವರಗಳನ್ನು ಓದಿ / Read More
//             </span>
//             <ArrowRight size={15} />
//           </button>
//         </div>
//       </motion.div>

//       {/* Read More modal */}
//       <AnimatePresence>
//         {readMoreOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4"
//             onClick={() => setReadMoreOpen(false)}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-card rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
//             >
//               {/* Modal image */}
//               <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted">
//                 <img
//                   src={event.images[imgIndex]}
//                   alt={event.titleEn}
//                   className="w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={() => setReadMoreOpen(false)}
//                   className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                   aria-label="Close"
//                 >
//                   <X size={18} />
//                 </button>
//                 {event.images.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImg}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                     >
//                       <ChevronLeft size={18} />
//                     </button>
//                     <button
//                       onClick={nextImg}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                     >
//                       <ChevronRight size={18} />
//                     </button>
//                   </>
//                 )}
//               </div>

//               <div className="p-6 md:p-8">
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold">
//                   {event.tagKn} • {event.tagEn}
//                 </span>

//                 <h2 className="font-heading font-bold text-2xl text-navy mt-4 mb-1">
//                   {event.titleKn}
//                 </h2>
//                 <p className="text-gold font-medium mb-4">{event.titleEn}</p>

//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
//                   <span className="flex items-center gap-1.5">
//                     <Calendar size={14} className="text-gold" />
//                     {event.date}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Clock size={14} className="text-gold" />
//                     {event.time}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <MapPin size={14} className="text-gold" />
//                     {event.locationKn} | {event.locationEn}
//                   </span>
//                 </div>

//                 {/* Kannada summary */}
//                 <h4 className="font-heading font-semibold text-navy mb-2">ಕನ್ನಡ | ಸಾರಾಂಶ</h4>
//                 <p className="text-sm text-foreground/90 leading-relaxed mb-6">
//                   {event.summaryKn}
//                 </p>

//                 {/* English summary */}
//                 <h4 className="font-heading font-semibold text-navy mb-2">English | Summary</h4>
//                 <p className="text-sm text-foreground/90 leading-relaxed mb-6">
//                   {event.summaryEn}
//                 </p>

//                 {/* Highlights */}
//                 <h4 className="font-heading font-semibold text-navy mb-3 flex items-center gap-2">
//                   ✨ ಪ್ರಮುಖ ಅಂಶಗಳು / Key Highlights
//                 </h4>
//                 <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
//                   <ul className="space-y-2">
//                     {event.highlightsKn.map((h, i) => (
//                       <li key={i} className="text-sm text-foreground/90 flex gap-2">
//                         <span className="text-gold">•</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>
//                   <ul className="space-y-2">
//                     {event.highlightsEn.map((h, i) => (
//                       <li key={i} className="text-sm text-muted-foreground flex gap-2">
//                         <span className="text-gold">•</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-xs text-center text-muted-foreground pt-4 border-t border-border">
//                   {event.trust}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const EventsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <>
//       <section
//         id="literary-confluence"
//         className="section-padding bg-background relative overflow-hidden"
//         ref={ref}
//       >
//         <div className="container mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-14"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
//               ಸಾಹಿತ್ಯ <span className="text-gold">ಸಂಗಮ</span> | Literary Confluence
//             </h2>
//             <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
//               ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ನೆನಪುಗಳು — ಸಮಗ್ರ ಮಾಹಿತಿ ಮತ್ತು ವಿವರಗಳು
//               <br />
//               Memories of the Kannada Literature & Music Festival — Complete
//               Information & Details
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {events.map((event, i) => (
//               <EventCard key={event.id} event={event} index={i} isInView={isInView} />
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default EventsSection;











// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Calendar,
//   Clock,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
//   ArrowRight,
//   X,
// } from "lucide-react";
// import Footer from "./Footer";

// // Using images that already exist in your project (from the Gallery section).
// // Swap these for your real event-specific photos whenever you have them —
// // just replace the path on the right, e.g. "@/assets/gunavantha1.jpg"
// import event1Img1 from "@/assets/hero-portrait.jpg";
// import event1Img2 from "@/assets/hero-portrait.jpg";
// import event1Img3 from "@/assets/gallery1.webp";
// import event2Img1 from "@/assets/gallery2.webp";
// import event2Img2 from "@/assets/gallery3.webp";
// import event2Img3 from "@/assets/gallery4.webp";
// import event3Img1 from "@/assets/gallery5.webp";
// import event3Img2 from "@/assets/gallery6.webp";
// import event3Img3 from "@/assets/gallery7.webp";
// import event4Img1 from "@/assets/gallery8.webp";
// import event4Img2 from "@/assets/gallery9.webp";
// import event4Img3 from "@/assets/gallery10.webp";
// import event5Img1 from "@/assets/gallery11.webp";
// import event5Img2 from "@/assets/gallery12.webp";
// import event5Img3 from "@/assets/gallery13.webp";
// import event6Img1 from "@/assets/gallery14.webp";
// import event6Img2 from "@/assets/gallery15.webp";
// import event6Img3 from "@/assets/gallery16.webp";

// // NOTE: I reused existing gallery images below for the 3 new events (7, 8, 9)
// // since I don't have the actual photos for these three functions.
// // Swap event7Img*, event8Img*, event9Img* for the real photos as soon as you have them,
// // e.g. import event7Img1 from "@/assets/kamala-hampana-1.jpg";

// interface ConfluenceEvent {
//   id: string;
//   images: string[];
//   tagKn: string;
//   tagEn: string;
//   titleKn: string;
//   titleEn: string;
//   shortDescEn: string;
//   date: string;
//   time: string;
//   locationKn: string;
//   locationEn: string;
//   summaryKn: string;
//   summaryEn: string;
//   highlightsKn: string[];
//   highlightsEn: string[];
//   trust: string;
// }

// const events: ConfluenceEvent[] = [
//   {
//     id: "kannada-sahitya-sangeeta-sambhrama",
//     images: [event1Img1, event1Img2, event1Img3],
//     tagKn: "ರಾಜ್ಯ ಮಟ್ಟದ ಸಮಾರಂಭ",
//     tagEn: "State Level Festival",
//     titleKn: "ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮ",
//     titleEn: "State Level Kannada Literature & Music Festival",
//     shortDescEn:
//       "State-level celebration of the intimate bond between poets and artists through literature and music.",
//     date: "April 19, 2026",
//     time: "10:00 AM – 5:00 PM",
//     locationKn: "ಗಾಂಧಿ ಭವನ, ಬೆಂಗಳೂರು",
//     locationEn: "Gandhi Bhavan, Bengaluru",
//     summaryKn:
//       "ದಿನಾಂಕ 19. 4. 2026ರಂದು ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನದಲ್ಲಿ ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ ವತಿಯಿಂದ ಆಯೋಜಿಸಿದ್ದ ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ಸಮಾರಂಭವನ್ನು ನಾಡಿನ ಖ್ಯಾತ ಸಾಹಿತಿ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ನಾಡೋಜ ಹಂಪನಾ ರವರು ಉದ್ಘಾಟಿಸಿದರು. ಸಮಾರಂಭದ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪನವರು ಮತ್ತು ಅನೇಕ ಸಾಹಿತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಕಾರ್ಯಕ್ರಮದ ಆಯೋಜನೆಯನ್ನು ಡಾಕ್ಟರ್ ಸಿ.ಸಿ. ರವರ ನೇತೃತ್ವದಲ್ಲಿ ಸಂಭ್ರಮದಿಂದ ಜರಗಿತು. ಶುಭಾಗಳಲ್ಲಿ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುವ ಕವಿಗಳಿಗೂ ಕಲಾವಿದರಿಗೂ ನಿಕಟವಾದ ಸಂಬಂಧವಿದೆ ಎಂದು ಸಹಿತಿ ಹಂಚಿ ನಾಗರಾಜಯ್ಯ ಅವರು ಹೇಳಿದರು. ಕಲಾವಿದರು ಕುಂಚಿನ ಸಹಾಯದಿಂದ ದೊಡ್ಡ ಚಿತ್ರವನ್ನು ರೂಪಿಸುತ್ತಾರೆ. ಕವಿಯ ಬಳಿ ಶುಭಗಳು ಮಾತ್ರವಿಲ್ಲ, ಆ ಶುಭಗಳ ಮೂಲಕವೇ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುತ್ತಾರೆ. ಮಹಾನ್ ಕಾವ್ಯ, ಕಥೆಗಳನ್ನು ಕವಿ ಒಂದೇ ಒಂದು ಪ್ರಸ್ತುತಿಯಲ್ಲಿ ಶುಭಚಿತ್ರಗಳಿಗೆ ಸೆರೆಹಿಡಿಯುತ್ತಾನೆ. ಆ ಕಾವ್ಯ ಕಲಾವಿದರಿಗೆ ದೊರೆಯದ ಮಹಾನ್ ಚಿತ್ರವೊಂದು ಮೂಡುತ್ತದೆ. ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ 'ಮನದ ಸಿಂಹ' ಕೃತಿಯ ಲೋಕಾರ್ಪಣೆಗೆ ಚರ್ಚೆಯಾಯಿತು. ಕುಂಚಿ ಕಲಾವಿದ ಹಂತಿ ವಾಸಿ, ಗಾಯಕಿ ಡಾ. ಜಯಶ್ರೀ, ಸಾಹಿತಿ ಡಾ. ಕೆ.ಜಿ.ಎ. ನಾರಾಯಣಪ್ಪ, ಕನ್ನಡ ಪ್ರಾಧ್ಯಾಪಕ ಡಾ. ಎಸ್. ರಾಮಲ್ಲಿಂಗೇಶ್ವರ ಉಪಸ್ಥಿತರಿದ್ದರು.",
//     summaryEn:
//       "On April 19, 2026, the State Level Kannada Literature & Music Festival was organized by the Buddha Basava Gandhi Cultural Trust at Gandhi Bhavan, Bengaluru. The event was inaugurated by the renowned litterateur and honored Nadōja Hampana. Dr. K.G. Lakshmi Narayanappa and several other distinguished writers attended as guests of honor. The program was joyfully executed under the leadership of Dr. C.C. Renowned writer Nagarajayya spoke about the intimate bond between poets and artists. He explained that while artists create grand paintings using their brushes, poets paint pictures using only words — weaving emotions, metaphors, and imagery. Through a single stanza, a poet can capture entire epics and stories, creating a masterpiece that even artists may not fully replicate. The ceremony also featured a discussion on the release of the work 'Manada Simha'. Notable attendees included brush artist Hanti Vasi, singer Dr. Jayashree, writer Dr. K.G.A. Narayanappa, and Kannada professor Dr. S. Ramalingeshwara Uppithar.",
//     highlightsKn: [
//       "ಉದ್ಘಾಟನೆ: ನಾಡೋಜ ಹಂಪನಾ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪ",
//       "ಕವಿ-ಕಲಾವಿದ ಸಂವಾದ",
//       "'ಮನದ ಸಿಂಹ' ಕೃತಿ ಲೋಕಾರ್ಪಣೆ",
//       "ಸಂಗೀತ ಮತ್ತು ಕಾವ್ಯ ವಾಚನ",
//     ],
//     highlightsEn: [
//       "Inauguration: Nadōja Hampana",
//       "Special Presence: Dr. K.G. Lakshmi Narayanappa",
//       "Poet-Artist Dialogue",
//       "'Manada Simha' Book Launch",
//       "Music & Poetry Recitals",
//     ],
//     trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
//   },
//   {
//     id: "gunavantha-manju-gruhapravesha",
//     images: [event2Img1, event2Img2, event2Img3],
//     tagKn: "ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭ",
//     tagEn: "Housewarming Ceremony",
//     titleKn: "ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಗೃಹಪ್ರವೇಶ - ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮ",
//     titleEn: "Dr. Gunavantha Manju's Housewarming Ceremony - Satyanarayana Pooja",
//     shortDescEn:
//       "Housewarming Satyanarayana Pooja ceremony of litterateur, film director, producer and actor Dr. Gunavantha Manju.",
//     date: "April 10, 2026",
//     time: "9:00 AM – 1:00 PM",
//     locationKn: "ಟೀಚರ್ಸ್ ಕಾಲೋನಿ, ಕೆಆರ್ ಪುರಂ, ಬೆಂಗಳೂರು",
//     locationEn: "Teachers Colony, KR Puram, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರಿನ ಕೆಆರ್ ಪುರಂ ಬಳಿಯ ಟೀಚರ್ಸ್ ಕಾಲೋನಿಯಲ್ಲಿ ಸಾಹಿತಿ, ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ, ನಿರ್ಮಾಪಕ ಹಾಗೂ ನಟ ಡಾಕ್ಟರ್ ಗುಣವಂತ ಮಂಜು ರವರು ನೂತನವಾಗಿ ನಿರ್ಮಿಸಿರುವ ಗೃಹಪ್ರವೇಶ ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ವಿಶೇಷವಾಗಿ ಭಾಗವಹಿಸಿದ್ದರು. ಈ ಶುಭ ಸಂದರ್ಭದಲ್ಲಿ ಡಾ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಹೊಸ ನಿವಾಸವನ್ನು ಆಶೀರ್ವದಿಸಿದರು ಮತ್ತು ಅವರ ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಸೇವೆಯನ್ನು ಪ್ರಶಂಸಿಸಿದರು. ಗೃಹಪ್ರವೇಶದ ನಂತರ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯನ್ನು ವೈದಿಕ ವಿಧಿಗಳೊಂದಿಗೆ ನೆರವೇರಿಸಲಾಯಿತು. ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರಮುಖ ಸಾಹಿತಿಗಳು, ಚಲನಚಿತ್ರ ನಟರು, ನಿರ್ದೇಶಕರು ಮತ್ತು ಪತ್ರಕರ್ತರು ಸೇರಿದಂತೆ ಹಲವಾರು ಗಣ್ಯರು ಭಾಗವಹಿಸಿದ್ದರು. ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರು ಎಲ್ಲಾ ಅತಿಥಿಗಳಿಗೆ ಆತಿಥ್ಯ ನೀಡಿದರು ಮತ್ತು ತಮ್ಮ ಮುಂಬರುವ ಚಲನಚಿತ್ರ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಂಡರು. ಈ ಕಾರ್ಯಕ್ರಮವು ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಗಣ್ಯರು ಒಂದು ವೇದಿಕೆಯಲ್ಲಿ ಸೇರಿದ ಮಹತ್ವದ ಸಂದರ್ಭವಾಗಿತ್ತು.",
//     summaryEn:
//       "Dr. K.G. Lakshminarayanappa specially participated in the housewarming Satyanarayana Pooja ceremony of Dr. Gunavantha Manju, a noted litterateur, film director, producer and actor, at his newly constructed residence in Teachers Colony near KR Puram, Bengaluru. On this auspicious occasion, Dr. Lakshminarayanappa blessed Dr. Gunavantha Manju's new residence and appreciated his contributions to literature and the film industry. Following the housewarming, the Satyanarayana Pooja was performed with Vedic rituals. The ceremony witnessed the presence of several dignitaries including prominent writers, film actors, directors, and journalists. Dr. Gunavantha Manju hosted all the guests and shared information about his upcoming film projects. This event marked a significant occasion where luminaries from literature and cinema gathered on a single platform.",
//     highlightsKn: [
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ",
//       "ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ವಿಧಿ",
//       "ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಗಣ್ಯರ ಸಮಾಗಮ",
//       "ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಹೊಸ ಯೋಜನೆಗಳ ಮಾಹಿತಿ",
//     ],
//     highlightsEn: [
//       "Special Presence: Dr. K.G. Lakshminarayanappa",
//       "Satyanarayana Pooja Rituals",
//       "Confluence of Literature & Film Dignitaries",
//       "Announcement of Dr. Gunavantha Manju's Upcoming Projects",
//     ],
//     trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
//   },
//   {
//     id: "kannada-rajya-ratna-award",
//     images: [event3Img1, event3Img2, event3Img3],
//     tagKn: "ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ ಸಮಾರಂಭ",
//     tagEn: "Award Presentation",
//     titleKn: "ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ",
//     titleEn: "Kannada Rajya Ratna Award Presentation",
//     shortDescEn:
//       "Dr. K.G. Lakshminarayanappa honored with the Kannada Rajya Ratna award in a ceremony graced by revered spiritual and cultural dignitaries.",
//     date: "May 2, 2026",
//     time: "To be updated",
//     locationKn: "ನಯನ ಸಭಾಂಗಣ, ಕನ್ನಡ ಭವನ, ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರ ಆವರಣ, ಬೆಂಗಳೂರು",
//     locationEn: "Nayana Sabhangana, Kannada Bhavana, Ravindra Kalakshetra Campus, Bengaluru",
//     summaryKn:
//       "ದಿನಾಂಕ 2 ಮೇ 2026 ರಂದು ಬೆಂಗಳೂರು ನಗರದ ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರದ ಆವರಣದ ಕನ್ನಡ ಭವನದ ನಯನ ಸಭಾಂಗಣದಲ್ಲಿ ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ ವತಿಯಿಂದ ಡಾ.ಕೆ.ಜಿ ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರಿಗೆ ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ ರಾಜ್ಯ ಪ್ರಶಸ್ತಿಯನ್ನು ಹಲವು ಗಣ್ಯ ಅತಿಥಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಬೇಲಿ ಮಠದ ಮಹಾಸಂಸ್ಥಾನದ ಶ್ರೀ ಶ್ರೀ ಶಿವರುದ್ರ ಮಹಾಸ್ವಾಮಿಗಳ ಅಮೃತ ಹಸ್ತದಿಂದ ಸಂಸ್ಥೆಯ ಅಧ್ಯಕ್ಷರಾದ ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಸಮ್ಮುಖದಲ್ಲಿ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಮಾಡಿದ ಸಂದರ್ಭ.",
//     summaryEn:
//       "On May 2, 2026, at the Nayana Sabhangana in Kannada Bhavana within the Ravindra Kalakshetra campus, Bengaluru, the Atmashree Kannada Cultural Foundation conferred the 'Kannada Rajya Ratna' award upon Dr. K.G. Lakshminarayanappa in the presence of several distinguished guests. The award was presented by the revered Sri Sri Shivarudra Mahaswamigalu of the Beli Mutt Mahasansthana, in the presence of Dr. Gunavantha Manju, President of the institution.",
//     highlightsKn: [
//       "ಪ್ರಶಸ್ತಿ: ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ",
//       "ಪ್ರದಾನ: ಶ್ರೀ ಶ್ರೀ ಶಿವರುದ್ರ ಮಹಾಸ್ವಾಮಿಗಳು",
//       "ಸಮ್ಮುಖ: ಡಾ. ಗುಣವಂತ ಮಂಜು",
//       "ಆಯೋಜನೆ: ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ",
//     ],
//     highlightsEn: [
//       "Award: Kannada Rajya Ratna",
//       "Conferred by: Sri Sri Shivarudra Mahaswamigalu",
//       "In Presence of: Dr. Gunavantha Manju",
//       "Organized by: Atmashree Kannada Cultural Foundation",
//     ],
//     trust: "ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ | Atmashree Kannada Cultural Foundation",
//   },
//   {
//     id: "aarathi-madam-felicitation",
//     images: [event4Img1, event4Img2, event4Img3],
//     tagKn: "ಸನ್ಮಾನ ಸಮಾರಂಭ",
//     tagEn: "Felicitation Ceremony",
//     titleKn: "ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ ಅವರಿಗೆ ಸನ್ಮಾನ",
//     titleEn: "Felicitation of Smt. Aarathi Madam",
//     shortDescEn:
//       "Bengaluru Doordarshan Director Smt. Aarathi Madam felicitated by Dr. K.G. Lakshminarayanappa and friends following her Media Academy Award.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಬೆಂಗಳೂರು",
//     locationEn: "Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ದೂರದರ್ಶನ ನಿರ್ದೇಶಕರಾದ ಗೌರವಾನ್ವಿತ ಸನ್ಮಾನ್ಯ ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ ರವರಿಗೆ ಇತ್ತೀಚೆಗೆ ಮಾಧ್ಯಮ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ ದೊರೆತಿದೆ ಹಾಗೂ ಅವರಿಗೆ ಹಲವು ಪ್ರಶಸ್ತಿ ದೊರಕಿರುವುದರಿಂದ ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮಿ ನಾರಾಯಣಪ್ಪ ಮತ್ತು ಅವರ ಆತ್ಮೀಯ ಮಿತ್ರ ಬಳಗ ಮೇಡಂ ಅವರವರನ್ನು ಸನ್ಮಾನಿಸಿ ಗೌರವಿಸಿ ಶುಭ ಹಾರೈಸಿದರು. ಈ ಸಂದರ್ಭದಲ್ಲಿ ನಾಡೋಜ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ಹಂಪನಾ ಹಾಗೂ ಖ್ಯಾತ ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ ಹಾಗೂ ನಿರ್ಮಾಪಕರಾದ ರಾಜೇಂದ್ರ ಸಿಂಗ್ ಬಾಬು ರವರು ಸಹ ಉಪಸ್ಥಿತರಿದ್ದರು.",
//     summaryEn:
//       "Smt. Aarathi Madam, the respected Director of Bengaluru Doordarshan, recently received the Media Academy Award along with several other honors. To celebrate her achievements, Dr. K.G. Lakshminarayanappa and his close circle of friends felicitated and congratulated her, wishing her continued success. Nadoja Sri Hampana and renowned film director-producer Rajendra Singh Babu were also present on the occasion.",
//     highlightsKn: [
//       "ಗೌರವ: ಮಾಧ್ಯಮ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ",
//       "ಸನ್ಮಾನಿತರು: ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ನಾಡೋಜ ಹಂಪನಾ",
//       "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ರಾಜೇಂದ್ರ ಸಿಂಗ್ ಬಾಬು",
//     ],
//     highlightsEn: [
//       "Honor: Media Academy Award",
//       "Felicitated: Smt. Aarathi Madam",
//       "Special Presence: Nadoja Hampana",
//       "Special Presence: Rajendra Singh Babu",
//     ],
//     trust: "ಆತ್ಮೀಯ ಮಿತ್ರ ಬಳಗ | Close Friends Circle",
//   },
//   {
//     id: "mahila-sahitya-sammelana",
//     images: [event5Img1, event5Img2, event5Img3],
//     tagKn: "ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
//     tagEn: "Literary Conference",
//     titleKn: "ಮಹಿಳಾ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
//     titleEn: "Women's Literature Conference",
//     shortDescEn:
//       "A conference celebrating women's contribution to literature, bringing together noted litterateurs and music scholars in Bengaluru.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಕುವೆಂಪು ಸಭಾಂಗಣ, ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತು, ಬೆಂಗಳೂರು",
//     locationEn: "Kuvempu Sabhangana, Kannada Sahitya Parishat, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತಿನ ಕುವೆಂಪು ಸಭಾಂಗಣದಲ್ಲಿ ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ ವತಿಯಿಂದ ಮಹಿಳಾ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದಲ್ಲಿ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಮನು ಬಳಿಗಾರ, ಡಾಕ್ಟರ್ ಸುನಂದಮ್ಮ ಮತ್ತು ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಹಾಗೂ ಅನೇಕ ಸಂಗೀತ ವಿದ್ವಾಂಸರುಗಳು ಭಾಗವಹಿಸಿದ್ದರು.",
//     summaryEn:
//       "At the Kuvempu Sabhangana of the Kannada Sahitya Parishat in Bengaluru, the Samartha Sahitya and Cultural Foundation organized a Women's Literature Conference. Nadoja Dr. Manu Baligar, Dr. Sunandamma, Dr. K.G. Lakshminarayanappa, and several eminent music scholars participated in the event.",
//     highlightsKn: [
//       "ಆಯೋಜನೆ: ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ",
//       "ಭಾಗವಹಿಸಿದವರು: ನಾಡೋಜ ಡಾ. ಮನು ಬಳಿಗಾರ",
//       "ಭಾಗವಹಿಸಿದವರು: ಡಾ. ಸುನಂದಮ್ಮ",
//       "ಸಂಗೀತ ವಿದ್ವಾಂಸರ ಸಮ್ಮಿಳನ",
//     ],
//     highlightsEn: [
//       "Organized by: Samartha Sahitya & Cultural Foundation",
//       "Participant: Nadoja Dr. Manu Baligar",
//       "Participant: Dr. Sunandamma",
//       "Confluence of Music Scholars",
//     ],
//     trust: "ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ | Samartha Sahitya & Cultural Foundation",
//   },
//   {
//     id: "book-launch-ke-radhakrishna",
//     images: [event6Img1, event6Img2, event6Img3],
//     tagKn: "ಪುಸ್ತಕ ಬಿಡುಗಡೆ",
//     tagEn: "Book Launch",
//     titleKn: "ಪುಸ್ತಕ ಲೋಕಾರ್ಪಣೆ ಸಮಾರಂಭ",
//     titleEn: "Book Launch Ceremony",
//     shortDescEn:
//       "Release of K.E. Radhakrishna's new book by retired Justice Chandrashekhar, attended by eminent literary, political, and film personalities.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಜೈನ್ ವಿಶ್ವವಿದ್ಯಾಲಯ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
//     locationEn: "Jain University Auditorium, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಜೈನ್ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸಭಾಂಗಣದಲ್ಲಿ ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ ರವರಿಂದ ಪ್ರಖ್ಯಾತ ಆಂಗ್ಲ ವಿದ್ವಾಂಸರಾದ ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ ರವರು ರಚಿಸಿರುವ ಪುಸ್ತಕವನ್ನು ವಿಶ್ರಾಂತ ನ್ಯಾಯಮೂರ್ತಿ ಜಸ್ಟಿಸ್ ಚಂದ್ರಶೇಖರ್ ಅವರು ಲೋಕಾರ್ಪಣೆ ಮಾಡಿದರು. ಸಮಾರಂಭದಲ್ಲಿ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಮಾಜಿ ಸಚಿವರು ಶ್ರೀ ಸುರೇಶ್ ಕುಮಾರ್, ಶ್ರೀ ನರೇಶ್ ನರಸಿಂಹ, ಚಲನಚಿತ್ರ ನಟ ಸುಂದರ್ ರಾಜ್, ಕೆ.ಸಿ. ರಾಮ್ಮೂರ್ತಿ ಹಾಗೂ ಅನೇಕ ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಸಮಾರಂಭದಲ್ಲಿ ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮಿ ನಾರಾಯಣಪ್ಪ ಮತ್ತು ಅವರ ಆತ್ಮೀಯ ಸ್ನೇಹಿತರು ಸಹ ಪಾಲ್ಗೊಂಡಿದ್ದರು.",
//     summaryEn:
//       "At the Jain University auditorium in Bengaluru, Ankita Pustaka Prakashana released a new book authored by the celebrated English scholar K.E. Radhakrishna. The book was launched by retired Justice Chandrashekhar. Former minister Sri Suresh Kumar, Sri Naresh Narasimha, film actor Sundar Raj, K.C. Rammurthy, and several other dignitaries attended as chief guests. Dr. K.G. Lakshminarayanappa and his close friends were also present at the ceremony.",
//     highlightsKn: [
//       "ಲೇಖಕರು: ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ",
//       "ಲೋಕಾರ್ಪಣೆ: ನ್ಯಾಯಮೂರ್ತಿ ಚಂದ್ರಶೇಖರ್",
//       "ಪ್ರಕಾಶನ: ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ",
//       "ಗಣ್ಯರ ಸಮ್ಮಿಳನ",
//     ],
//     highlightsEn: [
//       "Author: K.E. Radhakrishna",
//       "Released by: Justice Chandrashekhar",
//       "Publisher: Ankita Pustaka Prakashana",
//       "Confluence of Dignitaries",
//     ],
//     trust: "ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ | Ankita Pustaka Prakashana",
//   },
//   {
//     id: "kamala-hampana-punya-smarane",
//     images: [event1Img3, event3Img1, event5Img2],
//     tagKn: "ಪುಣ್ಯಸ್ಮರಣಾ ಸಮಾರಂಭ",
//     tagEn: "Memorial Remembrance",
//     titleKn: "ನಾಡೋಜ ಡಾ. ಕಮಲಾ ಹಂಪನಾ ಎರಡನೇ ವರ್ಷದ ಪುಣ್ಯಸ್ಮರಣೆ",
//     titleEn: "Nadoja Dr. Kamala Hampana's Second Death Anniversary Remembrance",
//     shortDescEn:
//       "Poetry recitation and music gathering held in Bengaluru to mark the second death anniversary of Nadoja Dr. Kamala Hampana.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
//     locationEn: "Gandhi Bhavan Sabhangana, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣದಲ್ಲಿ ಕಮಲ ಹಂಪನಾ ಸಾಹಿತ್ಯ ವೇದಿಕೆ ಹಾಗೂ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ ಸಹಯೋಗದಿಂದ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಕಮಲ ಹಂಪನಾ ರವರ ಎರಡನೇ ವರ್ಷದ ಪುಣ್ಯಸ್ಮರಣೆ ಅಂಗವಾಗಿ ಸಮಾರಂಭ ಏರ್ಪಡಿಸಲಾಗಿತ್ತು. ಕವಿತಾ ವಾಚನ ಮತ್ತು ಸಂಗೀತ ಗೋಷ್ಠಿ ಹಮ್ಮಿಕೊಳ್ಳಲಾಗಿತ್ತು. ಸಮಾರಂಭದ ಅಧ್ಯಕ್ಷತೆಯನ್ನು ನಾಡೋಜ ಡಾ. ಹಂಪನಾ ಅವರು ವಹಿಸಿದ್ದರು. ಅತಿಥಿಗಳಾಗಿ ಬಿ.ಎಸ್. ಮಂಜುನಾಥ್, ಪ್ರತಿಭಾ ನಂದಕುಮಾರ್, ಡಾ. ಸಂಗೀತ ಕಟ್ಟಿ, ಇಂದು ವಿಶ್ವನಾಥ್ ಮುಂತಾದ ಗಣ್ಯರುಗಳು ಆಗಮಿಸಿದ್ದರು. ಹಾಗೂ ವಿಶೇಷ ಆಹ್ವಾನಿತರಾಗಿ ಪ್ರೊಫೆಸರ್ ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ ರವರು ಮತ್ತು ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮಿನಾರಾಯಣಪ್ಪ ಹಾಗೂ ಅನೇಕ ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು, ಸಾಹಿತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು.",
//     summaryEn:
//       "A ceremony was organized at Gandhi Bhavan Sabhangana, Bengaluru, jointly by the Kamala Hampana Sahitya Vedike and the Department of Kannada and Culture, Government of Karnataka, to mark the second death anniversary of Nadoja Dr. Kamala Hampana. The program featured poetry recitation and a music gathering. The ceremony was presided over by Nadoja Dr. Hampana. Guests present included B.S. Manjunath, Pratibha Nandakumar, Dr. Sangeeta Katti, and Indu Vishwanath. Special invitees Professor K.E. Radhakrishna and Dr. K.G. Lakshminarayanappa, along with many other dignitaries and litterateurs, also took part.",
//     highlightsKn: [
//       "ಅಧ್ಯಕ್ಷತೆ: ನಾಡೋಜ ಡಾ. ಹಂಪನಾ",
//       "ಕವಿತಾ ವಾಚನ ಮತ್ತು ಸಂಗೀತ ಗೋಷ್ಠಿ",
//       "ವಿಶೇಷ ಆಹ್ವಾನಿತರು: ಪ್ರೊ. ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ, ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮಿನಾರಾಯಣಪ್ಪ",
//       "ಆಯೋಜನೆ: ಕಮಲ ಹಂಪನಾ ಸಾಹಿತ್ಯ ವೇದಿಕೆ ಹಾಗೂ ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ",
//     ],
//     highlightsEn: [
//       "Presided by: Nadoja Dr. Hampana",
//       "Poetry Recitation & Music Gathering",
//       "Special Invitees: Prof. K.E. Radhakrishna, Dr. K.G. Lakshminarayanappa",
//       "Organized by: Kamala Hampana Sahitya Vedike & Dept. of Kannada and Culture",
//     ],
//     trust: "ಕಮಲ ಹಂಪನಾ ಸಾಹಿತ್ಯ ವೇದಿಕೆ | Kamala Hampana Sahitya Vedike",
//   },
//   {
//     id: "kannada-barahagara-prakashakara-prashasti",
//     images: [event2Img3, event4Img1, event6Img2],
//     tagKn: "ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಸಮಾರಂಭ",
//     tagEn: "Award Presentation",
//     titleKn: "ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘದ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ",
//     titleEn: "Karnataka Kannada Writers & Publishers Association Award Ceremony",
//     shortDescEn:
//       "Award presentation ceremony by the Karnataka Kannada Writers & Publishers Association, conducted by retired Supreme Court Justice Nadoja Dr. Shivaraj V. Patil.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
//     locationEn: "Gandhi Bhavan Sabhangana, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣದಲ್ಲಿ ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘದ ವತಿಯಿಂದ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಸಮಾರಂಭ ಉದ್ಘಾಟನೆ ಮತ್ತು ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನವನ್ನು ಭಾರತದ ಸರ್ವೋಚ್ಚ ನ್ಯಾಯಾಲಯದ ವಿಶ್ರಾಂತ ನ್ಯಾಯಮೂರ್ತಿಗಳಾದ ಗೌರವಾನ್ವಿತ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಶಿವರಾಜ ವಿ. ಪಾಟೀಲ ಸರ್ ರವರು ನಡೆಸಿಕೊಟ್ಟರು. ಅಧ್ಯಕ್ಷತೆಯನ್ನು ಶ್ರೀ ನಿಡಸಾಲೆ ಪುಟ್ಟಸ್ವಾಮಿ ಅವರು ವಹಿಸಿದ್ದರು. ವಿಶೇಷ ಆಹ್ವಾನಿತರಾಗಿ ಪ್ರೊಫೆಸರ್ ಮಲ್ಲೇಪುರಂ ವೆಂಕಟೇಶ್, ನಾಡೋಜ ಡಾಕ್ಟರ್ ಒಡೆಪಿ ಕೃಷ್ಣ, ಕೃಷ್ಣ ಪ್ರಕಾಶ್ ಕಂಬತ್ತಳ್ಳಿ, ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಭಾಗವಹಿಸಿದ್ದರು. ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು ಹಾಗೂ ಅನೇಕ ಸಾಹಿತಿಗಳಾದ ಶ್ರೀ ಬೈರಮಂಗಲ ರಾಮೇಗೌಡ, ಆರ್. ದೊಡ್ಡಿಗೌಡ, ಶ್ರೀ ಕೃಷ್ಣಮೂರ್ತಿ ಸೇರಿದಂತೆ ಅನೇಕ ಬರಹಗಾರರು ಮತ್ತು ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು ಸಮಾರಂಭದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದರು.",
//     summaryEn:
//       "The award presentation ceremony of the Karnataka Kannada Writers & Publishers Association was inaugurated and conducted at Gandhi Bhavan Sabhangana, Bengaluru, by the honorable retired Supreme Court Justice Nadoja Dr. Shivaraj V. Patil. Sri Nidasale Puttaswamy presided over the ceremony. Special invitees included Professor Mallepuram Venkatesh, Nadoja Dr. Odepi Krishna, Krishna Prakash Kambattalli, and Dr. K.G. Lakshminarayanappa. Award recipients and several litterateurs including Sri Bairamangala Ramegowda, R. Doddigowda, and Sri Krishnamurthy, along with many other writers and dignitaries, took part in the ceremony.",
//     highlightsKn: [
//       "ಉದ್ಘಾಟನೆ ಮತ್ತು ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ: ನಾಡೋಜ ಡಾ. ಶಿವರಾಜ ವಿ. ಪಾಟೀಲ",
//       "ಅಧ್ಯಕ್ಷತೆ: ಶ್ರೀ ನಿಡಸಾಲೆ ಪುಟ್ಟಸ್ವಾಮಿ",
//       "ವಿಶೇಷ ಆಹ್ವಾನಿತರು: ಪ್ರೊ. ಮಲ್ಲೇಪುರಂ ವೆಂಕಟೇಶ್, ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ",
//       "ಆಯೋಜನೆ: ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘ",
//     ],
//     highlightsEn: [
//       "Inaugurated & Awards by: Nadoja Dr. Shivaraj V. Patil",
//       "Presided by: Sri Nidasale Puttaswamy",
//       "Special Invitees: Prof. Mallepuram Venkatesh, Dr. K.G. Lakshminarayanappa",
//       "Organized by: Karnataka Kannada Writers & Publishers Association",
//     ],
//     trust: "ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘ | Karnataka Kannada Writers & Publishers Association",
//   },
//   {
//     id: "balepete-temple-vidyulatha-felicitation",
//     images: [event4Img3, event5Img1, event1Img2],
//     tagKn: "ಸನ್ಮಾನ ಸಮಾರಂಭ",
//     tagEn: "Felicitation Ceremony",
//     titleKn: "ಶ್ರೀಮತಿ ವಿದ್ಯುಲತಾ ರವರಿಗೆ ಸನ್ಮಾನ",
//     titleEn: "Felicitation of Smt. Vidyulatha",
//     shortDescEn:
//       "Balepete Lakshmi Narasimha Swamy Temple's management committee felicitates the temple's newly appointed Executive Officer, Smt. Vidyulatha.",
//     date: "To be updated",
//     time: "To be updated",
//     locationKn: "ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯ, ಬೆಂಗಳೂರು",
//     locationEn: "Balepete Lakshmi Narasimha Swamy Temple, Bengaluru",
//     summaryKn:
//       "ಬೆಂಗಳೂರು ನಗರದ ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯದ ವ್ಯವಸ್ಥಾಪನಾ ಸಮಿತಿಯ ಅಧ್ಯಕ್ಷರಾದ ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಮತ್ತು ಸಮಿತಿಯ ಸದಸ್ಯರುಗಳು, ನೂತನವಾಗಿ ದೇವಾಲಯದ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಗಳಾಗಿ ಆಗಮಿಸಿರುವ ಸನ್ಮಾನ್ಯ ಶ್ರೀಮತಿ ವಿದ್ಯುಲತಾ ರವರಿಗೆ ಸನ್ಮಾನಿಸಿ ಗೌರವಿಸಲಾಯಿತು.",
//     summaryEn:
//       "Dr. K.G. Lakshminarayanappa, Chairman of the Management Committee of the Balepete Lakshmi Narasimha Swamy Temple, Bengaluru, along with committee members, felicitated and honored Smt. Vidyulatha, who has newly taken charge as the temple's Executive Officer.",
//     highlightsKn: [
//       "ಸನ್ಮಾನಿತರು: ಶ್ರೀಮತಿ ವಿದ್ಯುಲತಾ (ನೂತನ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿ)",
//       "ಸನ್ಮಾನ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಹಾಗೂ ವ್ಯವಸ್ಥಾಪನಾ ಸಮಿತಿ",
//       "ಸ್ಥಳ: ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯ",
//     ],
//     highlightsEn: [
//       "Felicitated: Smt. Vidyulatha (New Executive Officer)",
//       "Honored by: Dr. K.G. Lakshminarayanappa & Management Committee",
//       "Venue: Balepete Lakshmi Narasimha Swamy Temple",
//     ],
//     trust: "ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯ | Balepete Lakshmi Narasimha Swamy Temple",
//   },
// ];

// const EventCard = ({ event, index, isInView }: { event: ConfluenceEvent; index: number; isInView: boolean }) => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [readMoreOpen, setReadMoreOpen] = useState(false);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % event.images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + event.images.length) % event.images.length);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7, delay: 0.15 * index }}
//         className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30"
//       >
//         {/* Image carousel */}
//         <div className="relative aspect-[16/9] overflow-hidden bg-muted">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={imgIndex}
//               src={event.images[imgIndex]}
//               alt={event.titleEn}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="w-full h-full object-cover"
//             />
//           </AnimatePresence>

//           {event.images.length > 1 && (
//             <>
//               <button
//                 onClick={prevImg}
//                 aria-label="Previous image"
//                 className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               <button
//                 onClick={nextImg}
//                 aria-label="Next image"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
//               >
//                 <ChevronRight size={16} />
//               </button>
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//                 {event.images.map((_, i) => (
//                   <span
//                     key={i}
//                     className={`h-1.5 rounded-full transition-all ${
//                       i === imgIndex ? "w-5 bg-gold" : "w-1.5 bg-white/60"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Content */}
//         <div className="p-5">
//           <div className="flex items-start justify-between gap-3 mb-3">
//             <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold whitespace-nowrap">
//               {event.tagKn}
//             </span>
//             <span className="text-xs italic text-muted-foreground text-right">
//               {event.tagEn}
//             </span>
//           </div>

//           <h3 className="font-heading font-bold text-xl text-navy leading-snug mb-1">
//             {event.titleKn}
//           </h3>
//           <p className="text-gold font-medium text-sm mb-3">{event.titleEn}</p>

//           <p className="text-muted-foreground text-sm leading-relaxed mb-3">
//             {event.shortDescEn}
//           </p>

//           <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//             <span className="flex items-center gap-1.5">
//               <Calendar size={14} className="text-gold" />
//               {event.date}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Clock size={14} className="text-gold" />
//               {event.time}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <MapPin size={14} className="text-gold" />
//               {event.locationKn}
//             </span>
//           </div>

//           <button
//             onClick={() => setReadMoreOpen(true)}
//             className="w-full flex items-center justify-between px-5 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 font-medium"
//           >
//             <span className="flex items-center gap-2">
//               <ExternalLink size={15} />
//               ವಿವರಗಳನ್ನು ಓದಿ / Read More
//             </span>
//             <ArrowRight size={15} />
//           </button>
//         </div>
//       </motion.div>

//       {/* Read More modal */}
//       <AnimatePresence>
//         {readMoreOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4"
//             onClick={() => setReadMoreOpen(false)}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-card rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
//             >
//               {/* Modal image */}
//               <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl bg-muted">
//                 <img
//                   src={event.images[imgIndex]}
//                   alt={event.titleEn}
//                   className="w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={() => setReadMoreOpen(false)}
//                   className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                   aria-label="Close"
//                 >
//                   <X size={18} />
//                 </button>
//                 {event.images.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImg}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                     >
//                       <ChevronLeft size={18} />
//                     </button>
//                     <button
//                       onClick={nextImg}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors"
//                     >
//                       <ChevronRight size={18} />
//                     </button>
//                   </>
//                 )}
//                 {/* Title now sits below the image instead of overlapping it,
//                     so long Kannada headings never crowd the photo or the close button. */}
//               </div>

//               <div className="p-4 md:p-6">
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold">
//                   {event.tagKn} • {event.tagEn}
//                 </span>

//                 <h2 className="font-heading font-bold text-2xl text-navy mt-3 mb-1">
//                   {event.titleKn}
//                 </h2>
//                 <p className="text-gold font-medium mb-3">{event.titleEn}</p>

//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
//                   <span className="flex items-center gap-1.5">
//                     <Calendar size={14} className="text-gold" />
//                     {event.date}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Clock size={14} className="text-gold" />
//                     {event.time}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <MapPin size={14} className="text-gold" />
//                     {event.locationKn} | {event.locationEn}
//                   </span>
//                 </div>

//                 {/* Kannada summary */}
//                 <h4 className="font-heading font-semibold text-navy mb-2">ಕನ್ನಡ | ಸಾರಾಂಶ</h4>
//                 <p className="text-sm text-foreground/90 leading-relaxed mb-5">
//                   {event.summaryKn}
//                 </p>

//                 {/* English summary */}
//                 <h4 className="font-heading font-semibold text-navy mb-2">English | Summary</h4>
//                 <p className="text-sm text-foreground/90 leading-relaxed mb-5">
//                   {event.summaryEn}
//                 </p>

//                 {/* Highlights */}
//                 <h4 className="font-heading font-semibold text-navy mb-3 flex items-center gap-2">
//                   ✨ ಪ್ರಮುಖ ಅಂಶಗಳು / Key Highlights
//                 </h4>
//                 <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-5">
//                   <ul className="space-y-2">
//                     {event.highlightsKn.map((h, i) => (
//                       <li key={i} className="text-sm text-foreground/90 flex gap-2">
//                         <span className="text-gold">•</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>
//                   <ul className="space-y-2">
//                     {event.highlightsEn.map((h, i) => (
//                       <li key={i} className="text-sm text-muted-foreground flex gap-2">
//                         <span className="text-gold">•</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-xs text-center text-muted-foreground pt-3 border-t border-border">
//                   {event.trust}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const EventsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <>
//       <section
//         id="literary-confluence"
//         className="section-padding bg-background relative overflow-hidden"
//         ref={ref}
//       >
//         <div className="container mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
//               ಸಾಹಿತ್ಯ <span className="text-gold">ಸಂಗಮ</span> | Literary Confluence
//             </h2>
//             <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
//               ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ನೆನಪುಗಳು — ಸಮಗ್ರ ಮಾಹಿತಿ ಮತ್ತು ವಿವರಗಳು
//               <br />
//               Memories of the Kannada Literature & Music Festival — Complete
//               Information & Details
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-6">
//             {events.map((event, i) => (
//               <EventCard key={event.id} event={event} index={i} isInView={isInView} />
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default EventsSection;












import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  X,
} from "lucide-react";


// Using images that already exist in your project (from the Gallery section).
// Swap these for your real event-specific photos whenever you have them —
// just replace the path on the right, e.g. "@/assets/gunavantha1.jpg"
import event1Img1 from "@/assets/event1.webp";
import event1Img2 from "@/assets/event2.webp";
import event1Img3 from "@/assets/event3.webp";
import event2Img1 from "@/assets/eventa.webp";
import event2Img2 from "@/assets/eventb.webp";
import event2Img3 from "@/assets/eventc.webp";
import event3Img1 from "@/assets/event-3a.webp";
import event3Img2 from "@/assets/event-3b.webp";
import event3Img3 from "@/assets/event-3c.webp";

import event4Img1 from "@/assets/event-4a.webp";
import event4Img2 from "@/assets/event-4b.webp";
import event4Img3 from "@/assets/event-4c.webp";

import event5Img1 from "@/assets/event-5a.webp";
import event5Img2 from "@/assets/event-5b.webp";
import event5Img3 from "@/assets/event-5c.webp";

import event6Img1 from "@/assets/event-6a.webp";
import event6Img2 from "@/assets/event-6b.webp";
import event6Img3 from "@/assets/event-6c.webp";


import event7Img1 from "@/assets/event-7a.webp";
import event7Img2 from "@/assets/event-7b.webp";
import event7Img3 from "@/assets/event-7c.webp";



import event8Img1 from "@/assets/event-8a.webp";
import event8Img2 from "@/assets/event-8c.webp";
import event8Img3 from "@/assets/event-8b.webp";



import event9Img1 from "@/assets/event-9a.webp";
import event9Img2 from "@/assets/event-9c.webp";
import event9Img3 from "@/assets/event-9b.webp";



// NOTE: I reused existing gallery images below for the 3 new events (7, 8, 9)
// since I don't have the actual photos for these three functions.
// Swap event7Img*, event8Img*, event9Img* for the real photos as soon as you have them,
// e.g. import event7Img1 from "@/assets/kamala-hampana-1.jpg";

interface ConfluenceEvent {
  id: string;
  images: string[];
  tagKn: string;
  tagEn: string;
  titleKn: string;
  titleEn: string;
  shortDescEn: string;
  date: string;
  time: string;
  locationKn: string;
  locationEn: string;
  summaryKn: string;
  summaryEn: string;
  highlightsKn: string[];
  highlightsEn: string[];
  trust: string;
}

const events: ConfluenceEvent[] = [
  {
    id: "kannada-sahitya-sangeeta-sambhrama",
    images: [event1Img1, event1Img2, event1Img3],
    tagKn: "ರಾಜ್ಯ ಮಟ್ಟದ ಸಮಾರಂಭ",
    tagEn: "State Level Festival",
    titleKn: "ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮ",
    titleEn: "State Level Kannada Literature & Music Festival",
    shortDescEn:
      "State-level celebration of the intimate bond between poets and artists through literature and music.",
    date: "April 19, 2026",
    time: "10:00 AM – 5:00 PM",
    locationKn: "ಗಾಂಧಿ ಭವನ, ಬೆಂಗಳೂರು",
    locationEn: "Gandhi Bhavan, Bengaluru",
    summaryKn:
      "ದಿನಾಂಕ 19. 4. 2026ರಂದು ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನದಲ್ಲಿ ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ ವತಿಯಿಂದ ಆಯೋಜಿಸಿದ್ದ ರಾಜ್ಯಮಟ್ಟದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ಸಮಾರಂಭವನ್ನು ನಾಡಿನ ಖ್ಯಾತ ಸಾಹಿತಿ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ನಾಡೋಜ ಹಂಪನಾ ರವರು ಉದ್ಘಾಟಿಸಿದರು. ಸಮಾರಂಭದ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪನವರು ಮತ್ತು ಅನೇಕ ಸಾಹಿತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಕಾರ್ಯಕ್ರಮದ ಆಯೋಜನೆಯನ್ನು ಡಾಕ್ಟರ್ ಸಿ.ಸಿ. ರವರ ನೇತೃತ್ವದಲ್ಲಿ ಸಂಭ್ರಮದಿಂದ ಜರಗಿತು. ಶುಭಾಗಳಲ್ಲಿ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುವ ಕವಿಗಳಿಗೂ ಕಲಾವಿದರಿಗೂ ನಿಕಟವಾದ ಸಂಬಂಧವಿದೆ ಎಂದು ಸಹಿತಿ ಹಂಚಿ ನಾಗರಾಜಯ್ಯ ಅವರು ಹೇಳಿದರು. ಕಲಾವಿದರು ಕುಂಚಿನ ಸಹಾಯದಿಂದ ದೊಡ್ಡ ಚಿತ್ರವನ್ನು ರೂಪಿಸುತ್ತಾರೆ. ಕವಿಯ ಬಳಿ ಶುಭಗಳು ಮಾತ್ರವಿಲ್ಲ, ಆ ಶುಭಗಳ ಮೂಲಕವೇ ಚಿತ್ರಗಳನ್ನು ಮೂಡಿಸುತ್ತಾರೆ. ಮಹಾನ್ ಕಾವ್ಯ, ಕಥೆಗಳನ್ನು ಕವಿ ಒಂದೇ ಒಂದು ಪ್ರಸ್ತುತಿಯಲ್ಲಿ ಶುಭಚಿತ್ರಗಳಿಗೆ ಸೆರೆಹಿಡಿಯುತ್ತಾನೆ. ಆ ಕಾವ್ಯ ಕಲಾವಿದರಿಗೆ ದೊರೆಯದ ಮಹಾನ್ ಚಿತ್ರವೊಂದು ಮೂಡುತ್ತದೆ. ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ 'ಮನದ ಸಿಂಹ' ಕೃತಿಯ ಲೋಕಾರ್ಪಣೆಗೆ ಚರ್ಚೆಯಾಯಿತು. ಕುಂಚಿ ಕಲಾವಿದ ಹಂತಿ ವಾಸಿ, ಗಾಯಕಿ ಡಾ. ಜಯಶ್ರೀ, ಸಾಹಿತಿ ಡಾ. ಕೆ.ಜಿ.ಎ. ನಾರಾಯಣಪ್ಪ, ಕನ್ನಡ ಪ್ರಾಧ್ಯಾಪಕ ಡಾ. ಎಸ್. ರಾಮಲ್ಲಿಂಗೇಶ್ವರ ಉಪಸ್ಥಿತರಿದ್ದರು.",
    summaryEn:
      "On April 19, 2026, the State Level Kannada Literature & Music Festival was organized by the Buddha Basava Gandhi Cultural Trust at Gandhi Bhavan, Bengaluru. The event was inaugurated by the renowned litterateur and honored Nadōja Hampana. Dr. K.G. Lakshmi Narayanappa and several other distinguished writers attended as guests of honor. The program was joyfully executed under the leadership of Dr. C.C. Renowned writer Nagarajayya spoke about the intimate bond between poets and artists. He explained that while artists create grand paintings using their brushes, poets paint pictures using only words — weaving emotions, metaphors, and imagery. Through a single stanza, a poet can capture entire epics and stories, creating a masterpiece that even artists may not fully replicate. The ceremony also featured a discussion on the release of the work 'Manada Simha'. Notable attendees included brush artist Hanti Vasi, singer Dr. Jayashree, writer Dr. K.G.A. Narayanappa, and Kannada professor Dr. S. Ramalingeshwara Uppithar.",
    highlightsKn: [
      "ಉದ್ಘಾಟನೆ: ನಾಡೋಜ ಹಂಪನಾ",
      "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀ ನಾರಾಯಣಪ್ಪ",
      "ಕವಿ-ಕಲಾವಿದ ಸಂವಾದ",
      "'ಮನದ ಸಿಂಹ' ಕೃತಿ ಲೋಕಾರ್ಪಣೆ",
      "ಸಂಗೀತ ಮತ್ತು ಕಾವ್ಯ ವಾಚನ",
    ],
    highlightsEn: [
      "Inauguration: Nadōja Hampana",
      "Special Presence: Dr. K.G. Lakshmi Narayanappa",
      "Poet-Artist Dialogue",
      "'Manada Simha' Book Launch",
      "Music & Poetry Recitals",
    ],
    trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
  },
  {
    id: "gunavantha-manju-gruhapravesha",
    images: [event2Img1, event2Img2, event2Img3],
    tagKn: "ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭ",
    tagEn: "Housewarming Ceremony",
    titleKn: "ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಗೃಹಪ್ರವೇಶ - ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮ",
    titleEn: "Dr. Gunavantha Manju's Housewarming Ceremony - Satyanarayana Pooja",
    shortDescEn:
      "Housewarming Satyanarayana Pooja ceremony of litterateur, film director, producer and actor Dr. Gunavantha Manju.",
    date: "April 10, 2026",
    time: "9:00 AM – 1:00 PM",
    locationKn: "ಟೀಚರ್ಸ್ ಕಾಲೋನಿ, ಕೆಆರ್ ಪುರಂ, ಬೆಂಗಳೂರು",
    locationEn: "Teachers Colony, KR Puram, Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರಿನ ಕೆಆರ್ ಪುರಂ ಬಳಿಯ ಟೀಚರ್ಸ್ ಕಾಲೋನಿಯಲ್ಲಿ ಸಾಹಿತಿ, ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ, ನಿರ್ಮಾಪಕ ಹಾಗೂ ನಟ ಡಾಕ್ಟರ್ ಗುಣವಂತ ಮಂಜು ರವರು ನೂತನವಾಗಿ ನಿರ್ಮಿಸಿರುವ ಗೃಹಪ್ರವೇಶ ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ವಿಶೇಷವಾಗಿ ಭಾಗವಹಿಸಿದ್ದರು. ಈ ಶುಭ ಸಂದರ್ಭದಲ್ಲಿ ಡಾ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರು ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರ ಹೊಸ ನಿವಾಸವನ್ನು ಆಶೀರ್ವದಿಸಿದರು ಮತ್ತು ಅವರ ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಸೇವೆಯನ್ನು ಪ್ರಶಂಸಿಸಿದರು. ಗೃಹಪ್ರವೇಶದ ನಂತರ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯನ್ನು ವೈದಿಕ ವಿಧಿಗಳೊಂದಿಗೆ ನೆರವೇರಿಸಲಾಯಿತು. ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರಮುಖ ಸಾಹಿತಿಗಳು, ಚಲನಚಿತ್ರ ನಟರು, ನಿರ್ದೇಶಕರು ಮತ್ತು ಪತ್ರಕರ್ತರು ಸೇರಿದಂತೆ ಹಲವಾರು ಗಣ್ಯರು ಭಾಗವಹಿಸಿದ್ದರು. ಡಾ. ಗುಣವಂತ ಮಂಜು ರವರು ಎಲ್ಲಾ ಅತಿಥಿಗಳಿಗೆ ಆತಿಥ್ಯ ನೀಡಿದರು ಮತ್ತು ತಮ್ಮ ಮುಂಬರುವ ಚಲನಚಿತ್ರ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಂಡರು. ಈ ಕಾರ್ಯಕ್ರಮವು ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಕ್ಷೇತ್ರದ ಗಣ್ಯರು ಒಂದು ವೇದಿಕೆಯಲ್ಲಿ ಸೇರಿದ ಮಹತ್ವದ ಸಂದರ್ಭವಾಗಿತ್ತು.",
    summaryEn:
      "Dr. K.G. Lakshminarayanappa specially participated in the housewarming Satyanarayana Pooja ceremony of Dr. Gunavantha Manju, a noted litterateur, film director, producer and actor, at his newly constructed residence in Teachers Colony near KR Puram, Bengaluru. On this auspicious occasion, Dr. Lakshminarayanappa blessed Dr. Gunavantha Manju's new residence and appreciated his contributions to literature and the film industry. Following the housewarming, the Satyanarayana Pooja was performed with Vedic rituals. The ceremony witnessed the presence of several dignitaries including prominent writers, film actors, directors, and journalists. Dr. Gunavantha Manju hosted all the guests and shared information about his upcoming film projects. This event marked a significant occasion where luminaries from literature and cinema gathered on a single platform.",
    highlightsKn: [
      "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ",
      "ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ವಿಧಿ",
      "ಸಾಹಿತ್ಯ ಮತ್ತು ಚಲನಚಿತ್ರ ಗಣ್ಯರ ಸಮಾಗಮ",
      "ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಹೊಸ ಯೋಜನೆಗಳ ಮಾಹಿತಿ",
    ],
    highlightsEn: [
      "Special Presence: Dr. K.G. Lakshminarayanappa",
      "Satyanarayana Pooja Rituals",
      "Confluence of Literature & Film Dignitaries",
      "Announcement of Dr. Gunavantha Manju's Upcoming Projects",
    ],
    trust: "ಬುದ್ಧ ಬಸವ ಗಾಂಧಿ ಸಾಂಸ್ಕೃತಿಕ ಟ್ರಸ್ಟ್ | Buddha Basava Gandhi Cultural Trust",
  },
  {
    id: "kannada-rajya-ratna-award",
    images: [event3Img1, event3Img2, event3Img3],
    tagKn: "ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ ಸಮಾರಂಭ",
    tagEn: "Award Presentation",
    titleKn: "ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ",
    titleEn: "Kannada Rajya Ratna Award Presentation",
    shortDescEn:
      "Dr. K.G. Lakshminarayanappa honored with the Kannada Rajya Ratna award in a ceremony graced by revered spiritual and cultural dignitaries.",
    date: "May 2, 2026",
    time: "To be updated",
    locationKn: "ನಯನ ಸಭಾಂಗಣ, ಕನ್ನಡ ಭವನ, ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರ ಆವರಣ, ಬೆಂಗಳೂರು",
    locationEn: "Nayana Sabhangana, Kannada Bhavana, Ravindra Kalakshetra Campus, Bengaluru",
    summaryKn:
      "ದಿನಾಂಕ 2 ಮೇ 2026 ರಂದು ಬೆಂಗಳೂರು ನಗರದ ರವೀಂದ್ರ ಕಲಾಕ್ಷೇತ್ರದ ಆವರಣದ ಕನ್ನಡ ಭವನದ ನಯನ ಸಭಾಂಗಣದಲ್ಲಿ ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ ವತಿಯಿಂದ ಡಾ.ಕೆ.ಜಿ ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪನವರಿಗೆ ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ ರಾಜ್ಯ ಪ್ರಶಸ್ತಿಯನ್ನು ಹಲವು ಗಣ್ಯ ಅತಿಥಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಬೇಲಿ ಮಠದ ಮಹಾಸಂಸ್ಥಾನದ ಶ್ರೀ ಶ್ರೀ ಶಿವರುದ್ರ ಮಹಾಸ್ವಾಮಿಗಳ ಅಮೃತ ಹಸ್ತದಿಂದ ಸಂಸ್ಥೆಯ ಅಧ್ಯಕ್ಷರಾದ ಡಾ. ಗುಣವಂತ ಮಂಜು ಅವರ ಸಮ್ಮುಖದಲ್ಲಿ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಮಾಡಿದ ಸಂದರ್ಭ.",
    summaryEn:
      "On May 2, 2026, at the Nayana Sabhangana in Kannada Bhavana within the Ravindra Kalakshetra campus, Bengaluru, the Atmashree Kannada Cultural Foundation conferred the 'Kannada Rajya Ratna' award upon Dr. K.G. Lakshminarayanappa in the presence of several distinguished guests. The award was presented by the revered Sri Sri Shivarudra Mahaswamigalu of the Beli Mutt Mahasansthana, in the presence of Dr. Gunavantha Manju, President of the institution.",
    highlightsKn: [
      "ಪ್ರಶಸ್ತಿ: ಕನ್ನಡ ರಾಜ್ಯ ರತ್ನ",
      "ಪ್ರದಾನ: ಶ್ರೀ ಶ್ರೀ ಶಿವರುದ್ರ ಮಹಾಸ್ವಾಮಿಗಳು",
      "ಸಮ್ಮುಖ: ಡಾ. ಗುಣವಂತ ಮಂಜು",
      "ಆಯೋಜನೆ: ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ",
    ],
    highlightsEn: [
      "Award: Kannada Rajya Ratna",
      "Conferred by: Sri Sri Shivarudra Mahaswamigalu",
      "In Presence of: Dr. Gunavantha Manju",
      "Organized by: Atmashree Kannada Cultural Foundation",
    ],
    trust: "ಆತ್ಮಶ್ರೀ ಕನ್ನಡ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ | Atmashree Kannada Cultural Foundation",
  },
  {
    id: "aarathi-madam-felicitation",
    images: [event4Img1, event4Img2, event4Img3],
    tagKn: "ಸನ್ಮಾನ ಸಮಾರಂಭ",
    tagEn: "Felicitation Ceremony",
    titleKn: "ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ ಅವರಿಗೆ ಸನ್ಮಾನ",
    titleEn: "Felicitation of Smt. Aarathi Madam",
    shortDescEn:
      "Bengaluru Doordarshan Director Smt. Aarathi Madam felicitated by Dr. K.G. Lakshminarayanappa and friends following her Media Academy Award.",
    date: "To be updated",
    time: "To be updated",
    locationKn: "ಬೆಂಗಳೂರು",
    locationEn: "Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರು ದೂರದರ್ಶನ ನಿರ್ದೇಶಕರಾದ ಗೌರವಾನ್ವಿತ ಸನ್ಮಾನ್ಯ ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ ರವರಿಗೆ ಇತ್ತೀಚೆಗೆ ಮಾಧ್ಯಮ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ ದೊರೆತಿದೆ ಹಾಗೂ ಅವರಿಗೆ ಹಲವು ಪ್ರಶಸ್ತಿ ದೊರಕಿರುವುದರಿಂದ ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮಿ ನಾರಾಯಣಪ್ಪ ಮತ್ತು ಅವರ ಆತ್ಮೀಯ ಮಿತ್ರ ಬಳಗ ಮೇಡಂ ಅವರವರನ್ನು ಸನ್ಮಾನಿಸಿ ಗೌರವಿಸಿ ಶುಭ ಹಾರೈಸಿದರು. ಈ ಸಂದರ್ಭದಲ್ಲಿ ನಾಡೋಜ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ಹಂಪನಾ ಹಾಗೂ ಖ್ಯಾತ ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕ ಹಾಗೂ ನಿರ್ಮಾಪಕರಾದ ರಾಜೇಂದ್ರ ಸಿಂಗ್ ಬಾಬು ರವರು ಸಹ ಉಪಸ್ಥಿತರಿದ್ದರು.",
    summaryEn:
      "Smt. Aarathi Madam, the respected Director of Bengaluru Doordarshan, recently received the Media Academy Award along with several other honors. To celebrate her achievements, Dr. K.G. Lakshminarayanappa and his close circle of friends felicitated and congratulated her, wishing her continued success. Nadoja Sri Hampana and renowned film director-producer Rajendra Singh Babu were also present on the occasion.",
    highlightsKn: [
      "ಗೌರವ: ಮಾಧ್ಯಮ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ",
      "ಸನ್ಮಾನಿತರು: ಶ್ರೀಮತಿ ಆರತಿ ಮೇಡಂ",
      "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ನಾಡೋಜ ಹಂಪನಾ",
      "ವಿಶೇಷ ಉಪಸ್ಥಿತಿ: ರಾಜೇಂದ್ರ ಸಿಂಗ್ ಬಾಬು",
    ],
    highlightsEn: [
      "Honor: Media Academy Award",
      "Felicitated: Smt. Aarathi Madam",
      "Special Presence: Nadoja Hampana",
      "Special Presence: Rajendra Singh Babu",
    ],
    trust: "ಆತ್ಮೀಯ ಮಿತ್ರ ಬಳಗ | Close Friends Circle",
  },
  {
    id: "mahila-sahitya-sammelana",
    images: [event5Img1, event5Img2, event5Img3],
    tagKn: "ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
    tagEn: "Literary Conference",
    titleKn: "ಮಹಿಳಾ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
    titleEn: "Women's Literature Conference",
    shortDescEn:
      "A conference celebrating women's contribution to literature, bringing together noted litterateurs and music scholars in Bengaluru.",
    date: "To be updated",
    time: "To be updated",
    locationKn: "ಕುವೆಂಪು ಸಭಾಂಗಣ, ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತು, ಬೆಂಗಳೂರು",
    locationEn: "Kuvempu Sabhangana, Kannada Sahitya Parishat, Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರು ನಗರದ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತಿನ ಕುವೆಂಪು ಸಭಾಂಗಣದಲ್ಲಿ ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ ವತಿಯಿಂದ ಮಹಿಳಾ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದಲ್ಲಿ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಮನು ಬಳಿಗಾರ, ಡಾಕ್ಟರ್ ಸುನಂದಮ್ಮ ಮತ್ತು ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಹಾಗೂ ಅನೇಕ ಸಂಗೀತ ವಿದ್ವಾಂಸರುಗಳು ಭಾಗವಹಿಸಿದ್ದರು.",
    summaryEn:
      "At the Kuvempu Sabhangana of the Kannada Sahitya Parishat in Bengaluru, the Samartha Sahitya and Cultural Foundation organized a Women's Literature Conference. Nadoja Dr. Manu Baligar, Dr. Sunandamma, Dr. K.G. Lakshminarayanappa, and several eminent music scholars participated in the event.",
    highlightsKn: [
      "ಆಯೋಜನೆ: ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ",
      "ಭಾಗವಹಿಸಿದವರು: ನಾಡೋಜ ಡಾ. ಮನು ಬಳಿಗಾರ",
      "ಭಾಗವಹಿಸಿದವರು: ಡಾ. ಸುನಂದಮ್ಮ",
      "ಸಂಗೀತ ವಿದ್ವಾಂಸರ ಸಮ್ಮಿಳನ",
    ],
    highlightsEn: [
      "Organized by: Samartha Sahitya & Cultural Foundation",
      "Participant: Nadoja Dr. Manu Baligar",
      "Participant: Dr. Sunandamma",
      "Confluence of Music Scholars",
    ],
    trust: "ಸಮರ್ಥ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಷ್ಠಾನ | Samartha Sahitya & Cultural Foundation",
  },
  {
    id: "book-launch-ke-radhakrishna",
    images: [event6Img1, event6Img2, event6Img3],
    tagKn: "ಪುಸ್ತಕ ಬಿಡುಗಡೆ",
    tagEn: "Book Launch",
    titleKn: "ಪುಸ್ತಕ ಲೋಕಾರ್ಪಣೆ ಸಮಾರಂಭ",
    titleEn: "Book Launch Ceremony",
    shortDescEn:
      "Release of K.E. Radhakrishna's new book by retired Justice Chandrashekhar, attended by eminent literary, political, and film personalities.",
    date: "To be updated",
    time: "To be updated",
    locationKn: "ಜೈನ್ ವಿಶ್ವವಿದ್ಯಾಲಯ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
    locationEn: "Jain University Auditorium, Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರು ನಗರದ ಜೈನ್ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸಭಾಂಗಣದಲ್ಲಿ ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ ರವರಿಂದ ಪ್ರಖ್ಯಾತ ಆಂಗ್ಲ ವಿದ್ವಾಂಸರಾದ ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ ರವರು ರಚಿಸಿರುವ ಪುಸ್ತಕವನ್ನು ವಿಶ್ರಾಂತ ನ್ಯಾಯಮೂರ್ತಿ ಜಸ್ಟಿಸ್ ಚಂದ್ರಶೇಖರ್ ಅವರು ಲೋಕಾರ್ಪಣೆ ಮಾಡಿದರು. ಸಮಾರಂಭದಲ್ಲಿ ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಮಾಜಿ ಸಚಿವರು ಶ್ರೀ ಸುರೇಶ್ ಕುಮಾರ್, ಶ್ರೀ ನರೇಶ್ ನರಸಿಂಹ, ಚಲನಚಿತ್ರ ನಟ ಸುಂದರ್ ರಾಜ್, ಕೆ.ಸಿ. ರಾಮ್ಮೂರ್ತಿ ಹಾಗೂ ಅನೇಕ ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು. ಸಮಾರಂಭದಲ್ಲಿ ಡಾಕ್ಟರ್ ಕೆಜಿ ಲಕ್ಷ್ಮಿ ನಾರಾಯಣಪ್ಪ ಮತ್ತು ಅವರ ಆತ್ಮೀಯ ಸ್ನೇಹಿತರು ಸಹ ಪಾಲ್ಗೊಂಡಿದ್ದರು.",
    summaryEn:
      "At the Jain University auditorium in Bengaluru, Ankita Pustaka Prakashana released a new book authored by the celebrated English scholar K.E. Radhakrishna. The book was launched by retired Justice Chandrashekhar. Former minister Sri Suresh Kumar, Sri Naresh Narasimha, film actor Sundar Raj, K.C. Rammurthy, and several other dignitaries attended as chief guests. Dr. K.G. Lakshminarayanappa and his close friends were also present at the ceremony.",
    highlightsKn: [
      "ಲೇಖಕರು: ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ",
      "ಲೋಕಾರ್ಪಣೆ: ನ್ಯಾಯಮೂರ್ತಿ ಚಂದ್ರಶೇಖರ್",
      "ಪ್ರಕಾಶನ: ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ",
      "ಗಣ್ಯರ ಸಮ್ಮಿಳನ",
    ],
    highlightsEn: [
      "Author: K.E. Radhakrishna",
      "Released by: Justice Chandrashekhar",
      "Publisher: Ankita Pustaka Prakashana",
      "Confluence of Dignitaries",
    ],
    trust: "ಅಂಕಿತ ಪುಸ್ತಕ ಪ್ರಕಾಶನ | Ankita Pustaka Prakashana",
  },
  {
    id: "kamala-hampana-punya-smarane",
    images: [event7Img3, event7Img1, event7Img2],
    tagKn: "ಪುಣ್ಯಸ್ಮರಣಾ ಸಮಾರಂಭ",
    tagEn: "Memorial Remembrance",
    titleKn: "ನಾಡೋಜ ಡಾ. ಕಮಲಾ ಹಂಪನಾ ಎರಡನೇ ವರ್ಷದ ಪುಣ್ಯಸ್ಮರಣೆ",
    titleEn: "Nadoja Dr. Kamala Hampana's Second Death Anniversary Remembrance",
    shortDescEn:
      "Poetry recitation and music gathering held in Bengaluru to mark the second death anniversary of Nadoja Dr. Kamala Hampana.",
    date: "To be updated",
    time: "To be updated",
    locationKn: "ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
    locationEn: "Gandhi Bhavan Sabhangana, Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣದಲ್ಲಿ ಕಮಲ ಹಂಪನಾ ಸಾಹಿತ್ಯ ವೇದಿಕೆ ಹಾಗೂ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ ಸಹಯೋಗದಿಂದ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಕಮಲ ಹಂಪನಾ ರವರ ಎರಡನೇ ವರ್ಷದ ಪುಣ್ಯಸ್ಮರಣೆ ಅಂಗವಾಗಿ ಸಮಾರಂಭ ಏರ್ಪಡಿಸಲಾಗಿತ್ತು. ಕವಿತಾ ವಾಚನ ಮತ್ತು ಸಂಗೀತ ಗೋಷ್ಠಿ ಹಮ್ಮಿಕೊಳ್ಳಲಾಗಿತ್ತು. ಸಮಾರಂಭದ ಅಧ್ಯಕ್ಷತೆಯನ್ನು ನಾಡೋಜ ಡಾ. ಹಂಪನಾ ಅವರು ವಹಿಸಿದ್ದರು. ಅತಿಥಿಗಳಾಗಿ ಬಿ.ಎಸ್. ಮಂಜುನಾಥ್, ಪ್ರತಿಭಾ ನಂದಕುಮಾರ್, ಡಾ. ಸಂಗೀತ ಕಟ್ಟಿ, ಇಂದು ವಿಶ್ವನಾಥ್ ಮುಂತಾದ ಗಣ್ಯರುಗಳು ಆಗಮಿಸಿದ್ದರು. ಹಾಗೂ ವಿಶೇಷ ಆಹ್ವಾನಿತರಾಗಿ ಪ್ರೊಫೆಸರ್ ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ ರವರು ಮತ್ತು ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮಿನಾರಾಯಣಪ್ಪ ಹಾಗೂ ಅನೇಕ ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು, ಸಾಹಿತಿಗಳು ಭಾಗವಹಿಸಿದ್ದರು.",
    summaryEn:
      "A ceremony was organized at Gandhi Bhavan Sabhangana, Bengaluru, jointly by the Kamala Hampana Sahitya Vedike and the Department of Kannada and Culture, Government of Karnataka, to mark the second death anniversary of Nadoja Dr. Kamala Hampana. The program featured poetry recitation and a music gathering. The ceremony was presided over by Nadoja Dr. Hampana. Guests present included B.S. Manjunath, Pratibha Nandakumar, Dr. Sangeeta Katti, and Indu Vishwanath. Special invitees Professor K.E. Radhakrishna and Dr. K.G. Lakshminarayanappa, along with many other dignitaries and litterateurs, also took part.",
    highlightsKn: [
      "ಅಧ್ಯಕ್ಷತೆ: ನಾಡೋಜ ಡಾ. ಹಂಪನಾ",
      "ಕವಿತಾ ವಾಚನ ಮತ್ತು ಸಂಗೀತ ಗೋಷ್ಠಿ",
      "ವಿಶೇಷ ಆಹ್ವಾನಿತರು: ಪ್ರೊ. ಕೆ.ಈ. ರಾಧಾಕೃಷ್ಣ, ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮಿನಾರಾಯಣಪ್ಪ",
      "ಆಯೋಜನೆ: ಕಮಲ ಹಂಪನಾ ಸಾಹಿತ್ಯ ವೇದಿಕೆ ಹಾಗೂ ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ",
    ],
    highlightsEn: [
      "Presided by: Nadoja Dr. Hampana",
      "Poetry Recitation & Music Gathering",
      "Special Invitees: Prof. K.E. Radhakrishna, Dr. K.G. Lakshminarayanappa",
      "Organized by: Kamala Hampana Sahitya Vedike & Dept. of Kannada and Culture",
    ],
    trust: "ಕಮಲ ಹಂಪನಾ ಸಾಹಿತ್ಯ ವೇದಿಕೆ | Kamala Hampana Sahitya Vedike",
  },
  {
    id: "kannada-barahagara-prakashakara-prashasti",
    images: [event8Img3, event8Img1, event8Img2],
    tagKn: "ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಸಮಾರಂಭ",
    tagEn: "Award Presentation",
    titleKn: "ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘದ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ",
    titleEn: "Karnataka Kannada Writers & Publishers Association Award Ceremony",
    shortDescEn:
      "Award presentation ceremony by the Karnataka Kannada Writers & Publishers Association, conducted by retired Supreme Court Justice Nadoja Dr. Shivaraj V. Patil.",
    date: "To be updated",
    time: "To be updated",
    locationKn: "ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣ, ಬೆಂಗಳೂರು",
    locationEn: "Gandhi Bhavan Sabhangana, Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರು ನಗರದ ಗಾಂಧಿ ಭವನ ಸಭಾಂಗಣದಲ್ಲಿ ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘದ ವತಿಯಿಂದ ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಸಮಾರಂಭ ಉದ್ಘಾಟನೆ ಮತ್ತು ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನವನ್ನು ಭಾರತದ ಸರ್ವೋಚ್ಚ ನ್ಯಾಯಾಲಯದ ವಿಶ್ರಾಂತ ನ್ಯಾಯಮೂರ್ತಿಗಳಾದ ಗೌರವಾನ್ವಿತ ನಾಡೋಜ ಡಾಕ್ಟರ್ ಶಿವರಾಜ ವಿ. ಪಾಟೀಲ ಸರ್ ರವರು ನಡೆಸಿಕೊಟ್ಟರು. ಅಧ್ಯಕ್ಷತೆಯನ್ನು ಶ್ರೀ ನಿಡಸಾಲೆ ಪುಟ್ಟಸ್ವಾಮಿ ಅವರು ವಹಿಸಿದ್ದರು. ವಿಶೇಷ ಆಹ್ವಾನಿತರಾಗಿ ಪ್ರೊಫೆಸರ್ ಮಲ್ಲೇಪುರಂ ವೆಂಕಟೇಶ್, ನಾಡೋಜ ಡಾಕ್ಟರ್ ಒಡೆಪಿ ಕೃಷ್ಣ, ಕೃಷ್ಣ ಪ್ರಕಾಶ್ ಕಂಬತ್ತಳ್ಳಿ, ಡಾಕ್ಟರ್ ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಭಾಗವಹಿಸಿದ್ದರು. ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು ಹಾಗೂ ಅನೇಕ ಸಾಹಿತಿಗಳಾದ ಶ್ರೀ ಬೈರಮಂಗಲ ರಾಮೇಗೌಡ, ಆರ್. ದೊಡ್ಡಿಗೌಡ, ಶ್ರೀ ಕೃಷ್ಣಮೂರ್ತಿ ಸೇರಿದಂತೆ ಅನೇಕ ಬರಹಗಾರರು ಮತ್ತು ಗಣ್ಯ ವ್ಯಕ್ತಿಗಳು ಸಮಾರಂಭದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದರು.",
    summaryEn:
      "The award presentation ceremony of the Karnataka Kannada Writers & Publishers Association was inaugurated and conducted at Gandhi Bhavan Sabhangana, Bengaluru, by the honorable retired Supreme Court Justice Nadoja Dr. Shivaraj V. Patil. Sri Nidasale Puttaswamy presided over the ceremony. Special invitees included Professor Mallepuram Venkatesh, Nadoja Dr. Odepi Krishna, Krishna Prakash Kambattalli, and Dr. K.G. Lakshminarayanappa. Award recipients and several litterateurs including Sri Bairamangala Ramegowda, R. Doddigowda, and Sri Krishnamurthy, along with many other writers and dignitaries, took part in the ceremony.",
    highlightsKn: [
      "ಉದ್ಘಾಟನೆ ಮತ್ತು ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ: ನಾಡೋಜ ಡಾ. ಶಿವರಾಜ ವಿ. ಪಾಟೀಲ",
      "ಅಧ್ಯಕ್ಷತೆ: ಶ್ರೀ ನಿಡಸಾಲೆ ಪುಟ್ಟಸ್ವಾಮಿ",
      "ವಿಶೇಷ ಆಹ್ವಾನಿತರು: ಪ್ರೊ. ಮಲ್ಲೇಪುರಂ ವೆಂಕಟೇಶ್, ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ",
      "ಆಯೋಜನೆ: ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘ",
    ],
    highlightsEn: [
      "Inaugurated & Awards by: Nadoja Dr. Shivaraj V. Patil",
      "Presided by: Sri Nidasale Puttaswamy",
      "Special Invitees: Prof. Mallepuram Venkatesh, Dr. K.G. Lakshminarayanappa",
      "Organized by: Karnataka Kannada Writers & Publishers Association",
    ],
    trust: "ಕರ್ನಾಟಕ ಕನ್ನಡ ಬರಹಗಾರರ ಮತ್ತು ಪ್ರಕಾಶಕರ ಸಂಘ | Karnataka Kannada Writers & Publishers Association",
  },
  {
    id: "balepete-temple-vidyulatha-felicitation",
    images: [event9Img3, event9Img1, event9Img2],
    tagKn: "ಸನ್ಮಾನ ಸಮಾರಂಭ",
    tagEn: "Felicitation Ceremony",
    titleKn: "ಶ್ರೀಮತಿ ವಿದ್ಯುಲತಾ ರವರಿಗೆ ಸನ್ಮಾನ",
    titleEn: "Felicitation of Smt. Vidyulatha",
    shortDescEn:
      "Balepete Lakshmi Narasimha Swamy Temple's management committee felicitates the temple's newly appointed Executive Officer, Smt. Vidyulatha.",
    date: "To be updated",
    time: "To be updated",
    locationKn: "ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯ, ಬೆಂಗಳೂರು",
    locationEn: "Balepete Lakshmi Narasimha Swamy Temple, Bengaluru",
    summaryKn:
      "ಬೆಂಗಳೂರು ನಗರದ ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯದ ವ್ಯವಸ್ಥಾಪನಾ ಸಮಿತಿಯ ಅಧ್ಯಕ್ಷರಾದ ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಮತ್ತು ಸಮಿತಿಯ ಸದಸ್ಯರುಗಳು, ನೂತನವಾಗಿ ದೇವಾಲಯದ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಗಳಾಗಿ ಆಗಮಿಸಿರುವ ಸನ್ಮಾನ್ಯ ಶ್ರೀಮತಿ ವಿದ್ಯುಲತಾ ರವರಿಗೆ ಸನ್ಮಾನಿಸಿ ಗೌರವಿಸಲಾಯಿತು.",
    summaryEn:
      "Dr. K.G. Lakshminarayanappa, Chairman of the Management Committee of the Balepete Lakshmi Narasimha Swamy Temple, Bengaluru, along with committee members, felicitated and honored Smt. Vidyulatha, who has newly taken charge as the temple's Executive Officer.",
    highlightsKn: [
      "ಸನ್ಮಾನಿತರು: ಶ್ರೀಮತಿ ವಿದ್ಯುಲತಾ (ನೂತನ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿ)",
      "ಸನ್ಮಾನ: ಡಾ. ಕೆ.ಜಿ. ಲಕ್ಷ್ಮೀನಾರಾಯಣಪ್ಪ ಹಾಗೂ ವ್ಯವಸ್ಥಾಪನಾ ಸಮಿತಿ",
      "ಸ್ಥಳ: ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯ",
    ],
    highlightsEn: [
      "Felicitated: Smt. Vidyulatha (New Executive Officer)",
      "Honored by: Dr. K.G. Lakshminarayanappa & Management Committee",
      "Venue: Balepete Lakshmi Narasimha Swamy Temple",
    ],
    trust: "ಬಳೆಪೇಟೆ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಾಲಯ | Balepete Lakshmi Narasimha Swamy Temple",
  },
];

const EventCard = ({ event, index, isInView }: { event: ConfluenceEvent; index: number; isInView: boolean }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % event.images.length);
  const prevImg = () =>
    setImgIndex((prev) => (prev - 1 + event.images.length) % event.images.length);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 * index }}
        className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30"
      >
        {/* Image carousel */}<div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl bg-muted">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={event.images[imgIndex]}
              alt={event.titleEn}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {event.images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextImg}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {event.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === imgIndex ? "w-5 bg-gold" : "w-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold whitespace-nowrap">
              {event.tagKn}
            </span>
            <span className="text-xs italic text-muted-foreground text-right">
              {event.tagEn}
            </span>
          </div>

          <h3 className="font-heading font-bold text-xl text-navy leading-snug mb-1">
            {event.titleKn}
          </h3>
          <p className="text-gold font-medium text-sm mb-3">{event.titleEn}</p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {event.shortDescEn}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" />
              {event.locationKn}
            </span>
          </div>

          <button
            onClick={() => setReadMoreOpen(true)}
            className="w-full flex items-center justify-between px-5 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 font-medium"
          >
            <span className="flex items-center gap-2">
              <ExternalLink size={15} />
              ವಿವರಗಳನ್ನು ಓದಿ / Read More
            </span>
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>

      {/* Read More modal */}
      <AnimatePresence>
  {readMoreOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-5 pt-24 sm:pt-35 pb-8"
      onClick={() => setReadMoreOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl my-auto"
      >
        {/* Modal image — fixed height so it can never blow up into a huge
            blank block on wide screens, with the title overlaid on a
            gradient at the bottom (matches the reference look) */}
        <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl bg-muted">
          <img
            src={event.images[imgIndex]}
            alt={event.titleEn}
            className="w-full h-full object-cover"
          />

          {/* Dark gradient so the white title text stays readable over any photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent pointer-events-none" />

          <button
            onClick={() => setReadMoreOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          {event.images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/70 hover:bg-navy/90 text-white flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {event.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i === imgIndex ? "w-4 bg-gold" : "w-1 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Title overlaid on the image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold/20 text-gold mb-1.5">
              {event.tagKn} • {event.tagEn}
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-white leading-snug">
              {event.titleKn}
            </h2>
            <p className="text-white/85 font-medium text-sm mt-0.5">{event.titleEn}</p>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3 pb-3 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-gold" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-gold" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-gold" />
              {event.locationKn} | {event.locationEn}
            </span>
          </div>

          {/* Kannada summary */}
          <h4 className="font-heading font-semibold text-navy text-sm mb-1.5">ಕನ್ನಡ | ಸಾರಾಂಶ</h4>
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            {event.summaryKn}
          </p>

          {/* English summary */}
          <h4 className="font-heading font-semibold text-navy text-sm mb-1.5">English | Summary</h4>
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            {event.summaryEn}
          </p>

          {/* Highlights */}
          <h4 className="font-heading font-semibold text-navy text-sm mb-2 flex items-center gap-2">
            ✨ ಪ್ರಮುಖ ಅಂಶಗಳು / Key Highlights
          </h4>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
            <ul className="space-y-1.5">
              {event.highlightsKn.map((h, i) => (
                <li key={i} className="text-sm text-foreground/90 flex gap-2">
                  <span className="text-gold">•</span>
                  {h}
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {event.highlightsEn.map((h, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-gold">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-2 border-t border-border">
            {event.trust}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
  
      <section
        id="literary-confluence"
        className="section-padding bg-background relative overflow-hidden"
        ref={ref}
      >
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
              ಸಾಹಿತ್ಯ <span className="text-gold">ಸಂಗಮ</span> | Literary Confluence
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
              ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಗೀತ ಸಂಭ್ರಮದ ನೆನಪುಗಳು — ಸಮಗ್ರ ಮಾಹಿತಿ ಮತ್ತು ವಿವರಗಳು
              <br />
              Memories of the Kannada Literature & Music Festival — Complete
              Information & Details
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </section>
      
  );
};

export default EventsSection;