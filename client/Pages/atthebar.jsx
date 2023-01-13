import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function AtTheBar() {
  return (
    <div>
      <p>You are at the bar!</p>
      <iframe
        src="https://giphy.com/embed/3oKGz6J5SxUhyP2sms"
        width="480"
        height="322"
        allowFullScreen
      ></iframe>

      <button>
        <Link to="/story">What happens next?</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default AtTheBar;
