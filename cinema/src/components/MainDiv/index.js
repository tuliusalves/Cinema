import DescricaoDireita from "components/DescricaoDireita";
import MainImage from "components/MainImage";
import Rodape from "components/Rodape";
import styled from "styled-components";

const MainContainer = styled.div `
    width:90%;
    background-color: #1E1E1E;
    border-radius:25px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin:auto;
`
const MainContainerElements = styled.div`
    width:100%;
    margin:120px;
    display:flex;
    flex-direction:row;
    align-items:center;
    border:1px solid #ffff;
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
