import './Footer.css'

import github from './assets/github-logo.png'
import linkedin from './assets/linkedin.png'
import portafolio from './assets/suitcase.png'

import html from './assets/html-5.png'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react.png'
import nodejs from './assets/nodejs.png'
import fb from './assets/firebase.png'
import bootstrap from './assets/bootstrap.png'
import vsc from './assets/vsc.png'
import git from './assets/git.png'

const Footer = () => {

    return (
            <footer className='Footer'>
              <div className='Title-Redes'>
                <div>
                  <h3>Sitio creado por Nicolás Díaz</h3>
                </div>
                <div>
                  <a href="/"><img className='img' src={github} alt="GitHub" /></a>
                  <a href="/"><img className='img' src={linkedin} alt="LinkedIn" /></a>
                  <a href="/"><img className='img' src={portafolio} alt="Portafolio" /></a>
                </div>
              </div>
              <div className='Tecnologias'>
                <div>
                  <h3>Tecnologías utilizadas</h3>
                </div>
                <div>
                  <img className='img' src={html} alt="Html" />
                  <img className='img' src={css} alt="Css" />
                  <img className='img' src={js} alt="Javascript" />
                  <img className='img' src={react} alt="React" />
                  <img className='img' src={nodejs} alt="Node JS" />
                  <img className='img' src={fb} alt="Firebase" />
                  <img className='img' src={bootstrap} alt="Bootstrap" />
                  <img className='img' src={git} alt="Git" />
                  <img className='img' src={vsc} alt="Visual Studio Code" />
                </div>
              </div>
            </footer>
          )}
        
    
export default Footer;