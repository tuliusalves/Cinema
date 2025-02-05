
import DivForm from "components/DivForm";
import Rodape from "components/Rodape";
import styled from "styled-components";

const MainContainer = styled.div `
    width:90vw;
    height:85vh;
    background-color: #1E1E1E;
    border-radius:25px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
   
`
const MainContainerElements = styled.div`
    width:50vw;
    height:40vh;
    margin-top:120px;
    border-radius:25px;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:rgba(49,51,51,0.34);

`

function MainDivLogin(){
    return(
        <MainContainer>
            <MainContainerElements>
                <DivForm></DivForm>
            </MainContainerElements>
            <Rodape/>
        </MainContainer>
    )

}export default MainDivLogin;
