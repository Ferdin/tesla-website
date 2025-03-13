"use client";

import React from "react";
import Link from "next/link";
import { useNavBar } from "@/contexts/NavBarProvider";

export default function MiddleNav() {
  const { navHover, setNavHover } = useNavBar();
  return (
    <ul>
      <Link
        href="#"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md `}
      >
        Vehicles
      </Link>
      <Link
        href="#"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Energy
      </Link>
      <Link
        href="#"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Charging
      </Link>
      <Link
        href="#"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
        className={`inline-block ${
          navHover ? "text-black" : "text-white"
        } font-sans font-semibold px-4 py-2 hover:bg-slate-100 hover:rounded-md duration-150`}
      >
        Discover
      </Link>
      <Link
        href="#"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
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
      >
        <div className="p-10">
          Mega menu content goes here.
          <div className="grid grid-cols-3 gap-6">
            <div>Column 1 content</div>
            <div>Column 2 content</div>
            <div>Column 3 content</div>
          </div>
        </div>
      </div>
    </ul>
  );
}
