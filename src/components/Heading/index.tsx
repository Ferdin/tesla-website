import React from "react";

interface HeadingProps {
  title: string;
  animation?: boolean;
}
export default function Heading({ title }: HeadingProps) {
  return (
    <div className="bg-black px-20 py-20 flex justify-center">
      <h2 className="text-white text-4xl">{title}</h2>
    </div>
  );
}
