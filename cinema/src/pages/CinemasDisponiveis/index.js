import styled from "styled-components";
import Header from "components/Header";
import React from "react";
import Recife from "../../assets/Shopping Recife.jpg";
import Tacaruna from "../../assets/Shopping Tacaruna.jpg";
import Plaza from "../../assets/Shopping plaza.jpg";
import Rodape from "components/Rodape";

const AppContainer = styled.div`
    width:100%;
    background-color: #313331;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    color:#FFFF;
  
`
const AppContainerMain = styled.div`
     width: 100%;
     margin-top: 65px;
     display: flex;
     flex-direction: row;
     align-items: center;
`
const MainContainer = styled.div`
     width: 90%;
     background-color: #1e1e1e;
     border-radius: 25px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     margin: auto;
`
const TituloPagina= styled.h3`
     font-size:26px;
     margin-top:68px;
`
const ShoppingContainer = styled.div`
    width:90%;
    background-size:cover;
    border-radius:25px;
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 50px auto 90px auto;
`
//Colocar alinhados em linha
const ShoppingCard = styled.div`
    width:271px;
    height:230px;
    background-size:cover;
    align-items:center;
    border-radius:25px;
    border: 1px solid white;
    margin: 30px auto 30px auto;
    display:flex;
    flex-direction:column;
`
const ShoppingImg = styled.img`
    width:90%;
    background-size:cover;
    background-position:center;
    margin: 20px auto auto auto;    
`
const ShoppingTitulo= styled.h3`
    font-size:16px;
    margin-top:28px;
`

function CinemasDisponiveis() {
  return (
    <AppContainer>
        <Header />
        <AppContainerMain>
          
        </AppContainerMain>
      </AppContainer>
  );
}

export default CinemasDisponiveis;
