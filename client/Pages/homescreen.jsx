//login or signup
//OAuth

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homescreen() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button

  return (
    <div>
      <input type="text" id="password" placeholder="zip code" />
      <Link to="/story">Start a New Adventure</Link>
      <button type="" onClick={() => {}}>
        Resume Saved Adventure
      </button>
      <p className="text-blue-600">
        If this text is blue the Tailwind CSS is working
      </p>
    </div>
  );
}

export default Homescreen;
