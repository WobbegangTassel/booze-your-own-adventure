/* eslint-disable no-unused-vars */
// login or signup
// OAuth

import React, { useState, useEffect } from 'react';

function Homescreen() {
  // username text field
  // password text field
  // login button
  // login with OAuth button
  // sign up button

  return (
    <div>
      <input type="text" id="username" placeholder="username" />
      <input type="text" id="password" placeholder="password" />
      <button type="submit" onClick={() => {}}>
        Log In
      </button>
      <button type="submit" onClick={() => {}}>
        Create Account
      </button>
      <button type="submit" onClick={() => {}}>
        OaUTH
      </button>
      <p className="text-blue-600">If this text is blue the Tailwind CSS is working</p>
    </div>
  );
}

export default Homescreen;
