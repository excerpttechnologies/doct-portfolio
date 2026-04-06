import { BookOpen, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback } from "react";

const footerLinks = ["About", "Works", "Career", "Awards", "Gallery", "Media", "Blog", "Events", "Contact"];

const Footer = () => {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-gold mb-3">Dr. K. G. Lakshmi Narayanappa</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Writer, thinker, and public servant dedicated to literature, governance, and cultural enrichment.
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "YouTube"].map((platform) => (
                <motion.button
                  key={platform}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all text-xs font-medium"
                >
                  {platform[0]}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <div className="grid grid-cols-3 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-primary-foreground/60 hover:text-gold text-sm transition-colors text-left cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                contact@drlakshminarayanappa.com
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-gold" />
                Bangalore, Karnataka, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Dr. K. G. Lakshmi Narayanappa. Made with <Heart size={12} className="text-gold" /> All rights reserved.
          </p>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-gold/60 hover:text-gold text-sm transition-colors cursor-pointer"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
