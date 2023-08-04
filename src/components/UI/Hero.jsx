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
              <h2>¡Descubre el poder de una sonrisa renovada y</h2>
              <h2 className="highlight">expresate sin límites!</h2>
            </div>
            <p className="description">
            En nuestro consultorio, nos enorgullecemos de ofrecer atención de primer nivel que mejora tu salud oral y restauramos tu confianza. ¡Agenda tu cita ahora y déjate cautivar por la magia de un nuevo comienzo! Permítenos ser tu aliado en el camino hacia una sonrisa más saludable y hermosa.
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