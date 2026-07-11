// import Header from "@/components/Header";
// import AwardsSection from "@/components/AwardsSection";

// const Awards = () => (
//   <main>
//     <Header />
//     <AwardsSection />
//   </main>
// );

// export default Awards;



// above code is old code 





import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import awardImg from "@/assets/award.webp";
import {
  Trophy,
  Star,
  Medal,
  Award,
  BookOpen,
  Globe,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Crown,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";

const awards = [
  { kannada: "ಕೇಂದ್ರ ಸರಕಾರದ 'ಸನ್ಮಾನ' ಪ್ರಶಸ್ತಿ", title: "Central Government 'Sanman' Prashasti", desc: "For outstanding contribution to Kannada literature.", icon: Trophy },
  { kannada: "ಕರ್ನಾಟಕ ಭೂಷಣರಾಜ್ಯ ಪ್ರಶಸ್ತಿ", title: "Karnataka Bhooshana Rajya Prashasti", desc: "For excellence in Kannada literary achievements.", icon: Star },
  { kannada: "ಕರ್ನಾಟಕ 'ಏಕಲವ್ಯ ಶ್ರೀ' ಪ್ರಶಸ್ತಿ", title: "Karnataka 'Ekalavya Shree' Prashasti", desc: "For lifetime contribution to Kannada literature.", icon: Medal },
  { kannada: "ಪದ್ಮರತ್ನ ಪ್ರಶಸ್ತಿ", title: "Padma ratna Prashasti", desc: "Highest literary honour by Karnataka Government.", icon: Award },
  { kannada: "ನೇಕಾರರತ್ನ ಪ್ರಶಸ್ತಿ", title: "Nekararatna Prashasti", desc: "For distinguished service in literature and education.", icon: ShieldCheck },
  { kannada: "ಹುಟ್ಟೂರು ಸಾಧಕ ಪ್ರಶಸ್ತಿ", title: "Hutturu Sadhaka Prashasti", desc: "For dedication towards literary and social service.", icon: Heart },
  { kannada: "ಭಾವನಾ ಋಷಿ ಪದ್ಮಪೀಠ ಪ್ರಶಸ್ತಿ", title: "Bhavana Rushi Padya Peeta Prashasti", desc: "For contribution to cultural and literary development.", icon: Sparkles },
  { kannada: "ಮಾರ್ಕಾಂಡೇಯ ಗುರುಪೀಠ ಪ್ರಶಸ್ತಿ", title: "Markandeya GuruPeeta Prashasti", desc: "For excellence in Kannada literary works.", icon: Crown },
  { kannada: "ಭಾರತೀಯ 'ಸಾಹಿತ್ಯಶ್ರೀ' ಪ್ರಶಸ್ತಿ", title: "Bharatiya 'Sahitya Shree' Prashasti", desc: "For contribution to Indian literature.", icon: BookOpen },
  { kannada: "ಆರ್. ವಿ. ದೇವರಾಜ್ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ ಪ್ರಶಸ್ತಿ", title: "R.V. Devaraja Seva Pratisthana Prashasti", desc: "For service in literature and social upliftment.", icon: Globe },
  { kannada: "ಕನ್ನಡ ಸಿರಿಗಂಧ ಪ್ರಶಸ್ತಿ", title: "Kannada Sirigandha Prashasti", desc: "For promoting Kannada language and culture.", icon: Trophy },
  { kannada: "ಕನ್ನಡ ಸೇವಾರತ್ನ ಪ್ರಶಸ್ತಿ", title: "Kannada Sevaratna Prashasti", desc: "For outstanding service to Kannada community.", icon: Medal },
  { kannada: "ಕರ್ನಾಟಕ ಯುವ ಸಾಹಿತ್ಯ ಶ್ರೀ ಪ್ರಶಸ್ತಿ", title: "Karnataka Yuva Sahitya Shree Prashasti", desc: "For excellence in young literary contributions.", icon: BookOpen },
  { kannada: "'ವಿಶ್ವ ಸಾಹಿತ್ಯಶ್ರೀ ಪ್ರಶಸ್ತಿ' — ಕನ್ನಡ ಸಂಘ, ಟೊರೆಂಟೊ, ಕೆನಡಾ", title: "Vishwa Sahitya Shree Prashasti' — Kannada Sangha, Toronto, Canada", desc: "For global recognition in Kannada literature.", icon: Globe },
];

const GOLD = "#C8A45D";
const GOLD_DARK = "#A57C3C";
const SOFT_GOLD_BG = "rgba(200,164,93,0.06)";

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="awards-section">
      {/* subtle background pattern */}
      <div className="awards-bg-pattern">
        <div className="awards-bg-blob awards-bg-blob--top" />
        <div className="awards-bg-blob awards-bg-blob--bottom" />
      </div>

      <div className="awards-container">
        {/* ===== LEFT SIDE - AWARD IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.1, 1] }}
          className="awards-left"
        >
          {/* Decorative rings */}
          <div className="awards-ring awards-ring--tl" />
          <div className="awards-ring awards-ring--br" />

          {/* Corner accents */}
          <div className="awards-corner awards-corner--tl" />
          <div className="awards-corner awards-corner--tr" />
          <div className="awards-corner awards-corner--bl" />
          <div className="awards-corner awards-corner--br" />

          {/* Award Image */}
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="awards-image-frame"
          >
            <img
              src={awardImg}
              alt="Dr. K. G. Lakshmi Narayanappa receiving award"
              className="awards-image"
            />
            <div className="awards-image-overlay" />
            <div className="awards-image-badge">✦ Literary Legend ✦</div>
          </motion.div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="awards-caption"
          >
            — Prestigious Moments —
          </motion.p>

          {/* Stat block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="awards-stat-block"
          >
            <div className="awards-stat-divider" />
            <div className="awards-stat-divider" />
          </motion.div>
        </motion.div>

        {/* ===== RIGHT SIDE - AWARDS LIST ===== */}
        <div className="awards-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="awards-header"
          >
            <p className="awards-eyebrow-name">Dr. K. G. Lakshmi Narayanappa</p>
            <p className="awards-eyebrow-label">RECOGNITION &amp; HONOURS</p>

            <h2 className="awards-heading">
              Awards &amp;{" "}
              <span className="awards-heading-accent">Achievements</span>
            </h2>

            <div className="awards-divider-row">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 70 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="awards-divider-line awards-divider-line--long"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="awards-divider-dot"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 50 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="awards-divider-line awards-divider-line--short"
              />
            </div>
          </motion.div>

          {/* Awards List */}
          <div className="awards-list custom-scroll">
            {awards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -22 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.05 + idx * 0.035 }}
                  className="awards-row"
                  whileHover={{
                    backgroundColor: "rgba(200,164,93,0.05)",
                    paddingLeft: 8,
                    borderRadius: 16,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="awards-row-index">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="awards-row-icon"
                  >
                    <Icon size={19} color={GOLD} strokeWidth={1.6} />
                  </motion.div>
                  <div className="awards-row-text">
                    <p className="awards-row-kannada">{award.kannada}</p>
                    <p className="awards-row-title">{award.title}</p>
                    <p className="awards-row-desc">{award.desc}</p>
                  </div>
                  <ChevronRight size={15} color={GOLD} className="chevron-icon" />
                </motion.div>
              );
            })}
          </div>

          {/* Footer badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="awards-footer"
          >
            <div className="awards-footer-pill">
              <span className="awards-footer-dot" />
              <span className="awards-footer-text">A Journey of Literary Excellence</span>
              <span className="awards-footer-dot" />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        :root {
          --gold: ${GOLD};
          --gold-dark: ${GOLD_DARK};
          --gold-bg: ${SOFT_GOLD_BG};
        }

        * { box-sizing: border-box; }

        .awards-section {
          background: #FFFFFF;
          font-family: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
          padding: 60px 20px;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        @media (min-width: 640px) {
          .awards-section { padding: 80px 32px; }
        }
        @media (min-width: 1024px) {
          .awards-section { padding: 120px 40px 80px; }
        }
          .awards-section {
  margin-top: 62px; /* clears the fixed header height on mobile */
}
@media (min-width: 400px) {
  .awards-section { margin-top: 66px; }
}
@media (min-width: 640px) {
  .awards-section { margin-top: 70px; }
}

        .awards-bg-pattern {
          position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0;
        }
        .awards-bg-blob {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(200,164,93,0.03) 0%, rgba(200,164,93,0) 70%);
        }
        .awards-bg-blob--top { top: 10%; right: -5%; width: 250px; height: 250px; }
        .awards-bg-blob--bottom { bottom: 5%; left: -3%; width: 220px; height: 220px; background: radial-gradient(circle, rgba(200,164,93,0.02) 0%, rgba(200,164,93,0) 70%); }
        @media (min-width: 1024px) {
          .awards-bg-blob--top { width: 400px; height: 400px; }
          .awards-bg-blob--bottom { width: 350px; height: 350px; }
        }

        .awards-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          z-index: 2;
        }
        @media (min-width: 1024px) {
          .awards-container {
            flex-direction: row;
            align-items: flex-start;
            gap: 50px;
          }
        }

        /* ===== LEFT COLUMN ===== */
        .awards-left {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .awards-left { flex: 1.15; gap: 24px; }
        }

        .awards-ring {
          position: absolute; border: 2px solid var(--gold); border-radius: 50%;
          opacity: 0.2; pointer-events: none; z-index: 0; display: none;
        }
        @media (min-width: 640px) {
          .awards-ring { display: block; }
          .awards-ring--tl { top: -20px; left: -20px; width: 90px; height: 90px; }
          .awards-ring--br { bottom: -20px; right: -20px; width: 70px; height: 70px; }
        }
        @media (min-width: 1024px) {
          .awards-ring--tl { width: 120px; height: 120px; }
          .awards-ring--br { width: 90px; height: 90px; }
        }

        .awards-corner {
          position: absolute; width: 28px; height: 28px; pointer-events: none; z-index: 1;
        }
        @media (min-width: 1024px) {
          .awards-corner { width: 40px; height: 40px; }
        }
        .awards-corner--tl { top: -8px; left: -8px; border-top: 3px solid var(--gold); border-left: 3px solid var(--gold); }
        .awards-corner--tr { top: -8px; right: -8px; border-top: 3px solid var(--gold); border-right: 3px solid var(--gold); }
        .awards-corner--bl { bottom: -8px; left: -8px; border-bottom: 3px solid var(--gold); border-left: 3px solid var(--gold); }
        .awards-corner--br { bottom: -8px; right: -8px; border-bottom: 3px solid var(--gold); border-right: 3px solid var(--gold); }

        .awards-image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px -20px rgba(0,0,0,0.3), 0 0 0 1px rgba(200,164,93,0.3);
        }
        @media (min-width: 1024px) {
          .awards-image-frame { border-radius: 28px; }
        }

        .awards-image-frame {
          /* no fixed aspect-ratio: this photo has meaningful text
             (date, badge) near the bottom, so it must never be cropped */
        }

        .awards-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter: brightness(0.98) contrast(1.02);
        }

        .awards-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(145deg, rgba(200,164,93,0.1) 0%, rgba(0,0,0,0.1) 100%);
          pointer-events: none;
        }

        .awards-image-badge {
          position: absolute; bottom: 12px; right: 12px;
          background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);
          border-radius: 40px; padding: 5px 12px; font-size: 10px; font-weight: 600;
          color: var(--gold-dark); letter-spacing: 0.5px; border: 1px solid rgba(200,164,93,0.25);
          white-space: nowrap;
        }
        @media (min-width: 640px) {
          .awards-image-badge { bottom: 20px; right: 20px; padding: 6px 16px; font-size: 11px; }
        }

        .awards-caption {
          margin-top: 4px; text-align: center; font-size: 11px; letter-spacing: 0.2em;
          font-family: 'Inter', sans-serif; color: var(--gold); text-transform: uppercase; font-weight: 400;
        }
        @media (min-width: 640px) {
          .awards-caption { font-size: 12px; letter-spacing: 0.25em; margin-top: 8px; }
        }

        .awards-stat-block {
          display: flex; justify-content: center; gap: 24px; background: var(--gold-bg);
          border-radius: 80px; padding: 10px 20px; border: 1px solid rgba(200,164,93,0.25);
        }
        .awards-stat-divider { width: 1px; background: rgba(200,164,93,0.2); }

        /* ===== RIGHT COLUMN ===== */
        .awards-right { width: 100%; }
        @media (min-width: 1024px) {
          .awards-right { flex: 1.85; min-width: 0; }
        }

        .awards-header { margin-bottom: 24px; }
        @media (min-width: 640px) {
          .awards-header { margin-bottom: 32px; }
        }

        .awards-eyebrow-name {
          font-family: 'Inter', sans-serif; font-size: 12px; letter-spacing: 0.15em;
          color: #5a4a2a; text-transform: uppercase; font-weight: 800; margin-bottom: 8px;
        }
        @media (min-width: 640px) {
          .awards-eyebrow-name { font-size: 14px; letter-spacing: 0.2em; }
        }

        .awards-eyebrow-label {
          font-family: 'Inter', sans-serif; font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; font-weight: 800; margin-bottom: 16px;
          background: linear-gradient(135deg, #C8A45D 0%, #B58E48 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block;
        }
        @media (min-width: 640px) {
          .awards-eyebrow-label { font-size: 13px; letter-spacing: 0.28em; margin-bottom: 18px; }
        }

        .awards-heading {
          font-size: clamp(28px, 8vw, 50px);
          font-weight: 500; color: #121212; margin: 0 0 16px; line-height: 1.15;
          letter-spacing: -0.02em; font-family: 'Cormorant Garamond', 'Georgia', serif;
          white-space: normal;
        }
        @media (min-width: 640px) {
          .awards-heading { margin: 0 0 18px; line-height: 1.12; }
        }

        .awards-heading-accent {
          color: var(--gold); font-weight: 700; border-bottom: 2px solid rgba(200,164,93,0.25);
          display: inline-block;
        }

        .awards-divider-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .awards-divider-line--long { height: 2px; background: linear-gradient(90deg, var(--gold), rgba(200,164,93,0.3)); }
        .awards-divider-line--short { height: 1px; background: linear-gradient(90deg, var(--gold), rgba(200,164,93,0.1)); }
        .awards-divider-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); }

        .awards-list {
          max-height: none;
          overflow-y: visible;
          padding-right: 0;
        }
        @media (min-width: 1024px) {
          .awards-list {
            max-height: calc(100vh - 300px);
            overflow-y: auto;
            padding-right: 8px;
            scrollbar-width: thin;
            scrollbar-color: var(--gold) #e2e2e2;
          }
        }

        .awards-row {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 8px 14px 0; border-bottom: 1px solid rgba(200,164,93,0.12);
          cursor: default; transition: all 0.2s ease; border-radius: 12px; margin-bottom: 2px;
        }
        @media (min-width: 640px) {
          .awards-row { align-items: center; gap: 18px; padding: 16px 14px 16px 0; }
        }

        .awards-row-index {
          font-family: 'Inter', monospace; font-size: 12px; font-weight: 600; color: var(--gold);
          min-width: 26px; text-align: right; letter-spacing: 0.5px; flex-shrink: 0; margin-top: 2px;
        }
        @media (min-width: 640px) {
          .awards-row-index { font-size: 13px; min-width: 36px; margin-top: 0; }
        }

        .awards-row-icon {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(200,164,93,0.1) 0%, rgba(200,164,93,0.02) 100%);
          border: 1px solid rgba(200,164,93,0.25); display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .awards-row-icon { width: 46px; height: 46px; }
        }

        .awards-row-text { flex: 1; min-width: 0; }
        .awards-row-kannada {
          margin: 0; font-size: 14px; font-weight: 700; color: #1a1a1a; line-height: 1.3;
          letter-spacing: -0.2px; word-break: break-word;
        }
        @media (min-width: 640px) {
          .awards-row-kannada { font-size: 15px; }
        }
        .awards-row-title {
          margin: 3px 0 0; font-size: 12px; font-weight: 500; color: var(--gold-dark);
          line-height: 1.3; letter-spacing: -0.1px;
        }
        @media (min-width: 640px) {
          .awards-row-title { font-size: 13px; }
        }
        .awards-row-desc {
          margin: 5px 0 0; font-size: 12px; color: #6f6f6f; font-family: 'Inter', sans-serif;
          font-weight: 400; line-height: 1.4;
        }
        @media (min-width: 640px) {
          .awards-row-desc { font-size: 12.5px; }
        }

        .chevron-icon { opacity: 0.3; transition: opacity 0.2s ease, transform 0.2s; flex-shrink: 0; margin-top: 4px; display: none; }
        @media (min-width: 640px) {
          .chevron-icon { display: block; margin-top: 0; }
        }

        .awards-footer { text-align: center; margin-top: 28px; }
        @media (min-width: 640px) {
          .awards-footer { margin-top: 32px; }
        }
        .awards-footer-pill {
          display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px;
          border-radius: 100px; background: #FDF9F2; border: 1px solid rgba(200,164,93,0.3);
          max-width: 100%;
        }
        @media (min-width: 640px) {
          .awards-footer-pill { gap: 14px; padding: 12px 28px; }
        }
        .awards-footer-dot { width: 6px; height: 6px; border-radius: 50%; background-color: var(--gold); display: inline-block; flex-shrink: 0; }
        .awards-footer-text {
          font-size: 10px; letter-spacing: 0.18em; font-family: 'Inter', sans-serif;
          color: var(--gold-dark); text-transform: uppercase; font-weight: 700;
        }
        @media (min-width: 640px) {
          .awards-footer-text { font-size: 11px; letter-spacing: 0.25em; }
        }

        .custom-scroll::-webkit-scrollbar { width: 5px; }
        .custom-scroll::-webkit-scrollbar-track { background: #f0ede8; border-radius: 8px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #C8A45D; border-radius: 8px; }
        .awards-row:hover .chevron-icon { opacity: 0.8; transform: translateX(3px); }
      `}</style>
    </section>
  );
}