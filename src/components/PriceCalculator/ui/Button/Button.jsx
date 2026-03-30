import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion"; // Import framer-motion

const Button = ({ children, variant = "default", className, ...props }) => {
  return (
    <motion.button
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition-all",
        variant === "default"
          ? "text-white bg-blue-500"
          : "bg-white text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-300",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
