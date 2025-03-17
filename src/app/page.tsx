import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <NavBar />
      </div>
      <Hero
        url="/Homepage-Model-3.png"
        heading="Model 3"
        orderBtnLabel="Order Now"
        secondBtnLabel="Demo Drive"
      />
      <Hero
        url="/img/hero_images/Homepage-New-Legacy-Model-Y-Desktop.png"
        heading="Model Y"
        orderBtnLabel="Order Now"
        secondBtnLabel="View Inventory"
      />
      <Hero
        url="/img/hero_images/Homepage-Model-X-Desktop-US.png"
        heading="Model X"
        orderBtnLabel="Order Now"
        secondBtnLabel="View Inventory"
        subHeading="Free Supercharging Included"
      />
      <Hero
        url="/img/hero_images/Homepage-Model-S-Desktop-US.png"
        heading="Model S"
        orderBtnLabel="Order Now"
        secondBtnLabel="View Inventory"
        subHeading="Free Supercharging Included"
      />
      <Hero
        url="/img/hero_images/Homepage-Cybertruck-Desktop-v3.png"
        heading="Cybertruck"
        orderBtnLabel="Order Now"
        secondBtnLabel="View Inventory"
        funky={true}
      />
      <Hero
        videoURL="/videos/homepage-demo.mp4"
        heading="Experience Tesla"
        smallLabel="Schedule a test drive today"
        orderBtnLabel="Demo Drive"
      />
      <Hero
        url="/img/hero_images/Homepage-Powerwall-3-Desktop-ROW.png"
        heading="Solar and Powerwall"
        smallLabel="Power everything"
        orderBtnLabel="Learn More"
      />
      <Hero
        url="/img/hero_images/Homepage-Accessories-Desktop-US.png"
        heading="Accessories"
        orderBtnLabel="Shop Now"
      />
      <Hero
        videoURL="/videos/we-are-tesla.mp4"
        heading="We are Tesla"
        orderBtnLabel="Join team"
      />
    </div>
  );
}
