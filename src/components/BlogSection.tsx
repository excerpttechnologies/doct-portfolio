// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ArrowRight, Calendar, Clock } from "lucide-react";

// const posts = [
//   { title: "Why Regional Languages Matter More Than Ever", excerpt: "In an increasingly globalized world, the preservation and promotion of regional languages is not a luxury — it is a necessity for cultural survival.", date: "March 2026", readTime: "5 min read" },
//   { title: "Reflections on Three Decades of Public Service", excerpt: "Looking back on a career that spanned administrations and policy eras, the constant thread has been the power of empathy in governance.", date: "January 2026", readTime: "7 min read" },
//   { title: "The Poet's Responsibility in Times of Crisis", excerpt: "When the world trembles, the poet must not retreat into silence but must become the conscience that speaks for those who cannot.", date: "November 2025", readTime: "4 min read" },
// ];

// const BlogSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="blog" className="section-padding bg-muted/50" ref={ref}>
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-gold uppercase text-sm font-medium mb-2"
//           >
//             Reflections
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Blog & <span className="text-gold">Thoughts</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {posts.map((post, i) => (
//             <motion.article
//               key={post.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border group cursor-pointer hover:border-gold/20"
//             >
//               {/* Top accent bar */}
//               <div className="h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 group-hover:from-gold group-hover:to-gold transition-all duration-500" />

//               <div className="p-6">
//                 <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
//                   <span className="flex items-center gap-1.5">
//                     <Calendar size={14} className="text-gold" />
//                     {post.date}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Clock size={14} className="text-gold" />
//                     {post.readTime}
//                   </span>
//                 </div>
//                 <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
//                   {post.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
//                 <motion.span
//                   className="inline-flex items-center gap-1.5 text-gold text-sm font-medium"
//                   whileHover={{ gap: "0.75rem" }}
//                 >
//                   Read More <ArrowRight size={14} />
//                 </motion.span>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;












import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const posts = [
  {
    num: "01",
    topic: "Social Change & Public Awareness",
    title: "The Responsibility We Owe to Each Other",
    excerpt: "Transformation begins not in corridors of power but in the conscience of every citizen willing to act.",
    content: "True social change does not descend from government orders or policy circulars — it rises from the ground up, from people who refuse to remain silent bystanders. In a democracy, every citizen carries a dual role: recipient of rights and guardian of responsibilities.",
    points: [
      "People's responsibility in a democratic society",
      "Encouraging active citizenship at every level",
      "How grassroots movements shape lasting transformation",
      "The power of individual awareness in collective change",
    ],
  },
  {
    num: "02",
    topic: "Governance & Public Administration",
    title: "Accountability: The Forgotten Pillar of Governance",
    excerpt: "A government derives its legitimacy not merely from elections but from the trust it earns through transparency and ethical conduct.",
    content: "Across decades of observing public administration, one truth stands firm: governance without accountability is governance without soul. The machinery of the state must be driven by public interest, not personal gain. Policy-making that ignores ground realities fails the very people it claims to serve.",
    points: [
      "The role of ethical policy-making in nation-building",
      "Accountability mechanisms in public administration",
      "Leadership that places service above self-interest",
      "Bridging the gap between law and its implementation",
    ],
  },
  {
    num: "03",
    topic: "Rural Development & Grassroots Issues",
    title: "The Village That Feeds the Nation Is Forgotten",
    excerpt: "India's soul lives in its villages, yet its development plans are drafted in air-conditioned offices far removed from rural reality.",
    content: "No nation can claim true progress while its rural backbone remains broken. Farmers who feed millions struggle to feed their own families. Roads that should connect villages to markets are absent. The promise of development must travel beyond city limits.",
    points: [
      "Agriculture and the crisis facing farmers today",
      "Rural economy and the need for sustainable livelihoods",
      "Infrastructure gaps that isolate villages from opportunity",
      "Grassroots solutions built by local communities",
    ],
  },
  {
    num: "04",
    topic: "Education & Social Transformation",
    title: "Education That Builds Character, Not Just Careers",
    excerpt: "A truly educated person is not one who accumulates degrees but one who carries values, empathy, and a sense of purpose.",
    content: "The purpose of education extends far beyond examinations and employment. Real education kindles curiosity, nurtures values, and prepares young minds to engage with the world as responsible human beings. Value-based learning is not a luxury — it is the foundation of a just society.",
    points: [
      "Value-based education as the cornerstone of society",
      "Literacy and its role in social empowerment",
      "Youth development through meaningful learning",
      "Reforming education to reflect social and cultural reality",
    ],
  },
  {
    num: "05",
    topic: "Cultural Preservation & Heritage",
    title: "Our Roots Are Our Strength: Preserving What We Inherit",
    excerpt: "In the rush toward modernity, we risk losing the traditions, languages, and wisdom that define who we are as a people.",
    content: "Heritage is not nostalgia. It is the living memory of a civilization. When local customs fade, when traditional knowledge is dismissed, when cultural pride is replaced by borrowed identities — a people loses something irreplaceable. Preservation is an act of respect, not resistance.",
    points: [
      "Local customs and their role in community identity",
      "Traditional knowledge systems and their modern relevance",
      "Cultural pride as a source of confidence and cohesion",
      "Balancing modernization with cultural continuity",
    ],
  },
  {
    num: "06",
    topic: "Literature & Social Responsibility",
    title: "The Writer's Pen Is a Weapon for Justice",
    excerpt: "Literature is not merely entertainment — it is a mirror that society must be courageous enough to look into.",
    content: "Every serious writer carries a responsibility beyond craft. Words shape worldviews, challenge injustice, and inspire generations. Literature that retreats into comfortable fantasy abandons its greatest purpose. The intellectual must be willing to disturb the comfortable and comfort the disturbed.",
    points: [
      "Writing as a tool for social awareness",
      "How literature influences collective mindset and values",
      "The intellectual responsibility of writers in society",
      "The tradition of socially conscious Kannada and Indian literature",
    ],
  },
  {
    num: "07",
    topic: "Law, Justice & Legal Awareness",
    title: "Justice Must Be Accessible, Not Just Available",
    excerpt: "A legal system that ordinary citizens cannot understand or afford is a system that serves only the privileged.",
    content: "Law exists to protect every person equally — but when legal procedures are complex, expensive, and distant, equality remains on paper alone. Legal awareness is not a privilege of the educated; it is a right that must be carried to every doorstep. An informed citizen is the best safeguard against injustice.",
    points: [
      "Rights of citizens and how to protect them",
      "Legal education for ordinary people",
      "Challenges within the justice delivery system",
      "The role of lawyers and legal professionals in social service",
    ],
  },
  {
    num: "08",
    topic: "Political Analysis & Public Policy",
    title: "Democracy Demands More Than a Vote Every Five Years",
    excerpt: "The true test of democracy is not the election day turnout but the quality of engagement between those elections.",
    content: "Political engagement must be continuous, not cyclical. Citizens who participate only at the ballot box and then disengage allow power to consolidate in the hands of the few. Thoughtful analysis of policy, responsible criticism, and active public discourse are the oxygen of a healthy democracy.",
    points: [
      "Policy impact on the lives of ordinary citizens",
      "Constructive governance critique as a democratic duty",
      "Democratic values and institutions under pressure",
      "The citizen's role between elections",
    ],
  },
  {
    num: "09",
    topic: "Moral Values & Ethics",
    title: "The Decay of Ethics Is the Root of Every Social Crisis",
    excerpt: "No law can substitute for the absence of conscience. When ethics fade from public life, institutions begin to crumble.",
    content: "Integrity is not a soft virtue. It is the structural force that holds societies together. When public figures abandon ethics, when institutions become corrupt, when the ordinary person begins to believe that dishonesty is inevitable — the damage goes far deeper than any policy failure.",
    points: [
      "Integrity and its place in public and private life",
      "Ethical leadership as a model for society",
      "Human values that transcend political and social divisions",
      "How moral education shapes responsible citizens",
    ],
  },
  {
    num: "10",
    topic: "Youth Empowerment",
    title: "Young India Needs Direction, Not Just Opportunity",
    excerpt: "Providing jobs and education is necessary, but guiding youth toward purpose and social responsibility is equally vital.",
    content: "India's demographic dividend can become its greatest strength — or its most dangerous challenge. Young people need not only skills and employment but also a sense of direction, a connection to their roots, and an understanding of their role in nation-building. Empowerment without responsibility is incomplete.",
    points: [
      "Career awareness and guidance for young citizens",
      "Social responsibility as part of youth development",
      "Leadership skills and civic engagement for students",
      "The relationship between ambition and service",
    ],
  },
  {
    num: "11",
    topic: "Nationalism & Patriotism",
    title: "True Patriotism Is Built in Classrooms and Farms, Not Rallies",
    excerpt: "Love for one's country is measured not by slogans but by the quiet, sustained work of making it better every day.",
    content: "Patriotism is not performed — it is practiced. The teacher who educates with dedication, the farmer who feeds the nation with dignity, the administrator who serves with honesty — these are the quiet patriots who build a nation. Nationalism rooted in unity and service outlasts any political season.",
    points: [
      "Nation-building as an everyday responsibility",
      "Civic duties and their place in democratic life",
      "Unity in diversity as India's core strength",
      "Distinguishing genuine patriotism from performative nationalism",
    ],
  },
  {
    num: "12",
    topic: "Media & Public Opinion",
    title: "When the Press Loses Its Conscience, Democracy Loses Its Voice",
    excerpt: "Media is the oxygen of public discourse — when it is polluted, the entire democratic ecosystem suffers.",
    content: "A free and responsible press is among democracy's most vital institutions. Journalism that informs, questions, and holds power accountable performs an irreplaceable public service. But when media becomes a tool of entertainment or partisan interest, the public is left without the truth it needs to make sound decisions.",
    points: [
      "The role of newspapers and media in public awareness",
      "Responsible journalism as a democratic pillar",
      "The challenge of misinformation in the digital age",
      "Media's power to shape or distort public opinion",
    ],
  },
  {
    num: "13",
    topic: "Spiritual & Philosophical Thoughts",
    title: "A Life of Purpose Begins With Questions, Not Answers",
    excerpt: "Philosophy is not an academic exercise — it is the daily practice of asking what truly matters and living accordingly.",
    content: "The examined life asks difficult questions: What is my purpose? How should I treat others? What do I owe to the world? These are not merely religious or philosophical abstractions — they are the foundations of a meaningful human existence. Inner growth is as essential as outward achievement.",
    points: [
      "Human purpose and the search for meaning",
      "Balancing material ambition with inner peace",
      "Philosophical traditions in Indian thought and their relevance",
      "Ethical thinking as a daily spiritual practice",
    ],
  },
  {
    num: "14",
    topic: "Economic & Development Issues",
    title: "Growth That Leaves Millions Behind Is Not Progress",
    excerpt: "A nation's economic health cannot be measured by the wealth of its top tier alone — it must be measured by the condition of its most vulnerable.",
    content: "Development that concentrates wealth while widening inequality is a fragile and unjust achievement. Sustainable progress requires that the fruits of growth reach the margins — the farmer, the daily wage worker, the small artisan. Public welfare must be at the centre of economic vision, not its afterthought.",
    points: [
      "Inequality and its social consequences",
      "Balancing economic growth with sustainability and justice",
      "Public welfare at the heart of development policy",
      "Local economies and small-scale livelihoods",
    ],
  },
  {
    num: "15",
    topic: "Personal Experiences & Reflections",
    title: "What a Life in Public Service Taught Me",
    excerpt: "The lessons that shaped my understanding of society did not come from books alone — they came from people, places, and humbling moments of truth.",
    content: "A long engagement with public life is a continuous education. Every interaction — with a farmer seeking help, a student asking difficult questions, a colleague of unimpeachable integrity — leaves a mark. Looking back, the most enduring lessons have been those of empathy, patience, and the courage to act on principle.",
    points: [
      "Encounters with leaders and public figures",
      "Lessons drawn from social work and community engagement",
      "The value of lived experience in shaping judgment",
      "Humility as a leadership quality",
    ],
  },
  {
    num: "16",
    topic: "Kannada Language & Regional Identity",
    title: "Kannada Is Not Just a Language — It Is a Way of Being",
    excerpt: "To speak one's mother tongue with pride is to affirm one's identity, honour one's ancestors, and ensure a living culture survives.",
    content: "Language is more than communication — it is the vessel of culture, memory, and identity. Kannada carries within it centuries of literature, philosophy, devotion, and resistance. Protecting and promoting the Kannada language is not parochialism; it is a contribution to the magnificent diversity of human civilisation.",
    points: [
      "Language pride and its role in cultural identity",
      "Regional literature and its contribution to Indian thought",
      "Preservation of Kannada in education and public life",
      "Identity, belonging, and the mother tongue",
    ],
  },
  {
    num: "17",
    topic: "Women & Social Equality",
    title: "A Society That Marginalises Women Impoverishes Itself",
    excerpt: "Gender equality is not a concession given to women by men — it is a right inherent to every human being and a necessity for any just society.",
    content: "No society can reach its full potential while half its population remains constrained by discrimination, expectation, and exclusion. Women's empowerment is not a separate agenda — it is woven into every other cause: education, health, governance, economic justice, and cultural renewal.",
    points: [
      "Women's central role in family and social development",
      "Equality and rights as non-negotiable democratic values",
      "Challenging social norms that limit women's potential",
      "Examples of women's leadership in public life",
    ],
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState(null);

  return (
    <section id="blog" className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + (i % 6) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border group cursor-pointer hover:border-gold/20"
              onClick={() => setSelected(post)}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 group-hover:from-gold group-hover:to-gold transition-all duration-500" />

              <div className="p-6">
                <p className="text-gold text-xs font-medium uppercase tracking-widest mb-3">
                  {post.num} · {post.topic}
                </p>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
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

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal top accent */}
              <div className="h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 rounded-t-2xl" />

              <div className="p-6 md:p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-gold text-xs font-medium uppercase tracking-widest mb-2">
                      {selected.num} · {selected.topic}
                    </p>
                    <h3 className="font-heading font-bold text-2xl text-foreground leading-snug">
                      {selected.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex-shrink-0 p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gold mb-6" />

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selected.content}
                </p>

                {/* Key Points */}
                <div className="bg-muted/50 rounded-xl p-5 border border-border">
                  <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Key Focus Areas
                  </p>
                  <ul className="space-y-2">
                    {selected.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;