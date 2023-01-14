import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function AtTheBar() {
  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <iframe
        src="https://giphy.com/embed/3oKGz6J5SxUhyP2sms"
        width="480"
        height="320"
        className="self-center rounded-lg shadow-2xl max-w-xl mt-20 flex flex-col justify-center align-middle"
      ></iframe>
      <p className="self-center justify-center mt-12 p-2 flex-shrink-0 text-3xl font-display text-brown-dark">
        You are at the bar!
      </p>

      <button className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark">
        <Link to="/story">What happens next?</Link>
      </button>
      <Outlet />
    </div>
  )
}

export default AtTheBar
