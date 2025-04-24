import React, { ReactNode } from "react";

interface MainWrapperProps {
  children: ReactNode;
  center?: boolean;
}

export default function MainWrapper({ children, center }: MainWrapperProps) {
  return (
    <div
      className={`flex  flex-col px-96 py-20 ${
        center ? "justify-center items-center" : ""
      }`}
    >
      {children}
    </div>
  );
}
