import Header from "components/Header";
import React from "react";
import styled from "styled-components";
import MainDiv from "components/MainDiv";
import Rodape from "components/Rodape";
import MainImage from "components/MainImage";
import { Link } from "react-router-dom";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #313331;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffff;
`;
const AppContainerMain = styled.div`
  margin-top: 50px;
`;

function Listafilmes() {
  return (
    <div>
      <AppContainer>
        <Header />
        <AppContainerMain>
          {/*Inserir conteudo do pagina aqui*/}
          <Link to="/filmes/criticas">Críticas dos Usuários</Link>
          <Link to="/filmes/cinemas">Cinemas Disponíveis</Link>
        </AppContainerMain>
        <Rodape />
      </AppContainer>
    </div>
  );
}

export default Listafilmes;
