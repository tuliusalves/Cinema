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
  margin: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function MainDivCriticas() {
  return (
    <MainContainer>
      <MainContainerElements>
        <MainFilmeSinopse />
        <MainDivComentarios />
      </MainContainerElements>
      <Rodape />
    </MainContainer>
  );
}
export default MainDivCriticas;
