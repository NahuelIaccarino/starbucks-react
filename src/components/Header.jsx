import React from 'react';
import LOGO from '../images/logo-starbucks.webp'
import BtnHeader from '../subComponents/BtnHeader'

const Header = () => {
  return (
    <header className="header">
    <div className="header__container-logo">
        <img className="header__logo" src={LOGO} alt="logo-starbucks.webp" />
    </div>
    <nav className="header__nav">
        <BtnHeader textContent={'Inicio'} href={'#inicio'}/>
        <BtnHeader textContent={'Cafe'} href={'#cafe'}/>
        <BtnHeader textContent={'Sobre Nosotros'} href={'#sobre Nosotros'}/>
        <BtnHeader textContent={'Delibery'} href={'#delibery'}/>
    </nav>
    <div className="header__conteiner-user">
        <i className="bi bi-person-circle"></i>
    </div>
    <div className="header__conteiner-user-mobile">
        <i className="bi bi-list"></i>
    </div>
    </header>
  )
}

export default Header;
