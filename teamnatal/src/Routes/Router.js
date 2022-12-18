import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/loginPage/loginPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router