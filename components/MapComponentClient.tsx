'use client';

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Dealer {
  geojson: any;
  name: string;
  contact?: string;
  website?: string;
  email?: string;
  phone?: string;
  email1?: string;
  phone1?: string;
  email2?: string;
  phone2?: string;
}

interface Distributor {
  region: string;
  dealers: Dealer[];
}

interface MapComponentClientProps {
  distributors: Distributor[];
}

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponentClient = ({ distributors }: MapComponentClientProps) => {
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
    }
  };

  const pointToLayer = (feature: any, latlng: L.LatLng) => {
    return L.marker(latlng, { icon: customIcon });
  };

  const style = {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    weight: 2
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {distributors.flatMap(distributor => distributor.dealers).map((dealer, index) => (
        <GeoJSON
          key={index}
          data={dealer.geojson}
          pointToLayer={pointToLayer}
          style={style}
          onEachFeature={onEachFeature}
        >
          <Popup>
            <h2>{dealer.name}</h2>
            {dealer.contact && <p>{dealer.contact}</p>}
            {dealer.website && <p><a href={`http://${dealer.website}`}>{dealer.website}</a></p>}
            {dealer.email && <p>Email: <a href={`mailto:${dealer.email}`}>{dealer.email}</a></p>}
            {dealer.phone && <p>Phone: {dealer.phone}</p>}
            {dealer.email1 && <p>Email: <a href={`mailto:${dealer.email1}`}>{dealer.email1}</a></p>}
            {dealer.phone1 && <p>Phone: {dealer.phone1}</p>}
            {dealer.email2 && <p>Email: <a href={`mailto:${dealer.email2}`}>{dealer.email2}</a></p>}
            {dealer.phone2 && <p>Phone: {dealer.phone2}</p>}
          </Popup>
        </GeoJSON>
      ))}
    </MapContainer>
  );
};

export default MapComponentClient;