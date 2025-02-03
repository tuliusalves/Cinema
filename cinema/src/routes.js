
import Header from "components/Logo";
import styled from "styled-components";

const AppContainer = styled.div`
    width:100vw;
    height:100vh;
    background-color: #313331
`

function AppRoutes() {
    return (
        <AppContainer>
            <Header/>
        </AppContainer>
    )
} export default AppRoutes;