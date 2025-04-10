import Banner from "components/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import Card from "components/Card"
import { useFavoritoContext } from "../../contextos/favoritos"

function Favoritos(){
    const {favorito} = useFavoritoContext()
    return(
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((filme) =>{
                    return <Card {...filme} key={filme.id}/>
                })}
            </section>
        </>
    )
}
export default Favoritos