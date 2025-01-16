import { Link } from "react-router-dom";
import logo from 'assets/icons8-rolo-de-filme-80.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinema"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./login">Login</CabecalhoLink>
                <CabecalhoLink url="./cadastrar">Cadastra-se</CabecalhoLink>
            </nav>
        </header>
    )
}
export default Cabecalho;