import React, {useRef, useEffect} from 'react';
import './header.css';
import logoWhite from '../../images/logo_dental_white.svg';
import logoBlue from '../../images/logo_dental_blue.svg';

const nav__links = [
  {
    path: '#home',
    display: 'Inicio'
  },
  {
    path: '#about',
    display: 'Nosotros'
  },
  {
    path: '#services',
    display: 'Servicios'
  },
  {
    path: '#testimonial',
    display: 'Testimonial'
  },
  {
    path: '#contact',
    display: 'Contacto'
  }
]

const Header = ({theme, toogleTheme}) => {

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('header__shrink')
    }else{
      headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', headerFunc)
    return ()=> window.removeEventListener('scroll', headerFunc)
  },[]);

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          
          <div className="logo">
            <h2><img src={ theme === 'light-theme' ? logoBlue : logoWhite} alt="pacient-img"/>Dr. Carlos Maldonado</h2>
          </div>

          {/* navegacion */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {
                nav__links.map((item,index)=>(
                  <li className="menu__item" key={index} >
                    <a href={item.path} onClick={handleClick} className="menu__link">
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
                theme === 'light-theme' ? 
                (<span><i class="ri-moon-line"></i>Oscuro</span>) : 
                (<span><i class="ri-sun-line"></i>Claro</span>)
              }
            </span>
          </div>

            <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
            </span>

        </div>
      </div>
    </header>
  )
}

export default Header