import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import CinemasDisponiveis from "pages/CinemasDisponiveis";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
                <Container>
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path="/CinemasDisponiveis" element={<CinemasDisponiveis />}></Route>
                </Routes>
                </Container>
            <Rodape />
        </BrowserRouter>
    )
} export default AppRoutes;