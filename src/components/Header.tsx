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

















// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const navItems = [
//   { label: "About",        href: "/about" },
//   { label: "Works",        href: "/works" },
//   { label: "Publications", href: "/publications" },
//   { label: "Philosophy",   href: "/philosophy" },
//   { label: "Career",       href: "/career" },
//   { label: "Awards",       href: "/awards" },
//   { label: "Gallery",      href: "/gallery" },
//   { label: "Events",       href: "/events" },
//   { label: "Media",        href: "/media" },
//   { label: "Blog",         href: "/blog" },
//   { label: "Contact",      href: "/contact" },
// ];

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between py-3">
//         {/* Logo */}
//         <Link to="/" className="font-heading text-lg md:text-xl font-bold text-gold cursor-pointer">
//           Dr. K. G. LAKSHMI NARAYANAPPA
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden xl:flex items-center gap-0.5">
//           {navItems.map((item) => (
//             <Link key={item.label} to={item.href}>
//               <span
//                 className={`px-2.5 py-2 text-xs font-medium cursor-pointer transition-all duration-300 rounded-md block relative ${
//                   typeof window !== "undefined" && window.location.pathname === item.href
//                     ? "text-gold"
//                     : "text-primary-foreground/80 hover:text-gold"
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="xl:hidden text-primary-foreground p-2"
//           aria-label="Toggle menu"
//         >
//           <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
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
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.04, duration: 0.3 }}
//                 >
//                   <Link to={item.href} onClick={() => setMobileOpen(false)}>
//                     <span className="block px-4 py-3 text-left font-medium rounded-md cursor-pointer text-primary-foreground/80 hover:text-gold hover:bg-gold/5 transition-colors">
//                       {item.label}
//                     </span>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;











// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const navItems = [
//   { label: "About",        href: "/about" },
//   { label: "Works",        href: "/works" },
//   { label: "Publications", href: "/publications" },
//   { label: "Philosophy",   href: "/philosophy" },
//   { label: "Career",       href: "/career" },
//   { label: "Awards",       href: "/awards" },
//   { label: "Gallery",      href: "/gallery" },
//   { label: "Events",       href: "/events" },
//   { label: "Media",        href: "/media" },
//   { label: "Blog",         href: "/blog" },
//   { label: "Contact",      href: "/contact" },
// ];

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const isActive = (href) =>
//     typeof window !== "undefined" && window.location.pathname === href;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;500&display=swap');

//         .header-root {
//           --gold:        #C9A84C;
//           --gold-light:  #E8CF8A;
//           --gold-dim:    #9E7A30;
//           --navy:        #0D1B2A;
//           --navy-95:     rgba(13, 27, 42, 0.96);
//           --ivory:       #F5F0E8;
//           --ivory-muted: rgba(245, 240, 232, 0.65);
//           --ivory-dim:   rgba(245, 240, 232, 0.35);
//         }

//         .header-root {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 50;
//           transition: background 0.5s ease, box-shadow 0.5s ease;
//           font-family: 'Jost', sans-serif;
//         }
//         .header-root.scrolled {
//           background: var(--navy-95);
//           backdrop-filter: blur(12px);
//           box-shadow: 0 4px 32px rgba(0,0,0,0.35);
//           border-bottom: 1px solid rgba(201, 168, 76, 0.18);
//         }

//         .header-inner {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 64px;
//         }

//         /* Logo */
//         .logo-link {
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
//         .logo-accent {
//           display: inline-block;
//           width: 3px;
//           height: 28px;
//           background: linear-gradient(to bottom, var(--gold-light), var(--gold-dim));
//           border-radius: 2px;
//           flex-shrink: 0;
//         }
//         .logo-text {
//           font-family: 'Cormorant Garamond', serif;
//           font-weight: 700;
//           font-size: 1.05rem;
//           letter-spacing: 0.08em;
//           color: var(--gold);
//           line-height: 1.15;
//           background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dim) 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-transform: uppercase;
//         }

//         /* Desktop Nav */
//         .desktop-nav {
//           display: none;
//           align-items: center;
//           gap: 0;
//         }
//         @media (min-width: 1280px) {
//           .desktop-nav { display: flex; }
//         }

