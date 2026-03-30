import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import footerLogo from "../../assets/logo.jpeg";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Range of KWS", path: "/range" },
    { name: "Price Calculator", path: "/calculator" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/form" },
  ];

  const contactInfo = [
    { icon: Phone, label: "+91 84209 06352", href: "tel:+918697876391" },
    { icon: Phone, label: "+91 95582 14868", href: "tel:+919330191139" },
    // { icon: Mail, label: "saleslluxeliving@gmail.com", href: "mailto:connect@lluxeliving.co.in" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1YYeeXNMPE/",
      color: "hover:bg-blue-600",
      label: "Facebook"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/lluxe_living?igsh=MTRmdjJ2M25pa2J0Nw==",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
      label: "Instagram"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1a1a1a] via-[#1c1c1c] to-[#0f0f0f] text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-400/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex flex-col items-start space-y-6">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={footerLogo}
                  alt="Nestroo"
                  className="relative w-24 h-24 object-contain rounded-full border-2 border-amber-400/30 shadow-xl"
                />
              </motion.div>

              {/* Brand Name */}
              <div>
                <Link to="/" className="inline-block group">
                  <h2 className="font-serif text-3xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-amber-100 transition-all duration-500">
                    Nestroo
                  </h2>
                </Link>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Crafting timeless elegance through refined interior design and exceptional craftsmanship.
                </p>
              </div>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-24 h-px bg-gradient-to-r from-amber-400 to-transparent"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-400" />
              Get In Touch
            </h3>

            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-amber-300 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{contact.label}</span>
                  </motion.a>
                );
              })}

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-3 text-gray-400 mt-6"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm leading-relaxed">
                  <p className="text-white font-medium mb-1">Our Location</p>
                  <p>Elegant Apartment, Ground Floor</p>
                  <p>Near Bijoygarh State General Hospital</p>
                  <p>4/9B Bijoygarh, Jadavpur</p>
                  <p>Kolkata - 700032</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          {/* Copyright */}
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} Nestroo. All rights reserved.
          </p>

          {/* Made with Love */}
          <motion.p
            className="flex items-center gap-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            Crafted with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            for exceptional living
          </motion.p>

          {/* Optional Links */}
          <div className="flex gap-6">
            <Link 
              to="/privacy" 
              className="hover:text-amber-300 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-amber-300 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.6 }}
        className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
      />
    </footer>
  );
}
