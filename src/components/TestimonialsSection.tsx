import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Prof. Chandrashekhar Patil",
    role: "Former Vice Chancellor, University of Mysore",
    text: "Dr. Narayanappa's literary works transcend the boundaries of language. His prose carries the weight of lived experience and the grace of classical tradition. He is, without doubt, one of Karnataka's finest literary minds.",
    rating: 5,
  },
  {
    name: "Smt. Sudha Murty",
    role: "Author & Philanthropist",
    text: "Reading Dr. Narayanappa's poetry is like walking through a garden of memories. Each word is carefully planted, each verse blooms with meaning. His contribution to Kannada literature is immeasurable.",
    rating: 5,
  },
  {
    name: "Dr. Vivek Shanbhag",
    role: "Award-winning Novelist",
    text: "In an age of superficial writing, Dr. Narayanappa's works remind us of the depth and dignity that literature can achieve. His essays on governance and culture are essential reading for every Indian intellectual.",
    rating: 5,
  },
  {
    name: "Sri K. Marulasiddappa",
    role: "President, Karnataka Sahitya Parishat",
    text: "Few individuals have served both literature and governance with such distinction. Dr. Narayanappa embodies the ideal of the scholar-administrator, a tradition we thought lost to history.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-navy overflow-hidden" ref={ref}>
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
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gold uppercase text-sm font-medium mb-2"
          >
            What Others Say
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            Testimonials & <span className="text-gradient-gold">Endorsements</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative quotes */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-8 -left-8 text-gold"
          >
            <Quote size={120} />
          </motion.div>

          <div className="relative min-h-[320px] flex items-center justify-center px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-16"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                    >
                      <Star size={18} className="text-gold fill-gold" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed italic font-light mb-8 max-w-3xl">
                  "{testimonials[current].text}"
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="font-heading font-semibold text-gold text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-primary-foreground/50 text-sm mt-1">
                    {testimonials[current].role}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="relative w-3 h-3 rounded-full overflow-hidden"
                >
                  <div className={`w-full h-full rounded-full transition-colors ${i === current ? "bg-gold" : "bg-gold/30"}`} />
                  {i === current && (
                    <motion.div
                      layoutId="testimonialDot"
                      className="absolute inset-0 rounded-full bg-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
