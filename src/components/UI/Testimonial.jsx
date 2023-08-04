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
                  Desde que conocí al Dr. Carlos Maldonado, mi sonrisa ha cambiado por completo. Su enfoque cálido y profesional me hizo sentir en buenas manos desde el principio. Me sorprendió la atención personalizada y la tecnología avanzada que utiliza en cada tratamiento. Gracias a él, ahora puedo sonreír con confianza en mis reuniones de negocios y presentaciones. ¡Altamente recomendado!
                </p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={t1} alt="testimonio1_img" />
                  </div>
                  <div>
                    <h5 className="customer__name">Cecilia Mendoza</h5>
                    <p className="description">Ceo de Empresa Bancaria</p>
                  </div>
                </div>
              </div>

              <div className="slider__item">
                <p className="description">
                  La ortodoncia nunca estuvo en mis planes hasta que conocí al Dr. Carlos Maldonado. Su equipo me explicó todo el proceso de manera clara y sencilla, y eso me dio la confianza para comenzar mi tratamiento. Los brackets autoligables fueron una gran opción para mí, y el progreso ha sido asombroso. Ahora, mi sonrisa refleja la seguridad que siento al dar clases y presentar mis investigaciones. ¡Gracias por cambiar mi vida dental!
                </p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={t2} alt="testimonio2_img" />
                  </div>
                  <div>
                    <h5 className="customer__name">Javier López</h5>
                    <p className="description">Profesor universitario</p>
                  </div>
                </div>
              </div>

              <div className="slider__item">
                <p className="description">
                  La odontopediatría del Dr. Carlos Maldonado ha sido un salvavidas para la salud dental de mis hijos. Su equipo se tomó el tiempo para explicarles la importancia de una buena higiene oral, y ahora, están entusiasmados con sus visitas al dentista. Además, mi esposa y yo también nos hemos beneficiado con sus servicios de implantes dentales y blanqueamiento. Sin duda, la mejor elección para nuestra familia.
                </p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={t3} alt="testimonio3_img" />
                  </div>
                  <div>
                    <h5 className="customer__name">Juan Morales</h5>
                    <p className="description">Padre de familia y trabajador independiente</p>
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