import React from 'react';
import '../../styles/services.css';

const serviceData=[
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Rehabilitación Oral',
    desc: 'Se compone de un tratamiento integral a través de prótesis fijas, removibles, implantes dentales y oclusión.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Ortodoncia',
    desc: 'Se encarga de los problemas de los dientes y la mandíbula, corrigiéndolo con dispositivos fijos: brackets convecionales, brackets autoligantes y ortolingual.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Odontopediatría',
    desc: 'Se basa en el cuidado de los dientes de los niños desde su nacimiento hasta que entran a la pubertad.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Periodoncia',
    desc: 'Se encarga de la prevención, detención y tratamiento de las enfermedades que pueden afectar al tejido que le brindan soporte a los dientes.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Estética Dental',
    desc: 'Se encarga de solucionar problemas relacionados con la salud bucal y la armonía estética de la boca.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Implantología',
    desc: 'Se dedica al reemplazo de dientes perdidos mediante la colocación quirúrgica de un implante dental.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Cirugía Oral',
    desc: 'Se encarga de procedimientos quirúrgicos en la boca y en la mandíbula.'
  }
]

const Services = () => {
  return (
    <section id="service">
        <div className="container">
          <div className="service__top-content">
            <h6 className='subtitle'>Nuestros Tratamientos & Servicios</h6>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <h2 className='highligth'> Lorem dolore sit</h2>
          </div>

          <div className="service__item-wrapper">
            {
                serviceData.map((item,index)=>(
                  <div className="services__item" key={index}>
                  <span className="service__icon"><i class={item.icon}></i></span>
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