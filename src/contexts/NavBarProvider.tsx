"use client";

import { createContext, useContext, ReactNode, useState } from "react";

// Create context with an initial value
const NavBarContext = createContext();

interface NavBarProviderProps {
  children: ReactNode;
}

function NavBarProvider({ children }: NavBarProviderProps) {
  const [navHover, setNavHover] = useState<boolean>(false);

  const value = { navHover, setNavHover };
  return (
    <NavBarContext.Provider value={value}>{children}</NavBarContext.Provider>
  );
}

function useNavBar() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar must be used within a NavBarProvider");
  }
  return context;
}

export { NavBarProvider, useNavBar };
