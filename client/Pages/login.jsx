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
  const handleDeleteAccount = async (evt) => {
    await fetch(`/api/user/${loginText.username}/${loginText.password}`,  { method: 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoginText({username: '', password: ''});
        // if(typeof data.id === 'number') {
        //   navigate('/home');
        // } else navigate('/login');
      })
      .catch((err) => console.log("User login fetch ERROR: ", err));
  }

  return (
    <div className="flex flex-col space-10 rounded-lg h-full w-full border-double border-4 border-brown-dark">
      <h1 className="self-center p-3 py-12 mt-12 font-display text-brown-dark text-6xl flex-shrink-0">
        Booze-Your-Own Adventure!
      </h1>
      <input
        className="self-center my-6 p-3 flex-none font-body rounded-lg w-96 text-2xl min-w-min"
        type="text"
        id="username"
        placeholder="username"
        onChange={handleLoginText}
      />
      <input
        className="self-center my-6 p-3 flex-shrink-0 font-body rounded-lg text-2xl w-96 min-w-min"
        type="text"
        id="password"
        placeholder="password"
        onChange={handleLoginText}
      />
      <button
        className="p-3 flex-shrink-0 my-6 self-center font-button text-blue-light w-96 min-w-min text-2xl rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type="submit"
        onClick={handleLoginClick}
      >
        LOG IN
      </button>
      <button
        className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={handleCreateAccount}
      >
        CREATE ACCOUNT
      </button>
      <button
        className="p-3 self-center w-96 min-w-min my-6 mb-12 text-2xl font-button flex-shrink-0 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={oauth}
      >
        LOG IN WITH GOOGLE
      </button>
      <button
        className="p-3 self-center w-96 min-w-min my-6 mb-12 text-2xl font-button flex-shrink-0 text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={handleDeleteAccount}
      >
        DELETE ACCOUNT
      </button>
    </div>
  )
}

export default Login
