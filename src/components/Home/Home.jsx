import React, { useEffect, useState } from "react";
import headingImg from "../../assets/hero1.jpg";
import headingImg2 from "../../assets/hero2.jpg";
import headingImg3 from "../../assets/hero3.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../about/About";
import PriceCalculator from "../PriceCalculator/PriceCalculator";
import WhatsappForm from "../form/WhatsappForm";

/* ================= CONFIG ================= */
const images = [headingImg, headingImg2, headingImg3];

const subHeadings = [
  "Transform your space with elegance and creativity.",
  "Luxury interiors designed for timeless living.",
  "Where refined aesthetics meet modern comfort.",
];

const IMAGE_DURATION = 4000;
const TEXT_DELAY = 1200;
/* ========================================= */

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  /* AOS Init */
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* Background rotation */
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_DURATION);
    return () => clearInterval(timer);
  }, []);

  /* Text rotation */
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % subHeadings.length);
    }, TEXT_DELAY);
    return () => clearTimeout(textTimer);
  }, [bgIndex]);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden"
      >
        {/* ===== Animated Background ===== */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ scale: heroScale }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              animate={{ 
                opacity: index === bgIndex ? 1 : 0,
                scale: index === bgIndex ? 1 : 1.05
              }}
              transition={{ 
                opacity: { duration: 2.5, ease: "easeInOut" },
                scale: { duration: 8, ease: "easeOut" }
              }}
            >
              <img
                src={img}
                alt="Luxury Interior"
                className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
              />
            </motion.div>
          ))}

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          
          {/* Animated Vignette */}
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)",
                "radial-gradient(circle at 60% 40%, transparent 0%, rgba(0,0,0,0.4) 100%)",
                "radial-gradient(circle at 40% 60%, transparent 0%, rgba(0,0,0,0.4) 100%)",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* ===== Floating Particles ===== */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* ===== Hero Content ===== */}
        <motion.div 
          className="container relative h-full flex items-center justify-center text-center px-4"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-5xl space-y-10">
            {/* Decorative Line Top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"
            />

            {/* Main Heading */}
            <div className="space-y-4">
           
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Welcome to{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent font-serif">
                    Nestroo
                  </span>
                  {/* Glow Effect */}
                  <motion.span
                    className="absolute inset-0 blur-2xl bg-gradient-to-r from-amber-300/50 via-amber-200/50 to-amber-300/50"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>
              </motion.h1>
            </div>

            {/* Dynamic Subheading with Icon */}
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 max-w-2xl mx-auto"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300/50"
              />
              <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed">
                {subHeadings[textIndex]}
              </p>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300/50"
              />
            </motion.div>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
            >
              {/* Primary CTA */}
              <motion.a
                href="https://wa.me/+918420906352"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 rounded-full px-10 py-4 font-semibold text-black shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                />
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl opacity-50 bg-gradient-to-r from-amber-200 to-amber-400"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="relative z-10 text-lg">Chat on WhatsApp</span>
                
                <motion.svg
                  className="relative z-10 w-5 h-5"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 rounded-full px-10 py-4 font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:border-amber-300/50 transition-all duration-300"
              >
                <span className="text-lg">Explore Portfolio</span>
                <motion.svg
                  className="w-5 h-5"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Decorative Line Bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"
            />

            {/* Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8"
            >
              {[
                { num: "500+", label: "Projects Completed" },
                { num: "15+", label: "Years Experience" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-amber-300 rounded-full"
            />
          </motion.div>
        </motion.div> */}
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <div data-aos="fade-up" className="relative overflow-hidden">
        <About />
      </div>

      <div data-aos="fade-up" data-aos-delay="150" className="relative overflow-hidden">
        <PriceCalculator />
      </div>

      <div data-aos="fade-up" data-aos-delay="150" className="relative overflow-hidden">
        <WhatsappForm />
      </div>
    </>
  );
}