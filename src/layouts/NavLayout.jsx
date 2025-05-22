import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
const NavLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full overflow-x-auto">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default NavLayout;
