import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/globals.css'
import './assets/css/animation.css'
import './assets/css/style.css'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

