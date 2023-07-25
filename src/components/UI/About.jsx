import React from 'react';
import '../../styles/about.css';

import aboutImg from '../../images/about.png';

const chooseData=[
  {
    icon: 'ri-nurse-line',
    title: 'Lorem dolore sit',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum molestiae non pariatur, rem illo dolore similique saepe iusto ullam porro culpa dicta.'
  },
  {
    icon: 'ri-team-line',
    title: 'Lorem dolore sit',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum molestiae non pariatur, rem illo dolore similique saepe iusto ullam porro culpa dicta.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 soporte',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum molestiae non pariatur, rem illo dolore similique saepe iusto ullam porro culpa dicta.'
  }
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">

            <h6 className="subtitle">Porque somos tu mejor opcion</h6>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <h2 className="highligth">Lorem dolore sit</h2>
            <p className="description about__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, nisi corrupti. Nemo in porro hic iure, fuga accusantium modi assumenda delectus quae harum voluptate totam. Dignissimos atque amet debitis praesentium!</p>
            
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