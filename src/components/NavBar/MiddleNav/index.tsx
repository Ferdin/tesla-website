"use client";

import Link from "next/link";
import { useNavBar } from "@/contexts/NavBarProvider";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MiddleNav() {
  const { navHover, setNavHover, activeMenu, setActiveMenu } = useNavBar();
  const vehiclesRef = useRef<HTMLElement[]>([]);
  const energyRef = useRef<HTMLElement[]>([]);
  const chargingRef = useRef<HTMLElement[]>([]);
  const discoverRef = useRef<HTMLElement[]>([]);
  const shopRef = useRef<HTMLElement[]>([]);

  const handleMouseLeave = () => {
    setNavHover(false);
  };

  vehiclesRef.current = [];
  energyRef.current = [];
  chargingRef.current = [];
  discoverRef.current = [];
  shopRef.current = [];

  const addToVehiclesRef = (el: HTMLElement | null) => {
    if (el && !vehiclesRef.current.includes(el)) {
      vehiclesRef.current.push(el);
    }
  };

  const addToEnergyRefs = (el: HTMLElement | null) => {
    if (el && !energyRef.current.includes(el)) {
      energyRef.current.push(el);
    }
  };

  const addToChargingRefs = (el: HTMLElement | null) => {
    if (el && !chargingRef.current.includes(el)) {
      chargingRef.current.push(el);
    }
  };

  const addToDiscoverRefs = (el: HTMLElement | null) => {
    if (el && !discoverRef.current.includes(el)) {
      discoverRef.current.push(el);
    }
  };

  const addToShopRefs = (el: HTMLElement | null) => {
    if (el && !shopRef.current.includes(el)) {
      shopRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!navHover) return;

    let targetRefs;
    switch (activeMenu) {
      case "vehicles":
        targetRefs = vehiclesRef.current;
        break;
      case "energy":
        targetRefs = energyRef.current;
        break;
      case "charging":
        targetRefs = chargingRef.current;
        break;
      case "discover":
        targetRefs = discoverRef.current;
        break;
      case "shop":
        targetRefs = shopRef.current;
        break;
      default:
        return;
    }
    gsap.set(
      [
        ...vehiclesRef.current,
        ...energyRef.current,
        ...chargingRef.current,
        ...discoverRef.current,
        ...shopRef.current,
      ],
      { autoAlpha: 0, y: -20 }
    );

    // Animation only runs if we have targets and navHover is true
    if (targetRefs.length > 0) {
      gsap.to(targetRefs, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [navHover, activeMenu]);

  return (
    <ul>
      <Link
        href="#"
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu("vehicles");
        }}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md `}
      >
        Vehicles
      </Link>
      <Link
        href="#"
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu("energy");
        }}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Energy
      </Link>
      <Link
        href="#"
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu("charging");
        }}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Charging
      </Link>
      <Link
        href="#"
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu("discover");
        }}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Discover
      </Link>
      <Link
        href="#"
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu("shop");
        }}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Shop
      </Link>
      <div
        className={`
          absolute left-0 w-full bg-white shadow-lg 
          transition-all duration-300 ease-in-out
          z-0 origin-top
          top-[calc(100%)] /* Position slightly overlapping with navbar */
          ${
            navHover
              ? "opacity-100 max-h-96 scale-y-100"
              : "opacity-0 max-h-0 scale-y-0 overflow-hidden"
          }
        `}
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu(activeMenu);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-10 h-full w-full flex items-center justify-center font-sans">
          <div className="flex flex-row items-center gap-3">
            {activeMenu == "vehicles" && (
              <>
                <div
                  ref={addToVehiclesRef}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/cars/1.png"
                    alt="Model 3 Performance LHD"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Model 3</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="/models"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
                <div
                  ref={addToVehiclesRef}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/cars/2.png"
                    alt="Model-S"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Model S</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
                <div
                  ref={addToVehiclesRef}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/cars/3.png"
                    alt="Model-Y 2 v2"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Model Y v2</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
                <div
                  ref={addToVehiclesRef}
                  className="flex flex-col justify-center items-center list-images "
                >
                  <Image
                    src="/img/cars/4.png"
                    alt="Model-Y"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Model Y</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </>
            )}
            {activeMenu == "energy" && (
              <>
                <div
                  ref={addToEnergyRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/energy/1.png"
                    alt="Megapack"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Megapack</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
                <div
                  ref={addToEnergyRefs}
                  className="flex flex-col justify-center items-center list-images "
                >
                  <Image
                    src="/img/energy/2.png"
                    alt="Powerwall-US"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Powerwall</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </>
            )}
            {activeMenu == "charging" && (
              <>
                <div
                  ref={addToChargingRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/charging/1.png"
                    alt="Charging Global"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Charging Global</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
                <div
                  ref={addToChargingRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/charging/2.png"
                    alt="Home Charging"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Home Charging</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
                <div
                  ref={addToChargingRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/charging/3.png"
                    alt="Supercharging"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Supercharging</span>
                  <div className="flex flex-row gap-5 m-2">
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Learn
                    </Link>
                    <Link
                      href="#"
                      className="underline decoration-gray-600 underline-offset-4 hover:decoration-black hover:font-semibold hover:decoration-2 duration-75"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </>
            )}
            {activeMenu == "discover" && (
              <>
                <div className="flex flex-row justify-center gap-40">
                  <div ref={addToDiscoverRefs}>
                    <h2 className="font-light">Resources</h2>
                    <div className="flex flex-col gap-2 mt-4">
                      <Link href="#" className="font-semibold">
                        Demo Drive
                      </Link>
                      <Link href="#" className="font-semibold">
                        Customer Stories
                      </Link>
                      <Link href="#" className="font-semibold">
                        Events
                      </Link>
                    </div>
                  </div>
                  <div ref={addToDiscoverRefs}>
                    <h2 className="font-light">Location Services</h2>
                    <div className="flex flex-col gap-2 mt-4">
                      <Link href="#" className="font-semibold">
                        Find Us
                      </Link>
                      <Link href="#" className="font-semibold">
                        Find a Collision Center
                      </Link>
                      <Link href="#" className="font-semibold">
                        Find a Certified Installer
                      </Link>
                    </div>
                  </div>
                  <div ref={addToDiscoverRefs}>
                    <h2 className="font-light">Company</h2>
                    <div className="flex flex-col gap-2 mt-4">
                      <Link href="#" className="font-semibold">
                        About
                      </Link>
                      <Link href="#" className="font-semibold">
                        Careers
                      </Link>
                      <Link href="#" className="font-semibold">
                        Investor relations
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeMenu == "shop" && (
              <>
                <div
                  ref={addToShopRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/shop/1.png"
                    alt="Apparel"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Apparel</span>
                </div>
                <div
                  ref={addToShopRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/shop/2.png"
                    alt="Charging"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Charging</span>
                </div>
                <div
                  ref={addToShopRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/shop/3.png"
                    alt="Lifestyle"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Lifestyle</span>
                </div>
                <div
                  ref={addToShopRefs}
                  className="flex flex-col justify-center items-center list-images "
                >
                  <Image
                    src="/img/shop/4.png"
                    alt="Vehicle Accessories"
                    width={200}
                    height={200}
                  />{" "}
                  <span className="font-medium">Vehicle Accessories</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ul>
  );
}
