import { motion, useScroll, useTransform } from "framer-motion";
import heroPortrait from "@/assets/main.png";
import { ArrowDown, BookOpen, Mail, Sparkles } from "lucide-react";
import { useCallback } from "react";
import image1 from "@/assets/collage.png";
const typewriterWords = ["Writer", "Thinker", "Public Servant", "Poet", "Scholar"];

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, hsla(238, 78%, 7%, 0.77) 0%, transparent 70%)",
            "radial-gradient(ellipse at 80% 50%, hsla(206, 92%, 46%, 0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse at 20% 50%, hsla(238, 86%, 19%, 0.08) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />




      {/* Floating particles - enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? "w-2 h-2 bg-gold/15" : "w-1 h-1 bg-gold/25"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 40), 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>



      {/* Gold decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
      />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Portrait with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: portraitScale }}
            className="relative"
          >
            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-gold/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dashed border-gold/10 rounded-full"
            />

            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold/40 glow-gold relative">
              <img
                src={heroPortrait}
                alt="Dr. K. G. Lakshmi Narayanappa"
                // className="w-full h-full object-cover"
                 className="w-full h-full object-cover"
  style={{ mixBlendMode: "lighten" }}
                width={800}
                height={1024}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-gold/30 rounded-full"
            />
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4"
            >
              <Sparkles size={20} className="text-gold/40" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
            >
              Writer · Thinker · Public Servant
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Dr. K. G. Lakshmi{" "}
              <motion.span
                className="text-gradient-gold inline-block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Narayanappa
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-8 font-light"
            >
              A lifetime dedicated to literature, governance, and cultural enrichment
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsla(40,52%,54%,0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("works")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy font-semibold rounded-md hover:bg-gold-light transition-colors"
              >
                <BookOpen size={18} />
                View Works
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gold/50 text-gold rounded-md hover:bg-gold/10 transition-colors font-medium"
              >
                <Mail size={18} />
                Contact
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>


{/* <img  style={{marginRight: "50px",height: "50%"}} src={image1} alt="Dr. K. G. Lakshmi Narayanappa" /> */}

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;






