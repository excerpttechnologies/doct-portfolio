// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { Lightbulb, Heart, Globe, Pen } from "lucide-react";

// const pillars = [
//   {
//     icon: Pen,
//     title: "Literature as Liberation",
//     desc: "Words are not mere vessels of meaning — they are instruments of freedom. Through literature, we awaken the conscience of society and illuminate the path to justice.",
//     color: "from-gold/20 to-gold/5",
//   },
//   {
//     icon: Heart,
//     title: "Empathy in Governance",
//     desc: "True governance begins not with policy but with compassion. Every administrative decision must be measured by its impact on the most vulnerable among us.",
//     color: "from-gold/15 to-gold/5",
//   },
//   {
//     icon: Globe,
//     title: "Cultural Preservation",
//     desc: "In the rush toward modernity, we must not abandon the wisdom of our ancestors. Regional languages and folk traditions are the living memory of our civilization.",
//     color: "from-gold/20 to-gold/5",
//   },
//   {
//     icon: Lightbulb,
//     title: "Education as Transformation",
//     desc: "Education is not the filling of a vessel but the kindling of a flame. Every child deserves access to learning that nourishes both mind and soul.",
//     color: "from-gold/15 to-gold/5",
//   },
// ];

// const PhilosophySection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   return (
//     <section id="philosophy" className="section-padding bg-background relative overflow-hidden" ref={ref}>
//       {/* Parallax decorative element */}
//       <motion.div
//         style={{ y, rotate }}
//         className="absolute -right-20 top-1/4 w-64 h-64 border border-gold/10 rounded-full pointer-events-none"
//       />
//       <motion.div
//         style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
//         className="absolute -left-10 bottom-1/4 w-40 h-40 border border-gold/10 rounded-full pointer-events-none"
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
//             Guiding Principles
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Philosophy & <span className="text-gold">Vision</span>
//           </h2>
//         </motion.div>

//         {/* Quote banner */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="bg-navy rounded-2xl p-8 md:p-12 mb-16 text-center relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />
//           <p className="text-primary-foreground/90 text-xl md:text-2xl lg:text-3xl font-heading italic leading-relaxed relative z-10">
//             "The pen and the plough are both instruments of service —{" "}
//             <span className="text-gold">one tills the mind</span>, the other tills the earth."
//           </p>
//           <p className="text-gold mt-6 font-medium relative z-10">— Dr. K. G. Lakshmi Narayanappa</p>
//         </motion.div>

//         {/* Pillars */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {pillars.map((pillar, i) => (
//             <motion.div
//               key={pillar.title}
//               initial={{ opacity: 0, y: 40, rotateX: 10 }}
//               animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="group relative bg-card rounded-xl p-8 border border-border hover:border-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl"
//             >
//               <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

//               <div className="relative z-10">
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:glow-gold transition-all duration-500"
//                 >
//                   <pillar.icon size={24} className="text-gold" />
//                 </motion.div>

//                 <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
//                   {pillar.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PhilosophySection;












import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Heart, Globe, Pen } from "lucide-react";

