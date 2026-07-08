import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BookOpen, Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: BookOpen, value: 26, suffix: "+", label: "Published Books", desc: "Fiction, poetry, essays & criticism" },
  { icon: Award, value: 14, suffix: "+", label: "Awards Received", desc: "State & national level honours" },
  { icon: Users, value: 35, suffix: "+", label: "Years of Service", desc: "In Karnataka government" },
  { icon: Calendar, value: 100, suffix: "+", label: "Speaking Events", desc: "Lectures, festivals & keynotes" },
];

const Counter = ({ target, isInView }: { target: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-navy -z-10"
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center group"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, type: "spring" }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-500"
              >
                <stat.icon size={28} className="text-gold" />
              </motion.div>

              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-1">
                <Counter target={stat.value} isInView={isInView} />
                <span>{stat.suffix}</span>
              </div>

              <p className="text-primary-foreground font-semibold text-lg mb-1">{stat.label}</p>
              <p className="text-primary-foreground/50 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
