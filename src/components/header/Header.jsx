import React from 'react'
import './header.css'
import CTA from './CTA'
import yo from '../../assets/fotoPerfil.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container" >
        <h5>Hola, yo soy</h5>
        <h1>Matias Logotetti</h1>
        <h5 className='text-light'> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={yo} alt='yo' />
        </div>
        <a href='#contact' className='scroll__down'>Ir al final</a>
      </div>
    </header>
  )
}

export default Header