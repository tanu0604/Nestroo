import React from "react";
import clsx from "clsx";

const CardHeader = ({ children, className }) => {
  return <div className={clsx("p-4 border-b bg-gray-100", className)}>{children}</div>;
};

export default CardHeader;
