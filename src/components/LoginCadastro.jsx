import Cadastro from "./Cadastro"
import EmailEnviado from "./EmailEnviado"
import Emojis from "./Emojis"

import Login from "./Login"
import RecuperarSenha from "./recuperarSenha"

const LoginCadastro = () => {

  const handleUser = () => {
    const containerUser = document.querySelector(".dark-screen")

    containerUser.classList.contains('active') 
    && 
    closeTabUserByOutside()  
  }

  const darkScreen = e => {
    e.target.id === 'dark-screen' && closeTabUserByOutside()
  }

  const closeTabUserByOutside = () => {
    const containerUser = document.querySelector(".dark-screen")

    let tempo = 1,
        container = setInterval(countdown, 100)

    containerUser.style.animation = 'just-hide .3s linear forwards'

    function countdown() {
      tempo--

      if (tempo === 0) {
        containerUser.classList.remove('active')
        clearInterval(container)
      }
    }
  }

  const ativaLogin = () => {
    document.querySelector('.recuperar-senha').classList.remove('active')
    document.querySelector('.email-enviado').classList.remove("active")

    document.querySelector('.voltar').classList.remove('active')
    document.querySelector(".login").classList.add('active')
  }

  return (
    <div 
      className='dark-screen' 
      id='dark-screen'
      onClick={ darkScreen }>

      <section className='usuario'>
        <div className='volta-fecha'>
          <div>
            <a
              className="voltar"
              onClick={ ativaLogin }
              >VOLTAR</a>
          </div>

          <button className='close-user-tab' onClick={ handleUser }>X</button>
        </div>

        {/* INCORRETO */}
        <div className='incorreto'>
          <span>E-mail/senha incorreta</span>
        </div>

        {/* SEM CADASTRO */}
        <div className='nao-cadastrado'>
          <span>E-mail não cadastrado</span>
        </div>

        {/* já cadastrado */}
        <div className='ja-cadastrado'>
          <span>E-mail já cadastrado</span>
        </div>

        <Login/>
        <RecuperarSenha/>

        <EmailEnviado/>

        <Cadastro/>
        <Emojis/>

      </section>
    </div>

  )
}

export default LoginCadastro
