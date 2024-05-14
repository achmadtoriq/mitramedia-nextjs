"use client"
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 18);
  return null;
}

const Maps = ({ position, zoom }) => {
  return (
    <>
      <MapContainer
        center={position}
        zoom={false}
        className="rounded-lg z-0"
        style={{ height: "50vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl: "/assets/images/point-mitra.png",
              iconSize: [50, 50],
            })
          }
        ></Marker>
        <ChangeView coords={position} />
      </MapContainer>
    </>
  );
};

export default Maps;
