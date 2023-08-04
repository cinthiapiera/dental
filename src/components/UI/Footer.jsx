import React from 'react';
import '../../styles/footer.css';
import logo from '../../images/logo_dental_white.svg';

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

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2><img src={logo} alt="footer-log" />Dr. Carlos Maldonado</h2>
                    <p className="subtitle__text description">Cirujano Dentista - Rehab. Oral y Estética</p>
                    <p className="small__text description"> Líder en transformar vidas a través de sonrisas radiantes. Con más de 15 años de trayectoria en odontología, ofrecemos un cuidado excepcional a cada uno de los pacientes. Siendo la mejor opción para cuidar de tu salud oral.</p>
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

                {/* <iframe title="Ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3571105874213!2d-77.03642833042272!3d-12.082794487865387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f4fdaebe73%3A0xa80f41f457f1b19f!2sAv.%20Gral.%20Antonio%20Alvarez%20de%20Arenales%201813%2C%20Lince%2015073!5e0!3m2!1ses-419!2spe!4v1690335043940!5m2!1ses-419!2spe" 
                        style={{ width:"100%", height:"250px", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe> */}
            </div>
            <p className="copyright"><i className="ri-copyright-line"></i> Copyright {year}- Todos los Derechos Reservados <br/> Desarrollado por Cinthia Maldonado ✨</p>
        </div>
    </footer>
  )
}

export default Footer