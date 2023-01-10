/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homescreen from './Pages/homescreen';
import StoryPage from './Pages/storypage';
import AtTheBar from './Pages/atthebar';
import BarMap from './Pages/map';

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
      {/* <Switch> */}
      <Route path="/" exact component={Homescreen} />
      <Route path="/atthebar" exact component={AtTheBar} />
      <Route path="/barmap" exact component={BarMap} />
      <Route path="/storypage" exact component={StoryPage} />
      {/* </Switch> */}
    </div>
  );
}