const pillars = [
  {
    icon: Pen,
    title: "Literature as Liberation",
    desc: "Words are not mere vessels of meaning — they are instruments of freedom. Through literature, we awaken the conscience of society and illuminate the path to justice.",
    color: "from-gold/20 to-gold/5",
    points: [
      {
        heading: "Voice for Society",
        detail:
          "Writings reflect social realities, inequalities, and public concerns — literature acts as a platform for unheard voices.",
      },
      {
        heading: "Awareness Creation",
        detail:
          "Newspaper articles educate people about current issues, governance, and culture, helping citizens become informed and responsible.",
      },
      {
        heading: "Breaking Mental Barriers",
        detail:
          "Writing encourages people to question traditions, injustice, and ignorance, promoting critical thinking.",
      },
      {
        heading: "Knowledge Democratization",
        detail:
          "Books make knowledge accessible beyond institutions — literature becomes a public education system.",
      },
      {
        heading: "Empowerment through Language",
        detail:
          "Kannada writing strengthens regional identity and intellectual confidence, making language a tool of empowerment.",
      },
    ],
  },
  {
    icon: Heart,
    title: "Empathy in Governance",
    desc: "True governance begins not with policy but with compassion. Every administrative decision must be measured by its impact on the most vulnerable among us.",
    color: "from-gold/15 to-gold/5",
    points: [
      {
        heading: "People-Centered Leadership",
        detail:
          "Active participation in public events and community programs with a focus on real-life issues of citizens.",
      },
      {
        heading: "Ground-Level Connection",
        detail:
          "Direct interaction with individuals shows understanding of grassroots problems and builds trust between leader and people.",
      },
      {
        heading: "Service-Oriented Approach",
        detail:
          "Governance seen as service, not authority — awards and recognitions reflect lasting impact on society.",
      },
      {
        heading: "Inclusive Decision Making",
        detail:
          "Engagement with diverse communities ensures fair representation and encourages collective progress.",
      },
      {
        heading: "Ethical Governance",
        detail:
          "Legal background strengthens justice, fairness, and accountability — decisions guided by values, not power.",
      },
    ],
  },
  {
    icon: Globe,
    title: "Cultural Preservation",
    desc: "In the rush toward modernity, we must not abandon the wisdom of our ancestors. Regional languages and folk traditions are the living memory of our civilization.",
    color: "from-gold/20 to-gold/5",
    points: [
      {
        heading: "Documentation of Traditions",
        detail:
          "Books capture lives of traditional communities like weavers, preventing cultural knowledge from being lost.",
      },
      {
        heading: "Promotion of Kannada Heritage",
        detail:
          "Writing in Kannada strengthens regional pride and continuity, protecting our linguistic heritage.",
      },
      {
        heading: "Connecting Past and Present",
        detail:
          "Historical works help modern society understand roots and evolution, encouraging respect for tradition.",
      },
      {
        heading: "Support for Cultural Communities",
        detail:
          "Focus on artisans and traditional workers highlights their importance in society, encouraging their recognition and survival.",
      },
      {
        heading: "Participation in Cultural Platforms",
        detail:
          "Active role in events, seminars, and literary gatherings helps spread and sustain cultural values.",
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "Education as Transformation",
    desc: "Education is not the filling of a vessel but the kindling of a flame. Every child deserves access to learning that nourishes both mind and soul.",
    color: "from-gold/15 to-gold/5",
    points: [
      {
        heading: "Academic Excellence as Foundation",
        detail:
          "Advanced education reflects commitment to knowledge, building credibility and intellectual authority.",
      },
      {
        heading: "Knowledge Sharing",
        detail:
          "Books and speeches spread ideas beyond classrooms, making education accessible to all.",
      },
      {
        heading: "Intellectual Leadership",
        detail:
          "Participation in discussions and seminars shows thought leadership, inspiring others to think critically.",
      },
      {
        heading: "Empowering Society",
        detail:
          "Educated individuals contribute to better governance and social development, promoting self-reliance and awareness.",
      },
      {
        heading: "Lifelong Learning Philosophy",
        detail:
          "Continuous writing and engagement show education never stops — encouraging a culture of constant growth.",
      },
    ],
  },
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="philosophy" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Parallax decorative element */}
      <motion.div
        style={{ y, rotate }}
        className="absolute -right-20 top-1/4 w-64 h-64 border border-gold/10 rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="absolute -left-10 bottom-1/4 w-40 h-40 border border-gold/10 rounded-full pointer-events-none"
      />

      <div className="container mx-auto relative z-10">
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
            Guiding Principles
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Philosophy & <span className="text-gold">Vision</span>
          </h2>
        </motion.div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-navy rounded-2xl p-8 md:p-12 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />
          <p className="text-primary-foreground/90 text-xl md:text-2xl lg:text-3xl font-heading italic leading-relaxed relative z-10">
            "The pen and the plough are both instruments of service —{" "}
            <span className="text-gold">one tills the mind</span>, the other tills the earth."
          </p>
          <p className="text-gold mt-6 font-medium relative z-10">— Dr. K. G. Lakshmi Narayanappa</p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:glow-gold transition-all duration-500"
                >
                  <pillar.icon size={24} className="text-gold" />
                </motion.div>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{pillar.desc}</p>

                {/* Detailed points */}
                <ul className="space-y-3">
                  {pillar.points.map((point, j) => (
                    <motion.li
                      key={point.heading}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.15 + j * 0.08 }}
                      className="flex gap-3"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold/70" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground/80">{point.heading}: </span>
                        {point.detail}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;