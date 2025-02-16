
import DivFormCadastrar from "components/DivFormCadastrar";
import Rodape from "components/Rodape";
import styled from "styled-components";

const MainContainer = styled.div `
    width:100%;
    background-color: #1E1E1E;
    border-radius:25px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    
`
const MainContainerElements = styled.div`
    width:70%;
    margin:70px 0 70px 0;
    border-radius:25px;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:rgba(49,51,51,0.34);

`

function MainDivCadastrar(){
    return(
        <MainContainer>
            <MainContainerElements>
                <DivFormCadastrar/>
            </MainContainerElements>
            <Rodape/>
        </MainContainer>
    )

}export default MainDivCadastrar;
