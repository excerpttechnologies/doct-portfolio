import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, FileCheck, Landmark } from "lucide-react";

const careerSteps = [
  { year: "1980–1988", role: "Assistant Commissioner", dept: "Revenue Department, Karnataka", desc: "Managed land records modernization across three districts, improving access for rural citizens.", icon: FileCheck },
  { year: "1988–1996", role: "Deputy Secretary", dept: "Department of Kannada & Culture", desc: "Spearheaded preservation initiatives for classical Kannada manuscripts and folk art traditions.", icon: Landmark },
  { year: "1996–2005", role: "Joint Secretary", dept: "Ministry of Education, Karnataka", desc: "Designed and implemented the state's first comprehensive vernacular education policy framework.", icon: Users },
  { year: "2005–2015", role: "Principal Secretary", dept: "Department of Higher Education", desc: "Led university reform initiatives and established literary research centres across Karnataka.", icon: Building2 },
];

const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="section-padding bg-background" ref={ref}>
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
            Public Service
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Government <span className="text-gold">Career</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute left-8 top-0 w-px bg-gradient-to-b from-gold via-gold/50 to-gold/20 origin-top"
          />

          <div className="space-y-12">
            {careerSteps.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20"
              >
                {/* Animated icon circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                  className="absolute left-2 w-12 h-12 rounded-full bg-navy border-2 border-gold flex items-center justify-center cursor-pointer"
                >
                  <step.icon size={18} className="text-gold" />
                </motion.div>

                {/* Connector pulse */}
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute left-[31px] top-14 w-2 h-2 rounded-full bg-gold"
                />

                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 10px 40px -10px hsla(40,52%,54%,0.2)", transition: { duration: 0.3 } }}
                  className="bg-card rounded-xl p-6 shadow-sm transition-all border border-border hover:border-gold/30"
                >
                  <span className="text-gold font-heading text-sm font-bold">{step.year}</span>
                  <h3 className="text-xl font-heading font-semibold text-foreground mt-1">{step.role}</h3>
                  <p className="text-gold/80 text-sm font-medium">{step.dept}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
