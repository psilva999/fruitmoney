import { ReactComponent as Emoji } from "../assets/svg/1-emoji.svg"
import Poro from '../assets/imgs/poro-money.png'

const About = () => {

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

    <section className='about' id='about'>
      <article> <img src={ Poro }/>

        <h1 className='medium-size'>FRUITMONEY</h1>

        <p>
          Bem-vindo ao mundo suculento e lucrativo de FruitMoney, o joguinho que vai deixar você com água na boca e o bolso cheio! Prepare-se para uma experiência emocionante, onde suas habilidades de corte serão testadas e sua conta bancária pode crescer a cada fatia.
        </p>

        <button 
          className='major-button'
          onClick={ openLogin }>JOGAR AGORA</button>

        <div className='emoji'>
          <span>Rodadas de boas vindas disponível</span>

          <Emoji/>
        </div>

      </article>
    </section>

  )
}

export default About