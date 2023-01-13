import React, { useState, useEffect } from "react";
import oauth from "../../server/oauth";

function Login() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button

  return (
    <div>
      <input type="text" id="username" placeholder="username" />
      <input type="text" id="password" placeholder="password" />
      <button type="submit" onClick={oauth}>
        Log In
      </button>
      <button type="" onClick={() => {}}>
        Create Account
      </button>
      <button type="" onClick={() => {}}>
        OaUTH
      </button>
    </div>
  );
}

export default Login;
