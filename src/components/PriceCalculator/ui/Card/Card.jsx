import React from "react";
import clsx from "clsx";

const Card = ({ children, className }) => {
  return <div className={clsx("border rounded-lg shadow-sm bg-white", className)}>{children}</div>;
};

export default Card;
