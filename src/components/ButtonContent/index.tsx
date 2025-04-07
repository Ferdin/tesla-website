"use client";

import { Button } from "@heroui/react";
import React from "react";

interface ButtonContentProps {
  tag: string;
  title: string;
  buttonText: string;
  description: string;
  secondBtnText?: string;
  colorSwitch?: boolean;
}

export default function ButtonContent({
  tag,
  title,
  buttonText,
  description,
  secondBtnText,
  colorSwitch,
}: ButtonContentProps) {
  return (
    <div
      className={`flex flex-row w-full px-96 py-24 font-sans ${
        colorSwitch ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex flex-col w-1/4 gap-2">
        <span
          className={`font-medium ${colorSwitch ? "text-white" : "text-black"}`}
        >
          {tag}
        </span>
        <h2
          className={`font-semibold text-2xl ${
            colorSwitch ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        <div className="flex flex-row gap-4">
          <Button
            className={`${
              colorSwitch
                ? "bg-black text-white border-white  hover:bg-white hover:border-black hover:text-black"
                : "bg-white text-black border-black  hover:bg-black hover:border-white hover:text-white"
            } border-2 w-3/4 py-2 mt-4 font-semibold hover:cursor-pointer duration-200`}
          >
            {buttonText}
          </Button>
          {secondBtnText && (
            <Button
              className={`${
                colorSwitch
                  ? "bg-black text-white border-white  hover:bg-white hover:border-black hover:text-black"
                  : "bg-white text-black border-black  hover:bg-black hover:border-white hover:text-white"
              } border-2 w-3/4 py-2 mt-4 font-semibold hover:cursor-pointer duration-200`}
            >
              {secondBtnText}
            </Button>
          )}
        </div>
      </div>
      <div
        className={`flex w-3/4 pl-6 ${
          colorSwitch ? "text-white" : "text-black"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
