import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Home, Ruler, Sparkles, Calculator, ArrowRight, Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PriceCalculator = () => {
  const [bhk, setBhk] = useState("2 BHK");
  const [area, setArea] = useState(800);
  const [finish, setFinish] = useState("Standard");
  const [estimate, setEstimate] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    AOS.init({ duration: 1100, easing: "ease-out-cubic", once: true });
  }, []);

  const baseRates = { Basic: 1800, Standard: 2300, Premium: 3000 };
  const bhkOptions = [
    { label: "1 BHK", icon: "🏠", desc: "Compact" },
    { label: "2 BHK", icon: "🏡", desc: "Cozy" },
    { label: "3 BHK", icon: "🏘️", desc: "Spacious" },
    { label: "4 BHK", icon: "🏰", desc: "Luxurious" }
  ];

  const finishOptions = [
    {
      value: "Basic",
      label: "Basic Finish",
      desc: "Essential quality for modern living",
      rate: "₹1,800/sq.ft",
      features: ["Standard materials", "Basic fixtures", "Simple design"]
    },
    {
      value: "Standard",
      label: "Standard Finish",
      desc: "Perfect balance of quality and value",
      rate: "₹2,300/sq.ft",
      features: ["Premium materials", "Designer fixtures", "Custom layouts"]
    },
    {
      value: "Premium",
      label: "Premium Finish",
      desc: "Luxury materials with exquisite craftsmanship",
      rate: "₹3,000/sq.ft",
      features: ["Luxury materials", "High-end fixtures", "Bespoke design"]
    }
  ];

  const calculateEstimate = () => {
    const price = area * baseRates[finish];
    setEstimate(price.toLocaleString("en-IN"));
    setShowEstimate(true);
  };

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
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* Icon Decoration */}
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
              <Calculator className="w-7 h-7 text-amber-500" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-300" />
          </motion.div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1c1c1c] mb-6">
            Calculate{" "}
            <motion.span
              className="relative inline-block italic bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Price
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
            A refined estimation experience crafted to reflect the elegance and
            precision of our interior solutions.
          </motion.p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Top Accent Bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            />

            <div className="p-8 md:p-12 lg:p-16">
              {/* STEP 1 - Property Type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200">
                    <Home className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-amber-600 font-semibold uppercase">
                      Step 01
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1c1c1c]">
                      Property Type
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {bhkOptions.map((option, index) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      onClick={() => setBhk(option.label)}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative rounded-2xl border-2 p-6 transition-all duration-300 ${
                        bhk === option.label
                          ? "border-amber-400 bg-gradient-to-br from-amber-50 to-white shadow-lg"
                          : "border-gray-200 bg-white hover:border-amber-300 hover:shadow-md"
                      }`}
                    >
                      {/* Selection Indicator */}
                      <AnimatePresence>
                        {bhk === option.label && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-3 right-3 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="text-4xl mb-3">{option.icon}</div>
                      <p className="font-serif text-lg text-[#1c1c1c] mb-1">
                        {option.label}
                      </p>
                      <p className="text-xs text-gray-500">{option.desc}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* STEP 2 - Area Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200">
                    <Ruler className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-rose-600 font-semibold uppercase">
                      Step 02
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1c1c1c]">
                      Area Selection
                    </h3>
                  </div>
                </div>

                {/* Area Display */}
                <div className="text-center mb-8 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <motion.div
                    key={area}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-baseline justify-center gap-2"
                  >
                    <span className="font-serif text-5xl md:text-6xl text-[#1c1c1c] font-bold">
                      {area}
                    </span>
                    <span className="text-xl text-gray-500">sq. ft.</span>
                  </motion.div>
                </div>

                {/* Custom Slider */}
                <div className="relative px-2">
                  <input
                    type="range"
                    min="300"
                    max="5000"
                    step="50"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-6
                      [&::-webkit-slider-thumb]:h-6
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-gradient-to-br
                      [&::-webkit-slider-thumb]:from-amber-400
                      [&::-webkit-slider-thumb]:to-amber-500
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-webkit-slider-thumb]:hover:scale-110"
                  />
                  <div className="flex justify-between mt-3 text-sm text-gray-500">
                    <span>300 sq.ft</span>
                    <span>5000 sq.ft</span>
                  </div>
                </div>
              </motion.div>

              {/* STEP 3 - Finish Type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-blue-600 font-semibold uppercase">
                      Step 03
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1c1c1c]">
                      Finish Type
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {finishOptions.map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                      onClick={() => setFinish(option.value)}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative text-left rounded-2xl border-2 p-6 transition-all duration-300 ${
                        finish === option.value
                          ? "border-amber-400 bg-gradient-to-br from-amber-50 to-white shadow-lg"
                          : "border-gray-200 bg-white hover:border-amber-300 hover:shadow-md"
                      }`}
                    >
                      {/* Selection Indicator */}
                      <AnimatePresence>
                        {finish === option.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-4 right-4 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mb-4">
                        <h4 className="font-serif text-xl text-[#1c1c1c] mb-1">
                          {option.label}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{option.desc}</p>
                        <p className="text-amber-600 font-semibold">{option.rate}</p>
                      </div>

                      <ul className="space-y-2">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1.3 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"
              />

              {/* Calculate Button & Result */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center"
              >
                <motion.button
                  onClick={calculateEstimate}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] text-white text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-200/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Calculate Estimate</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="relative z-10 w-5 h-5" />
                  </motion.div>
                </motion.button>

                {/* Estimate Result */}
                <AnimatePresence>
                  {showEstimate && estimate && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-2xl"
                    >
                      <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider">
                        Estimated Cost
                      </p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-2xl text-amber-600">₹</span>
                        <motion.span
                          key={estimate}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
                        >
                          {estimate}
                        </motion.span>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        *This is an approximate estimate. Final pricing may vary.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;