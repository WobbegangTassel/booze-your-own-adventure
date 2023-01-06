import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';


export default function App() {
  
  useEffect( ()=> {
    const showSomething = async () => {
     await fetch("/test") //ask server to serve up all tamas from db
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }

    showSomething();

  }, [])

  return(
    <div>
      <p>This is a paragraph!</p>
    </div>
  )
}
