import React from 'react';
import '../../styles/hero.css';

import heroDarkImg from '../../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero__section'>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>Get expert help and care at every visit.</h2>
              <h2>At Tooth Bright Dental, we value and listen to our client's specific needs.</h2>
              <h2 className='highlight'>set an appointment</h2>
            </div>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ratione inventore eos illum similique voluptatibus? Doloremque ipsum ad quis, deleniti sapiente cumque recusandae, placeat, maxime blanditiis fuga quisquam velit cum!</p>
          
            <div className="hero__btns">
              <button className="primary__btn"> set an appointment </button>
              <button className="secundary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img src={heroDarkImg} alt="hero-img"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero