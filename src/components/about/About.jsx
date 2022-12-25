import React from 'react'
import './about.css'
import foto from '../../assets/fotoPerfilConFondo.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={foto} alt='yo' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small> 1+ año trabajando</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>Aprendiendo cada dia</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis ea itaque quas et ex iure qui dolorem sed cumque saepe natus molestias consequatur animi, obcaecati sequi ipsam optio recusandae.
          </p>

          <a href='#contact' className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About