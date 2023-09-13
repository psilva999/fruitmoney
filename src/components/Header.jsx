import { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

import Logo from '../assets/imgs/logo.png'

import { handleItems } from './events/handleHeader';

import { ReactComponent as Telegram } from '../assets/svg/telegram.svg';

const Header = () => {
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleHeader)
    window.addEventListener('load', handleHeader)

    return () => window.removeEventListener('scroll', handleHeader)
  })

  const handleHeader = () => {
    window.scrollY >= 3 ? setFixed(true) : setFixed(false)
  },

  handleUser = () => {
    if (!document.querySelector('.toggle-user').classList.contains("open")) {
      document.querySelector('.abas.active ul').style.animation = 'just-appear .3s linear forwards'

      document.querySelector('.toggle-user').classList.add("open")

      document.querySelector('.abas.active ul').classList.add("mobile")

      document.querySelector('.full-menu-screen').classList.add('active')
    }

    else removeUserMenu()
  },

  removeUserMenu = () => {
    let tempo = 1,
        container = setInterval(countdown, 100)

      document.querySelector('.abas.active ul').style.animation = 'just-hide .3s linear forwards'

      function countdown() {
        tempo--

        if (tempo === 0) {
          document.querySelector('.abas.active ul').style.animation = 'just-appear .3s linear forwards'

          document.querySelector('.toggle-user').classList.remove("open")

          document.querySelector('.abas.active ul').classList.remove("mobile")
    
          document.querySelector('.full-menu-screen').classList.remove('active')
          clearInterval(container)
        }
      }
  },

  handleMenu = () => {
    if (!document.querySelector('.toggle-home').classList.contains("open")) {
      document.querySelector('.sem-log.active ul').style.animation = 'just-appear .3s linear forwards'

      document.querySelector('.toggle-home').classList.add("open")

      document.querySelector('.sem-log.active ul').classList.add("mobile")

      document.querySelector('.full-menu-screen').classList.add('active')
    }

    else removeMenu()
  },

  removeMenu = () => {
    let tempo = 1,
        container = setInterval(countdown, 100)

      document.querySelector('.sem-log.active ul').style.animation = 'just-hide .3s linear forwards'

      function countdown() {
        tempo--

        if (tempo === 0) {
          document.querySelector('.sem-log.active ul').style.animation = 'just-appear .3s linear forwards'

          document.querySelector('.toggle-home').classList.remove("open")

          document.querySelector('.sem-log.active ul').classList.remove("mobile")
    
          document.querySelector('.full-menu-screen').classList.remove('active')
          clearInterval(container)
        }
      }
  },

  handleLink = item => {
    handleItems(document.querySelectorAll('.abas li'), item)
    window.scrollTo(0, 0)

    handleUser()
  },

  handleSair = () => {
    window.scrollTo(0, 0)

    document.querySelector('header').classList.remove('user')
    document.querySelector('.admin').classList.remove('active')
    document.querySelector('.abas').classList.remove('active')
    document.querySelector('.sem-log').classList.add('active')
  },

  ativaDeposito = () => {
    handleLink(5)

    document.querySelector(".qr-code").classList.remove('active')
    document.querySelector(".article-deposito").classList.add('active')
  }

  // handleEntrar = () => {
  //   handleItems(document.querySelectorAll('.abas li'), 0)
  //   window.scrollTo(0, 0)

  //   document.querySelector('header').classList.add('user')
  //   document.querySelector('.sem-log').classList.remove('active')
  //   document.querySelector('.abas').classList.add('active')
  // }

  const openTabUser = li => {
    const containerUser = document.querySelector(".dark-screen"),
          login = document.querySelector(".login"),
          cadastro = document.querySelector('.cadastro'),
          recuSenha = document.querySelector('.recuperar-senha'),
          emailEnviado = document.querySelector('.email-enviado'),
          voltar = document.querySelector('.voltar')

    if (!containerUser.classList.contains('active')) {
      containerUser.classList.add("active")
      containerUser.style.animation = 'just-appear .3s linear forwards'
    }

    if (li.target.textContent === 'Login') {
      
      cadastro.classList.remove('active')
      recuSenha.classList.remove('active')

      emailEnviado.classList.remove('active')
      voltar.classList.remove('active')

      login.classList.add("active") 
    }

    if (li.target.textContent === 'CADASTRAR') {
      
      login.classList.remove('active')
      recuSenha.classList.remove('active')

      emailEnviado.classList.remove('active')
      voltar.classList.remove('active')

      cadastro.classList.add("active") 
    }

  }

  return (
    <header id={ fixed? 'fixed' : '' } className='user'>

      <img src={ Logo } alt='logo' className='logo'/>
      <nav className='abas active'>
        <button className='toggle-user' onClick={ handleUser }></button>

        <ul>
          <Link to='/jogar'>
            <li onClick={ () => handleLink(0) }>Jogar</li>
          </Link>

          <Link to='/saque'>
            <li onClick={ () => handleLink(1) }>Saque</li>
          </Link>

          <Link to='/afiliados'>
            <li onClick={ () => handleLink(2) }>Link de Afiliado</li>
          </Link>

          <Link to='/indique'>
            <li onClick={ () => handleLink(3) }>Indique um amigo</li>
          </Link>

          <Link to='/'>
            <li 
              className='sair'
              onClick={ () => handleSair() }>Sair</li>
          </Link>

          <Link to='/deposito'>
            <li 
              className='diferent'
              onClick={ ativaDeposito }>DEPÓSITO</li>
          </Link>
        </ul>
      </nav>

      <nav className='sem-log'>
        <button className='toggle-home' onClick={ handleMenu }>
        </button>

        <ul>
          <li className='telegram'><a href="https://t.megame" target='_blank' rel='noreferrer'><Telegram/></a></li>

          <li onClick={ openTabUser }>Login</li>

          <li onClick={ openTabUser } className='diferent'>CADASTRAR</li>

          {/* <li>Login</li>
          <li className='diferent'>CADASTRAR</li> */}
        </ul>
      </nav>

    </header>

  )
}

export default Header