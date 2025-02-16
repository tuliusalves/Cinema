import styled from "styled-components";
import logo from '../../assets/film.png';

const LogoContainer = styled.div`
    display:flex;
    font-size:30px;
    width:45%;
`
const LogoImage = styled.img`
    
    margin:5px 10px; 0 0;
    width:72px;
    height:72px;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>
            <p><strong>CinePlay</strong></p> 
        </LogoContainer>
    )
}
export default Logo;