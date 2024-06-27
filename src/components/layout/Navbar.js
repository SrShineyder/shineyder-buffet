import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import Container from "./Container"
import Logo from "../multimedia/images/Logo.png"

function Navbar(){
    return(
    <nav className={styles.navbar}>
        <Container customClass="min-height">
        <img src={Logo} className={styles.logo}/>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/multimedia">Multimídia</Link></li>
                <li className={styles.item}><Link to="/contact">Contato</Link></li>
            </ul>
        </Container>
    </nav>
    )
}
export default Navbar