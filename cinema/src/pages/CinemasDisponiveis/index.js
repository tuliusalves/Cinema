import styled from "styled-components";
import Card from "components/Cards/Card";
import Header from "components/Header";
import Rodape from "components/Rodape";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #313331;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffff;
`;
const AppContainerMain = styled.div`
  margin-top: 50px;
`;

function CinemasDisponiveis() {
  return (
    <div>
      <AppContainer>
        <Header />
        <h1>Cinemas Disponíveis</h1>

        <AppContainerMain>
          <section className={styled.container}>
            <Card
              id="1"
              titulo="Cine plaza"
              capa="https://www.ucicinemas.com.br/Content/PublicSite/images/cinemas/Slide/14/Slide_1.jpg"
            ></Card>
            <Card
              id="2"
              titulo="Cine Recife"
              capa="https://www.ucicinemas.com.br/Content/PublicSite/images/cinemas/Slide/22/Slide_1.jpg"
            ></Card>
          </section>
          <Rodape />
        </AppContainerMain>
      </AppContainer>
    </div>
  );
}

export default CinemasDisponiveis;
