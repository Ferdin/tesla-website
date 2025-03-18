import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

export default function page() {
  return (
    <>
      <NavBar />
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
      />
    </>
  );
}
