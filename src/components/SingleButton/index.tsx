"use client";

import { Button } from "@heroui/react";
interface SingleButtonProps {
  text: string;
  link?: string;
  colorSwitch?: boolean;
}

export default function SingleButton({
  text,
  link,
  colorSwitch,
}: SingleButtonProps) {
  return (
    <div>
      <Button
        className={`${
          colorSwitch
            ? "bg-black text-white border-white  hover:bg-white hover:border-black hover:text-black"
            : "bg-white text-black border-black  hover:bg-black hover:border-white hover:text-white"
        } border-2 py-2 mt-4 font-semibold hover:cursor-pointer duration-200`}
        href={link}
      >
        {text}
      </Button>
    </div>
  );
}
