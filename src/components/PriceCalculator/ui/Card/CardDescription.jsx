import React from "react";
import clsx from "clsx";

const CardDescription = ({ children, className }) => {
  return <p className={clsx("text-gray-600", className)}>{children}</p>;
};

export default CardDescription;
