import Cards from "components/Cards";
import Rodape from "components/Rodape";
import styled from "styled-components";


const MainContainer = styled.div`
  width: 1350px;
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
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;u
`;
const TituloPagina = styled.h2`
    margin:60px auto auto auto;
`

function MainFilmesAcervo() {
  return (
    <MainContainer>
      <TituloPagina>Filmes</TituloPagina>
      <MainContainerElements>
        <Cards/>
      </MainContainerElements>
      <Rodape />
    </MainContainer>
  );
}
export default MainFilmesAcervo;