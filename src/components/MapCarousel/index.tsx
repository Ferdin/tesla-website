"use client";
import { useState, useEffect } from "react";
import TeslaMap from "../TeslaMap";

// Define the type for a single map configuration
interface MapConfig {
  sourceName: string;
  destinationName: string;
  source: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
}

// Define props for the component
interface MapCarouselProps {
  maps: MapConfig[];
  interval?: number;
}

/**
 * MapCarousel component that rotates through multiple TeslaMap configurations
 * @param {Object[]} maps - Array of map configuration objects
 * @param {number} interval - Time in milliseconds between transitions (default: 5000ms)
 * @returns {JSX.Element} - The currently displayed TeslaMap component
 */
const MapCarousel = ({ maps = [], interval = 5000 }: MapCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Get all source names from the maps
  const grouped = maps.reduce((acc, curr) => {
    if (!acc[curr.sourceName]) {
      acc[curr.sourceName] = [];
    }
    acc[curr.sourceName].push(curr.destinationName);
    return acc;
  }, {} as Record<string, string[]>);

  const allSourceNames = Object.keys(grouped);
  const allDestinationNames = Object.values(grouped); // string[][]

  // Current displayed map data
  const currentMap = maps[currentIndex];

  useEffect(() => {
    // Skip the effect if there are fewer than 2 maps
    if (maps.length <= 1) return;

    const rotateMap = () => {
      // First fade out
      setIsVisible(false);

      // After fade out completes, change the map
      const fadeOutTimeout = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % maps.length;
        setCurrentIndex(nextIndex);

        // Then fade back in
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 500); // This should match the CSS transition duration

      return fadeOutTimeout;
    };

    const timer = setInterval(rotateMap, interval);

    // Clean up timers on unmount
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, maps.length, interval, maps]);

  // If no maps are provided, return null
  if (maps.length === 0 || !currentMap) {
    return null;
  }

  return (
    <div className="map-carousel">
      <div
        className="map-container"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <TeslaMap
          sourceName={currentMap.sourceName}
          destinationName={currentMap.destinationName}
          source={currentMap.source}
          destination={currentMap.destination}
          showMap={false}
        />
      </div>

      {/* Display all source names with the current one highlighted use currentIndex to refer the current slide*/}
      <div className="source-names-display mt-8 px-96 font-sans ">
        <div className="flex gap-4">
          {allSourceNames.map((name, index) => (
            <div
              key={index}
              className={`flex flex-wrap font-medium flex-1 border-t-4 cursor-pointer ${
                index === currentIndex
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 shadow-[inset_0_2px_0_0_#6b7280]"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex flex-row mt-2">
                <div>{name} to</div>
                {allDestinationNames[index].map((dest, destIndex) => (
                  <div key={destIndex}>&nbsp;{dest}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapCarousel;
