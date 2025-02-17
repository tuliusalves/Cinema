import styled from "styled-components";

const FormularioLogin = styled.form`
    display: flex;
    flex-direction: column;
    width:50%;
    margin: 20px auto auto auto;
    border-radius:25px;
`

const Label = styled.label`
    margin-bottom: 10px;
    color:#ffff;
`

const Input = styled.input`
    padding:10px;
    margin-top:30px;
    width:90%;
    background-color: #1E1E1E;
    color:#ffff;
    text-align:center;
    border-radius:25px;
    
`

const Button = styled.button`
    background-color: #1E1E1E;
    color:#ffff;
    width:40%;
    height:45px;
    margin:10px auto 35px auto;
    border-radius:25px;
    border: 1px solid white;
    justify-content:center;
`
function DivForm(){
    return(
        <FormularioLogin>
            <Label>
                <Input type="email" placeholder="Digite o seu e-mail"></Input>
                <Input type="password" placeholder="Digite a sua senha"></Input>
            </Label>
            <Button type="submit"><strong>Entrar</strong></Button>
        </FormularioLogin>
    )

} export default DivForm;