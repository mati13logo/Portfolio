import React from 'react'
import './about.css'
import foto from '../../assets/fotoPerfilConFondo.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce mas</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={foto} alt='yo' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small> 1+ año trabajando</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>3 Proyectos</small>
            </article>
          </div>
          <p>
            Tengo 26 años, actualmente vivo en
            Trenque Lauquen provincia de Buenos
            Aires, Argentina. Me interesa el mundo
            de la tecnología, siempre quise realizar
            algo que cause un impacto en la
            sociedad y que pueda facilitar el día a
            día de las personas.
            Me gusta ser autodidacta, aprender de
            los demás y enseñar lo que aprendo.
            Aficionado del deporte y la tecnología.
          </p>

          <a href='#contact' className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About