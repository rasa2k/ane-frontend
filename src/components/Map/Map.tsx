import { useState, useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { XYZ } from 'ol/source';
import { defaults as defaultControls } from 'ol/control';
import { defaults as defaultInteractions } from 'ol/interaction';
import { fromLonLat } from 'ol/proj';

function MapProvider() {
  const [map, setMap] = useState<Map | any>(null);

  const mapElement = useRef<HTMLInputElement>(null);
  const mapRef = useRef<Map | null>(null);
  mapRef.current = map;

  useEffect(() => {
    const map: Map = new Map({
      target: mapElement.current || undefined,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://mt{0-3}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-110, 65]),
        zoom: 4,
        projection: 'EPSG:3857',
      }),
      controls: defaultControls({
        zoom: false,
        attribution: false,
        rotate: false,
      }),
      interactions: defaultInteractions({
        altShiftDragRotate: false,
        pinchRotate: false,
        shiftDragZoom: false,
      }),
    });

    setMap(map);

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return <div ref={mapElement} style={{ width: '100%', height: 'inherit' }}></div>;
}

export default MapProvider;
