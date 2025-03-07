
import Header from 'components/Header';
//import './App.css';
import React from 'react';
import styled from 'styled-components';
//import MainDivLogin from 'components/MainDivLogin';
import MainDivCadastrar from 'components/MainDivCadastrar';

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
    margin-top:50px;
    width:90%;
`

function CadastrarPagina() {
  return (
    <div>
        <AppContainer>
            <Header/>
            <AppContainerMain>
              <MainDivCadastrar/>
            </AppContainerMain>
            
        </AppContainer>
    </div>
  );
}

export default CadastrarPagina;
