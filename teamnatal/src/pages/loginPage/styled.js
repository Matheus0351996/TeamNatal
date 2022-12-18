import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #34344E;
`

export const PasswordDiv = styled.div`
    display: flex;
`
export const Form = styled.form`
    width: 80%;
    height:30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
export const Logo = styled.img`
    width: 157px;
    height: 133px;
    margin-bottom: 2rem;
`
export const TeamNatalText = styled.img`
    width: 200px;
    height: 200px;
`
export const WrapperImgs = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const AppTextField = styled(TextField)({
    backgroundColor: 'white',
    
    
})

export const ButtonStyled = styled(Button) ({
    backgroundColor: 'red',
    
})