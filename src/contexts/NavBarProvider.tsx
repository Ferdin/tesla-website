"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface NavBarContextType {
  navHover: boolean;
  setNavHover: Dispatch<SetStateAction<boolean>>;
  activeMenu: string | null;
  setActiveMenu: Dispatch<SetStateAction<string | null>>;
}

// Create context with an initial value
const NavBarContext = createContext<NavBarContextType | undefined>();

interface NavBarProviderProps {
  children: ReactNode;
}

function NavBarProvider({ children }: NavBarProviderProps) {
  const [navHover, setNavHover] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>(null);

  const value = { navHover, setNavHover, activeMenu, setActiveMenu };
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
