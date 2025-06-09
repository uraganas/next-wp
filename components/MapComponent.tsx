// filepath: /c:/CODZING/next-wp/components/MapComponent.tsx
'use client';

import dynamic from 'next/dynamic';
import { GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

interface Distributor {
  geojson: { default: any };
  country: string;
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

interface MapComponentProps {
  distributors: Distributor[];
}

const MapComponent = ({ distributors }: MapComponentProps) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {distributors.map((distributor, index) => (
        <GeoJSON key={index} data={distributor.geojson.default}>
          <Popup>
            <h2>{distributor.country}</h2>
            <p>{distributor.name}</p>
            {distributor.contact && <p>{distributor.contact}</p>}
            {distributor.website && <p><a href={`http://${distributor.website}`}>{distributor.website}</a></p>}
            {distributor.email && <p>Email: <a href={`mailto:${distributor.email}`}>{distributor.email}</a></p>}
            {distributor.phone && <p>Phone: {distributor.phone}</p>}
            {distributor.email1 && <p>Email: <a href={`mailto:${distributor.email1}`}>{distributor.email1}</a></p>}
            {distributor.phone1 && <p>Phone: {distributor.phone1}</p>}
            {distributor.email2 && <p>Email: <a href={`mailto:${distributor.email2}`}>{distributor.email2}</a></p>}
            {distributor.phone2 && <p>Phone: {distributor.phone2}</p>}
          </Popup>
        </GeoJSON>
      ))}
    </MapContainer>
  );
};

export default MapComponent;