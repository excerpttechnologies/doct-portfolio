// import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { Mail, MapPin, Phone, Send, Mic, CheckCircle } from "lucide-react";

// const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: "", email: "", message: "" });
//     }, 3000);
//   };

//   return (
//     <section id="contact" className="section-padding bg-background relative overflow-hidden" ref={ref}>
//       {/* Decorative */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="container mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.p
//             initial={{ opacity: 0, letterSpacing: "0em" }}
//             animate={isInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-gold uppercase text-sm font-medium mb-2"
//           >
//             Get in Touch
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
//             Contact & <span className="text-gold">Speaking</span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
//           />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left - Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               For literary collaborations, speaking invitations, academic consultations, or media inquiries, please reach out through the form or the contact details below.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 { icon: Mail, text: "contact@drlakshminarayanappa.com" },
//                 { icon: Phone, text: "+91 98765 43210" },
//                 { icon: MapPin, text: "Bangalore, Karnataka, India" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
//                   whileHover={{ x: 8, transition: { duration: 0.2 } }}
//                   className="flex items-center gap-4 cursor-pointer"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 10 }}
//                     className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0"
//                   >
//                     <item.icon size={16} className="text-gold" />
//                   </motion.div>
//                   <span className="text-foreground">{item.text}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.8, duration: 0.6 }}
//               whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//               className="bg-navy rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-all"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <motion.div
//                   animate={{ rotate: [0, -10, 10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
//                 >
//                   <Mic size={20} className="text-gold" />
//                 </motion.div>
//                 <h4 className="font-heading font-semibold text-primary-foreground text-lg">Invite for Public Speaking</h4>
//               </div>
//               <p className="text-primary-foreground/70 text-sm leading-relaxed">
//                 Dr. K. G. Lakshmi Narayanappa is available for keynote addresses, literary festivals, academic lectures, and cultural events.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Right - Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-md border border-border space-y-6 relative overflow-hidden">
//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="absolute inset-0 bg-card z-20 flex flex-col items-center justify-center rounded-xl"
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: "spring", stiffness: 200 }}
//                   >
//                     <CheckCircle size={64} className="text-gold mb-4" />
//                   </motion.div>
//                   <p className="font-heading font-semibold text-xl text-foreground">Thank You!</p>
//                   <p className="text-muted-foreground text-sm mt-2">We'll get back to you soon.</p>
//                 </motion.div>
//               )}

//               {["name", "email"].map((field, i) => (
//                 <motion.div
//                   key={field}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.7 + i * 0.1 }}
//                 >
//                   <label className="block text-sm font-medium text-foreground mb-2 capitalize">{field}</label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     value={formData[field as keyof typeof formData]}
//                     onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
//                     placeholder={field === "name" ? "Your full name" : "your@email.com"}
//                     required
//                   />
//                 </motion.div>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.9 }}
//               >
//                 <label className="block text-sm font-medium text-foreground mb-2">Message</label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={5}
//                   className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
//                   placeholder="Your message or speaking invitation details..."
//                   required
//                 />
//               </motion.div>

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02, boxShadow: "0 0 30px -5px hsla(40,52%,54%,0.3)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full flex items-center justify-center gap-2 bg-navy text-gold font-semibold py-3.5 rounded-lg hover:bg-navy-light transition-colors"
//               >
//                 <Send size={16} />
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;












import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, Mic, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactItems = [
    {
      icon: Mail,
      text: "kglkestur@gmail.com",
      href: "mailto:kglkestur@gmail.com",
      label: "Send email",
    },
    {
      icon: Phone,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
      label: "Call phone number",
    },
    // {
    //   icon: MapPin,
    //   text: "No 46.  C  Street .Fort Oppt Vanivilas hospital Bangalore   - 560002",
    //   href: "https://www.google.com/maps/embed?pb=...",
    //   label: "View on Google Maps",
    //   external: true,
    // },


    {
  icon: MapPin,
  text: "No 46, C Street, Fort Opp. Vanivilas Hospital, Bangalore - 560002",
  href:  "https://www.google.com/maps?q=12.9599974,77.5742452",
  label: "View on Google Maps",
  external: true,
}
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

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
            Get in Touch
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Contact & <span className="text-gold">Speaking</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For literary collaborations, speaking invitations, academic consultations, or media inquiries, please reach out through the form or the contact details below.
            </p>

            <div className="space-y-4 mb-8">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 cursor-pointer group no-underline"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold/20"
                  >
                    <item.icon size={16} className="text-gold" />
                  </motion.div>
                  <span className="text-foreground group-hover:text-gold transition-colors underline-offset-4 group-hover:underline">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-navy rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-all"
            >


              
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Mic size={20} className="text-gold" />
                </motion.div>
                <h4 className="font-heading font-semibold text-primary-foreground text-lg">Invite for Public Speaking</h4>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Dr. K. G. Lakshmi Narayanappa is available for keynote addresses, literary festivals, academic lectures, and cultural events.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-md border border-border space-y-6 relative overflow-hidden">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-card z-20 flex flex-col items-center justify-center rounded-xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={64} className="text-gold mb-4" />
                  </motion.div>
                  <p className="font-heading font-semibold text-xl text-foreground">Thank You!</p>
                  <p className="text-muted-foreground text-sm mt-2">We'll get back to you soon.</p>
                </motion.div>
              )}

              {["name", "email"].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2 capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder={field === "name" ? "Your full name" : "your@email.com"}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message or speaking invitation details..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px -5px hsla(40,52%,54%,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-navy text-gold font-semibold py-3.5 rounded-lg hover:bg-navy-light transition-colors"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;