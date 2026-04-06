import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  { title: "Why Regional Languages Matter More Than Ever", excerpt: "In an increasingly globalized world, the preservation and promotion of regional languages is not a luxury — it is a necessity for cultural survival.", date: "March 2026", readTime: "5 min read" },
  { title: "Reflections on Three Decades of Public Service", excerpt: "Looking back on a career that spanned administrations and policy eras, the constant thread has been the power of empathy in governance.", date: "January 2026", readTime: "7 min read" },
  { title: "The Poet's Responsibility in Times of Crisis", excerpt: "When the world trembles, the poet must not retreat into silence but must become the conscience that speaks for those who cannot.", date: "November 2025", readTime: "4 min read" },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold uppercase text-sm font-medium mb-2"
          >
            Reflections
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Blog & <span className="text-gold">Thoughts</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border group cursor-pointer hover:border-gold/20"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 group-hover:from-gold group-hover:to-gold transition-all duration-500" />

              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <motion.span
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-medium"
                  whileHover={{ gap: "0.75rem" }}
                >
                  Read More <ArrowRight size={14} />
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
