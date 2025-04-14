import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "pages/Player"
import NaoEncontrada from "pages/Nao-encontrada"
import PaginaBase from "pages/Pagina-base"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="Favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes