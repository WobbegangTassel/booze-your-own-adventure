import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function TravelPlan({ choice }) {
  console.log(choice)

  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <div className="shadow-2xl rounded-xl text-6xl bg-brown-light text-brown-dark font-display self-center border-double max-w-3xl mb-12 border-4 border-light-blue-500 p-10 mt-20">
        <p className="self-center justify-center p-2 m-5 flex-shrink-0 text-4xl font-body text-brown-dark">
          You chose {choice}. That mean's we're headed to a new location!
        </p>
      </div>

      <button className="p-3 flex-shrink-0 my-6 self-center font-button text-blue-light w-96 min-w-min text-2xl rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark">
        <Link to="/map">Let's go!</Link>
      </button>
      <Outlet />
    </div>
  )
}

export default TravelPlan
