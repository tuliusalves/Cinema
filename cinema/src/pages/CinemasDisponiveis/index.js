import styled from "styled-components";
import Card from "components/Cards/Card";
import Header from "components/Header";
import Rodape from "components/Rodape";
import MainDiv from "components/MainDiv";
import React from "react";


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

function CinemasDisponiveis() {
  return (
    <AppContainer>
        <Header />
        <AppContainerMain>
          <button onClick={() => window.open("https://www.shoppingrecife.com.br/cinema", "_blank", "noopener noreferrer")}> Shopping Recife </button>
          <button onClick={() => window.open("https://www.shoppingtacaruna.com.br/cinema")}> Shopping Tacaruna</button>
          <button onClick={() => window.open("https://www.plazacasaforte.com.br/cinema/caindo-na-real", "_blank", "noopener noreferrer")}> Shopping Plaza </button>
        </AppContainerMain>
      </AppContainer>
  );
}

export default CinemasDisponiveis;
