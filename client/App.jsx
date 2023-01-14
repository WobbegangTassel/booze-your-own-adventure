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
  const [storyData, setStoryData] = useState({
    id: 1,
    prompt: null,
    choice_a: null,
    choice_b: null,
    choice_a_id: null,
    choice_b_id: null,
  });

  const [location, setLocation] = useState('92 Hampshire St, Cambridge, MA 02139');
  const [choice, setChoice] = useState(null);

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-blue-dark via-blue to-blue-light p-12">
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route
          path="/home"
          exact
          element={<Homescreen location={location} setLocation={setLocation} />}
        />
        <Route
          path="/story"
          exact
          element={
            <StoryPage
              storyData={storyData}
              setStoryData={setStoryData}
              setChoice={setChoice}
            />
          }
        />
        <Route path="/go" exact element={<TravelPlan choice={choice} />} />
        <Route
          path="/map"
          exact
          element={
            <BarMap
              storyData={storyData}
              location={location}
              setLocation={setLocation}
            />
          }
        />
        <Route path="/drink" exact element={<AtTheBar />} />
      </Routes>
    </div>
  );
}
