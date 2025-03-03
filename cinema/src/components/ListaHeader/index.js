import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Lista = styled.ul`
  display: flex;
  width: 41%;
  align-items: center;
  margin: 0 14px;
`;
const Elemento = styled.a`
  margin-right: 72px;
  width: 25px;
  font-size: 24px;

  a {
    color: #ffff;
    list-style: none;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const palavras = ["Home", "Filmes", "Login", "Cadastrar"];

function ListaHeader() {
  return (
    <Lista>
      {palavras.map((palavra, index) => {
        let linkPersonalizado;

        switch (palavra) {
          case "Home":
            linkPersonalizado = "/";
            break;
          case "Filmes":
            linkPersonalizado = "/filmes";
            break;
          case "Login":
            linkPersonalizado = "/login";
            break;
          case "Cadastrar":
            linkPersonalizado = "/cadastro";
            break;

          default:
            linkPersonalizado = "/";
        }

        return (
          <Elemento key={index}>
            <Link to={linkPersonalizado}>{palavra}</Link>
          </Elemento>
        );
      })}
    </Lista>
  );
}

export default ListaHeader;
