import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPagina from 'pages/LoginPagina';
//import CadastrarPagina from 'pages/CadastrarPagina';
//import App from 'App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*<App> </App> */}
   <LoginPagina/> 
   {/*<CadastrarPagina/> */}
  </React.StrictMode>
);
