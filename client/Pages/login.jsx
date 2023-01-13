import React, { useState, useEffect } from 'react'
import oauth from '../../server/oauth'

function Login() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="self-center p-2 py-12 font-display text-6xl flex-shrink-0">
        Booze Your Own Adventure!
      </h1>
      <input
        className="self-center p-2 flex-shrink-0"
        type="text"
        id="username"
        placeholder="username"
      />
      <input
        className="self-center p-2 flex-shrink-0"
        type="text"
        id="password"
        placeholder="password"
      />
      <button
        className="py-1 flex-shrink-0 self-center px-12 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type="submit"
        onClick={oauth}
      >
        Log In
      </button>
      <button
        className="py-1 flex-shrink-0 self-center px-4 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={() => {}}
      >
        Create Account
      </button>
      <button
        className="py-1 self-center px-12 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={() => {}}
      >
        OaUTH
      </button>
    </div>
  )
}

export default Login
