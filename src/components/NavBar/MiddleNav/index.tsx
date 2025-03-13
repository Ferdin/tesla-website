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
  const vehiclesRef = useRef([]);
  const energyRef = useRef([]);
  const chargingRef = useRef([]);

  const handleMouseLeave = () => {
    setNavHover(false);
  };

  vehiclesRef.current = [];
  energyRef.current = [];
  chargingRef.current = [];

  const addToVehiclesRef = (el) => {
    if (el && !vehiclesRef.current.includes(el)) {
      vehiclesRef.current.push(el);
    }
  };

  const addToEnergyRefs = (el) => {
    if (el && !energyRef.current.includes(el)) {
      energyRef.current.push(el);
    }
  };

  const addToChargingRefs = (el) => {
    if (el && !chargingRef.current.includes(el)) {
      chargingRef.current.push(el);
    }
  };

  useEffect(() => {
    if (navHover && activeMenu === "vehicles") {
      // Hide all elements first
      gsap.set(vehiclesRef.current, { autoAlpha: 0, y: -20 });

      // Create staggered animation
      gsap.to(vehiclesRef.current, {
        duration: 1,
        autoAlpha: 1,
        y: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    } else if (navHover && activeMenu === "energy") {
      // Hide all elements first
      gsap.set(energyRef.current, { autoAlpha: 0, y: -20 });

      // Create staggered animation
      gsap.to(energyRef.current, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
      });
    } else if (navHover && activeMenu === "charging") {
      // Hide all elements first
      gsap.set(chargingRef.current, { autoAlpha: 0, y: -20 });

      // Create staggered animation
      gsap.to(chargingRef.current, {
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
                  <span className="font-medium">Model 3 Performance LHD</span>
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
                  Model-S
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
                  Model-Y 2 v2
                </div>
                <div
                  ref={addToVehiclesRef}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/cars/4.png"
                    alt="Model-Y"
                    width={200}
                    height={200}
                  />{" "}
                  Model-Y
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
                </div>
                <div
                  ref={addToEnergyRefs}
                  className="flex flex-col justify-center items-center list-images"
                >
                  <Image
                    src="/img/energy/2.png"
                    alt="Powerwall-US"
                    width={200}
                    height={200}
                  />{" "}
                  Powerwall
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
                  Home Charging
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
                  Supercharging
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ul>
  );
}
