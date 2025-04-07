import React from "react";

interface SubHeadingContentProps {
  title: string;
  descripiton: string;
}

export default function SubHeadingContent({
  title,
  descripiton,
}: SubHeadingContentProps) {
  return (
    <div className="font-sans">
      <h2 className="text-3xl">{title}</h2>
      <p className="text-sm mt-8">{descripiton}</p>
    </div>
  );
}
