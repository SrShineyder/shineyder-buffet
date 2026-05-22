import styles from './Menu.module.css'

function Menu(){
    return(
        <section className={styles.menu_container}>
            <div className={styles.hero}>
                <h1>CARDÁPIO</h1>
                <p>Opções de cardápio para eventos com buffet completo, criados para inspirar e servir de referência na sua escolha.</p>
            </div>
            <div className={styles.cards}>
                <article className={styles.card}>
                    <h3>Casamento</h3>
                    <ul>
                        <li>Entrada: tábuas de frios, canapés e saladas finas</li>
                        <li>Prato principal: risoto, frango ao molho, carne assada e massas</li>
                        <li>Acompanhamentos: arroz branco, batatas gratinadas e legumes</li>
                        <li>Sobremesa: mini tortas e doces gourmets</li>
                    </ul>
                </article>
                <article className={styles.card}>
                    <h3>Aniversário</h3>
                    <ul>
                        <li>Entrada: coxinhas, quibes e mini empadas</li>
                        <li>Prato principal: frango grelhado, strogonoff e massas</li>
                        <li>Acompanhamentos: arroz, batata sauté e salada</li>
                        <li>Sobremesa: bolo decorado e docinhos</li>
                    </ul>
                </article>
                <article className={styles.card}>
                    <h3>Churrasco</h3>
                    <ul>
                        <li>Carnes variadas: picanha, costela e frango</li>
                        <li>Guarnições: farofa, maionese e vinagrete</li>
                        <li>Acompanhamentos: pão de alho e saladas frescas</li>
                        <li>Bebidas: refrigerante, suco e água</li>
                    </ul>
                </article>
                <article className={styles.card}>
                    <h3>Confraternização</h3>
                    <ul>
                        <li>Entrada: bruschettas, canapés e pastéis</li>
                        <li>Prato principal: filé, massas e risoto</li>
                        <li>Acompanhamentos: arroz especial e legumes assados</li>
                        <li>Sobremesa: sobremesas em porção e frutas</li>
                    </ul>
                </article>
            </div>
            <p className={styles.note}>Os cardápios acima são sugestões de orientação. Podemos adaptar o serviço de acordo com seu evento e orçamento.</p>
        </section>
    )
}

export default Menu
