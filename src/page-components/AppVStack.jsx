import React from "react";

const AppVStack = ({ className = "", children }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default AppVStack;
