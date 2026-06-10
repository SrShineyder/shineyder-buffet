import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.facebook.com/alexsander.shineyder.5" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <FaFacebook/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/alexsander_shineyder/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/SrShineyder" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alexsander-shineyder/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Shineyder Buffet</span> &copy; <br/>2024</p>
        </footer>
    )
}
export default Footer