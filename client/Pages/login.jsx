import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import oauth from '../../server/oauth'



function Login() {
  //username text field
  //password text field
  //login button
  //login with OAuth button
  //sign up button
  const [loginText, setLoginText] = useState({username: '', password: ''})
  let navigate = useNavigate();

  const handleLoginText = (evt) => {
    const fieldName = evt.target.id;
    const tempObj = structuredClone(loginText);
    tempObj[fieldName] = evt.target.value;

    setLoginText(tempObj);
  }

  const handleLoginClick = async (evt) => {
    await fetch(`/api/user/${loginText.username}/${loginText.password}`,  { method: 'GET'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoginText({username: '', password: ''});
        navigate('/home');
      })
      .catch((err) => console.log("User login fetch ERROR: ", err));
  };

  const handleCreateAccount = async (evt) => {
    await fetch(`/api/user/${loginText.username}/${loginText.password}`,  { method: 'POST'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoginText({username: '', password: ''});
        if(typeof data.id === 'number') {
          navigate('/home');
        } else navigate('/login');
      })
      .catch((err) => console.log("User login fetch ERROR: ", err));
  }

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
        onChange={handleLoginText}
      />
      <input
        className="self-center p-2 flex-shrink-0"
        type="text"
        id="password"
        placeholder="password"
        onChange={handleLoginText}
      />
      <button
        className="py-1 flex-shrink-0 self-center px-12 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type="submit"
        onClick={handleLoginClick}
      >
        Log In
      </button>
      <button
        className="py-1 flex-shrink-0 self-center px-4 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
      <button
        className="py-1 self-center px-12 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={oauth}
      >
        OaUTH
      </button>
    </div>
  )
}

export default Login
