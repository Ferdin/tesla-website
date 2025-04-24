"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";

type LatLng = {
  lat: number;
  lng: number;
};

interface TeslaMapProps {
  sourceName: string;
  destinationName: string;
  source: LatLng;
  destination: LatLng;
  showMap?: boolean;
}

export default function TeslaMap({
  sourceName,
  destinationName,
  source,
  destination,
  showMap,
}: TeslaMapProps) {
  const mapRef = useRef<ExtendedMap | null>(null);
  const pathRef = useRef<google.maps.Polyline | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [totalDistance, setTotalDistance] = useState(0);

  useEffect(() => {
    const loadMap = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
      const loader = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["routes"],
      });
      try {
        // Load the Google Maps JavaScript API
        await loader.load();

        const { Map } = (await google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;

        // Calculate center point between source and destination
        const centerLat = (source.lat + destination.lat) / 2;
        const centerLng = (source.lng + destination.lng) / 2;

        // Initialize map centered between source and destination
        const mapElement = document.getElementById("map");
        if (mapElement) {
          const newMap = new Map(mapElement, {
            center: { lat: centerLat, lng: centerLng },
            zoom: 6,
            mapId: "6ac97e84853df26d",
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            keyboardShortcuts: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: "none",
            draggable: false,
          });

          mapRef.current = newMap as ExtendedMap;

          // Create markers for source and destination
          new google.maps.Marker({
            position: source,
            map: newMap,
            title: sourceName,
            icon: {
              path: "M12,2C8.14,2,5,5.14,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.14,15.86,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z",
              fillColor: "#000000",
              fillOpacity: 1,
              strokeColor: "#000000",
              strokeWeight: 1,
              scale: 2,
              anchor: new google.maps.Point(12, 22),
            },
          });

          new google.maps.Marker({
            position: destination,
            map: newMap,
            title: destinationName,
            icon: {
              path: "M12,2C8.14,2,5,5.14,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.14,15.86,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z",
              fillColor: "#000000",
              fillOpacity: 1,
              strokeColor: "#000000",
              strokeWeight: 1,
              scale: 2,
              anchor: new google.maps.Point(12, 22),
            },
          });

          // Create tooltip div
          const tooltip = document.createElement("div");
          tooltip.className = "distance-tooltip";
          tooltip.style.position = "absolute";
          tooltip.style.background = "rgba(0, 0, 0, 0.7)";
          tooltip.style.color = "white";
          tooltip.style.padding = "5px 10px";
          tooltip.style.borderRadius = "4px";
          tooltip.style.fontSize = "14px";
          tooltip.style.transform = "translate(-50%, -150%)";
          tooltip.style.zIndex = "1000";
          tooltip.style.pointerEvents = "none";
          tooltip.style.display = "none";
          mapElement.appendChild(tooltip);
          tooltipRef.current = tooltip;

          // Setup directions service
          const directionsService = new google.maps.DirectionsService();
          directionsService.route(
            {
              origin: source,
              destination: destination,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                // Extract the path from the route
                if (result && result.routes && result.routes.length > 0) {
                  // Get total distance in meters from the route
                  const route = result.routes[0];
                  let routeDistance = 0;

                  if (route.legs) {
                    for (const leg of route.legs) {
                      if (leg.distance) {
                        routeDistance += leg.distance.value;
                      }
                    }
                  }

                  // Convert to kilometers and save
                  setTotalDistance(routeDistance / 1000);

                  const routePath = route.overview_path;

                  // Create a polyline but don't make it visible yet
                  const path = new google.maps.Polyline({
                    path: routePath,
                    geodesic: true,
                    strokeColor: "#000000",
                    strokeOpacity: 0,
                    strokeWeight: 4,
                    map: newMap,
                    icons: [
                      {
                        icon: {
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 8,
                          strokeColor: "#FFFFFF",
                          strokeWeight: 2,
                          fillColor: "#000000",
                          fillOpacity: 1,
                        },
                        offset: "0%",
                      },
                    ],
                  });
                  pathRef.current = path;
                }
                // Setup the Intersection Observer
                setupObserver();
              } else {
                console.error(`Directions request failed due to ${status}`);
              }
            }
          );
        }
      } catch (error) {
        console.error("Error loading Google Maps or calculating route:", error);
      }
    };

    const setupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && pathRef.current) {
              animatePath();
            }
          });
        },
        { threshold: 0.2 }
      );

      if (mapContainerRef.current) {
        observerRef.current.observe(mapContainerRef.current);
      }
    };

    const animatePath = () => {
      if (!pathRef.current || !tooltipRef.current) return;

      const path = pathRef.current;
      const originalPath = path.getPath().getArray();
      const tooltip = tooltipRef.current;

      // Show the tooltip
      tooltip.style.display = "block";

      // Start with an empty path
      path.setPath([]);

      // Make the polyline visible but with empty path initially
      path.setOptions({
        strokeOpacity: 1,
      });

      // Animation settings
      const animationDuration = 2000; // 2 seconds
      const startTime = performance.now();

      const frame = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        // Easing function for smoother animation
        const easeProgress = easeInOutCubic(progress);

        // Calculate how many points to show based on progress
        const pointsToShow = Math.floor(easeProgress * originalPath.length);

        // Create the visible portion of the path
        const visiblePath = originalPath.slice(0, pointsToShow + 1);

        // Update the path
        path.setPath(visiblePath);

        // Get the current point (end of the visible path)
        if (visiblePath.length > 0) {
          const currentPoint = visiblePath[visiblePath.length - 1];

          // Calculate the current distance based on progress
          const currentDistance = (totalDistance * easeProgress).toFixed(1);

          // Update tooltip content
          tooltip.textContent = `${currentDistance} km`;

          // Position tooltip at the current point
          if (mapRef.current) {
            const projection = mapRef.current.getProjection();
            if (projection) {
              const point = projection.fromLatLngToPoint(currentPoint);
              const topRight = projection.fromLatLngToPoint(
                mapRef.current.getBounds()!.getNorthEast()
              );
              const bottomLeft = projection.fromLatLngToPoint(
                mapRef.current.getBounds()!.getSouthWest()
              );
              const scale = Math.pow(2, mapRef.current.getZoom()!);

              if (point && topRight && bottomLeft) {
                const xy = new google.maps.Point(
                  (point.x - bottomLeft.x) * scale,
                  (point.y - topRight.y) * scale
                );

                tooltip.style.left = `${xy.x}px`;
                tooltip.style.top = `${xy.y}px`;
              }
            }
          }
        }

        // Update the icon position
        const icons = path.get("icons");
        if (icons) {
          icons[0].offset = "100%"; // Always at the end of the visible path
          path.set("icons", icons);
        }

        // Continue the animation if not complete
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          // Animation complete - hide tooltip after a short delay
          setTimeout(() => {
            if (tooltipRef.current) {
              tooltipRef.current.style.display = "none";
            }
          }, 1000);
        }
      };

      requestAnimationFrame(frame);
    };

    // Easing function for smoother animation
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    loadMap();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Cleanup tooltip if component unmounts
      if (tooltipRef.current && tooltipRef.current.parentNode) {
        tooltipRef.current.parentNode.removeChild(tooltipRef.current);
      }
    };
  }, [destination, destinationName, source, sourceName, totalDistance]);

  return (
    <div className="route-map-container px-96" ref={mapContainerRef}>
      {showMap && (
        <div
          id="map"
          style={{ width: "100%", height: "500px", borderRadius: "8px" }}
        ></div>
      )}
      {!showMap && (
        <div>
          <Image
            src="/img/model_s/map-placerholder.png"
            alt="placeholder_map"
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
}
