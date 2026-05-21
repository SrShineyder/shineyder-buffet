import React, { useState } from 'react'
import Adriano from './images/VeA01.jpg'
import Victoria from './images/VeA02.jpg'
import PaieFilho from './images/VeA03.jpg'
import Abraco from './images/VeA04.jpg'
import PaieFilha from './images/VeA05.jpg'
import Discurso from './images/VeA06.jpg'
import MVotos from './images/VeA08.jpg'
import EVotos from './images/VeA09.jpg'
import Alianca from './images/VeA10.jpg'
import Oracao from './images/VeA11.jpg'
import Saida from './images/VeA13.jpg'
import Madrinhas from './images/VeA14.jpg'
import Padrinhos from './images/VeA15.jpg'
import Familia from './images/VeA16.jpg'
import Noiva from './images/VeA17.jpg'

import styles from './Album.module.css'

const Album = () => {
    const categories = [
        {
            id: 'cerimonia',
            title: 'Cerimônia',
            groups: [
                {
                    id: 'altar',
                    images: [
                        { src: Alianca, alt: 'Troca de alianças', orientation: 'portrait' },
                        { src: Oracao, alt: 'Oração durante cerimônia', orientation: 'portrait' },
                        { src: MVotos, alt: 'Momento do voto do noivo', orientation: 'portrait' },
                        { src: EVotos, alt: 'Momento do voto da noiva', orientation: 'landscape' },
                    ],
                },
                {
                    id: 'bencoes',
                    images: [
                        { src: Discurso, alt: 'Discurso especial', orientation: 'landscape' },
                        { src: PaieFilho, alt: 'Pai e filho', orientation: 'portrait' },
                        { src: PaieFilha, alt: 'Pai e filha', orientation: 'landscape' },
                    ],
                },
            ],
        },
        {
            id: 'celebracao',
            title: 'Celebração',
            groups: [
                {
                    id: 'familia',
                    images: [
                        { src: Adriano, alt: 'Convidado Adriano', orientation: 'portrait' },
                        { src: Victoria, alt: 'Convidada Victoria', orientation: 'portrait' },
                        { src: Familia, alt: 'Foto de família', orientation: 'landscape' },
                        { src: Madrinhas, alt: 'Madrinhas', orientation: 'landscape' },
                    ],
                },
                {
                    id: 'festa',
                    images: [
                        { src: Abraco, alt: 'Abraço entre convidados', orientation: 'portrait' },
                        { src: Padrinhos, alt: 'Padrinhos', orientation: 'landscape' },
                        { src: Noiva, alt: 'Noiva celebrando', orientation: 'portrait' },
                        { src: Saida, alt: 'Saída dos noivos', orientation: 'portrait' },
                    ],
                },
            ],
        },
    ]

    const [activeCategory, setActiveCategory] = useState(categories[0].id)
    const currentCategory = categories.find((category) => category.id === activeCategory)

    return (
        <div className={styles.album}>
            <div className={styles.header}>
                <h1>Nilson Buffet</h1>
                <p>Uma alegria imensa poder realizar o Casamento do próprio filho!</p>
            </div>

            <div className={styles.category_tabs}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        type="button"
                        className={`${styles.tab_button} ${activeCategory === category.id ? styles.active : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            <section className={styles.section}>
                {currentCategory.groups
                    .slice()
                    .sort((a, b) => b.images.filter((image) => image.orientation === 'portrait').length - a.images.filter((image) => image.orientation === 'portrait').length)
                    .map((group) => {
                        const portraitImages = group.images.filter((image) => image.orientation === 'portrait')
                        const landscapeImages = group.images.filter((image) => image.orientation === 'landscape')

                        return (
                            <div key={group.id} className={styles.gallery_group}>
                                {landscapeImages.length > 0 && (
                                    <div className={`${styles.gallery_row} ${styles.landscape_row}`}>
                                        {landscapeImages.map((image, index) => (
                                            <div key={index} className={`${styles.image_card_wrapper} ${styles.landscape}`}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`${styles.image_card} ${styles.landscape}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {portraitImages.length > 0 && (
                                    <div className={`${styles.gallery_row} ${styles.portrait_row}`}>
                                        {portraitImages.map((image, index) => (
                                            <div key={index} className={`${styles.image_card_wrapper} ${styles.portrait}`}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`${styles.image_card} ${styles.portrait}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
            </section>
        </div>
    )
}

export default Album