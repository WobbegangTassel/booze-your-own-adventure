import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function TravelPlan({ choice }) {
  console.log(choice);

  return (
    <div>
      <p>You chose {choice}. That mean's we're headed to a new location!</p>
      <button>
        <Link to="/map">Let's go!</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default TravelPlan;
