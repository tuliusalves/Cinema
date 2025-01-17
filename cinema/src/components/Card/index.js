import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({id,titulo,capa}){
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}></img>
            <h2>{titulo}</h2>
            <Link to="/CinemasDisponiveis">Cinemas disponiveis</Link>
        </div>
    )
} export default Card;