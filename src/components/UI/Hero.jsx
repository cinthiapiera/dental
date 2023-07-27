import React from 'react';
import '../../styles/hero.css';

import heroDarkImg from '../../images/hero-img.png';
import lightImg from '../../images/Test_1.png';

const Hero = ({theme}) => {
  return (
    <section className='hero__section'>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>Obtenga ayuda y atención experta en cada visita.</h2>
              <h2 className="highlight">Valoramos y escuchamos las necesidades específicas de nuestros clientes.</h2>
            </div>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ratione inventore eos illum similique voluptatibus? Doloremque ipsum ad quis, deleniti sapiente cumque recusandae, placeat, maxime blanditiis fuga quisquam velit cum!</p>
          
            <div className="hero__btns">
              <button className="primary__btn"> Concertar una cita </button>
              <button className="secondary__btn"> Descubrir más </button>
            </div>
          </div>

          <div className="hero__img">
            <img src={theme === "light-theme" ? lightImg : heroDarkImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero