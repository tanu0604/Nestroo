import React from "react";
import clsx from "clsx";

const TabsContent = ({ children, value, activeTab, className }) => {
  return activeTab === value ? <div className={clsx("p-4", className)}>{children}</div> : null;
};

export default TabsContent;
