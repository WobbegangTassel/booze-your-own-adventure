import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function AtTheBar() {
  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <div className="shadow-2xl rounded-xl self-center text-3xl bg-brown-light text-brown-dark font-display border-dotted border-4 border-light-blue-500 p-10 mt-20">
        <p>You are at the bar!</p>
      </div>
      <div className="shadow-2xl rounded-xl text-6xl bg-brown-light text-brown-dark font-display border-dotted border-4 border-light-blue-500 p-10 mt-20 flex flex-col justify-center align-middle">
        <iframe
          src="https://giphy.com/embed/3oKGz6J5SxUhyP2sms"
          width="480"
          height="322"
          className="self-center"
        ></iframe>
      </div>

      <button className="py-1 flex-shrink-0 self-center px-10 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark mt-20">
        <Link to="/story">What happens next?</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default AtTheBar;
