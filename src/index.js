import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterComponent from './router.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);
