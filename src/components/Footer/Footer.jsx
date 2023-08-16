import React from 'react';
import '../Footer/footer.css';
import logoWhite from '../../images/logo_dental_white.svg';
import logoBlue from '../../images/logo_dental_blue.svg';

const quickList1=[
  {
    path:"#home",
    display:"Inicio",
  },
  {
    path:"#about",
    display:"Nosotros",
  },
  {
    path:"#services",
    display:"Servicios",
  },
  {
    path:"#testimonial",
    display:"Testimonios",
  },
  {
    path:"#contact",
    display:"Contáctanos",
  },
]

const quickList2=[
  {
    path:"#",
    display:"Implantología",
  },
  {
    path:"#",
    display:"Rehab. Oral",
  },
  {
    path:"#",
    display:"Odontopediatría",
  },
  {
    path:"#",
    display:"Estética Dental",
  },
  {
    path:"#",
    display:"Ortodoncia",
  },
  {
    path:"#",
    display:"Cirugía Oral",
  },
  {
    path:"#",
    display:"Periodoncia",
  }
]

const quickList3=[
  {
    icon:'ri-whatsapp-line',
    path:"https://api.whatsapp.com/send?phone=+51984296197&text=¡Hola! Quiero agendar una cita.",
    display:"WhatsApp",
  },
  {
    icon:'ri-facebook-circle-line',
    path:"https://www.facebook.com/DrCarlosMaldonado.Dental",
    display:"Facebook",
  },
  {
    icon:'ri-instagram-line',
    path:"https://www.instagram.com/drcarlosmaldonado.dental",
    display:"Instagram",
  },
  {
    icon:'ri-tiktok-line',
    path:"https://www.tiktok.com/@drcarlosmaldonado.dental",
    display:"Tiktok",
  }
]

const Footer = ({theme}) => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">

          <div className="footer__logo">
            <h2><img src={ theme === 'light-theme' ? logoBlue : logoWhite} alt="logo-dental"/>Dr. Carlos Maldonado</h2>
            <p className="subtitle__text description">Cirujano Dentista - Rehab. Oral y Estética</p>
            <p className="small__text description"> Líder en transformar vidas a través de sonrisas radiantes. Con más de 15 años de trayectoria en odontología, ofrecemos un cuidado excepcional a cada uno de nuestros pacientes.</p>
          </div>
          
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Menú</h3>
            <ul className="quick__links">
              {
                quickList1.map((item,index)=>(
                  <li className="quick__link-item" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Servicios</h3>
            <ul className="quick__links">
              {
                quickList2.map((item,index)=>(
                  <li className="quick__link-item" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Redes Sociales</h3>
            <ul className="quick__links">
              {
                quickList3.map((item,index)=>(
                  <li className="quick__link-item" key={index}>
                    <i class={item.icon}></i>
                    <a href={item.path} target="_blank" rel="noopener noreferrer">  {item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
        <p className="copyright"><i className="ri-copyright-line"></i> Copyright {year} - Todos los Derechos Reservados <br/> Desarrollado por Cinthia Maldonado ✨</p>
      </div>
    </footer>
  )
}

export default Footer