import styled from "styled-components";
import cinemaImagem from '../../assets/Interno_SalaCinema-2-850x475.jpg';
import aindaEstouAqui from '../../assets/Ainda estou aqui.webp';

const SinopseEsquerda = styled.div`
    width:28rem;
    height:418px;
    background-size:cover;
    background-position:center;
    border-radius:25px;
    display:flex;
    flex-wrap:wrap;
    margin: 0 15px 0 83px;
    background-color:rgba(49,51,51,0.34);
`
const Capa = styled.img`
    width:10rem;
    height:273px;
    border-radius: 25px;
    margin: 25px 5px 0px 25px;
`
const SinopseContainer= styled.div`
    width:15rem;
    height:273px;
    display:flex;
    margin:25px 5px; 0 25px;
    flex-direction:column;
`
const Sinopse= styled.h3`
    width:5rem;
    font-size:19px; 
`
const Descricao= styled.p`
    font-size:18px;
`
const LinkDescricao= styled.a`
    text-align:right;
    font-weight:bold;
    color:white;
    text-decoration:none;

    :hover{
    text-decoration:underline;
    }
`
const LinksLista=styled.ul`
    font-weight:bold;
    margin:-40px 0 0 0;

    li{
    margin:8px 0 0 0;
    }
    a{
    color:white;
    text-decoration:none;
    }
    a:hover{
    text-decoration:underline;
    }
`


function MainFilmeSinopse(){
    return(
        <div>
        <SinopseEsquerda>
            <Capa src={aindaEstouAqui} alta="capa ainda estou aqui">
            </Capa>
            <SinopseContainer>
            <Sinopse> Sinopse:</Sinopse>
            <Descricao>Rio de Janeiro, início dos anos 1970.
             O país enfrenta o endurecimento da ditadura militar.</Descricao>
             <LinkDescricao href="/filmes/criticas">mais...</LinkDescricao>
            </SinopseContainer>
            <br></br>
            <LinksLista>
                <li><a href="/filmes/cinemas">Cinemas disponíveis</a></li>
                <li><a href="">Críticas dos usuários</a></li>
            </LinksLista>
        </SinopseEsquerda>
        </div>
    )

}export default MainFilmeSinopse;