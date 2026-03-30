import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../../assets/AboutImg.jpg";
import RangeOfKWS from "../range/RangeOfKWS";
import GalleryofImages from "./GalleryofImages";

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  useEffect(() => {
    AOS.init({ duration: 1100, easing: "ease-out-cubic", once: true });
  }, []);

  const stats = [
    { value: "500+", label: "Completed Projects" },
    { value: "15+", label: "Years of Excellence" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "750+", label: "Spaces Transformed" },
  ];

  const features = [
    {
      icon: "✦",
      title: "Personalized Design",
      description: "Tailored solutions that reflect your unique taste and lifestyle"
    },
    {
      icon: "✧",
      title: "Premium Materials",
      description: "Curated selection of luxury finishes and finest quality materials"
    },
    {
      icon: "✦",
      title: "Expert Craftsmanship",
      description: "Skilled artisans bringing precision to every detail"
    }
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-32 bg-gradient-to-b from-[#fdfaf5] via-white to-[#fdfaf5] overflow-hidden"
        id="about"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-amber-300/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            {/* Decorative Element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-300" />
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-amber-400 text-2xl"
              >
                ✦
              </motion.span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-300" />
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1c1c1c] mb-6">
              About{" "}
              <motion.span
                className="relative inline-block italic"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Us
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Crafting interiors that reflect elegance, personality, and timeless style. 
              We bring your vision to life with precision and luxury.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image Section with Parallax */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group"
            >
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={aboutImg}
                  alt="Luxury Interior Design"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Accents */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-amber-300/50"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-amber-300/50"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-200 to-amber-300 text-black px-8 py-6 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-semibold uppercase tracking-wider">Years</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative pl-6 border-l-2 border-amber-300"
              >
                <p className="italic text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
                  "Designing spaces that tell your story."
                </p>
              </motion.div>

              {/* Description */}
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  At{" "}
                  <span className="font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    Nestroo
                  </span>
                  , we craft timeless interiors that blend functionality with aesthetics. 
                  Every home or office becomes a space that radiates elegance, comfort, and personality.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Our expert designers curate personalized solutions, transforming ideas into 
                  breathtaking realities. Let us elevate your living and working environment 
                  with sophistication and style.
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a
                  href="https://wa.me/+918420906352"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] text-white py-4 px-10 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-200/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Connect with Us</span>
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
              </motion.div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-5xl text-amber-400 mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 to-amber-200 rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
                }} />
              </div>

              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Include other sections */}
      <RangeOfKWS />
      <GalleryofImages />
    </>
  );

}

