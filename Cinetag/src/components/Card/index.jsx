import styles from "./Card.module.css"
import iconeFavoritar from "./favoritar.png"
import { useFavoritoContext } from "../../contextos/favoritos"
import iconeDesfavoritar from "./desfavoritar.png"
import { Link } from "react-router-dom"

function Card({id,titulo,capa}){
    const {favorito, adicionarFavorito} = useFavoritoContext()
    const ehFavorito = favorito.some( (fav)=> fav.id === id )
    const icone = !ehFavorito ? iconeFavoritar: iconeDesfavoritar

    return(
        <div className={styles.container}>
            <Link to={`/${id}`} className={styles.link}>            
                <img src={capa} alt={titulo} className={styles.capa}></img>
                <h2>{titulo}</h2>   
            </Link>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() =>{
                adicionarFavorito({id,titulo,capa})
            }}></img>
        </div>
    )
}

export default Card