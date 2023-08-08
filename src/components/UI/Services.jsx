import React from 'react';
import '../../styles/services.css';

import img1 from '../../images/servicio_1.png';
import img2 from '../../images/servicio_2.png';
import img3 from '../../images/servicio_3.png';
import img4 from '../../images/servicio_4.png';
import img5 from '../../images/servicio_5.png';
import img6 from '../../images/servicio_6.png';
import img7 from '../../images/servicio_7.png';

const serviceData=[
  {
    img: img1,
    title: 'Implantología',
    desc: 'Reemplazo de dientes perdidos mediante la colocación quirúrgica de implantes dentales.'
  },
  {
    img: img2,
    title: 'Rehabilitación Oral',
    desc: 'Tratamiento integral con prótesis fijas, removibles, implantes dentales y corrección de oclusión.'
  },
  {
    img: img3,
    title: 'Odontopediatría',
    desc: 'Cuidado especializado para los dientes de los niños desde su nacimiento hasta la pubertad.'
  },
  {
    img: img4,
    title: 'Estética Dental',
    desc: 'Soluciones personalizadas para mejorar la salud bucal y la armonía estética de la boca. Blanqueamiento, carillas y más.'
  },
  {
    img: img5,
    title: 'Ortodoncia',
    desc: 'Rectificación de problemas dentales y mandibulares con brackets convencionales, autoligables y ortodoncia lingual.'
  },
  {
    img: img6,
    title: 'Cirugía Oral',
    desc: 'Procedimientos quirúrgicos en la boca y mandíbula para restaurar y mejorar la función dental.'
  },
  {
    img: img7,
    title: 'Periodoncia',
    desc: 'Prevención, detección y tratamiento de enfermedades que afectan el tejido de soporte de los dientes.'
  }
]

const Services = () => {
  return (
    <section id="services">
        <div className="container">
          <div className="services__top-content">
            
            <h6 className='subtitle'>Nuestros servicios</h6>
            <h2>Te ofrecemos una amplia gama de tratamientos para cuidar</h2>
            <h2 className='highlight'>de tu salud oral y transformar tu sonrisa</h2>
          </div>

          <div className="service__item-wrapper">
            {
                serviceData.map((item,index)=>(
                  <div className="services__item" key={index}>
                    <span className="service__img">
                      <img src={item.img} alt={item.title} />
                    </span>
                    <h3 className='service__title'>{item.title} </h3>
                    <p className='description'>{item.desc}</p>
                  </div>
                ))
              }
          </div>

        </div>
    </section>
  )
}

export default Services