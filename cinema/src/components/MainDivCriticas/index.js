import MainDivComentarios from "components/MainDivComentarios";
import MainFilmeSinopse from "components/MainFilmeSinopse";
import Rodape from "components/Rodape";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 90%;
  background-color: #1e1e1e;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const MainContainerElements = styled.div`
  width: 100%;
  margin: 40px 120px 120px 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TituloPagina = styled.h2`
    margin:60px auto auto auto;
`
function MainDivCriticas() {
  return (
    <MainContainer>
      <TituloPagina>Críticas dos usuários</TituloPagina>
      <MainContainerElements>
        <MainFilmeSinopse />
        <MainDivComentarios />
      </MainContainerElements>
      <Rodape />
    </MainContainer>
  );
}
export default MainDivCriticas;
