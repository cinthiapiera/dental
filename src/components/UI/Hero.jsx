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
              <h2>¡Sonríe sin límites!</h2>
              <h2 className="highlight">Descubre el Poder de una Sonrisa Transformadora</h2>
            </div>
            <p className="description">
            En el consultorio del Dr. Carlos Maldonado, el arte de una sonrisa radiante toma vida. Nuestro cuidado excepcional mejora tu salud oral y restaura la confianza en tu sonrisa. ¡Agenda tu cita ahora y déjate cautivar por la magia de sonreír!
            </p>
          
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