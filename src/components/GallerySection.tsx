import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/img1.png";
import gallery2 from "@/assets/img2.png";
import gallery3 from "@/assets/img3.png";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const images = [
  { src: gallery1, title: "Keynote Address at Literary Festival", span: "md:col-span-2 md:row-span-2" },
  { src: gallery3, title: "Receiving the Rajyotsava Award", span: "" },
  { src: gallery2, title: "Book Launch Event", span: "" },
{ src: gallery6, title: "Book Launch Event", span: "" },
  { src: gallery4, title: "With Fellow Writers at Sahitya Sammelan", span: "" },
  { src: gallery3, title: "Cultural Address at Hampi", span: "" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-muted/50" ref={ref}>
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
            Moments
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Photo <span className="text-gold">Gallery</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.span}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-4 md:p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
                    <ZoomIn size={20} className="text-gold" />
                  </div>
                </motion.div>
                <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base text-center">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10"
                onClick={() => setLightbox(null)}
              >
                <X size={20} />
              </motion.button>
              <motion.img
                initial={{ scale: 0.7, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                src={images[lightbox].src}
                alt={images[lightbox].title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 text-primary-foreground font-heading text-lg"
              >
                {images[lightbox].title}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
