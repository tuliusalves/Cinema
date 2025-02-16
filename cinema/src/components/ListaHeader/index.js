import styled from "styled-components"

const Lista = styled.ul`
    display:flex;
    width:40%;
    align-items:center;
    margin:0 14px;
`
const Elemento = styled.a`
    margin-right:72px;
    width:25px;
    font-size:24px;

    a{
        color:#FFFF;
        list-style:none;
        text-decoration:none;
    }

    a:hover{
        text-decoration:underline;
    }
`

const palavras = ['Home', 'Filmes','Login','Cadastrar']

function ListaHeader(){
    return(
        <Lista>
            {palavras.map((palavra) => (
                <Elemento><strong> <a href='./'>{palavra}</a></strong></Elemento>
            ))}
        </Lista>
    )

}export default ListaHeader