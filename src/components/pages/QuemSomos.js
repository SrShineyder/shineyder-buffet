import React, { useState } from 'react';
import styles from './Home.module.css';
import Familia from '../multimedia/images/Familia.jpg'
import Shineyder from '../multimedia/images/Familia-Shineyder.jpg'
import Alex from '../multimedia/images/Alex.jpg'

const QuemSomos = () => {
  const [fotoAtiva, setFotoAtiva] = useState('Buffet');
  const imagens = {
    Alexsander: { src: Alex, alt: 'Alexsander Shineyder' },
    Nilson: { src: Shineyder, alt: 'Nilson' },
    Buffet: { src: Familia, alt: 'Nilson Buffet' },
  };

  const handleClique = (palavra) => {
    setFotoAtiva(palavra);
  }

  return (
    <div className={styles.quem_container}>
      <div className={styles.quem_text}>
        <p> <span onClick={() => handleClique('Nilson')}>Nilson</span> viu a oportunidade de gerir seu próprio negócio, dando início assim ao <span onClick={() => handleClique('Buffet')}>Nilson Buffet</span>. Com quase quarenta anos neste mercado, atuando por toda a Grande Vitória e região, trabalhamos para trazer a melhor experiência, conforto e confiança em nosso trabalho e para que todos possam aproveitar ao máximo do evento.</p>
        <p>Inspirado em manter seu legado, <span onClick={() => handleClique('Alexsander')}>Alexsander Shineyder</span> busca de maior profissionalização e desempenho, seu filho.</p>
      </div>
      <div className={styles.quem_images}>
        <div className={styles.quem_image_stack}>
          {Object.entries(imagens).map(([chave, { src, alt }]) => (
            <img
              key={chave}
              src={src}
              alt={alt}
              className={`${styles.quem_main_image} ${fotoAtiva === chave ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;