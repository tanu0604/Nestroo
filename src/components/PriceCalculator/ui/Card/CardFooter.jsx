import React from "react";
import clsx from "clsx";

const CardFooter = ({ children, className }) => {
  return <div className={clsx("p-4 border-t", className)}>{children}</div>;
};

export default CardFooter;
