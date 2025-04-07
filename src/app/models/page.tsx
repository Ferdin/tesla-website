import ButtonContent from "@/components/ButtonContent";
import Compare from "@/components/Compare";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import ImageContent from "@/components/ImageContent";
import TextContent from "@/components/TextContent";
import VideoContent from "@/components/VideoContent";
import VideoSlider from "@/components/VideoSlider";
import SideBySideWrapper from "@/components/Wrappers/SideBySideWrapper";
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
      <ImageContent
        title="Stay Connected"
        description="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
        url="/img/model_s/1.png"
      />
      <VideoContent
        title="Immersive Sound"
        description="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."
        url="/videos/MS-Interior-Grid-2-Audio-Desktop.mp4"
        flip={true}
        width={600}
        height={384}
      />
      <ImageContent
        title="Room for Everything"
        description="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
        url="/img/model_s/2.png"
      />
      <Hero
        url="/img/model_s/3.png"
        specs={{
          "Peak Power": "1,020hp",
          "@250 km/h 1/4 mile": "9.23s",
          "0-100 km/h": "2.1s",
        }}
      />
      <ButtonContent
        tag="Plaid"
        title="Beyond Ludicrous"
        buttonText="Order Now"
        description="Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation."
      />
      <Compare
        mainTitle="Electric Powertrain"
        mainDescription="Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."
        urlOne="/img/model_s/4.png"
        urlTwo="/img/model_s/5.png"
        titleOne="Model S"
        titleTwo="Model S Plaid"
        descriptionOne="Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control."
        descriptionTwo="Maintain 1,000+ horsepower all the way to 322 km/h with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors."
        specsOne={{
          "0-100 km/h": "3.2s",
          "Range (EPA est.)": "660 km",
        }}
        specsTwo={{
          "0-100 km/h": "2.1s",
          "Range (EPA est.)": "560 km",
        }}
      />
      <Hero url="/img/model_s/6.png" />
      <ButtonContent
        tag="Exterior"
        title="Designed for Efficiency"
        buttonText="Order Now"
        description="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
        secondBtnText="Demo Drive"
        colorSwitch
      />
      <ImageContent
        title="Relentless Performance"
        description="Staggered, performance wheels and tires keep the vehicle planted and help transfer maximum power down to the road."
        url="/img/model_s/grid-a.png"
      />
      <ImageContent
        title="Optimized Aerodynamics"
        description="Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
        url="/img/model_s/grid-b.png"
        flip
      />
      <ImageContent
        title="Refined Styling"
        description="An iconic silhouette meets refreshed, elegant proportions."
        url="/img/model_s/grid-c.png"
      />
      <SideBySideWrapper
        leftComponent={
          <Hero
            videoURL="/videos/plaid-range.mp4"
            specs={{
              "Go anywhere with up to 660 km of estimated range on a single charge":
                "660 km",
              "Recharge up to 322 km in 15 minutes at Supercharger locations":
                "15 min",
              "Superchargers placed along popular routes": "60,000+",
            }}
          />
        }
        rightComponent={
          <TextContent
            tag="Range"
            title="Go Anywhere"
            description="With up to 660 kilometers of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road."
            firstBtnTxt="Order Now"
            firstBtnLink="#"
            secondBtnTxt="Test Drive"
            secondBtnLink="#"
          />
        }
      />
    </>
  );
}
