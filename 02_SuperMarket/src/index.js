import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"; 
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

