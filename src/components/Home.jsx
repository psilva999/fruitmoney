import { Link } from 'react-scroll'
import { ReactComponent as Emoji } from "../assets/svg/1-emoji.svg"

import Melancia from '../assets/svg/frutas/melancia.svg'
import Banana from '../assets/svg/frutas/banana.svg'
import Abacaxi from '../assets/svg/frutas/abacaxi.svg'

import Cenoura from '../assets/svg/frutas/cenoura.svg'
import Milho from '../assets/svg/frutas/milho.svg'
import Laranja from '../assets/svg/frutas/laranja.svg'

import Morango from '../assets/svg/frutas/morango.svg'
import Uva from '../assets/svg/frutas/uva.svg'
import Cereja from '../assets/svg/frutas/cereja.svg'

import Mamao from '../assets/svg/frutas/mamao.svg'
import { ReactComponent as Arrow } from "../assets/svg/9-arrow.svg"

const Home = () => {
  const openLogin = () => {
    document.querySelector('.cadastro').classList.remove('active')
    document.querySelector('.recuperar-senha').classList.remove('active')

    document.querySelector('.email-enviado').classList.remove('active')
    document.querySelector('.voltar').classList.remove('active')

    document.querySelector(".dark-screen").classList.add('active')
    document.querySelector(".login").classList.add('active')
    
    document.querySelector('.dark-screen').style.animation = 'just-appear .3s linear forwards'
  }

  return (

    <section className='home' id='home'>
      <ul>
        <img src={ Cenoura } className='strawberry'/>
        <img src={ Banana } className='banana'/>
        <img src={ Melancia } className='watermelon'/>
        <img src={ Uva } className='cherry'/>
        <img src={ Laranja } className='orange'/>
      </ul>

      <article> <h1>FRUIT MONEY</h1>

        <button 
          className='major-button'
          onClick={ openLogin }>JOGAR AGORA</button>

        <div className="emoji">
          <span>Rodadas de boas vindas disponível</span>

          <Emoji/>
        </div>

        <Link activeClass="active"
          to='about'
          spy={ true }
          smooth={ true }
          offset={ 10 }
          duration={ 300 }
          className='link-scroll'>

          <i className='scroll-to-about'>
            <Arrow/> </i> 
        </Link>
      </article>

      <ul>
        <img src={ Morango } className='apple'/>
        <img src={ Mamao } className='mango'/>
        <img src={ Milho } className='peach'/>
        <img src={ Cereja } className='grape'/>
        <img src={ Abacaxi } className='pineapple'/>
      </ul>
    </section>

  )
}

export default Home
