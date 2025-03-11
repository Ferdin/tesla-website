"use client";
import Logo from "./Logo";
import QuestionMark from "./Icons/QuestionMark";
import Globe from "./Icons/Globe";
import Profile from "./Icons/Profile";
import { NavBarProvider } from "@/contexts/NavBarProvider";
import NavBarContainer from "./NavBarContainer";
import MiddleNav from "./MiddleNav";

export default function NavBar() {
  return (
    <NavBarProvider>
      <NavBarContainer>
        <div className="flex-none">
          <Logo />
        </div>
        <div className="flex space-x-6 justify-center flex-1">
          <MiddleNav />
        </div>
        <div className="flex space-x-4">
          <QuestionMark />
          <Globe />
          <Profile />
        </div>
      </NavBarContainer>
    </NavBarProvider>
  );
}
