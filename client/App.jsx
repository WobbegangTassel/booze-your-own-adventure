import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homescreen from "./Pages/homescreen";
import StoryPage from "./Pages/storypage";
import AtTheBar from "./Pages/atthebar";
import BarMap from "./Pages/map";
import TravelPlan from "./Pages/travelPlan";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";

export default function App() {
  // useEffect( ()=> {
  //   const showSomething = async () => {
  //    await fetch("/test") //ask server to serve up all tamas from db
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  //   }

  //   showSomething();

  // }, [])

  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/home" exact element={<Homescreen />} />
        <Route path="/story" exact element={<StoryPage />} />
        <Route path="/go/:placeid" exact element={<TravelPlan />} />
        <Route path="/map" exact element={<BarMap />} />
        <Route path="/drink" exact element={<AtTheBar />} />
      </Routes>
    </div>
  );
}