//         .nav-link {
//           text-decoration: none;
//           position: relative;
//           padding: 0.45rem 0.8rem;
//           font-size: 0.72rem;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--ivory-muted);
//           transition: color 0.25s ease;
//           border-radius: 4px;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 4px;
//           left: 50%;
//           transform: translateX(-50%) scaleX(0);
//           width: 60%;
//           height: 1px;
//           background: linear-gradient(to right, transparent, var(--gold), transparent);
//           transition: transform 0.3s ease;
//         }
//         .nav-link:hover {
//           color: var(--gold-light);
//         }
//         .nav-link:hover::after {
//           transform: translateX(-50%) scaleX(1);
//         }
//         .nav-link.active {
//           color: var(--gold);
//         }
//         .nav-link.active::after {
//           transform: translateX(-50%) scaleX(1);
//           background: linear-gradient(to right, transparent, var(--gold-light), transparent);
//         }

//         /* Divider dots between links */
//         .nav-dot {
//           width: 3px;
//           height: 3px;
//           background: var(--ivory-dim);
//           border-radius: 50%;
//           flex-shrink: 0;
//         }

//         /* Mobile toggle */
//         .mobile-toggle {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: none;
//           border: 1px solid rgba(201, 168, 76, 0.3);
//           border-radius: 6px;
//           color: var(--gold);
//           padding: 6px;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s;
//         }
//         .mobile-toggle:hover {
//           background: rgba(201, 168, 76, 0.08);
//           border-color: rgba(201, 168, 76, 0.6);
//         }
//         @media (min-width: 1280px) {
//           .mobile-toggle { display: none; }
//         }

//         /* Mobile Menu */
//         .mobile-menu {
//           background: var(--navy-95);
//           backdrop-filter: blur(12px);
//           border-top: 1px solid rgba(201, 168, 76, 0.15);
//           overflow: hidden;
//         }
//         .mobile-menu-inner {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0.75rem 2rem 1.25rem;
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//         }
//         .mobile-nav-link {
//           text-decoration: none;
//           display: block;
//           padding: 0.75rem 1rem;
//           font-size: 0.8rem;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--ivory-muted);
//           border-radius: 6px;
//           border-left: 2px solid transparent;
//           transition: color 0.2s, background 0.2s, border-color 0.2s;
//         }
//         .mobile-nav-link:hover {
//           color: var(--gold-light);
//           background: rgba(201, 168, 76, 0.06);
//           border-left-color: var(--gold);
//         }
//       `}</style>

//       <header className={`header-root${scrolled ? " scrolled" : ""}`}>
//         <div className="header-inner">
//           {/* Logo */}
//           <Link to="/" className="logo-link">
//             <span className="logo-accent" />
//             <span className="logo-text">Dr. K. G. Lakshmi Narayanappa</span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="desktop-nav">
//             {navItems.map((item, i) => (
//               <>
//                 <Link
//                   key={item.label}
//                   to={item.href}
//                   className={`nav-link${isActive(item.href) ? " active" : ""}`}
//                 >
//                   {item.label}
//                 </Link>
//                 {i < navItems.length - 1 && <span className="nav-dot" />}
//               </>
//             ))}
//           </nav>

//           {/* Mobile Toggle */}
//           <motion.button
//             className="mobile-toggle"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             animate={{ rotate: mobileOpen ? 90 : 0 }}
//             transition={{ duration: 0.2 }}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               className="mobile-menu"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <div className="mobile-menu-inner">
//                 {navItems.map((item, i) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, x: -16 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.04, duration: 0.25 }}
//                   >
//                     <Link
//                       to={item.href}
//                       className="mobile-nav-link"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// };

// export default Header;











// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const navItems = [
//   { label: "About",        href: "/about" },
//   { label: "Works",        href: "/works" },
//   { label: "Publications", href: "/publications" },
//   { label: "Philosophy",   href: "/philosophy" },
//   { label: "Career",       href: "/career" },
//   { label: "Awards",       href: "/awards" },
//   { label: "Gallery",      href: "/gallery" },
//   { label: "Events",       href: "/events" },
//   { label: "Media",        href: "/media" },
//   { label: "Blog",         href: "/blog" },
//   { label: "Contact",      href: "/contact" },
// ];

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const isActive = (href) =>
//     typeof window !== "undefined" && window.location.pathname === href;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;500&display=swap');

//         .header-root {
//           --gold:        #C9A84C;
//           --gold-light:  #E8CF8A;
//           --gold-dim:    #9E7A30;
//           --navy:        #0D1B2A;
//           --ivory-muted: rgba(245, 240, 232, 0.72);
//           --ivory-dim:   rgba(245, 240, 232, 0.28);
//         }

//         .header-root {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 50;
//           font-family: 'Jost', sans-serif;
//           background: #0D1B2A;
//           border-bottom: 1px solid rgba(201, 168, 76, 0.22);
//           box-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
//         }

