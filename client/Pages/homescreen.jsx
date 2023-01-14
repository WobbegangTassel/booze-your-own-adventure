//login or signup
//OAuth

import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Homescreen() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button

  return (
    <div className="flex flex-col space-5 rounded-lg h-full w-full border-double border-4 border-brown-dark">
      <p className="self-center justify-center mt-12 p-2 flex-shrink-0 text-6xl font-display text-brown-dark">
        Welcome to
      </p>
      <p className="self-center justify-center p-2 flex-shrink-0 text-6xl font-display text-brown-dark">
        Booze-Your-Own Adventure!
      </p>
      <p className="self-center justify-center p-2 m-5 max-w-3xl flex-shrink-0 text-4xl font-body text-brown-dark">
        Whether you are looking to explore a new city or shake up your usual
        night out, BYOA has something for you! You will go on a fun-filled text
        adventure that takes you out and about in your area, while making
        decisions to chart your own path along the way!
      </p>
      <input
        className="self-center my-6 p-3 flex-shrink-0 font-body rounded-lg text-2xl w-96 min-w-min"
        type="text"
        id="password"
        placeholder="zip code"
      />
      <button className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark">
        <Link to="/story">Start a new adventure!</Link>
      </button>
      <Outlet />
      <button
        className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={() => {}}
      >
        Resume Saved Adventure
      </button>
    </div>
  )
}

export default Homescreen
