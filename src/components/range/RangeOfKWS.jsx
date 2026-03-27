import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, Settings, Hammer, Sparkles } from "lucide-react";

export default function RangeOfKWS() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const ranges = [
       {
      title: "Modular",
      description:
        "Factory-engineered modular interiors delivering flawless finish, consistency, and long-term reliability.",
      features: [
        "Manufactured with branded-grade precision",
        "Installed to exact design specifications",
        "10-year performance warranty",
      ],
      icon: Shield,
      accent: "from-rose-100 to-rose-50",
      border: "border-rose-200/60",
      iconBg: "from-rose-50 to-white",
      iconColor: "text-rose-600",
    },
    {
      title: "Custom Modular",
      description:
        "A refined modular solution that balances durability, customization, and cost-efficiency — designed for elegant modern living.",
      features: [
        "Manually edge-bound carcass assembly for precision",
        "Machine-finished shutters with premium edge detailing",
        "Fully customizable materials, finishes, and layouts",
        "6-year assembly warranty",
      ],
      icon: Settings,
      accent: "from-amber-100 to-amber-50",
      border: "border-amber-200/60",
      iconBg: "from-amber-50 to-white",
      iconColor: "text-amber-600",
    },
    {
      title: "Carpentry",
      description:
        "Traditional craftsmanship brought to life through skilled on-site execution and timeless woodworking techniques.",
      features: [
        "On-site cutting and shaping",
        "Hand-crafted structural detailing",
        "4-year assembly warranty",
      ],
      icon: Hammer,
      accent: "from-blue-100 to-blue-50",
      border: "border-blue-200/60",
      iconBg: "from-blue-50 to-white",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-[#fdfbf7] via-white to-[#faf8f3] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          {/* Decorative Top Element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-300" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-300" />
          </motion.div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1f1f1f] tracking-tight mb-8">
            Range of{" "}
            <motion.span
              className="relative inline-block italic bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              KWS
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            A thoughtfully curated range of interior solutions — where refined
            craftsmanship meets timeless design and enduring quality.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {ranges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full rounded-3xl bg-white border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]">
                  {/* Gradient Top Accent */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  />

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative p-10 lg:p-12">
                    {/* Icon Section */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.7 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mb-8"
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center shadow-lg border border-gray-100`}
                      >
                        <Icon className={`w-9 h-9 ${item.iconColor}`} />
                      </div>
                      {/* Icon Glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} blur-xl opacity-20`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1f1f1f] mb-4 tracking-wide">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 min-h-[120px]">
                      {item.description}
                    </p>

                    {/* Divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className={`h-px bg-gradient-to-r ${item.accent} mb-8 origin-left`}
                    />

                    {/* Features List */}
                    <ul className="space-y-4">
                      {item.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.9 + index * 0.1 + i * 0.05,
                          }}
                          className="flex gap-3 items-start group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${item.iconBg} flex items-center justify-center border ${item.border}`}
                          >
                            <Check className={`w-4 h-4 ${item.iconColor}`} strokeWidth={3} />
                          </motion.div>
                          <span className="text-sm md:text-base text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Corner Accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gray-200 rounded-br-2xl"
                  />
                </div>

                {/* Floating Shadow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-gray-200/20 to-transparent rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.3 }}
            className="w-64 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-6"
          />
          <p className="text-gray-500 italic text-lg">
            Crafted with precision, delivered with excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
}