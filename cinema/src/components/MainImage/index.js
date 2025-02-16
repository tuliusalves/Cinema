import styled from "styled-components";
import cinemaImagem from '../../assets/Interno_SalaCinema-2-850x475.jpg';

const ImagemEsquerda = styled.div`
    width:45vw;
    height:350px;
    background-image: url(${cinemaImagem});
    background-size:cover;
    background-position:center;
    border-radius:25px;
    border: 1px solid white;

    margin: 0 5px 0 60px;
`


function MainImage(){
    return(
        <div>
        <ImagemEsquerda/>
        
        </div>
    )

}export default MainImage;