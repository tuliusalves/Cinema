import ListaHeader from "components/ListaHeader";
import Logo from "components/Logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #1E1E1E;
    width:90%;
    padding:18px 0;
    border-radius:25px;
    margin:38px 0 0 0;
    box-shadow: 0 15px 4px rgba(0,0,0,0.2);

    display: flex;
    justify-content: center;
    align-items: center;
`
function Header(){
    return(
    <HeaderContainer>
        <Logo/>
        <ListaHeader/>
    </HeaderContainer>
    )
}
export default Header;