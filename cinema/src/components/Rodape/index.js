import RodapeIcone from "components/RodapeIcone";
import styled from "styled-components";

const RodapeContainer = styled.div`
    width:100%;
    height:163px;
    background-color:rgba(49,51,51,0.55);
    border-top: 1px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
`

function Rodape(){
    return(
        <RodapeContainer>
            <RodapeIcone/>
        </RodapeContainer>
    )
} export default Rodape;