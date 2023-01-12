import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function TravelPlan() {
  const { placeid } = useParams();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/places/${placeid}`); //or fetch from some other API, maybe google maps...

      console.log(resp);
      if (!resp.ok) {
        setError("Error!");
        return;
      }

      const json = await resp.json();

      console.log(json);
      setPlaceData(resp);
      setLoading(false);
    })();
  }, [placeid]);

  if (error) {
    return <div>error loading page</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <p>A bit of story... Get ready to go!</p>
      <button>
        <Link to="/map">Let's go!</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default TravelPlan;
