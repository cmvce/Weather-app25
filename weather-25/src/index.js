import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';
import bootstrap from 'bootstrap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='text-center mt-3'>Hi</h1>

    <Weather />
  </React.StrictMode>
);



