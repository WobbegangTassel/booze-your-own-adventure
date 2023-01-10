import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function TravelPlan(props) {
  return (
    <div>
      <p>A bit of story... Get ready to go!</p>
      <button>
        <Link to="/map">Let's go!</Link>
      </button>
      <Outlet />
    </div>
  )
}

export default TravelPlan
