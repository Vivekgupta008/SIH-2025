'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Tourist {
  id: number;
  name: string;
  email: string;
  phone?: string;
  latitude: number;
  longitude: number;
  status: string;
  last_location_update: string;
  emergency_contact?: string;
  created_at: string;
}

interface RiskZone {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
  created_at: string;
}

interface TouristMapProps {
  tourists: Tourist[];
  selectedTourist?: Tourist | null;
  onTouristSelect?: (tourist: Tourist) => void;
  riskZones?: RiskZone[];
}

const TouristMap: React.FC<TouristMapProps> = ({ tourists, selectedTourist, onTouristSelect, riskZones = [] }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  useEffect(() => {
    if (selectedTourist) {
      setMapCenter([selectedTourist.latitude, selectedTourist.longitude]);
      setMapZoom(10);
    } else if (tourists.length > 0) {
      // Calculate center based on all tourists
      const avgLat = tourists.reduce((sum, tourist) => sum + tourist.latitude, 0) / tourists.length;
      const avgLng = tourists.reduce((sum, tourist) => sum + tourist.longitude, 0) / tourists.length;
      setMapCenter([avgLat, avgLng]);
      setMapZoom(3);
    }
  }, [tourists, selectedTourist]);

  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'inactive':
        return 'gray';
      case 'emergency':
        return 'red';
      default:
        return 'blue';
    }
  };

  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Risk Zones */}
        {riskZones.map((riskZone) => (
          <Circle
            key={`risk-zone-${riskZone.id}`}
            center={[riskZone.latitude, riskZone.longitude]}
            radius={riskZone.radius * 1000} // Convert km to meters
            pathOptions={{
              color: '#f59e0b',
              fillColor: '#fbbf24',
              fillOpacity: 0.2,
              weight: 2,
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-lg text-orange-600">{riskZone.name}</h3>
                <p className="text-sm text-gray-600">{riskZone.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Radius: {riskZone.radius}km
                </p>
              </div>
            </Popup>
          </Circle>
        ))}

        {/* Tourists */}
        {tourists.map((tourist) => (
          <Marker
            key={tourist.id}
            position={[tourist.latitude, tourist.longitude]}
            icon={createCustomIcon(getMarkerColor(tourist.status))}
            eventHandlers={{
              click: () => onTouristSelect?.(tourist),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-lg">{tourist.name}</h3>
                <p className="text-sm text-gray-600">{tourist.email}</p>
                <p className="text-sm">
                  Status: <span className={`font-medium ${
                    tourist.status === 'active' ? 'text-green-600' :
                    tourist.status === 'emergency' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {tourist.status}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Last update: {new Date(tourist.last_location_update).toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TouristMap;
