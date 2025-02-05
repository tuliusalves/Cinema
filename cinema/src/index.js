import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from 'pages/LoginPage';
//import App from 'App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*  <App> </App> */}
   <LoginPage/>
  </React.StrictMode>
);
