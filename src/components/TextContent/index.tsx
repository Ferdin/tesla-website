import Link from "next/link";
import React from "react";

interface TextContentProps {
  tag: string;
  title: string;
  description: string;
  firstBtnTxt?: string;
  secondBtnTxt?: string;
  firstBtnLink?: string;
  secondBtnLink?: string;
}

export default function TextContent({
  tag,
  title,
  description,
  firstBtnTxt,
  secondBtnTxt,
  firstBtnLink,
  secondBtnLink,
}: TextContentProps) {
  return (
    <div className="p-10 font-sans flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="font-medium">{tag}</h2>
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-4 text-sm">{description}</p>
      </div>
      <div className="mt-auto pt-6 flex flex-col gap-4">
        {firstBtnTxt && firstBtnLink && (
          <Link href={firstBtnLink}>
            <button className="px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white duration-200 font-semibold w-full">
              {firstBtnTxt}
            </button>
          </Link>
        )}
        {secondBtnTxt && secondBtnLink && (
          <Link href={secondBtnLink}>
            <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-300 text-black duration-200 font-semibold w-full">
              {secondBtnTxt}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
