import React from 'react';
import '../../styles/contact.css';

const Contact = () => {
  return (
    <section className="information" id="contact">
      <div className="container">
        <div className="information__wrapper">
          <div className="information__content">
            <h6 className="subtitle">Contactános</h6>
            <h2>A tráves de nuestro <span className="highlight">whatsapp</span></h2>
            
          </div>

          <div className="information__call">
            <button className='secondary__btn'>Escribenos al whatsapp</button>
          </div>

          {/* <div className="information__social">
            <span><a href="https://github.com/cinthiapiera" target="_blank" rel="noopener noreferrer"><i class="ri-whatsapp-fill"></i></a></span>
            <span><a href="https://github.com/cinthiapiera" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-box-fill"></i></a></span>
            <span><a href="https://github.com/cinthiapiera" target="_blank" rel="noopener noreferrer"><i class="ri-instagram-fill"></i></a></span>
            <span><a href="https://github.com/cinthiapiera" target="_blank" rel="noopener noreferrer"><i class="ri-tiktok-fill"></i></a></span>
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default Contact