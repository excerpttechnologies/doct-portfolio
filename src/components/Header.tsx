// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const navItems = [
//   { label: "About", id: "about" },
//   { label: "Works", id: "works" },
//   { label: "Publications", id: "publications" },
//   { label: "Philosophy", id: "philosophy" },
//   { label: "Career", id: "career" },
//   { label: "Awards", id: "awards" },
//   { label: "Gallery", id: "gallery" },
//   { label: "Events", id: "events" },
//   { label: "Media", id: "media" },
//   { label: "Blog", id: "blog" },
//   { label: "Contact", id: "contact" },
// ];

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   const scrollToSection = useCallback((id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const headerOffset = 80;
//       const elementPosition = el.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
//     }
//     setMobileOpen(false);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const ids = navItems.map((item) => item.id);
//       for (const id of [...ids].reverse()) {
//         const el = document.getElementById(id);
//         if (el && el.getBoundingClientRect().top <= 120) {
//           setActiveSection(id);
//           break;
//         }
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-navy/95 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between py-3">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="font-heading text-lg md:text-xl font-bold text-gold cursor-pointer"
//         >
//           Dr. K. G. Lakshmi Narayanappa
//         </button>

//         {/* Desktop Nav */}
//         <nav className="hidden xl:flex items-center gap-0.5">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`px-2.5 py-2 text-xs font-medium transition-all duration-300 rounded-md relative cursor-pointer ${
//                 activeSection === item.id
//                   ? "text-gold"
//                   : "text-primary-foreground/80 hover:text-gold"
//               }`}
//             >
//               {item.label}
//               {activeSection === item.id && (
//                 <motion.div
//                   layoutId="activeNav"
//                   className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold rounded-full"
//                   transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="xl:hidden text-primary-foreground p-2"
//           aria-label="Toggle menu"
//         >
//           <motion.div
//             animate={{ rotate: mobileOpen ? 90 : 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.div>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.nav
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="xl:hidden bg-navy/95 backdrop-blur-md overflow-hidden"
//           >
//             <div className="container mx-auto py-4 flex flex-col gap-1">
//               {navItems.map((item, i) => (
//                 <motion.button
//                   key={item.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.04, duration: 0.3 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-4 py-3 text-left font-medium transition-colors rounded-md cursor-pointer ${
//                     activeSection === item.id
//                       ? "text-gold bg-gold/10"
//                       : "text-primary-foreground/80 hover:text-gold hover:bg-gold/5"
//                   }`}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About",        href: "/about" },
  { label: "Works",        href: "/works" },
  { label: "Publications", href: "/publications" },
  { label: "Philosophy",   href: "/philosophy" },
  { label: "Career",       href: "/career" },
  { label: "Awards",       href: "/awards" },
  { label: "Gallery",      href: "/gallery" },
  { label: "Events",       href: "/events" },
  { label: "Media",        href: "/media" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="font-heading text-lg md:text-xl font-bold text-gold cursor-pointer">
          Dr. K. G. LAKSHMI NARAYANAPPA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href}>
              <span
                className={`px-2.5 py-2 text-xs font-medium cursor-pointer transition-all duration-300 rounded-md block relative ${
                  typeof window !== "undefined" && window.location.pathname === item.href
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-navy/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link to={item.href} onClick={() => setMobileOpen(false)}>
                    <span className="block px-4 py-3 text-left font-medium rounded-md cursor-pointer text-primary-foreground/80 hover:text-gold hover:bg-gold/5 transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;