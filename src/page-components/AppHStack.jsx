import React from "react";

const AppHStack = ({ className = "", children }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

export default AppHStack;
