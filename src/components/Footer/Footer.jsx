import React from 'react';
import '../Footer/footer.css';
import logoWhite from '../../images/logo_dental_white.svg';
import logoBlue from '../../images/logo_dental_blue.svg';

const quickList1=[
    {
        path:"#",
        display:"Inicio",
    },
    {
        path:"#",
        display:"Nosotros",
    },
    {
        path:"#",
        display:"Servicios",
    },
    {
        path:"#",
        display:"Testimonios",
    },
    {
        path:"#",
        display:"Contáctanos",
    },
]

const quickList2=[
    {
        path:"#",
        display:"Rehabilitación Oral",
    },
    {
        path:"#",
        display:"Ortodoncia",
    },
    {
        path:"#",
        display:"Odontopediatría",
    },
    {
        path:"#",
        display:"Periodoncia",
    },
    {
        path:"#",
        display:"Estética Dental",
    },
    {
        path:"#",
        display:"Implantología",
    },
    {
        path:"#",
        display:"Cirugía Oral",
    }
]

const quickList3=[
    {
        icon:'ri-whatsapp-line',
        path:"#",
        display:"Whatsapp",
    },
    {
        icon:'ri-facebook-circle-line',
        path:"#",
        display:"Facebook",
    },
    {
        icon:'ri-instagram-line',
        path:"#",
        display:"Instagram",
    },
    {
        icon:'ri-tiktok-line',
        path:"#",
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
                    <p className="small__text description"> Líder en transformar vidas a través de sonrisas radiantes. Con más de 15 años de trayectoria en odontología, ofrece un cuidado excepcional a cada uno de sus pacientes. Siendo la mejor opción para cuidar de tu salud oral.</p>
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
                                    <a href={item.path}>  {item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <p className="copyright"><i className="ri-copyright-line"></i> Copyright {year}- Todos los Derechos Reservados <br/> Desarrollado por Cinthia Maldonado ✨</p>
        </div>
    </footer>
  )
}

export default Footer