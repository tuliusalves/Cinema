import Header from "components/Header";
import React from "react";
import styled from "styled-components";
import MainDiv from "components/MainDiv";
import Rodape from "components/Rodape";
import MainDivCriticas from "components/MainDivCriticas";
//import MainImage from "components/MainImage";

const AppContainer = styled.div`
  width: 100vw;
  background-color: #313331;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffff;
`;
const AppContainerMain = styled.div`
  margin-top: 50px;
`;

function ListaCriticas() {
  return (
    <div>
     <AppContainer>
        <Header />
        <AppContainerMain>
          <MainDivCriticas />
        </AppContainerMain>
      </AppContainer>
    </div>
  );
}

export default ListaCriticas;
