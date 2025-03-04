import styled from "styled-components";

const Titulo = styled.h4`
    margin-bottom:-10px;
`

const FormularioLogin = styled.div`
    display: flex;
    flex-direction: column;
    item-align:center;
    width:500px;
    
    margin: 0 auto 30px auto;
    border-radius:25px;
`
const SobreVoce = styled.form`
    display: flex;
    flex-direction: column;
    width:380px;
    margin: 40px auto 0 auto;
    h4{
    margin:5px 0 0 0;
    }
`
const InputNome = styled.input`
    padding:2px;
    margin-top:15px;
    width:368px;
    height:25px;
    background-color: #1E1E1E;
    color:#ffff;
    text-align:left;
    border-radius:25px;
`

const Label = styled.label`
    margin-bottom: 10px;
    color:#ffff;
`

const Input = styled.input`
    padding:2px;
    margin:10px 0 10px 0;
    width:180px;
    height:25px;
    background-color: #1E1E1E;
    color:#ffff;
    text-align:left;
    border-radius:25px;
    
    
`
const InputCheckbox = styled.input`
    margin-top:5px;
    
`
const InputSpan = styled.span`
    font-size:13px;
`

const Button = styled.button`
    background-color: #1E1E1E;
    color:#ffff;
    width:8rem;
    padding:10px;
    margin:10px auto auto auto;
    border-radius:25px;
    border: 1px solid white;
    justify-content:center;

    &:hover{
    box-shadow: 0 8px 2px rgba(0,0,0,1);
    }
`
function DivFormCadastrar(){
    return(   
        <FormularioLogin>
        <SobreVoce>
            <Label>
            <Titulo> SOBRE VOCÊ</Titulo>
                <InputNome type="text" placeholder="Nome Completo"></InputNome>
                <Input type="text" placeholder="Gênero"></Input>
                <Input type="text" placeholder="Nome de preferência"></Input>
                <Input type="text" placeholder="CPF"></Input>
                <Input type="text" placeholder="Data de nascimento"></Input>
            </Label>
            <Label>
            <Titulo> CONTATOS</Titulo>
                <Input type="email" placeholder="E-mail"></Input>
                <Input type="number" placeholder="Telefone"></Input>
            </Label>
            <Label>
            <Titulo> SENHA</Titulo>
                <Input type="password" placeholder="E-mail"></Input>
                <Input type="password" placeholder="Confirme a sua senha"></Input>
                <br></br>
                <InputCheckbox type="checkbox"></InputCheckbox>
                <InputSpan>Li e aceito os termos de uso e política de privacidade.</InputSpan>
            </Label>
            <Button type="submit"><strong>Cadastrar</strong></Button>
            <Label>
                
            </Label>
        </SobreVoce>
        
           {/* <Label>
                <Input type="email" placeholder="Digite o seu e-mail"></Input>
                <Input type="password" placeholder="Digite a sua senha"></Input>
            </Label>
            <Button type="submit"><strong>Entrar</strong></Button> */}
        </FormularioLogin>
    )

} export default DivFormCadastrar;