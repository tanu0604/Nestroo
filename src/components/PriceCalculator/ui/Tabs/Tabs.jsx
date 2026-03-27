import React from "react";
import clsx from "clsx";

const Tabs = ({ children, className }) => {
  return <div className={clsx("w-full", className)}>{children}</div>;
};

export default Tabs;
