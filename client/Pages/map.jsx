import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function BarMap() {
  return (
    <div>
      <p>You are looking at a map!</p>
      <button>
        <Link to="/drink">I'm here!</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default BarMap;
