import React from "react";
import clsx from "clsx";

const TabsTrigger = ({ children, value, activeTab, onClick, className }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 text-gray-600 hover:text-blue-500 transition-all", // Soft blue on hover
        activeTab === value
          ? "border-b-2 border-blue-500 text-blue-500" // Active state with blue
          : "text-gray-600", // Light gray for non-active
        className
      )}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
};

export default TabsTrigger;
