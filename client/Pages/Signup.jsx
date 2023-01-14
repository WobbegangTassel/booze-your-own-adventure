import React, { useState, useEffect } from 'react'

function Signup() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button

  return (
    <div className="flex flex-col space-10 rounded-lg h-full w-full border-double border-4 border-brown-dark">
      <h1 className="self-center p-3 py-12 mt-12 font-display text-brown-dark text-6xl flex-shrink-0">
        Booze-Your-Own Adventure!
      </h1>
      <input
        className="self-center my-6 p-3 flex-shrink-0 font-body rounded-lg text-2xl w-96 min-w-min"
        type="text"
        id="username"
        placeholder="username"
      />
      <input
        className="self-center my-6 p-3 flex-shrink-0 font-body rounded-lg text-2xl w-96 min-w-min"
        type="text"
        id="password"
        placeholder="password"
      />
      <button
        className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        onClick={() => {}}
      >
        Sign Up!
      </button>
    </div>
  )
}

export default Signup
