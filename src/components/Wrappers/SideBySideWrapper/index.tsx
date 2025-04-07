import { ReactNode } from "react";

interface SideBySideWrapperProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

export default function SideBySideWrapper({
  leftComponent,
  rightComponent,
}: SideBySideWrapperProps) {
  return (
    <div className="flex flex-row w-full">
      <div className="w-3/4">{leftComponent}</div>
      <div className="w-1/4">{rightComponent}</div>
    </div>
  );
}
