import React from 'react';
import '../../styles/services.css';

const serviceData=[
  {
    icon: 'ri-check-line',
    title: 'Implantología',
    desc: 'Reemplazo de dientes perdidos mediante la colocación quirúrgica de implantes dentales.'
  },
  {
    icon: 'ri-check-line',
    title: 'Rehabilitación Oral',
    desc: 'Tratamiento integral con prótesis fijas, removibles, implantes dentales y corrección de oclusión.'
  },
  {
    icon: 'ri-check-line',
    title: 'Odontopediatría',
    desc: 'Cuidado especializado para los dientes de los niños desde su nacimiento hasta la pubertad.'
  },
  {
    icon: 'ri-check-line',
    title: 'Estética Dental',
    desc: 'Soluciones personalizadas para mejorar la salud bucal y la armonía estética de la boca. Blanqueamiento, carillas y más.'
  },
  {
    icon: 'ri-check-line',
    title: 'Ortodoncia',
    desc: 'Corrección de problemas dentales y mandibulares con brackets convencionales, autoligables y ortodoncia lingual.'
  },
  {
    icon: 'ri-check-line',
    title: 'Cirugía Oral',
    desc: 'Procedimientos quirúrgicos en la boca y mandíbula para restaurar y mejorar la función dental.'
  },
  {
    icon: 'ri-check-line',
    title: 'Periodoncia',
    desc: 'Prevención, detección y tratamiento de enfermedades que afectan el tejido de soporte de los dientes.'
  }
]

const Services = () => {
  return (
    <section id="services">
        <div className="container">
          <div className="services__top-content">
            <h6 className='subtitle'>Nuestros Tratamientos & Servicios</h6>
            <h2>Te ofrecemos una amplia gama de servicios para cuidar</h2>
            <h2 className='highlight'>de tu salud oral y transformar tu sonrisa.</h2>
          </div>

          <div className="service__item-wrapper">
            {
                serviceData.map((item,index)=>(
                  <div className="services__item" key={index}>
                    <span className="service__icon">
                      <i class={item.icon}></i>
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