import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppAvatar = ({ children }) => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>{children}</AvatarFallback>
    </Avatar>
  );
};

export default AppAvatar;
