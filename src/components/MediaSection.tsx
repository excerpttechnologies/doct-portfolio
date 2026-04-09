// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Play, Tv, Radio, Newspaper } from "lucide-react";
// import gallery1 from "@/assets/gallery-1.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";

// const media = [
//   { title: "The Writer's Journey — In Conversation", platform: "Doordarshan", type: "TV Interview", img: gallery1, icon: Tv },
//   { title: "Literature & Governance: A Dual Life", platform: "All India Radio", type: "Radio Interview", img: gallery4, icon: Radio },
//   { title: "Keynote at National Book Festival 2022", platform: "YouTube", type: "Public Lecture", img: gallery1, icon: Play },
//   { title: "Profile: The Scholar-Administrator", platform: "The Hindu", type: "Feature Article", img: gallery4, icon: Newspaper },
// ];

// const MediaSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="media" className="section-padding bg-background" ref={ref}>
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
//             Press & Media
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Media & <span className="text-gold">Interviews</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {media.map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
//               animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
//               transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{ y: -6, transition: { duration: 0.3 } }}
//               className="group flex gap-4 bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30 cursor-pointer"
//             >
//               <div className="relative w-40 flex-shrink-0 overflow-hidden">
//                 <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
//                 <div className="absolute inset-0 bg-navy/50 flex items-center justify-center group-hover:bg-navy/30 transition-colors">
//                   <motion.div
//                     whileHover={{ scale: 1.2 }}
//                     animate={{ boxShadow: ["0 0 0 0 hsla(40,52%,54%,0.4)", "0 0 0 15px hsla(40,52%,54%,0)", "0 0 0 0 hsla(40,52%,54%,0)"] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center"
//                   >
//                     <Play size={20} className="text-navy ml-0.5" fill="currentColor" />
//                   </motion.div>
//                 </div>
//               </div>
//               <div className="p-5 flex flex-col justify-center">
//                 <div className="flex items-center gap-2 mb-2">
//                   <item.icon size={14} className="text-gold" />
//                   <span className="text-gold text-xs font-medium uppercase tracking-wider">{item.type}</span>
//                 </div>
//                 <h3 className="font-heading font-semibold text-foreground leading-snug group-hover:text-gold transition-colors">{item.title}</h3>
//                 <p className="text-muted-foreground text-sm mt-1">{item.platform}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MediaSection;









import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Tv, Radio, Newspaper, ExternalLink } from "lucide-react";
import gallery32 from "@/assets/gallery32.jpg";
import gallery4 from "@/assets/gallery4.jpg";

import media2 from "@/assets/media2.jpg";


const media = [
  {
    title: "Dr. KG Lakshminarayanappa Sir ",
    platform: "75th Birthday Celebrations held 13.1.2026 At Gandhi Bhavan, Bengaluru",
    type: "Public Felicitation Function / Book Release Event",
    img: gallery32,
    icon: Tv,
    url: "https://youtu.be/Pa6hDNKcGfk?si=AVWBgXH3VH_xEGUq",
  },
  {
    title: "Abhinandana Samithi and Annapoorna Publishing House, Brought out 'Nisvartha Siri' Abhinandana Grantha",
    platform: "Dr. KG Lakshminarayanappa Sir 75th Birthday Celebrations held 13.1.2026 At Gandhi Bhavan, Bengaluru",
    type: "Public Felicitation Function / Book Release Event",
    img: media2,
    icon: Radio,
    url: "https://youtu.be/AffJc2TxR8k?si=o7AucBcZEd_S61Ez",
  },
  {
    title: "Abhinandana Samithi and Annapoorna Publishing House, Brought out 'Nisvartha Siri' ",
    type: "Public Felicitation Function / Book Release Event",
    img: media2,
    icon: Play,
    url: "https://youtu.be/7cluX9ZGolk?si=1U4-hMvHOorDBrYj",
  },
  {
    title: "Abhinandana Grantha (Book) and Abhinandana to Dr.K.G.Lakshminarayanappa Sir,  on 13th January 2026, at Gandhi Bhavana, Bengaluru.",
    platform: "The Hindu",
    type: "Public Felicitation Function / Book Release Event",
    img: gallery4,
    icon: Newspaper,
    url: "https://youtube.com/live/rMSzjYGHaI0?feature=share",
  },
];

// Navigation categories
const navItems = [
  { id: "all", label: "All Media" },
  // { id: "video", label: "Video Interviews" },
  // { id: "audio", label: "Audio" },
  // { id: "print", label: "Print" },
];

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNav, setActiveNav] = useState("all");

  // Filter media based on active navigation
  const filteredMedia = media.filter((item) => {
    if (activeNav === "all") return true;
    if (activeNav === "video") return item.type === "TV Interview" || item.type === "Public Lecture";
    if (activeNav === "audio") return item.type === "Radio Interview";
    if (activeNav === "print") return item.type === "Feature Article";
    return true;
  });

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="media" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
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
            Press & Media
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Media & <span className="text-gold">Interviews</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 bg-card/50 backdrop-blur-sm p-1.5 rounded-full border border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeNav === item.id
                    ? "bg-gold text-navy shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredMedia.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => handleCardClick(item.url)}
              className="group flex gap-4 bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30 cursor-pointer"
            >
              <div className="relative w-40 flex-shrink-0 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/50 flex items-center justify-center group-hover:bg-navy/30 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 hsla(40,52%,54%,0.4)",
                        "0 0 0 15px hsla(40,52%,54%,0)",
                        "0 0 0 0 hsla(40,52%,54%,0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center"
                  >
                    <Play size={20} className="text-navy ml-0.5" fill="currentColor" />
                  </motion.div>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={14} className="text-gold" />
                  <span className="text-gold text-xs font-medium uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground leading-snug group-hover:text-gold transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{item.platform}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gold/70 group-hover:text-gold transition-colors">
                  <ExternalLink size={12} />
                  <span>Watch </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state when no media matches filter */}
        {filteredMedia.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No media found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MediaSection;