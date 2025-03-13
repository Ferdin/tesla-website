"use client";

import Link from "next/link";
import { useNavBar } from "@/contexts/NavBarProvider";

export default function MiddleNav() {
  const { navHover, setNavHover, activeMenu, setActiveMenu } = useNavBar();
  const handleMouseLeave = () => {
    // Small timeout to allow for some movement between elements
    setTimeout(() => {
      setNavHover(false);
      setActiveMenu(null);
    }, 100);
  };

  return (
    <ul>
      <Link
        href="#"
        onMouseEnter={() => {
          setNavHover(true);
          setActiveMenu("vehicles");
        }}
        onMouseLeave={handleMouseLeave}
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
        onMouseLeave={() => {
          setNavHover(false);
          setActiveMenu(null);
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
        onMouseLeave={() => {
          setNavHover(false);
          setActiveMenu(null);
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
        onMouseLeave={() => {
          setNavHover(false);
          setActiveMenu(null);
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
        onMouseLeave={() => {
          setNavHover(false);
          setActiveMenu(null);
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
            activeMenu
              ? "opacity-100 max-h-96 scale-y-100"
              : "opacity-0 max-h-0 scale-y-0 overflow-hidden"
          }
        `}
      >
        {activeMenu === "vehicles" && (
          <div className="p-10">
            <h2 className="text-xl font-bold mb-4">Vehicles</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>SUVs</div>
              <div>Sedans</div>
              <div>Electric Vehicles</div>
            </div>
          </div>
        )}
        {activeMenu === "energy" && (
          <div className="p-10">
            <h2 className="text-xl font-bold mb-4">Vehicles</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>SUVs</div>
              <div>Sedans</div>
              <div>Electric Vehicles</div>
            </div>
          </div>
        )}
        {activeMenu === "charging" && (
          <div className="p-10">
            <h2 className="text-xl font-bold mb-4">Vehicles</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>SUVs</div>
              <div>Sedans</div>
              <div>Electric Vehicles</div>
            </div>
          </div>
        )}
        {activeMenu === "discover" && (
          <div className="p-10">
            <h2 className="text-xl font-bold mb-4">Vehicles</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>SUVs</div>
              <div>Sedans</div>
              <div>Electric Vehicles</div>
            </div>
          </div>
        )}
        {activeMenu === "shop" && (
          <div className="p-10">
            <h2 className="text-xl font-bold mb-4">Vehicles</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>SUVs</div>
              <div>Sedans</div>
              <div>Electric Vehicles</div>
            </div>
          </div>
        )}
      </div>
    </ul>
  );
}
