import React from 'react';
import '../../styles/contact.css';

const infoData2=[
  {
    icon: 'ri-map-pin-line',
    title: 'Dirección:',
    desc:'Av. Gral. Antonio Álvarez de Arenales, 1813 Lince - Piso 2'
  },
  {
    icon: 'ri-phone-line',
    title: 'Teléfono:',
    desc:'+51 991 894 704'
  },
  {
    icon: 'ri-time-line',
    title: 'Horarios: Lun. - Sáb. | Dom. (previa cita)',
    desc:'T. Mañana: 9:00 a 13:30 - T. Tarde: 15:30 a 21:30' 
  }
]

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__content">
            <h2 className='highlight'>Contáctanos</h2>
            <div className="info__item-wrapper">
              {
                infoData2.map((item,index)=>(
                  <div className="info__us-item" key={index}>
                    <span className="info__us-icon">
                      <i class={item.icon}></i>
                    </span>
                    <div>
                      <h4 className="info__us-title">{item.title}</h4>
                      <p className="description">{item.desc}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="contact__maps">
            <iframe title="Ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3571105874213!2d-77.03642833042272!3d-12.082794487865387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f4fdaebe73%3A0xa80f41f457f1b19f!2sAv.%20Gral.%20Antonio%20Alvarez%20de%20Arenales%201813%2C%20Lince%2015073!5e0!3m2!1ses-419!2spe!4v1690335043940!5m2!1ses-419!2spe" style={{ width: "", height:"", border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact