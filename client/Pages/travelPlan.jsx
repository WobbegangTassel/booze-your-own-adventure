import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function TravelPlan({ choice }) {
  console.log(choice);

  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <div className="shadow-2xl rounded-xl text-6xl bg-brown-light text-brown-dark font-display border-dotted border-4 border-light-blue-500 p-10 mt-20">
        <p>You chose {choice}. That mean's we're headed to a new location!</p>
      </div>

      <button className="rounded-xl shadow-2xl w-80 bg-brown text-brown-light self-center font-display hover:bg-brown-dark p-5 text-5xl m-5 mt-20">
        <Link to="/map">Let's go!</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default TravelPlan;
