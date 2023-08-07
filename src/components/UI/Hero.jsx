import React from 'react';
import '../../styles/hero.css';

import heroDarkImg from '../../images/hero-dark-img.png';
import heroLightImg from '../../images/hero-light-img.png';


const Hero = ({theme}) => {
  return (
    <section className='hero__section' id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>¡Descubre el poder de una sonrisa renovada</h2>
              <h2 className="highlight">y expresate sin límites!</h2>
            </div>
            <p className="description">En nuestro consultorio, nos caracterizamos de ofrecer atención de primer nivel que mejora tu salud oral y restauramos tu confianza. ¡Agenda tu cita ahora y déjate cautivar por la magia de un nuevo comienzo! Permítenos ser tu aliado en el camino hacia una sonrisa más saludable y hermosa.</p>
          
            <div className="hero__btns">
              <a className="primary__btn" href="https://wa.me/?phone=+51123456789&text=¡Hola! Quiero agendar una cita." target="_blank" rel="noopener noreferrer"><i class="ri-whatsapp-fill"></i> Agenda tu cita</a>
            </div>
          </div>

          <div className="hero__img">
            <img src={ theme === 'light-theme' ? heroLightImg : heroDarkImg} alt="pacient-img"/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero