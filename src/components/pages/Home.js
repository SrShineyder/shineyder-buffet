import styles from './Home.module.css'
import Familia from '../multimedia/images/Familia.jpg'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1><span>Shineyder Buffet</span></h1>
            <h3>Antigo <span><i>Nilson Buffet</i></span></h3>
            <section className={styles.corpo}>
                <section className={styles.conteudo}>
                <p>Após alguns anos servindo mesas <a className='nilson'><strong>Nilson Antônio Ramos</strong></a> viu a oportunidade de gerir seu próprio negócio, ficando conhecido como Nilson Buffet. Hoje com mais de Trinta e cinco anos no mercado, atuando principalmente na Grande Vitória e região, <a className='buffet'><strong>Nilson Buffet</strong></a> trabalha para trazer a melhor experiência, levando alegria  e satisfação à você.<br/>
                Em busca de trazer maior profissionalização e desempenho, seu filho <a className='alex'><strong>Alexsander Shineyder</strong></a> mantém seu legado expandindo sua equipe e área de atuação.</p>
                </section>
                <section className={styles.descricao}>
                    <img src={Familia} alt=''/>
                </section>
            </section>
            <section className={styles.eventos}>
                <section className={styles.group_events}>
                    <fieldset id="evento"><legend>Cardápio</legend>
                    <p><label for="cEven">Evento  </label>
                        <select name="tEven" id="cEven">
                            <option value="Al">Almoço</option>
                            <option value="ACa">Almoço de Casamento</option>
                            <option value="ACh">Almoço de Churrasco</option>
                            <option value="An">Aniversário</option>
                            <option value="AC">Aniversário de Casamento</option>
                            <option value="Ca" Selected>Casamento</option>
                            <option value="Co">Confraternização</option>
                            <option value="CC">Coquetel de Casamento</option>
                            <option value="Ch">Churrasco</option>
                            <option value="Fo">Formatura</option>
                            <option value="Ja">Janta</option>
                        </select></p>
                    </fieldset>
                </section>
                <section className={styles.caracteristica_evento}>
                    <ul>
                        <li><u>Entradas</u> Coxinha (Frango, Queijo e Camarão), Molho Branco, Quibes, Croquetes (Milho c/ Queijo, Camarão e Frango c/ Queijo), Bolinhos (Queijo, Presunto e Bacalhau), Empadas, Pastéis, Goiabinha de Queijo, Bolo e Doces Gourmet.</li><br/>
                        <li><u>Cardápio</u> Arroz Branco, Massas, Escalopinho ao Molho Madeira, Frango Grelhado ao Molho Branco, Batata Soutê e Saladas.</li><br/>
                        <li><u>Bebidas</u> Suco, Refrigerante, Coquetel e Água.</li>
                    </ul>
                </section>
            </section>
        </section>
    )
}
export default Home