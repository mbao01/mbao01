import { useContext } from "react";
import { SidebarContext } from "../../SidebarContext";

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a <Sidebar.Provider />");
  }

  return context;
};
