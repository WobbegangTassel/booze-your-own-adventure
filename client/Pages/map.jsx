import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function BarMap({ location, setLocation }) {
  //get starting position and store it in State.

  let lat;
  let lng;

  const bars = [
    {
      name: "Lord Hobo Cambridge",
      address: "92 Hampshire St, Cambridge, MA 02139",
    },
    {
      name: "Brick & Mortar",
      address: "567 Massachusetts Ave, Cambridge, MA 02139",
    },
    {
      name: "The Cantab Lounge",
      address: "738 Massachusetts Ave, Cambridge, MA 02139",
    },
    {
      name: "The Phoenix Landing",
      address: "512 Massachusetts Ave, Cambridge, MA 02139",
    },
    {
      name: "730 Tavern",
      address: "730 Massachusetts Ave, Cambridge, MA 02139",
    },
    {
      name: "The Plough and Stars",
      address: "912 Massachusetts Ave, Cambridge, MA 02139",
    },
    {
      name: "Blue Owl Rooftop Bar",
      address: "907 Main St, Cambridge, MA 02139",
    },
    {
      name: "Miracle of Science",
      address: "321 Massachusetts Ave, Cambridge, MA 02139",
    },
    {
      name: "The Thirsty Ear",
      address: "Ashdown House, 235 Albany St, Cambridge, MA 02139",
    },
    {
      name: "The Cellar",
      address: "991 Massachusetts Ave, Cambridge, MA 02138",
    },
    { name: "New Republik", address: "1172 Cambridge St, Cambridge, MA 02139" },
    { name: "R & D Pub", address: "32 Vassar St, Cambridge, MA 02139" },
    { name: "Parlor Sports", address: "1 Beacon St, Somerville, MA 02143" },
    { name: "Thirsty Scholar", address: "70 Beacon St, Somerville, MA 02143" },
  ];

  //find user's current location with geolocation API:
  useEffect(() => {
    const successCallback = (position) => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    let position = navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback
    );

    console.log("position: ", position);
  }, []);

  const center = { lat: lat, lng: lng };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBkFrKWVDByk0CGRmpwLFBSU8vqvIH1Xdc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="flex flex-col justify-center align-middle m-12">
      <p className="self-center justify-center p-2 m-5 flex-shrink-0 text-4xl font-body text-brown-dark">
        You are looking at a map!
      </p>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <button
        className="rounded-xl shadow-2xl w-80 bg-brown text-brown-light self-center font-display hover:bg-brown-dark p-5 text-5xl m-5"
        className="p-3 flex-shrink-0 my-6 self-center font-button text-blue-light w-96 min-w-min text-2xl rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
      >
        <Link to="/drink">I'm here!</Link>
      </button>
      <Outlet />
    </div>
  ) : (
    <>No Map To See Here</>
  );
}

export default React.memo(BarMap);
