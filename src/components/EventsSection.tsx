import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Karnataka Literary Summit 2026",
    date: "April 15–17, 2026",
    time: "10:00 AM",
    location: "Bangalore International Centre",
    type: "Keynote Speaker",
    status: "upcoming",
    desc: "Delivering the inaugural address on 'The Future of Regional Literature in a Digital World'.",
  },
  {
    title: "National Book Fair — Kannada Pavilion",
    date: "May 5–10, 2026",
    time: "11:00 AM",
    location: "Pragati Maidan, New Delhi",
    type: "Panel Discussion",
    status: "upcoming",
    desc: "Participating in a panel on translation, identity, and cross-cultural literary exchange.",
  },
  {
    title: "Mysore Literary Festival 2025",
    date: "December 8, 2025",
    time: "3:00 PM",
    location: "University of Mysore Auditorium",
    type: "Guest of Honour",
    status: "past",
    desc: "Honoured as Guest of Honour and delivered a lecture on 'Poetry in the Age of Anxiety'.",
  },
  {
    title: "World Kannada Conference",
    date: "September 20, 2025",
    time: "9:00 AM",
    location: "Hampi Heritage Complex",
    type: "Cultural Address",
    status: "past",
    desc: "Presented the cultural address on preserving ancient Kannada manuscripts and inscriptions.",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding bg-muted/50 relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

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
            Appearances
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Upcoming <span className="text-gold">Events</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-gold/30"
            >
              {/* Status bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                event.status === "upcoming"
                  ? "bg-gradient-to-r from-gold via-gold-light to-gold"
                  : "bg-gradient-to-r from-muted-foreground/30 via-muted-foreground/50 to-muted-foreground/30"
              }`} />

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    event.status === "upcoming"
                      ? "bg-gold/15 text-gold"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {event.type}
                  </span>
                  {event.status === "upcoming" && (
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-gold"
                    />
                  )}
                </div>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-gold" />
                    {event.location}
                  </span>
                </div>

                {event.status === "upcoming" && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={isInView ? { opacity: 1, width: "auto" } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className="mt-5"
                  >
                    <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-3 transition-all cursor-pointer">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
