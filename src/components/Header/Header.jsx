//rafce
import React from 'react';
import './header.css';

const nav__links = [
  {
    path: '#inicio',
    display: 'Inicio'
  },
  {
    path: '#nosotros',
    display: 'Nosotros'
  },
  {
    path: '#servicios',
    display: 'Servicios'
  },
  {
    path: '#contacto',
    display: 'Contacto'
  }
]

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2> Dr.Maldonado </h2>
          </div>

          {/* navegacion */}
          <div className="navigation">
            <ul className="menu">
              {
                nav__links.map((item,index)=>(
                  <li className="menu__item">
                    <a href={item.path} className="menu__link">
                      {item.display}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* modo oscuro */}
          <div className="ligth__mode">
            <span><i class="ri-sun-line"></i>Ligth Mode</span>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header