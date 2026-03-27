import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { galleryData } from "./gallerydata";

export default function LuxuryGallery() {
  const containerRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-[#fdfaf5] via-[#f5f1e8] to-[#fdfaf5] overflow-hidden"
      id="galleryOfImages"
    >
      {galleryData.map((category, catIdx) => {
        const categoryProgress = useTransform(
          smoothProgress,
          [catIdx / galleryData.length, (catIdx + 1) / galleryData.length],
          [0, 1]
        );

        const titleOpacity = useTransform(categoryProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
        const titleY = useTransform(categoryProgress, [0, 0.2], [50, 0]);

        return (
          <div key={catIdx} className="relative min-h-screen py-24 px-4 md:px-8 lg:px-16">
            {/* Animated Background Element */}
            <motion.div
              style={{
                opacity: useTransform(categoryProgress, [0, 0.3, 0.7, 1], [0, 0.15, 0.15, 0]),
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a24d]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Category Header */}
            <motion.div
              style={{ opacity: titleOpacity, y: titleY }}
              className="text-center mb-20 relative z-10"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a24d] to-transparent mx-auto mb-6"
              />
              <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#1c1c1c] tracking-tight mb-4">
                {category.category}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl font-light tracking-wide">
                {category.subtitle}
              </p>
            </motion.div>

            {/* Bento-Style Masonry Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[200px]">
                {category.images.map((img, idx) => {
                  const patterns = [
                    { col: "col-span-12 md:col-span-7", row: "row-span-2" },
                    { col: "col-span-12 md:col-span-5", row: "row-span-1" },
                    { col: "col-span-6 md:col-span-4", row: "row-span-1" },
                    { col: "col-span-6 md:col-span-4", row: "row-span-2" },
                    { col: "col-span-12 md:col-span-4", row: "row-span-1" },
                    { col: "col-span-6 md:col-span-6", row: "row-span-2" },
                    { col: "col-span-6 md:col-span-6", row: "row-span-1" },
                  ];

                  const pattern = patterns[idx % patterns.length];
                  const isHovered = hoveredImage === `${catIdx}-${idx}`;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`${pattern.col} ${pattern.row} group relative rounded-3xl overflow-hidden cursor-pointer`}
                      onHoverStart={() => setHoveredImage(`${catIdx}-${idx}`)}
                      onHoverEnd={() => setHoveredImage(null)}
                    >
                      {/* Image Container */}
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full"
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Corner Accent */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#c9a24d]"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                          >
                            {/* Category Tag */}
                            <motion.span
                              initial={{ x: -20, opacity: 0 }}
                              animate={{
                                x: isHovered ? 0 : -20,
                                opacity: isHovered ? 1 : 0,
                              }}
                              transition={{ duration: 0.4 }}
                              className="inline-block px-3 py-1 mb-3 text-xs tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full"
                            >
                              {img.style}
                            </motion.span>

                            {/* Title */}
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                              {img.title}
                            </h3>

                            {/* View Project Link */}
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isHovered ? "100%" : "0%" }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex items-center gap-2 overflow-hidden"
                            >
                              <span className="text-[#c9a24d] font-semibold text-sm tracking-wide whitespace-nowrap">
                                Explore Design
                              </span>
                              <motion.svg
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{
                                  duration: 0.3,
                                  repeat: isHovered ? Infinity : 0,
                                  repeatType: "reverse",
                                  repeatDelay: 0.2,
                                }}
                                className="w-5 h-5 text-[#c9a24d]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </motion.svg>
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Magnetic Border Effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 border-2 border-[#c9a24d]/50 rounded-3xl pointer-events-none"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Section Divider */}
            {catIdx < galleryData.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-[#c9a24d]/30 to-transparent mt-32"
              />
            )}
          </div>
        );
      })}

      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a24d] via-[#d4af37] to-[#c9a24d] origin-left z-50"
      />
    </section>
  );
}