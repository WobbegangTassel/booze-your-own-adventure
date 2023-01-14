import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "500px",
};

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
  { name: "Aeronaut", address: "14 Tyler St, Somerville, MA 02143" },
  {
    name: "Lizard Lounge",
    address: "1667 Massachusetts Ave, Cambridge, MA 02138",
  },
];

function BarMap({ storyData, location, setLocation }) {
  let index = storyData.id;

  //which bar should we go to? The bar that corresponds to story index.
  let nextBarAddress = bars[index].address;

  //find user's current location with geolocation API:
  // setLocation(bars[0].address);
  // const [center, setCenter] = useState(null);

  function handleClick(){
    setLocation(nextBarAddress);
  }

  // Geolocated center useEffect()
  // useEffect(() => {
  //   const successCallback = (position) => {
  //     setCenter({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     });
  //     console.log(position);
  //   };

  //   const errorCallback = (error) => {
  //     console.log(error);
  //   };

  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  // }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBkFrKWVDByk0CGRmpwLFBSU8vqvIH1Xdc",
  });

  const [map, setMap] = React.useState(null);
  const [directions, setDirections] = useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      // const bounds = new window.google.maps.LatLngBounds(center);
      // map.fitBounds(bounds);

      const directionsService = new google.maps.DirectionsService();

      // Guardian conditional
      if (location) { //change to center if using geolocation API
        const origin = location; //change to center if using geolocation API
        const destination = nextBarAddress;

        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [],
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              console.log(result);
              setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      }

      setMap(map);
    },
    [location]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(isLoaded, location); //change to center if using geolocation API
  return isLoaded && location ? ( //change to center if using geolocation API
    <div className="flex flex-col justify-center align-middle m-12">
      <p className="self-center justify-center p-2 m-5 flex-shrink-0 text-4xl font-body text-brown-dark">
        Let's walk to {bars[index].name}!
      </p>
      <div className="self-center">
        <GoogleMap
          mapContainerStyle={containerStyle}
          // center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* You can add more child components, such as markers, info windows, etc. */}
          {directions&& <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>

      <button 
        className="p-3 flex-shrink-0 my-6 self-center font-button text-blue-light w-96 min-w-min text-2xl rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        onClick={handleClick}
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
