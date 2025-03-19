"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface VideoSliderProps {
  urls: string[];
  autoplayInterval?: number; // Time in seconds between slides
}

export default function VideoSlider({
  urls,
  autoplayInterval = 5,
}: VideoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, urls.length);
  }, [urls]);

  // Handle autoplay and video setup
  useEffect(() => {
    const videos = videoRefs.current;

    // Set up all videos
    videos.forEach((video, index) => {
      if (video) {
        video.muted = true;
        video.load();

        // Only play the current video
        if (index === currentIndex) {
          try {
            video.play();
          } catch (error) {
            console.warn("Autoplay failed:", error);
          }
        }
      }
    });

    // Set up autoplay interval
    const interval = setInterval(() => {
      goToNextSlide();
    }, autoplayInterval * 1000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayInterval, urls]);

  // GSAP animation setup
  useEffect(() => {
    if (!sliderRef.current) return;

    const slides = sliderRef.current.querySelectorAll(".slide");

    // Hide all slides first
    gsap.set(slides, {
      opacity: 0,
      visibility: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    });

    // Show current slide
    gsap.to(slides[currentIndex], {
      opacity: 1,
      visibility: "visible",
      duration: 1,
    });
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % urls.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + urls.length) % urls.length);
  };

  // Fixed ref callback function to properly return void
  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <div className="relative bg-black w-full h-screen overflow-hidden">
      <div ref={sliderRef} className="w-full h-full">
        {urls.map((url, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <video
              ref={setVideoRef(index)}
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
            >
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {urls.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
