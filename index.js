import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './client/App';
const oauth = require('./oauth').default;
// import './client/global.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <button onClick = {oauth}>click me</button>
  </React.StrictMode>
);
