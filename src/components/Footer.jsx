import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container-user">
            <a className="footer__link-user" href="#">iniciar sesion</a>
            <a className="footer__link-user" href="#">registrarse</a>
        </div>
        <div className="footer__container-social">
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
        </div>
        <div className="footer__container-contact">
            <a className="footer__link-contact" href="#">contactanos aqui</a>
        </div>
    </footer>
  )
}

export default Footer