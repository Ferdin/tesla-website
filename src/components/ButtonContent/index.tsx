"use client";

import { Button } from "@heroui/react";
import React from "react";

interface ButtonContentProps {
  tag: string;
  title: string;
  buttonText: string;
  description: string;
}

export default function ButtonContent({
  tag,
  title,
  buttonText,
  description,
}: ButtonContentProps) {
  return (
    <div className="flex flex-row w-full px-96 py-24 font-sans">
      <div className="flex flex-col w-1/4 gap-2">
        <span className="font-medium">{tag}</span>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <div>
          <Button className="bg-white text-black border-black border-2 w-3/4 py-2 mt-4 font-semibold hover:cursor-pointer hover:bg-black hover:border-white hover:text-white duration-200">
            {buttonText}
          </Button>
        </div>
      </div>
      <div className="flex w-3/4">{description}</div>
    </div>
  );
}
