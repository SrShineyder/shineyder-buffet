import styles from './Home.module.css'
import QuemSomos from "./QuemSomos"

function Home(){
    return(
        <section className={styles.home_container}>
            <div className={styles.hero}>
                <h1>Nilson Buffet</h1>
                <p>Serviços de Buffet, intimista para casamentos, aniversários e eventos especiais na Grande Vitória.</p>
            </div>
            <section className={styles.about}>
                <h2>Quem Somos</h2>
                <QuemSomos />
            </section>
        </section>
    )
}
export default Home