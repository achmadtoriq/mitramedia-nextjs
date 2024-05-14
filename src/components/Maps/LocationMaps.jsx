"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const LocationMaps = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Maps/Maps"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const params = { lat: -7.3000424, lng: 112.765686 };
  const position = [params.lat, params.lng];
  const zoom = 13;
  return <Map position={position} zoom={zoom} />;
};

export default LocationMaps;
