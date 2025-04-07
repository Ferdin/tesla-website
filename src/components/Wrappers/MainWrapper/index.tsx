import React, { ReactNode } from "react";

interface MainWrapperProps {
  children: ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  return <div className="flex px-96 py-20">{children}</div>;
}
