import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import Container from "./Container"
import Logo from "../multimedia/images/Logo.png"

function Navbar(){
    return(
    <nav className={styles.navbar}>
        <Container customClass="min-height">
            <div className={styles.brand}>
                <img src={Logo} className={styles.logo} alt="Buffet logo" />
                <div className={styles.brandText}>
                    <span className={styles.brandSub}>Com mais de 30 anos no mercado</span>
                </div>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/multimedia">Multimídia</Link></li>
                <li className={styles.item}><Link to="/orcamento">Orçamento</Link></li>
            </ul>
        </Container>
    </nav>
    )
}
export default Navbar