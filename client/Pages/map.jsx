import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function BarMap() {
  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <p className="self-center p-2 py-12 font-display text-6xl flex-shrink-0">
        You are looking at a map!
      </p>
      <button className="py-1 flex-shrink-0 self-center px-10 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark">
        <Link to="/drink">I'm here!</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default BarMap;
