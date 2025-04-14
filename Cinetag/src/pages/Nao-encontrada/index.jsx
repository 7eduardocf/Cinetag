import styles from "./nao-encontrada.module.css"

function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteudo que voce procura não foi encontrado</p>
        </section>
    )
}

export default NaoEncontrada