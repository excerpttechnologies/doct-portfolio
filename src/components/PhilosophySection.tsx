import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Heart, Globe, Pen } from "lucide-react";

const pillars = [
  {
    icon: Pen,
    title: "Literature as Liberation",
    desc: "Words are not mere vessels of meaning — they are instruments of freedom. Through literature, we awaken the conscience of society and illuminate the path to justice.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Heart,
    title: "Empathy in Governance",
    desc: "True governance begins not with policy but with compassion. Every administrative decision must be measured by its impact on the most vulnerable among us.",
    color: "from-gold/15 to-gold/5",
  },
  {
    icon: Globe,
    title: "Cultural Preservation",
    desc: "In the rush toward modernity, we must not abandon the wisdom of our ancestors. Regional languages and folk traditions are the living memory of our civilization.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Lightbulb,
    title: "Education as Transformation",
    desc: "Education is not the filling of a vessel but the kindling of a flame. Every child deserves access to learning that nourishes both mind and soul.",
    color: "from-gold/15 to-gold/5",
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
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
