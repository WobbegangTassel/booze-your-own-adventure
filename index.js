import React from "react";
import { createRoot } from "react-dom/client";
import App from "./client/App";
import { BrowserRouter } from "react-router-dom";
// import './client/global.css'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//do we need strict mode? <React.StrictMode></React.StrictMode>
