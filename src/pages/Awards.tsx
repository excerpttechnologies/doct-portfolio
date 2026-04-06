import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { Trophy, Star, Medal, Award } from "lucide-react";
import Header from "@/components/Header";

// const awards = [
//   { title: "Kendra Sahitya Akademi Award", year: "1998", desc: "For outstanding contribution to Kannada prose literature.", icon: Trophy },
//   { title: "Karnataka Jnanpith State Award", year: "2005", desc: "State's highest civilian honour for public service and literary excellence.", icon: Star },
//   { title: "Karnataka Pampa Award", year: "2010", desc: "Nominated as Fellow for lifetime contribution to Indian literature.", icon: Medal },
//   { title: "Pampa Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
//  { title: "Padma Bhushan Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
//  { title: "Vrittidaya Sadhaka Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
//  { title: "Bhavana Muni Vardhane Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
//   { title: "Markandeya Recognition Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
//    { title: "Bharatiya Sahitya Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// { title: "R. V. Devaraja Seva Pratishthana Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// { title: "Kannada Sirigandha Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// { title: "Kannada Seva Ratna Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// { title: "Karnataka Yuva Sahitya Shri Award", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },
// { title: "World Literary Award – Kannada Sangha, Toronto, Canada", year: "2018", desc: "Karnataka's highest literary honour for body of work in Kannada.", icon: Award },









// ];


import { Trophy, Star, Medal, Award, BookOpen, Globe } from "lucide-react";

const awards = [
  { 
    title: "Kendra Sahitya Akademi Award", 
    year: "1998", 
    desc: "For outstanding contribution to Kannada literature.", 
    icon: Trophy 
  },

  { 
    title: "Karnataka Jnanpith State Award", 
    year: "2005", 
    desc: "For excellence in Kannada literary achievements.", 
    icon: Star 
  },

  { 
    title: "Karnataka Pampa Award", 
    year: "2010", 
    desc: "For lifetime contribution to Kannada literature.", 
    icon: Medal 
  },

  { 
    title: "Pampa Award", 
    year: "2012", 
    desc: "Highest literary honour by Karnataka Government.", 
    icon: Award 
  },

  { 
    title: "Padma Bhushan Award", 
    year: "2018", 
    desc: "For distinguished service in literature and education.", 
    icon: Trophy 
  },

  { 
    title: "Vrittidaya Sadhaka Award", 
    year: "2014", 
    desc: "For dedication towards literary and social service.", 
    icon: Medal 
  },

  { 
    title: "Bhavana Muni Vardhane Award", 
    year: "2013", 
    desc: "For contribution to cultural and literary development.", 
    icon: BookOpen 
  },

  { 
    title: "Markandeya Recognition Award", 
    year: "2016", 
    desc: "For excellence in Kannada literary works.", 
    icon: Award 
  },

  { 
    title: "Bharatiya Sahitya Award", 
    year: "2011", 
    desc: "For contribution to Indian literature.", 
    icon: BookOpen 
  },

  { 
    title: "R. V. Devaraja Seva Pratishthana Award", 
    year: "2017", 
    desc: "For service in literature and social upliftment.", 
    icon: Medal 
  },

  { 
    title: "Kannada Sirigandha Award", 
    year: "2015", 
    desc: "For promoting Kannada language and culture.", 
    icon: Star 
  },

  { 
    title: "Kannada Seva Ratna Award", 
    year: "2016", 
    desc: "For outstanding service to Kannada community.", 
    icon: Trophy 
  },

  { 
    title: "Karnataka Yuva Sahitya Shri Award", 
    year: "2008", 
    desc: "For excellence in young literary contributions.", 
    icon: BookOpen 
  },

  { 
    title: "World Literary Award – Kannada Sangha, Toronto, Canada", 
    year: "2019", 
    desc: "For global recognition in Kannada literature.", 
    icon: Globe 
  },
];


const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding bg-gradient-navy relative overflow-hidden" ref={ref}>

        <Header />
      {/* Decorative light streaks */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 3 }}
        className="absolute top-1/3 left-0 w-96 h-px bg-gradient-to-r from-transparent via-gold to-transparent pointer-events-none"
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
            Recognition
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            Awards & <span className="text-gradient-gold">Honours</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 40px -5px hsla(40,52%,54%,0.3)",
                transition: { duration: 0.3 },
              }}
              className="group relative bg-navy-light/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/60 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"
                >
                  <award.icon size={28} className="text-gold" />
                </motion.div>
                <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-1">{award.title}</h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="text-gold text-sm font-medium mb-3"
                >
                  {award.year}
                </motion.p>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
