import Banner from "components/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import Card from "components/Card"
import videos from "json/db.json"

function Favoritos(){
    return(
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) =>{
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
    )
}
export default Favoritos