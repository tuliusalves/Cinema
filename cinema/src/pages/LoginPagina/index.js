
import Header from 'components/Header';
//import './App.css';
import React from 'react';
import styled from 'styled-components';
import MainDivLogin from 'components/MainDivLogin';

const AppContainer = styled.div`
    width:100%;
    background-color: #313331;
    padding-bottom:10px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    color:#FFFF;
    

`
const AppContainerMain = styled.div`
    margin-top:50px;
    width:90%;
    margin:50px auto auto auto;
`

function LoginPagina() {
  return (
    <div>
        <AppContainer>
            <Header/>
            <AppContainerMain>
              <MainDivLogin/>
            </AppContainerMain>
        </AppContainer>
    </div>
  );
}

export default LoginPagina;
