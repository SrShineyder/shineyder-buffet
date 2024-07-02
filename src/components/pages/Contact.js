import {FaWhatsapp, FaPhone, FaEnvelope} from 'react-icons/fa'
import styles from './Contact.module.css'

function Contact(){
    const form = document.getElementById('form')
    return(
        <section className={styles.contact_container}>
            <h1>Faça já seu <span>ORÇAMENTO!</span></h1>
            <section className={styles.information}>
                <fieldset>
                    <fieldset>
                        <legend><i>Alexsander Shineyder</i></legend>
                        <p>Número: <strong>(27) 98804-1610</strong></p>
                        <p>E-mail: <strong>alexsandershineyder2014@hotmail.com</strong></p>
                        
                    </fieldset>
                    <fieldset>
                        <legend><i>Nilson Ramos</i></legend>
                        <p>Número: <strong>(27) 98882-1570</strong></p>
                    </fieldset>
                    <ul className={styles.fornecedor}>
                            <li><FaEnvelope/></li>
                            <li><FaPhone /></li>
                            <li><FaWhatsapp/></li>
                        </ul>
                </fieldset>
            <form method="POST" className={styles.form} id='aContato' action="mailto:alexsandershineyder2014@hotmail.com">
                <fieldset>
                <fieldset id="identificacao"><legend>Identificação do Usuário</legend>
                    <p><label htmlFor="name">Nome  </label>
                    <input type="text" name="tNome" id="name" size="40" maxLength="50" placeholder="Nome Completo" /></p>
                    <p><label htmlFor="cMail">E-mail  </label>
                    <input type="email" name="tMail" id="cMail" size="40" maxLength="40" /></p>
                    <p><label htmlFor="cNum">Número  </label>
                    <input type="number" name="tNum" id="cNum" size="20" maxLength="11" placeholder="(ddd) 00000-0000" /></p>
                </fieldset>
                <fieldset id="evento"><legend>Evento</legend>
                    <p><label htmlFor="tCTot">Total de Convidados  </label>
                    <input type="number" name="tCTot" id="tCTot" min="40" max="9999" placeholder="Mín 40" /></p>


                    <p><label htmlFor="cEven">Evento  </label>
                        <select name="tEven" id="cEven">
                            <option value="Al">Almoço</option>
                            <option value="ACa">Almoço de Casamento</option>
                            <option value="ACh">Almoço de Churrasco</option>
                            <option value="An">Aniversário</option>
                            <option value="AC">Aniversário de Casamento</option>
                            <option value="Ca" selected>Casamento</option>
                            <option value="CC">Coquetel de Casamento</option>
                            <option value="Ch">Churrasco</option>
                            <option value="Fo">Formatura</option>
                            <option value="Ja">Janta</option>
                        </select></p>
                        <fieldset id="alcool"><legend>Bebida Alcoólica</legend>
                            <input type="radio" name="bebida" id="cSim" /><label htmlFor="cSim">Com Bebida Alcoólica</label><br/>
                            <input type="radio" name="bebida" id="cNao" checked /><label htmlFor="cNao">Sem Bebida Alcoólica</label>
                        </fieldset>
                    <p><label htmlFor="cData">Data do Evento  </label>
                    <input type="date" name="tData" id="cData" /></p>
                </fieldset>
                <fieldset id="cidade"><legend>Cidade onde o Evento será realizado</legend>
                <p><label htmlFor="cCid">Cidade  </label>
                    <select name="tCid" id="cCid">
                        <option value="Ca">Cariacica</option>
                        <option value="DM">Domingos Martins</option>
                        <option value="Gu">Guarapari</option>
                        <option value="Ja">Jacareipe</option>
                        <option value="Ma">Manguinhos</option>
                        <option value="MF">Marechal Floriano</option>
                        <option value="Pi">Pitanga</option>
                        <option value="SL">Santa Leopoldina</option>
                        <option value="Se">Serra</option>
                        <option value="Va">Viana</option>
                        <option value="VV">Vila Velha</option>
                        <option value="VI" selected>Vitória</option>
                    </select></p>
                </fieldset>
                <input type='submit' value="Enviar" />
                </fieldset>
            </form>
            </section>
        </section>
    )
}
export default Contact