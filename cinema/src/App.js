
import Header from 'components/Header';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import MainDiv from 'components/MainDiv';

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
`

function App() {
  return (
    <div>
        <AppContainer>
            <Header/>
            <AppContainerMain>
              <MainDiv/>
            </AppContainerMain>
            
        </AppContainer>
    </div>
  );
}

export default App;
