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

  useEffect(() => {
    const successCallback = (position) => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      setLocation({
        lat: lat,
        lng: lng,
      });
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    let position = navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback
    );

    console.log("position: ", position);
    console.log(location);
  }, [location, setLocation]);

  // const center = location;

  const center = location;

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
    <div>
      <p>You are looking at a map!</p>
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
      <button className="rounded-xl shadow-2xl w-80 bg-brown text-brown-light self-center font-display hover:bg-brown-dark p-5 text-5xl m-5">
        <Link to="/drink">I'm here!</Link>
      </button>
      <Outlet />
    </div>
  ) : (
    <>No Map To See Here</>
  );
}

export default React.memo(BarMap);
