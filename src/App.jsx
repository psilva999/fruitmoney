import { Outlet } from "react-router-dom"

import Header from "./components/Header.jsx"
import LoginCadastro from "./components/LoginCadastro.jsx"

import { Link } from "react-router-dom";

import Footer from "./components/Footer.jsx"  
import { useEffect } from "react"

import { ReactComponent as Admin } from './assets/svg/0-admin.svg'

const App = () => {
  const handleLinks = () => {
    document.querySelectorAll('.abas li').forEach(items => items.classList.remove('active'))
    window.scrollTo(0, 0)
  }

  const fechaMenu = () => {
    if (document.querySelector('.sem-log').classList.contains("active")) {
  
      document.querySelector('.toggle-home').classList.remove("open")

      document.querySelector('.sem-log.active ul').classList.remove("mobile")

      document.querySelector('.full-menu-screen').classList.remove('active')
    }

    else {
      document.querySelector('.toggle-user').classList.remove("open")

      document.querySelector('.abas.active ul').classList.remove("mobile")

      document.querySelector('.full-menu-screen').classList.remove('active')
    }
  }

  useEffect(() => {
    document.body.classList.remove('game')
    document.documentElement.classList.remove('game')
  }); 
  
  return (
    <>
      <Header/>
      <LoginCadastro/>

      <main>
        <Outlet/>
      </main>

      <Link to='/fruitmoney/admin'>
        <button 
          className='admin'
          onClick={ handleLinks }>
          <Admin/>
        </button>
      </Link>

      <div className='full-menu-screen' onClick={ fechaMenu }></div>

      <Footer/>
    </>

  )
}

export default App
