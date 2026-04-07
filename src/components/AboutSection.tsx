import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/main.png";
import { GraduationCap, BookOpen, Briefcase, Award } from "lucide-react";

const timeline = [
  { year: "1950", title: "Early Life", desc: "Dr. K. G. Lakshmi Narayanappa was born on 3rd August 1950 in Tumakuru, Karnataka. He grew up in a disciplined environment and developed an early interest in education.", icon: BookOpen },
  { year: "", title: "Higher Education", desc: "Completed advanced studies including M.Sc., LL.B., D.B.A., and obtained a Ph.D. (USA) and B.C.E. (Canada), demonstrating a diverse and globally enriched academic background.", icon: GraduationCap },
  { year: "1975–2010", title: "Government Service", desc: "Served in the police department for over three decades (1975–2010), demonstrating dedication, discipline, and commitment to public service.", icon: Briefcase },
  { year: "", title: "Literary Recognition", desc: "Received widespread recognition for contributions to Kannada literature through various awards and honors.", icon: Award },
];

const textRevealVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Section header with text reveal */}
        <div className="text-center mb-16">
          <motion.p
            custom={0}
            variants={textRevealVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2"
          >
            Life Story
          </motion.p>
          <motion.h2
            custom={1}
            variants={textRevealVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground"
          >
            About <span className="text-gold">Dr. K. G. Lakshmi Narayanappa</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </div>

        {/* Two column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-xl"
          >
            <motion.div style={{ y: imgY }}>
              <img
                src={heroPortrait}
                alt="Dr. K. G. Lakshmi Narayanappa"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1024}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Decorative corner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/50"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/50"
            />
          </motion.div>

          {/* Bio with staggered text */}
          <div>
            <motion.h3
              custom={2}
              variants={textRevealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl font-heading font-semibold text-foreground mb-6"
            >
              A Beacon of Literary Excellence & Public Service
            </motion.h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {[
                "Dr. K. G. Lakshmi Narayanappa is a distinguished scholar, accomplished author, and former public servant whose work reflects a lifelong dedication to knowledge, culture, and society. With an impressive academic background that spans both India and international institutions, he has built a strong foundation in both intellectual and professional domains.",
"He has made significant contributions to Kannada literature through his insightful writings on history, tradition, and social issues. His works highlight a deep understanding of cultural heritage and aim to create awareness and appreciation for societal values and traditions.",
"Over a career spanning more than three decades in government service, he combined professional excellence with intellectual pursuit, earning recognition from literary and cultural communities. His journey stands as a testament to discipline, scholarship, and a lasting commitment to preserving and promoting cultural heritage."
].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gold/40 md:-translate-x-px origin-top"
          />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.8 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-16 md:pl-0`}>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.2, type: "spring" }}
                    className="text-gold font-heading text-xl font-bold inline-block"
                  >
                    {item.year}
                  </motion.span>
                  <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy border-2 border-gold flex items-center justify-center"
                >
                  <item.icon size={14} className="text-gold" />
                </motion.div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
