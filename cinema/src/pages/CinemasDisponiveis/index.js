import Titulo from 'components/Titulo';
import styles from './CinemasDisponiveis.module.css';
import Card from 'components/Card';
import Container from 'components/Container';

function CinemasDisponiveis(){
    return(
        <>
        <Container>
        <Titulo>
            <h1>Cinemas Disponíveis</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='1' titulo='Cine plaza' capa='https://www.ucicinemas.com.br/Content/PublicSite/images/cinemas/Slide/14/Slide_1.jpg'></Card>
            <Card id='2' titulo='Cine Recife' capa='https://www.ucicinemas.com.br/Content/PublicSite/images/cinemas/Slide/22/Slide_1.jpg'></Card>
        </section>
        </Container>
        </>
    )
}

export default CinemasDisponiveis;