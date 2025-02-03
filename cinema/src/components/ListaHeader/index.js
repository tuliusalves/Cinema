import styled from "styled-components"

const Lista = styled.ul`
    display:flex;
    align-items:center;
    margin:0 14px;
`
const Elemento = styled.a`
    margin-right:70px;
    width:25px;
    font-size:24px;

    a{
        color:#FFFF;
        list-style:none;
        text-decoration:none;
    }
`

const palavras = ['Home', 'Filmes','Login','Cadastrar']

function ListaHeader(){
    return(
        <Lista>
            {palavras.map((palavra) => (
                <Elemento> <a href='./'>{palavra}</a></Elemento>
            ))}
        </Lista>
    )

}export default ListaHeader