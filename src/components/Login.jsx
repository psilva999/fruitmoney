import { ReactComponent as Eye } from '../assets/svg/4-eye.svg'

import { handleItems } from './events/handleHeader';

import { useNavigate } from "react-router-dom";

const Login = () => { 
  const navigate = useNavigate();

  const handleLabelEmail = () => {
          handleRegex()
        },

        handleLabelPassword = () => {
          handleRegex()
        },

        handleVisibility = () => {
          const password = document.querySelector('#password')

          password.type === 'password'?
          password.type = 'text' 
          :
          password.type = 'password'
        },

        activeCadastro = () => {
          document.querySelector(".login").classList.remove('active')
          document.querySelector(".cadastro").classList.add("active") 
        },

        handleRegex = () => {
          const email = document.querySelector('#emailLogin'),
                regexEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

          const senha = document.querySelector('#password'),
                regexSenha = /^.{6,}$/

          const button = document.querySelector('#button-login')

          let matchEmail = email.value.match(regexEmail),
              matchSenha = senha.value.match(regexSenha)

          matchEmail?
            email.classList.add('checked')
            :
            email.classList.remove('checked')

          matchSenha?
            senha.classList.add('checked')
            :
            senha.classList.remove('checked')

          matchEmail && matchSenha? 
            button.disabled = false
            :
            button.disabled = true
        }

  const handleLogin = (event) => {
    event.preventDefault()

    const email = document.querySelector('#emailLogin'),
          senha = document.querySelector('#password')

    const emailValue = email.value,
          senhaValue = senha.value

    const email1 = 'fruitmoney23@gmail.com',
          senha1 = 'money23',

          email2 = 'fruitmoney@gmail.com',
          senha2 = 'fruits23',

          adminEmail = 'admin.total@gmail.com',
          adminSenha = 'admin23'

    const usersList = JSON.parse(localStorage.getItem('users')) || [];

    const user = usersList.find((user) => user.emailValue === emailValue && user.senhaValue === senhaValue);

    if (user || (emailValue === email1 && senhaValue === senha1) || (emailValue === email2 && senhaValue === senha2) || (emailValue === adminEmail && senhaValue === adminSenha)) {
      document.querySelector('.incorreto').classList.remove("active")
      document.querySelector('.nao-cadastrado').classList.remove("active")

      email.classList.remove("checked")
      senha.classList.remove('checked')

      senha.type = 'password'

      email.value = ''
      senha.value = ''
      document.querySelector('#button-login').disabled = true

      window.scrollTo(0, 0)
      navigate('/jogar')

      handleItems(document.querySelectorAll('.abas li'), 0)

      teste()

      if (emailValue === adminEmail && senhaValue === adminSenha) 
        document.querySelector('.admin').classList.add('active')
    }

    else {
      document.querySelector('.nao-cadastrado').classList.remove("active")
      document.querySelector('.incorreto').classList.add("active")

      if (!document.querySelector('.incorreto').classList.contains('count')) 
        removeActive(document.querySelector('.incorreto'))
    }

    function removeActive(e) {
      e.classList.add('count')

      let tempo = 3,
          container = setInterval(countdown, 1000)

      function countdown() {
        tempo--

        if (tempo === 0) {
          e.classList.remove('count')
          e.classList.remove('active')
          clearInterval(container)
        }
      }
    }

    function teste() {
      document.querySelector('header').classList.add('user')
      document.querySelector('.sem-log').classList.remove('active')
      document.querySelector('.abas').classList.add('active')

      document.querySelector(".dark-screen").classList.remove('active')
    }
  }

  const recuSenha = () => {
    document.querySelector(".login").classList.remove('active')
    document.querySelector('.voltar').classList.add('active')
    document.querySelector(".recuperar-senha").classList.add("active") 
  }

  return (
    <div className='login active'>
      <article>
        <h1>LOGIN</h1>

        <p>
          Não possui conta? 
          <a onClick={ activeCadastro }>Clique Aqui</a>
        </p>
      </article>

      <form onSubmit={ handleLogin }>
        <span>

          <input 
            type="email" 
            id='emailLogin' 
            name='emailLogin' 
            onInput={ handleLabelEmail } 
            // ref={ userRef }
            // value={ user } 
            required
            placeholder='E-mail'/>
        </span>
        
        <span id='password-container'>
          <input 
            type="password" 
            id='password' 
            name='password' 
            // value={ pwd }
            onInput={ handleLabelPassword }
            placeholder='senha' 
            required/>

          <Eye onClick={ handleVisibility }/>
        </span>

        <p>
          Esqueceu senha? 
          <a onClick={ recuSenha }>Clique Aqui</a>
        </p>

        <button
        id='button-login'
        type='submit'
        disabled>LOGIN</button>
        
      </form>
    </div>

  )
}

export default Login