import DescricaoDireita from "components/DescricaoDireita";
import MainImage from "components/MainImage";
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
    width:90vw;
    height:90vh;
    display:flex;
    flex-direction:row;
    align-items:center;
`

function MainDiv(){
    return(
        <MainContainer>
            <MainContainerElements>
            <MainImage/>
            <DescricaoDireita/>
            </MainContainerElements>
            <Rodape/>
        </MainContainer>
    )

}export default MainDiv;
