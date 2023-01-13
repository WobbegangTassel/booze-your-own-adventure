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
    <div className="flex flex-col space-y-5">
      <input
        className="self-center p-2 m-5 flex-shrink-0"
        type="text"
        id="password"
        placeholder="zip code"
      />
      <button className="py-1 flex-shrink-0 self-center px-12 m-5 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark">
        <Link to="/story">Start a new adventure!</Link>
      </button>
      <Outlet />
      <button
        className="py-1 flex-shrink-0 self-center px-10 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={() => {}}
      >
        Resume Saved Adventure
      </button>
    </div>
  )
}

export default Homescreen
