import { useCallback, useState } from "react"
import { MainContainer,PasswordDiv, Form, Logo, TeamNatalText, WrapperImgs, AppTextField, ButtonStyled} from "./styled"
import  Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import logo from '../../assets/logo.png'
import teamnatal from '../../assets/teamnatal.png'



const LoginPage = () => {
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <MainContainer className="container">
            <WrapperImgs>
            <TeamNatalText src={teamnatal} alt="logo" />
            <Logo src={logo} alt="logo" />
            </WrapperImgs>
            <Form>
                <AppTextField 
                placeholder="E-mail address"
                label="E-mail"
                id="outlined-basic"
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required

                />
                <PasswordDiv>
                <AppTextField 
                placeholder="Digite sua senha" 
                label='Senha'
                id="outlined-basic"
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                />          
                    </PasswordDiv>
            
            <p>Não tem conta? <a href="https://www.google.com.br">Cadastrar</a></p>
            <ButtonStyled variant="contained">Login</ButtonStyled>
            </Form>
        </MainContainer>
    )
}
export default LoginPage