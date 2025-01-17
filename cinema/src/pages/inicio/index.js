import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import pictures from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner />
            <Titulo>
                <h1>Filmes em cartaz!</h1>
            </Titulo>
            <section className={styles.container}>
                {pictures.map((picture) =>{
                    return <Card {...picture} key={picture.id} />
                })}
            </section>
            <Rodape />
        </>
    )
}

export default Inicio;