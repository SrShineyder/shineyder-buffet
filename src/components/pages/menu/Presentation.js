import { useState } from 'react'

function mudaPersonagem (foto) {
    document.getElementById("icone").src = foto
}


let imagens = {
    img1: '../multimedia/images/Familia.jpg',
    img2: '../multimedia/images/Alex.jpg',
    img3: '../multimedia/images/Familia-Shineyder.jpg'
}
const trocarimagem = () => {
    setImagem(state => state === 'img1' ? 'img2': 'img1');
}
const [imagem, setImagem] = useState('img1');

<section className={styles.corpo}>
                <section className={styles.conteudo}>
                <p>Após alguns anos servindo mesas <a onClick="mudaPersonagem()" className="nilson" href="../../multimedia/images/Familia.jpg"><strong>Nilson Antônio Ramos</strong></a> viu a oportunidade de gerir seu próprio negócio, ficando conhecido como Nilson Buffet. Hoje com mais de Trinta e cinco anos no mercado, atuando principalmente na Grande Vitória e região, <a className='buffet'><strong>Nilson Buffet</strong></a> trabalha para trazer a melhor experiência, levando alegria  e satisfação à você.<br/>
                Em busca de trazer maior profissionalização e desempenho, seu filho <a className='alex'><strong>Alexsander Shineyder</strong></a> mantém seu legado expandindo sua equipe e área de atuação.</p>

                        {/*
                            <input name="ctl00$ContentBody$txtTelefoneCelular" id="ctl00_ContentBody_txtTelefoneCelular" tabindex="3" class="emp-form cleave-telefone-celular parsley-success" pattern="[0-9]*" autocomplete="off" data-parsley-trigger="blur" data-parsley-group="GeraConta" type="tel" data-parsley-required-message="Telefone celular é obrigatório" data-parsley-required="true" data-parsley-telefone-message="Celular inválido" data-parsley-id="15" data-gtm-form-interact-field-id="2">

                        <a onclick="return validacao.ValidarFormulario(&#39;EsqueciMinhaSenha&#39;);" id="ctl00_modalEsqueciSenha_ucEsqueciMinhaSenha_btnVerificarEmail" class="btn-padrao orange" href="javascript:__doPostBack(&#39;ctl00$modalEsqueciSenha$ucEsqueciMinhaSenha$btnVerificarEmail&#39;,&#39;&#39;)">Ok</a>
                         */}

                <div>
                    <div>
                        <button onClick={trocarimagem}>Trocar para {imagem === 'img1' ? 'img2': 'img1'}</button>
                    </div>
                    <div>
                        <img src={imagens[imagem]}/>
                    </div>      
                </div>

                </section>
                <section className={styles.descricao}>
                    <img src={Familia} alt=''/>
                </section>
            </section>