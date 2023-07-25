import React from 'react';
import '../../styles/testimonial.css';

import Slider from 'react-slick';
import t1 from '../../images/Test_1.png';
import t2 from '../../images/Test_2.png';
import t3 from '../../images/Test_3.png';

const Testimonial = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonios de nuestros pacientes</h6>
          <h2> Valoramos su <span className="highligth">confianza y patrocinio</span></h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
              <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum sint. Natus eligendi voluptates assumenda, commodi pariatur unde in aut incidunt illum corrupti magni delectus, nisi deserunt inventore voluptatum facilis!
                </p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={t1} alt="" />
                  </div>
                  <div>
                    <h5 className="customer__name">Lorem 1</h5>
                    <p className="description">CEO, Startup</p>
                  </div>
                </div>
              </div>

              <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum sint. Natus eligendi voluptates assumenda, commodi pariatur unde in aut incidunt illum corrupti magni delectus, nisi deserunt inventore voluptatum facilis!
                </p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={t2} alt="" />
                  </div>
                  <div>
                    <h5 className="customer__name">Lorem 2</h5>
                    <p className="description">Profesor, Universidad</p>
                  </div>
                </div>
              </div>

              <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum sint. Natus eligendi voluptates assumenda, commodi pariatur unde in aut incidunt illum corrupti magni delectus, nisi deserunt inventore voluptatum facilis!
                </p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={t3} alt="" />
                  </div>
                  <div>
                    <h5 className="customer__name">Lorem 3</h5>
                    <p className="description">Tecnico, Empresa Independiente</p>
                  </div>
                </div>
              </div>
            </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial