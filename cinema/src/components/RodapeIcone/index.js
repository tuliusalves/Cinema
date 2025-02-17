import instagramIcone from '../../assets/instagram.png';
import xIcone from '../../assets/twitter.png';
import styled from 'styled-components';


const ListaIcones= styled.ul`
    display:flex;
    width:100%;
    margin:15px 10px;

`
const IconesMidia = styled.a`
    

    img{
    height:50px;
    margin-left:80px;
    }
`
const icones = [ instagramIcone, xIcone]

function RodapeIcone(){
    return(
        <div>
        <ListaIcones>
            {icones.map((icone) =>(
                <IconesMidia>
                    <IconesMidia><img src={icone} alt="Logo mídia "/> </IconesMidia>
                </IconesMidia>
            ))}
        </ListaIcones>
        <p>© Copyright 2023-2025 | Túlius Alves | Victor Roma.</p>
        </div>
    )

}export default RodapeIcone;