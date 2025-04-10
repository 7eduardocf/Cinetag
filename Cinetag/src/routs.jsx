import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import Rodape from "components/Rodape"
import Cabecalho from "components/Cabecalho"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "components/Container"
import FavoritosProvider from "./contextos/favoritos"
import Player from "pages/Player"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/Favoritos" element={<Favoritos/>}></Route>
                        <Route path="/:id" element={<Player/>}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes