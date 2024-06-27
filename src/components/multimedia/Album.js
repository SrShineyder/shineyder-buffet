import Adriano from './images/VeA01.jpg'
import Victoria from './images/VeA02.jpg'
import PaieFilho from './images/VeA03.jpg'
import Abraco from './images/VeA04.jpg'
import PaieFilha from './images/VeA05.jpg'
import Discurso from './images/VeA06.jpg'
/* import Olhar from './images/VeA07.jpg' */
import MVotos from './images/VeA08.jpg'
import EVotos from './images/VeA09.jpg'
import Alianca from './images/VeA10.jpg'
import Oracao from './images/VeA11.jpg'
/* import Beijo from './images/VeA12.jpg' */
import Saida from './images/VeA13.jpg'
import Madrinhas from './images/VeA14.jpg'
import Padrinhos from './images/VeA15.jpg'
import Familia from './images/VeA16.jpg'
import Noiva from './images/VeA17.jpg'

import styles from './Album.module.css'

const Album = () => {
    return(
        <div className={styles.album}>
            <h1><span>Shineyder Buffet</span></h1>
            <h3>Antigo <i>Nilson Buffet</i></h3>
            <div className={styles.four}>
                <img src={Adriano} className={styles.hei}/>
                <img src={Victoria} className={styles.hei}/>
                <img src={PaieFilho} className={styles.hei}/>
                <img src={Abraco} className={styles.hei}/>
            </div>
            <div className={styles.three}>
                <img src={PaieFilha} className={styles.wid}/>
                <img src={Discurso} className={styles.wid}/>
                {/* <img src={Olhar} className={styles.wid}/> */}
                <img src={EVotos} className={styles.wid}/>
            </div>
            <div className={styles.four}>
                <img src={MVotos} className={styles.hei}/>
                <img src={Alianca} className={styles.hei}/>
                <img src={Oracao} className={styles.hei}/>
                {/* <img src={Beijo} className={styles.hei}/> */}
                <img src={Saida} className={styles.hei}/>
            </div>
            <div className={styles.three}>
                <img src={Madrinhas} className={styles.wid}/>
                <img src={Padrinhos} className={styles.wid}/>
                <img src={Familia} className={styles.wid}/>
            </div>
            <img src={Noiva} className={styles.hei}/>
        </div>
    )
}

export default Album