//         .header-inner {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 64px;
//         }

//         .logo-link {
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 0.55rem;
//           flex-shrink: 0;
//         }
//         .logo-accent {
//           display: inline-block;
//           width: 3px;
//           height: 28px;
//           background: linear-gradient(to bottom, var(--gold-light), var(--gold-dim));
//           border-radius: 2px;
//           flex-shrink: 0;
//         }
//         .logo-text {
//           font-family: 'Cormorant Garamond', serif;
//           font-weight: 700;
//           font-size: 1.05rem;
//           letter-spacing: 0.07em;
//           text-transform: uppercase;
//           line-height: 1.15;
//           background: linear-gradient(130deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dim) 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .desktop-nav {
//           display: none;
//           align-items: center;
//         }
//         @media (min-width: 1280px) {
//           .desktop-nav { display: flex; }
//         }

//         .nav-link {
//           text-decoration: none;
//           position: relative;
//           padding: 0.45rem 0.78rem;
//           font-size: 0.7rem;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--ivory-muted);
//           transition: color 0.25s ease;
//           border-radius: 4px;
//           white-space: nowrap;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 3px;
//           left: 50%;
//           transform: translateX(-50%) scaleX(0);
//           width: 60%;
//           height: 1px;
//           background: linear-gradient(to right, transparent, var(--gold), transparent);
//           transition: transform 0.3s ease;
//         }
//         .nav-link:hover { color: var(--gold-light); }
//         .nav-link:hover::after { transform: translateX(-50%) scaleX(1); }
//         .nav-link.active { color: var(--gold); }
//         .nav-link.active::after {
//           transform: translateX(-50%) scaleX(1);
//           background: linear-gradient(to right, transparent, var(--gold-light), transparent);
//         }

//         .nav-dot {
//           width: 3px;
//           height: 3px;
//           background: var(--ivory-dim);
//           border-radius: 50%;
//           flex-shrink: 0;
//         }

//         .mobile-toggle {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: none;
//           border: 1px solid rgba(201, 168, 76, 0.35);
//           border-radius: 6px;
//           color: var(--gold);
//           padding: 6px;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s;
//         }
//         .mobile-toggle:hover {
//           background: rgba(201, 168, 76, 0.08);
//           border-color: rgba(201, 168, 76, 0.65);
//         }
//         @media (min-width: 1280px) {
//           .mobile-toggle { display: none; }
//         }

//         .mobile-menu {
//           background: #0D1B2A;
//           border-top: 1px solid rgba(201, 168, 76, 0.15);
//           overflow: hidden;
//         }
//         .mobile-menu-inner {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0.75rem 2rem 1.25rem;
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//         }
//         .mobile-nav-link {
//           text-decoration: none;
//           display: block;
//           padding: 0.75rem 1rem;
//           font-size: 0.78rem;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--ivory-muted);
//           border-radius: 6px;
//           border-left: 2px solid transparent;
//           transition: color 0.2s, background 0.2s, border-color 0.2s;
//         }
//         .mobile-nav-link:hover {
//           color: var(--gold-light);
//           background: rgba(201, 168, 76, 0.06);
//           border-left-color: var(--gold);
//         }
//         .mobile-nav-link.active {
//           color: var(--gold);
//           border-left-color: var(--gold);
//         }
//       `}</style>

//       <header className="header-root">
//         <div className="header-inner">

//           {/* Logo */}
//           <Link to="/" className="logo-link">
//             <span className="logo-accent" />
//             <span className="logo-text">Dr. K. G. Lakshmi Narayanappa</span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="desktop-nav">
//             {navItems.map((item, i) => (
//               <span key={item.label} style={{ display: "contents" }}>
//                 <Link
//                   to={item.href}
//                   className={`nav-link${isActive(item.href) ? " active" : ""}`}
//                 >
//                   {item.label}
//                 </Link>
//                 {i < navItems.length - 1 && <span className="nav-dot" />}
//               </span>
//             ))}
//           </nav>

//           {/* Mobile Toggle */}
//           <motion.button
//             className="mobile-toggle"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             animate={{ rotate: mobileOpen ? 90 : 0 }}
//             transition={{ duration: 0.2 }}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </motion.button>

//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               className="mobile-menu"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <div className="mobile-menu-inner">
//                 {navItems.map((item, i) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, x: -16 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.04, duration: 0.25 }}
//                   >
//                     <Link
//                       to={item.href}
//                       className={`mobile-nav-link${isActive(item.href) ? " active" : ""}`}
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// };

