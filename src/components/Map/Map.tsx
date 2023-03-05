import { useState, useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { OSM } from 'ol/source';
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
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 0,
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

    //Test API
    fetch('https://ane-frontend-data.azurewebsites.net/time/utc')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log('json ', json);
      });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return <div ref={mapElement} style={{ width: '100%', height: 'inherit' }}></div>;
}

export default MapProvider;
