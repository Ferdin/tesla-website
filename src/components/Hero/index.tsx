"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Cedarville_Cursive } from "next/font/google";
import { useRef, useEffect } from "react";

interface HeroPropTypes {
  url?: string;
  heading: string;
  orderBtnLabel: string;
  secondBtnLabel?: string;
  subHeading?: string;
  funky?: boolean;
  videoURL?: string;
  smallLabel?: string;
  sideLayout?: boolean;
}

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cedarville",
});

export default function Hero({
  url,
  heading,
  orderBtnLabel,
  secondBtnLabel,
  subHeading,
  funky,
  videoURL,
  smallLabel,
  sideLayout,
}: HeroPropTypes) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;

      try {
        video.play();
      } catch (error) {
        console.warn("Autoplay failed:", error);
      }
    }
  }, []);

  return (
    <div className="relative w-full h-screen font-sans">
      {url && (
        <Image
          src={url}
          alt={heading}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      )}
      {videoURL && (
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          autoPlay
          className="w-full h-screen object-cover"
        >
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div
        className={`absolute inset-0 flex flex-col ${
          sideLayout ? "justify-center gap-8 pl-10" : "items-center"
        }`}
      >
        <h2
          className={`${
            funky ? cedarville.className : "font-semibold"
          } text-white ${sideLayout ? "" : "mt-40"}  text-6xl`}
        >
          {heading}
        </h2>
        {subHeading && (
          <h2 className="text-2xl font-medium text-white">{subHeading}</h2>
        )}
        {smallLabel && (
          <h2 className="text-sm font-medium text-white">{smallLabel}</h2>
        )}
        <div
          className={`${
            sideLayout ? "" : "mt-auto mb-16 justify-center"
          } flex  gap-4 font-semibold`}
        >
          <Button
            className={`py-2 px-20 cursor-pointer text-white text-sm ${
              !funky
                ? ` ${
                    sideLayout
                      ? "bg-gray-300 text-black rounded-md"
                      : "bg-blue-700  rounded-md"
                  } `
                : " bg-black  hover:bg-white hover:text-black duration-150"
            }`}
          >
            {orderBtnLabel}
          </Button>
          {secondBtnLabel && (
            <Button
              className={`py-2 px-20  text-sm cursor-pointer ${
                !funky
                  ? " bg-white  rounded-md text-black"
                  : " bg-black text-white hover:bg-white hover:text-black duration-150"
              }`}
            >
              {secondBtnLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
