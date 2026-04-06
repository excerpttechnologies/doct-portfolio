import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BookMarked, ExternalLink, FileText, GraduationCap } from "lucide-react";

const publications = [
  {
    category: "Research Papers",
    icon: GraduationCap,
    items: [
      { title: "The Evolution of Vachana Literature in Modern Kannada", journal: "Indian Journal of Literary Studies", year: "2019", doi: "10.xxxx/ijls.2019.045" },
      { title: "Folk Narratives and Their Socio-Political Undercurrents", journal: "South Asian Literature Review", year: "2016", doi: "10.xxxx/salr.2016.102" },
      { title: "Language Policy and Cultural Identity in Post-Independence Karnataka", journal: "Journal of Indian Public Administration", year: "2012", doi: "10.xxxx/jipa.2012.033" },
    ],
  },
  {
    category: "Edited Volumes",
    icon: BookMarked,
    items: [
      { title: "Voices of the Deccan: An Anthology of Modern Kannada Poetry", journal: "Oxford University Press India", year: "2020", doi: "" },
      { title: "Governance, Ethics and Society: Essays in Honour of Dr. H. Narasimhaiah", journal: "Sahitya Akademi", year: "2014", doi: "" },
    ],
  },
  {
    category: "Critical Essays",
    icon: FileText,
    items: [
      { title: "Kuvempu and the Modernist Tradition", journal: "Prajavani Literary Supplement", year: "2021", doi: "" },
      { title: "The Aesthetics of Silence in D. R. Bendre's Poetry", journal: "Kannada Sahitya Parishat Journal", year: "2017", doi: "" },
      { title: "Administrative Literature: A New Genre?", journal: "Deccan Herald Sunday Magazine", year: "2023", doi: "" },
    ],
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="publications" className="section-padding bg-background relative" ref={ref}>
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
            Academic Work
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Research & <span className="text-gold">Publications</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {publications.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
            >
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + gi * 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <group.icon size={18} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">{group.category}</h3>
                <div className="flex-1 h-px bg-border" />
              </motion.div>

              {/* Items */}
              <div className="space-y-3 pl-4 md:pl-12">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20, x: -10 }}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + gi * 0.2 + ii * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-gold transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.journal} · <span className="text-gold">{item.year}</span>
                      </p>
                    </div>
                    {item.doi && (
                      <ExternalLink size={14} className="text-muted-foreground group-hover:text-gold transition-colors mt-1 flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
