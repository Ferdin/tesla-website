declare namespace google {
  namespace maps {
    function importLibrary(name: string): Promise<MapsLibrary>;

    interface MapsLibrary {
      Map: typeof google.maps.Map;
    }

    class Map {
      constructor(element: HTMLElement, options: MapOptions);
    }

    interface MapOptions {
      center: { lat: number; lng: number };
      zoom: number;
      mapId?: string;
      disableDefaultUI?: boolean;
      zoomControl?: boolean;
      mapTypeControl?: boolean;
      scaleControl?: boolean;
      streetViewControl?: boolean;
      rotateControl?: boolean;
      fullscreenControl?: boolean;
      keyboardShortcuts?: boolean;
      mapTypeId?: MapTypeId; // or create a proper enum type
      gestureHandling?: string;
      draggable?: boolean;
      // Add any other properties you need
    }

    enum MapTypeId {
      ROADMAP = "roadmap",
      SATELLITE = "satellite",
      HYBRID = "hybrid",
      TERRAIN = "terrain",
    }
  }
}
