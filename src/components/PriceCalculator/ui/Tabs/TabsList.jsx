import React from "react";
import clsx from "clsx";

const TabsList = ({ children, className }) => {
  return <div className={clsx("flex border-b", className)}>{children}</div>;
};

export default TabsList;
