
import Header from 'components/Header';
import './App.css';
import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    width:100vw;
    height:100vh;
    background-color: #313331;

    display: flex;
    justify-content: center;
    color:#FFFF;

`

function App() {
  return (
    
        <AppContainer>
            <Header/>
        </AppContainer>
    
  );
}

export default App;
