import React from 'react';
import '../../styles/about.css';

import aboutImg from '../../images/about.png';

const chooseData=[
  {
    icon: 'ri-customer-service-2-line',
    title: 'Experiencia y Pasión',
    desc:'Somos reconocidos por un enfoque cálido y profesional, creamos un ambiente acogedor donde te sentirás seguro y cómodo.'
  },
  {
    icon: 'ri-nurse-line',
    title: 'Excelencia en el Cuidado',
    desc:'Cada paciente recibe atención personalizada y tratamientos de vanguardia para lograr resultados sobresalientes.'
  },
  {
    icon: 'ri-nurse-line',
    title: 'Tecnología Avanzada',
    desc:'Contamos con tecnología innovadora para garantizar procedimientos precisos y mínimamente invasivos.'
  }
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">

            <h6 className="subtitle">Por qué somos tu mejor opción</h6>
            <h2>Enfocados y comprometidos</h2>
            <h2 className="highligth">en el cuidado de cada paciente</h2>
            <p className="description about__content-desc">Nuestra dedicación por el cuidado dental nos impulsa a ofrecerte la mejor experiencia para tu sonrisa. Con más de 15 años de trayectoria, somos líderes en transformar vidas a través de sonrisas radiantes.</p>
            
            <div className="choose__item-wrapper">
              {
                chooseData.map((item,index)=>(
                  <div className="choose__us-item" key={index}>
                    <span className="choose__us-icon"><i class={item.icon}></i></span>
                    <div>
                      <h4 className="choose__us-title">{item.title}</h4>
                      <p className="description">{item.desc}</p>
                    </div>
                    
                </div>
                ))
              }
            </div>

          </div>
          <div className="about__img">
            <img src={aboutImg} alt="about-img" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About