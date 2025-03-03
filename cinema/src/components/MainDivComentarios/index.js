import styled from "styled-components";

const Descricao = styled.div`
    width:38%;
    height:418px;
    border-radius:25px;
    background-color:rgba(49,51,51,0.34);
    margin: 0 0 0 20px;
    display:flex;
    justify-content:center;
    overflow-y:auto;
    overflow-x:hidden;
   
    &::-webkit-scrollbar{
    width:10px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 4px; 
    }

    &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
    }
`
const TextoDescricao = styled.div`
    width:100%;
    height:auto;
    margin:30px 15px 0 20px;
    text-align:center;
    justify-content:center;
    align-items:center;
    text-align:left;

`
const NomeUsuario = styled.div`
    text-align:left;
    font-weight:bold;
`

function MainDivComentarios(){
    return(
        <Descricao>
            <TextoDescricao>
            <NomeUsuario>@Usuario1</NomeUsuario>
            <p>Rio de Janeiro, início dos anos 1970. O país enfrenta o endurecimento da ditadura militar.</p>
            
            <NomeUsuario>@Usuario2</NomeUsuario>
            <p>Rio de Janeiro, início dos anos 1970. O país enfrenta o endurecimento da ditadura militar.</p>
            
            <NomeUsuario>@Usuario3</NomeUsuario>
            <p>Rio de Janeiro, início dos anos 1970. O país enfrenta o endurecimento da ditadura militar.</p>
            
            <NomeUsuario>@Usuario4</NomeUsuario>
            <p>Rio de Janeiro, início dos anos 1970. O país enfrenta o endurecimento da ditadura militar.</p>
            
            </TextoDescricao>
        </Descricao>    
    )

}export default MainDivComentarios;