"use client";

//import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Image } from "@heroui/react";

interface CompareProps {
  mainTitle: string;
  mainDescription: string;
  urlOne: string;
  urlTwo: string;
  titleOne: string;
  titleTwo: string;
  descriptionOne: string;
  descriptionTwo: string;
  specsOne?: { [key: string]: string };
  specsTwo?: { [key: string]: string };
  autoInterval?: number;
}

export default function Compare({
  mainTitle,
  mainDescription,
  urlOne,
  urlTwo,
  titleOne,
  titleTwo,
  descriptionOne,
  descriptionTwo,
  specsOne,
  specsTwo,
  autoInterval = 5,
}: CompareProps) {
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwitched((prev) => !prev);
    }, autoInterval * 1000);

    return () => clearInterval(interval);
  }, [autoInterval]);

  return (
    <div className="px-96 py-20 bg-slate-100 font-sans flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">{mainTitle}</h2>
      <div>{mainDescription}</div>
      <div className="py-20 w-full flex flex-col">
        <Image
          src={`${isSwitched ? urlOne : urlTwo}`}
          alt={mainTitle}
          style={{ objectFit: "cover" }}
          className="pb-10 opacity-100"
        />
        <div className="flex flex-row gap-6">
          <div
            className={`${isSwitched ? "border-t-2 opacity-50" : "border-t-4"}`}
          >
            <h2 className="mt-4 font-semibold">{titleOne}</h2>
            <div className="mt-4 text-sm">{descriptionOne}</div>
            {specsOne && (
              <div className={`mt-auto mb-6 flex  gap-30 font-semibold `}>
                {Object.entries(specsOne).map(([key, value]) => (
                  <div key={key} className="flex flex-col mt-4">
                    <h2 className="text-2xl">{value}</h2>
                    <span className="text-xs">{key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className={`${
              isSwitched ? "border-t-4" : " border-t-2 opacity-50"
            }`}
          >
            <h2 className="mt-4 font-semibold">{titleTwo}</h2>
            <div className="mt-4 text-sm">{descriptionTwo}</div>
            {specsTwo && (
              <div className={`mt-auto mb-6 flex  gap-30 font-semibold `}>
                {Object.entries(specsTwo).map(([key, value]) => (
                  <div key={key} className="flex flex-col mt-4">
                    <h2 className="text-2xl">{value}</h2>
                    <span className="text-xs">{key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
