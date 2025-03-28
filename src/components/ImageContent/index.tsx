"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ImageContentProps {
  flip?: boolean;
  title: string;
  description: string;
  url: string;
}

export default function ImageContent({
  flip = false,
  title,
  description,
  url,
}: ImageContentProps) {
  // Create refs for the container and content
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if refs and GSAP are available
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Starts when top of element hits 80% of viewport
        toggleActions: "restart none none none",
      },
    });

    // Animate both image and text
    tl.fromTo(
      [imageRef.current, textRef.current],
      {
        opacity: 0,
        y: 50, // Slide up 50 pixels
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Slight delay between image and text
        ease: "power2.out",
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-row w-full bg-black px-96 py-10 ${
        flip ? "flex-row-reverse" : ""
      }`}
    >
      <div ref={imageRef} className="flex w-1/2 h-96 ">
        <Image
          src={url}
          alt={title}
          width={600}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        ref={textRef}
        className={`flex flex-col ${
          flip ? "" : "justify-center"
        } text-white p-10 w-1/2`}
      >
        <h2 className="font-semibold">{title}</h2>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
}
