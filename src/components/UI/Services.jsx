import React from 'react';
import '../../styles/services.css';

const serviceData=[
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Lorem 1 ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim sunt veniam in culpa dicta commodi incidunt eos exercitationem sit.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Lorem 2 ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim sunt veniam in culpa dicta commodi incidunt eos exercitationem sit.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Lorem 3 ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim sunt veniam in culpa dicta commodi incidunt eos exercitationem sit.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Lorem 4 ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim sunt veniam in culpa dicta commodi incidunt eos exercitationem sit.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Lorem 5 ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim sunt veniam in culpa dicta commodi incidunt eos exercitationem sit.'
  },
  {
    icon: 'ri-arrow-left-up-line',
    title: 'Lorem 6 ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim sunt veniam in culpa dicta commodi incidunt eos exercitationem sit.'
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