import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import './MapComponent.css'; 

// Displays map
// Needs points passed to it in order to make markers and attach to map

function MapComponent() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  let [lng] = useState(139.753);
  let [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/191d9465-f0a6-470f-861b-a595e61264fa/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    

  },[lng,lat]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );

}

export default MapComponent
