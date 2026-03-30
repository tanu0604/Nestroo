import React from "react";
import clsx from "clsx";

const CardTitle = ({ children, className }) => {
  return <h2 className={clsx("text-xl font-semibold", className)}>{children}</h2>;
};

export default CardTitle;
