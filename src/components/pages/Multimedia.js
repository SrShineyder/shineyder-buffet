import styles from './Multimedia.module.css'
import Album from '../multimedia/Album'

function Multimedia(){
    return(
        <section className={styles.multimedia_container}>
            <Album />
        </section>
    )
}
export default Multimedia