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
      />
    </>
  );
}
