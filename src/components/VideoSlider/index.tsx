"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface VideoSliderProps {
  urls: string[];
  autoplayInterval?: number; // Time in seconds between slides
  description?: { [key: string]: string };
}

export default function VideoSlider({
  urls,
  autoplayInterval = 5,
  description,
}: VideoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
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

  // Slide transition animation
  useEffect(() => {
    if (!sliderRef.current) return;
    if (isTransitioning) return;

    const slides = Array.from(sliderRef.current.querySelectorAll(".slide"));
    const currentSlide = slides[currentIndex];

    // Initial setup for all slides
    gsap.set(slides, {
      opacity: 0,
      zIndex: 0,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    });

    // Animate the current slide in
    gsap.to(currentSlide, {
      opacity: 1,
      zIndex: 10,
      duration: 1,
    });
  }, [currentIndex, isTransitioning]);

  // Description transition animation
  useEffect(() => {
    if (!descriptionRef.current) return;
    if (isTransitioning) return;

    const descriptions = Array.from(
      descriptionRef.current.querySelectorAll(".description")
    );

    if (description) {
      // Hide all descriptions
      gsap.set(descriptions, {
        opacity: 0,
        display: "none",
      });

      // Show current description
      gsap.to(descriptions[currentIndex], {
        opacity: 1,
        display: "block",
        duration: 1,
      });
    }
  }, [currentIndex, description, isTransitioning]);

  const goToNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (!sliderRef.current || !descriptionRef.current) return;

    const slides = Array.from(sliderRef.current.querySelectorAll(".slide"));
    const descriptions = Array.from(
      descriptionRef.current.querySelectorAll(".description")
    );

    const nextIndex = (currentIndex + 1) % urls.length;

    // Fade out current slide and description
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
      },
    });

    tl.to([slides[currentIndex], descriptions[currentIndex]], {
      opacity: 0,
      duration: 1,
    });
  };

  // Fixed ref callback function to properly return void
  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black font-sans">
      <div className="relative bg-black w-full max-w-5xl rounded-lg overflow-hidden">
        <div ref={sliderRef} className="w-full aspect-video">
          {urls.map((url, index) => (
            <div
              key={index}
              className="slide absolute top-0 left-0 w-full h-full"
            >
              <video
                ref={setVideoRef(index)}
                loop
                playsInline
                muted
                preload="none"
                className="w-full h-full object-cover"
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="mt-4 flex flex-row gap-4">
        {urls.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {description && (
        <div ref={descriptionRef} className="w-full max-w-5xl mt-4">
          {Object.entries(description).map(([key, value], index) => (
            <div
              key={key}
              className={`description text-white ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <h2 className="text-lg font-semibold">{key}</h2>
              <p className="mt-2">{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
