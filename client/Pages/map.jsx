import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function BarMap() {
  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <p className="self-center justify-center p-2 m-5 flex-shrink-0 text-4xl font-body text-brown-dark">
        You are looking at a map!
      </p>
      <button className="p-3 flex-shrink-0 my-6 self-center font-button text-blue-light w-96 min-w-min text-2xl rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark">
        <Link to="/drink">I'm here!</Link>
      </button>
      <Outlet />
    </div>
  )
}

export default BarMap
