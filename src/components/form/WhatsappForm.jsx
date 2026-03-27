import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Home, 
  Sparkles, 
  CheckCircle2, 
  Send,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(500);
  const [bhk, setBhk] = useState("1 BHK");
  const [finish, setFinish] = useState("Standard");
  const [customizations, setCustomizations] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const whatsappNumber = "+918420906352";

  const customizationOptions = [
    { name: "Modular Kitchen", icon: "🍳" },
    { name: "False Ceiling", icon: "⬆️" },
    { name: "Wall Paint & Texture", icon: "🎨" },
    { name: "Smart Lighting", icon: "💡" },
    { name: "Wooden Flooring", icon: "🪵" },
    { name: "Custom Furniture", icon: "🛋️" },
  ];

  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"];
  const finishOptions = ["Basic", "Standard", "Premium", "Luxury"];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
Hello! 👋
I would like to inquire about interior design services.

📋 *Project Details:*
━━━━━━━━━━━━━━━━━━━━
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📐 Area: ${area} sq.ft
🏠 Property: ${bhk}
✨ Finish: ${finish}
🎨 Customizations: ${customizations.join(", ") || "None selected"}
━━━━━━━━━━━━━━━━━━━━

Looking forward to your response!
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setName("");
        setEmail("");
        setPhone("");
        setArea(500);
        setBhk("1 BHK");
        setFinish("Standard");
        setCustomizations([]);
      }, 3000);
    }, 1000);
  };

  const toggleCustomization = (option) => {
    setCustomizations((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const formFields = [
    { label: "Full Name", value: name, set: setName, type: "text", icon: User, placeholder: "Enter your full name" },
    { label: "Email Address", value: email, set: setEmail, type: "email", icon: Mail, placeholder: "your.email@example.com" },
    { label: "Phone Number", value: phone, set: setPhone, type: "tel", icon: Phone, placeholder: "+91 XXXXX XXXXX" },
  ];

  return (
    <section
      ref={sectionRef}
      id="whatsappform"
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
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl"
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
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-300" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="w-7 h-7 text-green-600" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-300" />
          </motion.div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1c1c1c] mb-6">
            Project{" "}
            <motion.span
              className="relative inline-block italic bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Enquiry
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-green-200 to-green-300 rounded-full"
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
            Share your project details and receive a personalized interior consultation 
            directly on WhatsApp.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Top Accent Bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            />

            <div className="p-8 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div className="space-y-6">
                  {formFields.map((field, index) => {
                    const Icon = field.icon;
                    return (
                      <motion.div
                        key={field.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <div className="relative group">
                          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                          <input
                            type={field.type}
                            value={field.value}
                            onChange={(e) => field.set(e.target.value)}
                            placeholder={field.placeholder}
                            required
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-800"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Area Slider */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Project Area
                  </label>
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                    <div className="text-center mb-6">
                      <motion.span
                        key={area}
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold text-gray-800"
                      >
                        {area}
                      </motion.span>
                      <span className="text-lg text-gray-500 ml-2">sq. ft.</span>
                    </div>
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
                        [&::-webkit-slider-thumb]:from-green-400
                        [&::-webkit-slider-thumb]:to-green-500
                        [&::-webkit-slider-thumb]:shadow-lg
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-webkit-slider-thumb]:transition-all
                        [&::-webkit-slider-thumb]:hover:scale-110"
                    />
                    <div className="flex justify-between mt-3 text-sm text-gray-500">
                      <span>300 sq.ft</span>
                      <span>5,000 sq.ft</span>
                    </div>
                  </div>
                </motion.div>

                {/* BHK and Finish Selection */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* BHK */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Property Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {bhkOptions.map((option, index) => (
                        <motion.button
                          key={option}
                          type="button"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                          onClick={() => setBhk(option)}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-300 ${
                            bhk === option
                              ? "border-green-400 bg-gradient-to-br from-green-50 to-white text-green-700 shadow-md"
                              : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Finish */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Finish Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {finishOptions.map((option, index) => (
                        <motion.button
                          key={option}
                          type="button"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                          onClick={() => setFinish(option)}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-300 ${
                            finish === option
                              ? "border-amber-400 bg-gradient-to-br from-amber-50 to-white text-amber-700 shadow-md"
                              : "border-gray-200 bg-white text-gray-600 hover:border-amber-300"
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Customizations */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Select Customizations
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {customizationOptions.map((option, index) => (
                      <motion.label
                        key={option.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 1.5 + index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          customizations.includes(option.name)
                            ? "border-blue-400 bg-gradient-to-br from-blue-50 to-white shadow-md"
                            : "border-gray-200 bg-white hover:border-blue-300"
                        }`}
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={customizations.includes(option.name)}
                            onChange={() => toggleCustomization(option.name)}
                            className="sr-only"
                          />
                          <motion.div
                            animate={{
                              backgroundColor: customizations.includes(option.name) ? "#60a5fa" : "#fff",
                              borderColor: customizations.includes(option.name) ? "#3b82f6" : "#d1d5db",
                            }}
                            className="w-6 h-6 rounded-md border-2 flex items-center justify-center"
                          >
                            <AnimatePresence>
                              {customizations.includes(option.name) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                >
                                  <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-xl">{option.icon}</span>
                          <span className="text-sm font-medium text-gray-700">{option.name}</span>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                />

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="text-center pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="relative z-10 w-5 h-5" />
                        </motion.div>
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="relative z-10 w-5 h-5" />
                        <span className="relative z-10">Submit Enquiry</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="relative z-10 w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="fixed bottom-8 right-8 bg-gradient-to-br from-green-500 to-green-600 text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-4 z-50"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>
              <div>
                <p className="font-bold text-lg">Success!</p>
                <p className="text-sm text-green-50">Redirecting to WhatsApp...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhatsappForm;