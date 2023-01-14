import React, { useState, useEffect } from "react";

function Signup() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button

  return (
    <div>
      <input type="text" id="username" placeholder="username" />
      <input type="text" id="password" placeholder="password" />
      <button className="py-1 flex-shrink-0 self-center px-10 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark" onClick={() => {}}>Sign Up!</button>
    </div>
  );
}

export default Signup;
