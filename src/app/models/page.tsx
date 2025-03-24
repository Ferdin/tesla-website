import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import VideoSlider from "@/components/VideoSlider";
import React from "react";

export default function page() {
  return (
    <>
      <Hero
        url="/single-page-images/Model-S-Main-Hero-Desktop-NA.png"
        orderBtnLabel="Order Now"
        secondBtnLabel="Demo Drive"
        heading="Model S"
        subHeading="Free Supercharging Included"
        specs={{
          Range: "560km",
          "0-100km/h": "2.1s",
          "Top Speed": "322km/h",
          "Peak Power": "1020 hp",
        }}
        conditionalStatement="Specs displayed are Model S Plain values."
      />
      <Heading title="Interior of the Future" />
      <Hero url="/single-page-images/Model-S-Interior-Desktop.png" />
      <VideoSlider
        urls={[
          "/videos/carousel/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4",
          "/videos/carousel/Model-S-Interior-Carousel-2-Yoke-Steering-Desktop.mp4",
          "/videos/carousel/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4",
          "/videos/carousel/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4",
        ]}
        description={{
          "Cinematic Experience": `A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.`,
          "Yoke Steering": `A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip`,
          "Perfect Environment": `Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.`,
          "Redesigned Second Row": `Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.`,
          "Tesla Arcade": "Play games on your in-car touchscreens.",
        }}
      />
    </>
  );
}
