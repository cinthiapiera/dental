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
            <button className='secondary__btn call__btn'>Escribenos al whatsapp</button>
          </div>

          <div>
            <iframe title="Ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3571105874213!2d-77.03642833042272!3d-12.082794487865387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f4fdaebe73%3A0xa80f41f457f1b19f!2sAv.%20Gral.%20Antonio%20Alvarez%20de%20Arenales%201813%2C%20Lince%2015073!5e0!3m2!1ses-419!2spe!4v1690335043940!5m2!1ses-419!2spe" 
                style={{ width: "600px", height:"250px", border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
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