import React from 'react'
import './portfolio.css'
import pokemon from '../../assets/pokemon.jpg'
import adoptame from '../../assets/Adoptame-app.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis ultimos proyectos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={pokemon} />
          </div>
          <h3> Pokemon-app</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/mati13logo/Proyecto-Pokemon' className='btn' target='_blank'>Github</a>
            <a href='/' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={adoptame} />
          </div>
          <h3> Adoptame-app</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/mati13logo/Adoptame-Client' className='btn' target='_blank'>Github</a>
            <a href='https://adoptame.vercel.app/' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={pokemon} />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='/' className='btn' target='_blank'>Github</a>
            <a href='/' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio