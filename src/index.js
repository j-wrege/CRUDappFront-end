import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import axios from 'axios';

axios.defaults.baseURL = "https://crudappsf.onrender.com";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
