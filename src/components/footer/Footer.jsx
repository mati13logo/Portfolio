import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MATIAS</a>
      <ul className='permalinks'>
        <li><a href='#'>Inicio</a></li>
        <li> <a href='#about'>Sobre mi</a></li>
        <li> <a href='#experience'>Experiencia</a></li>
        <li> <a href='#portfolio'>Portfolio</a></li>
        <li> <a href='#contact'>Contacto</a></li>
      </ul>
    </footer>
  )
}

export default Footer