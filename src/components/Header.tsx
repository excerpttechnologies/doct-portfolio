

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
          background: #02080e;
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
          font-weight: 700;
          font-style:normal;
          font-size: 1.25rem;
          letter-spacing: 0.25em;
          text-transform: ;
          color:   #ffd700 ;
          opacity: 1;
        }
        .logo-line2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.70rem;
          letter-spacing: 0.em;
          text-transform: uppercase;
           color: #ffd700;
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