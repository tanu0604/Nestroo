import React from "react";
import clsx from "clsx";

const Slider = ({ value, min, max, step, onValueChange, className }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onValueChange([parseInt(e.target.value)])}
      className={clsx("w-full", className)}
    />
  );
};

export default Slider;
