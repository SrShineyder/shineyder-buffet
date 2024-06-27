import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaGithub/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className={styles.copy_right}><span>Shineyder Buffet</span> &copy; <br/>2024</p>
        </footer>
    )
}
export default Footer