import styled from "styled-components";

const Descricao = styled.div`
    width:40vw;
    height:273px;
    border-radius:25px;
    background-color:rgba(49,51,51,0.34);
    margin: 0 0 0 20px;
    display:flex;
    justify-content:center;
    
   
`
const TextoDescricao = styled.div`
    width:35vw;
    height:100px;
    margin-top:20px;
    text-align:center;
    justify-content:center;
    align-items:center;
`


function DescricaoDireita(){
    return(
        <Descricao>
            <TextoDescricao>
            <h2>Bem vindo</h2>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros.
            achaça, agora eu só uso canudis! Mauris nec dolor in eros commodo tempor. Aenean aliq
            achaça, agora eu só uso canudis! Mauris nec dolor in eros commodo tempor. Aenean aliq
            achaça, agora eu só uso canudis! Mauris nec dolor in eros commodo tempor. Aenean aliq
            </p>
            </TextoDescricao>
        </Descricao>    
    )

}export default DescricaoDireita;