// export default Header;













"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About",        href: "/about" },
  { label: "Bibliography",        href: "/works" },
  // { label: "Publications", href: "/publications" },
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) =>
    typeof window !== "undefined" && window.location.pathname === href;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap');

        .hdr {
          --gold:         #C9A84C;
          --gold-light:   #E8CF8A;
          --gold-dim:     #9E7A30;
          --navy:         #0D1B2A;
          --ivory-muted:  rgba(245, 240, 232, 0.72);
          --ivory-dim:    rgba(245, 240, 232, 0.25);

          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          font-family: 'Jost', sans-serif;
          background: #0D1B2A;
          border-bottom: 1px solid rgba(201, 168, 76, 0.22);
          box-shadow: 0 2px 28px rgba(0, 0, 0, 0.5);
        }

        .hdr-inner {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          height: 70px;
        }

        /* ── LOGO ── */
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-shrink: 0;
        }
        .logo-bar {
          width: 3px;
          height: 38px;
          border-radius: 2px;
          background: linear-gradient(to bottom, var(--gold-light), var(--gold-dim));
          flex-shrink: 0;
        }
        .logo-lines {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 3px;
        }
        .logo-line1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-style: italic;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold-light);
          opacity: 0.85;
        }
        .logo-line2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.18rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(130deg, var(--gold-light) 0%, var(--gold) 55%, var(--gold-dim) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        /* ── SEPARATOR between logo and nav ── */
        .logo-sep {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.35), transparent);
          flex-shrink: 0;
          margin: 0 0.5rem;
        }

        /* ── DESKTOP NAV ── */
        .desk-nav {
          display: none;
          align-items: center;
          flex: 1;
          justify-content: flex-end;
        }
        @media (min-width: 1280px) {
          .desk-nav { display: flex; }
        }

        .nl {
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0.72rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ivory-muted);
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nl::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 55%;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
          transition: transform 0.3s ease;
        }
        .nl:hover { color: var(--gold-light); }
        .nl:hover::after { transform: translateX(-50%) scaleX(1); }
        .nl.active { color: var(--gold); }
        .nl.active::after {
          transform: translateX(-50%) scaleX(1);
          background: linear-gradient(to right, transparent, var(--gold-light), transparent);
        }

        .ndot {
          width: 3px;
          height: 3px;
          background: var(--ivory-dim);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── MOBILE TOGGLE ── */
        .mob-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 6px;
          color: var(--gold);
          padding: 7px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .mob-btn:hover {
          background: rgba(201,168,76,0.08);
          border-color: rgba(201,168,76,0.65);
        }
        @media (min-width: 1280px) { .mob-btn { display: none; } }

        /* ── MOBILE MENU ── */
        .mob-menu {
          background: #0D1B2A;
          border-top: 1px solid rgba(201,168,76,0.15);
          overflow: hidden;
        }
        .mob-inner {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0.75rem 2rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mob-nl {
          text-decoration: none;
          display: block;
          padding: 0.72rem 1rem;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ivory-muted);
          border-radius: 6px;
          border-left: 2px solid transparent;
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
        .mob-nl:hover {
          color: var(--gold-light);
          background: rgba(201,168,76,0.06);
          border-left-color: var(--gold);
        }
        .mob-nl.active {
          color: var(--gold);
          border-left-color: var(--gold);
        }
      `}</style>

      <header className="hdr">
        <div className="hdr-inner">

          {/* ── Logo: 2-line design ── */}
          <Link to="/" className="logo-link">
            <div className="logo-bar" />
            <div className="logo-lines">
              <span className="logo-line1">Dr. K. G.</span>
              <span className="logo-line2">Lakshmi Narayanappa</span>
            </div>
          </Link>

          {/* ── Vertical separator ── */}
          <div className="logo-sep" />

          {/* ── Desktop Nav ── */}
          <nav className="desk-nav">
            {navItems.map((item, i) => (
              <span key={item.label} style={{ display: "contents" }}>
                <Link
                  to={item.href}
                  className={`nl${isActive(item.href) ? " active" : ""}`}
                >
                  {item.label}
                </Link>
                {i < navItems.length - 1 && <span className="ndot" />}
              </span>
            ))}
          </nav>

          {/* ── Mobile Toggle ── */}
          <motion.button
            className="mob-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className="mob-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mob-inner">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={item.href}
                      className={`mob-nl${isActive(item.href) ? " active" : ""}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;