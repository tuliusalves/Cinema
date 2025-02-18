import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Pages
import LoginPagina from "pages/LoginPagina";
import CadastrarPagina from "pages/CadastrarPagina";
import Home from "pages/HomePage";
import Listafilmes from "pages/FilmesPagina/filmes";
import CinemasDisponiveis from "pages/CinemasDisponiveis";
import ListaCriticas from "pages/Criticas/criticasusuarios";

import Layout from "components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import App from 'App';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cadastro" element={<CadastrarPagina />} />
          <Route path="/login" element={<LoginPagina />} />
          <Route path="/filmes" element={<Listafilmes />} />
          <Route path="/filmes/cinemas" element={<CinemasDisponiveis />} />
          <Route path="/filmes/criticas" element={<ListaCriticas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
