import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner />
            <Titulo>
                <h1>Filmes em cartaz!</h1>
            </Titulo>
            <Card id='1' titulo='Ainda estou aqui' capa='https://br.web.img3.acsta.net/r_1920_1080/img/b1/35/b1351babe7a777b7a97eded3db356990.jpg'/>
            <Rodape />
        </>
    )
}

export default Inicio;