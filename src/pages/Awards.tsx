// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// // import { Trophy, Star, Medal, Award } from "lucide-react";
// import Header from "@/components/Header";

// // const awards = [
// //   { title: "Kendra Sahitya Akademi Award", year: "1998", desc: "For outstanding contribution to Kannada prose literature.", icon: Trophy },
// //   { title: "Karnataka Jnanpith State Award", year: "2005", desc: "State's highest civilian honour for public service and literary excellence.", icon: Star },
// //   { title: "Karnataka Pampa Award", year: "2010", desc: "Nominated as Fellow for lifetime contribution to Indian literature.", icon: Medal },
// //   { title: "Pampa Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// //  { title: "Padma Bhushan Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// //  { title: "Vrittidaya Sadhaka Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// //  { title: "Bhavana Muni Vardhane Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// //   { title: "Markandeya Recognition Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// //    { title: "Bharatiya Sahitya Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// // { title: "R. V. Devaraja Seva Pratishthana Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// // { title: "Kannada Sirigandha Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// // { title: "Kannada Seva Ratna Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// // { title: "Karnataka Yuva Sahitya Shri Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// // { title: "World Literary Award – Kannada Sangha, Toronto, Canada", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },









// // ];


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
//     icon: BookOpen 
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

//         <Header />
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







import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Medal, Award, BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";

const awards = [
  { title: "Kendra Sahitya Akademi Award", desc: "For outstanding contribution to Kannada literature.", icon: Trophy },
  { title: "Karnataka Jnanpith State Award", desc: "For excellence in Kannada literary achievements.", icon: Star },
  { title: "Karnataka Pampa Award", desc: "For lifetime contribution to Kannada literature.", icon: Medal },
  { title: "Pampa Award", desc: "Highest literary honour by Karnataka Government.", icon: Award },
  { title: "Padma Bhushan Award", desc: "For distinguished service in literature and education.", icon: ShieldCheck },
  { title: "Vrittidaya Sadhaka Award", desc: "For dedication towards literary and social service.", icon: Star },
  { title: "Bhavana Muni Vardhane Award", desc: "For contribution to cultural and literary development.", icon: Sparkles },
  { title: "Markandeya Recognition Award", desc: "For excellence in Kannada literary works.", icon: Award },
  { title: "Bharatiya Sahitya Award", desc: "For contribution to Indian literature.", icon: BookOpen },
  { title: "R. V. Devaraja Seva Pratishthana Award", desc: "For service in literature and social upliftment.", icon: Globe },
  { title: "Kannada Sirigandha Award", desc: "For promoting Kannada language and culture.", icon: Trophy },
  { title: "Kannada Seva Ratna Award", desc: "For outstanding service to Kannada community.", icon: Medal },
  { title: "Karnataka Yuva Sahitya Shri Award", desc: "For excellence in young literary contributions.", icon: BookOpen },
  { title: "World Literary Award – Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: Globe },
];

const GOLD = "#C8A45D";

export default function AwardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FFFFFF",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        padding: "80px 0 100px",
        minHeight: "100vh",
      }}
    >
      <Header />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 11,
            letterSpacing: "0.28em",
            color: GOLD,
            textTransform: "uppercase",
            fontWeight: 400,
            marginBottom: 16,
          }}>
            Recognition &amp; Honours
          </p>

          <h2 style={{
            fontSize: "clamp(38px, 6vw, 58px)",
            fontWeight: 400,
            color: "#1A1A1A",
            margin: "0 0 20px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            Awards &amp;{" "}
            <span style={{ color: GOLD, fontWeight: 600 }}>Achievements</span>
          </h2>

          {/* Decorative divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                width: 60,
                height: 1,
                background: `linear-gradient(to right, transparent, ${GOLD})`,
                transformOrigin: "right",
              }}
            />
            <div style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: GOLD,
              flexShrink: 0,
            }} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                width: 60,
                height: 1,
                background: `linear-gradient(to left, transparent, ${GOLD})`,
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>

        {/* Awards List */}
        <div>
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "22px 16px 22px 0",
                  borderBottom: "1px solid rgba(200, 164, 93, 0.15)",
                  cursor: "default",
                  transition: "background 0.2s",
                  borderRadius: 4,
                  position: "relative",
                }}
                whileHover={{ backgroundColor: "rgba(200,164,93,0.04)" }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 12,
                  color: "rgba(200,164,93,0.6)",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  minWidth: 28,
                  textAlign: "right",
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Vertical Divider */}
                <div style={{
                  width: 1,
                  height: 40,
                  backgroundColor: "rgba(200,164,93,0.2)",
                  flexShrink: 0,
                }} />

                {/* Icon */}
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: `1px solid rgba(200,164,93,0.25)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backgroundColor: "rgba(200,164,93,0.05)",
                }}>
                  <Icon size={16} color={GOLD} strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#1F1F1F",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}>
                    {award.title}
                  </p>
                  <p style={{
                    margin: "4px 0 0",
                    fontSize: 13,
                    color: GOLD,
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}>
                    {award.desc}
                  </p>
                </div>

                {/* Gold dot */}
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: GOLD,
                  flexShrink: 0,
                  opacity: 0.6,
                }} />
              </motion.div>
            );
          })}
        </div>

        {/* Footer tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 100,
            backgroundColor: "#FDF8F2",
          }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
            <span style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              color: GOLD,
              textTransform: "uppercase",
              fontWeight: 400,
            }}>
              A Journey of Literary Excellence
            </span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}