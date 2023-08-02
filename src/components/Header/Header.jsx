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

const Header = ({theme, toogleTheme}) => {
  console.log("estoy aqui")
  console.log(theme, toogleTheme);

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2> Dr. Carlos Maldonado </h2>
          </div>

          {/* navegacion */}
          <div className="navigation">
            <ul className="menu">
              {
                nav__links.map((item,index)=>(
                  <li className="menu__item" key={index} >
                    <a href={item.path} className="menu__link">
                      {item.display}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* modo oscuro */}
          <div className="light__mode">
            <span onClick={toogleTheme}>
              {
                theme === "light-theme" ? 
                (<span><i className="ri-moon-line"></i>Modo Oscuro</span>) : 
                (<span><i className="ri-sun-line"></i>Modo Claro</span>)
              }
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header