import { handleItems } from './events/handleHeader'

import { useNavigate } from "react-router-dom"

const Cadastro = () => {

  const navigate = useNavigate()

  const handleLabelEmail = () => {
          handleRegex()
        },

        handleLabelPassword = () => {
          handleRegex()
        },

        handleRepeatPassword = () => {
          handleRegex()
        },

        activeLogin = () => {
          document.querySelector(".cadastro").classList.remove('active')
          document.querySelector(".login").classList.add("active") 
        },

        handleVisibility = () => {
          const password = document.querySelector('#passwordCadastro'),
                repitaCadastro = document.querySelector('#repitaCadastro')

          if (password.type === 'password') {
            password.type = 'text' 
            repitaCadastro.type = 'text'
          }
          
          else {
            password.type = 'password'
            repitaCadastro.type = 'password'
          }
        },

        handleRegex = () => {
          const email = document.querySelector('#emailCadastro'),
                regexEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

          const senha = document.querySelector('#passwordCadastro'),
                repeatSenha = document.querySelector('#repitaCadastro'),
                regexSenha = /^.{6,}$/

          const button = document.querySelector('#button-cadastro')

          let matchEmail = email.value.match(regexEmail),
              matchSenha = senha.value.match(regexSenha),
              matchRepeatSenha = Boolean(repeatSenha.value === senha.value && matchSenha)

          matchEmail?
            email.classList.add('checked')
            :
            email.classList.remove('checked')

          matchSenha?
            senha.classList.add('checked')
            :
            senha.classList.remove('checked')

          matchRepeatSenha?
            repeatSenha.classList.add('checked')
            :
            repeatSenha.classList.remove('checked')

          matchEmail && matchSenha && matchRepeatSenha? 
            button.disabled = false
            :
            button.disabled = true
        }

  const handleCadastro = event => {
    event.preventDefault()

    document.querySelector('.admin').classList.add('active')

    window.scrollTo(0, 0)

    handleItems(document.querySelectorAll('.abas li'), 0)

    navigate('/fruitmoney/jogar')

    document.querySelector('header').classList.add('user')
    document.querySelector('.sem-log').classList.remove('active')
    document.querySelector('.abas').classList.add('active')

    const email = document.querySelector('#emailCadastro'),
          senha = document.querySelector('#passwordCadastro'),
          repeteSenha = document.querySelector('#repitaCadastro')

    const emailValue = document.querySelector('#emailCadastro').value,
          senhaValue = document.querySelector('#passwordCadastro').value

    // Recupera os dados de usuários existentes no localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Adiciona o novo usuário à lista
    existingUsers.push({ emailValue, senhaValue });

    // Salva a lista atualizada de usuários no localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    email.classList.remove('checked')
    senha.classList.remove('checked')
    repeteSenha.classList.remove('checked')

    senha.type = 'password'
    repeteSenha.type = 'password'

    email.value = ''
    senha.value = ''
    repeteSenha.value = ''

    document.querySelector('#mostraPassword').checked = false
    document.querySelector('#button-cadastro').disabled = true

    document.querySelector(".dark-screen").classList.remove('active')
  }

  return (
    <div className='cadastro'>
      <div 
        className='ja-cadastrado'>
        <span>E-mail já cadastrado</span>
      </div>

      <article>
        <h1>Cadastro</h1>

        <p>
          Já possui conta? 
          <a onClick={ activeLogin }>Clique Aqui</a>
        </p>
      </article>

      <form onSubmit={ handleCadastro } >
        <span>

          <input 
            type="email" 
            id='emailCadastro' 
            name='emailCadastro'
            onInput={ handleLabelEmail }
            placeholder='E-mail'
            required/>
        </span>
        
        <span id='password-container'>
          <input 
            type="password" 
            id='passwordCadastro' 
            name='passwordCadastro' 
            onInput={ handleLabelPassword } 
            placeholder='Senha'
            required/>

            <a className='dica'>Mínimo de 6 caracteres</a>
        </span>

        <span className='repete-password'>
          <input 
            type="password" 
            id='repitaCadastro' 
            name='repitaCadastro' 
            onInput={ handleRepeatPassword } 
            placeholder='Repita sua senha'
            required/>
        </span>

        <p className='mostra'>
          <input 
            type="checkbox" 
            id='mostraPassword' 
            name='mostraPassword'
            onInput={ handleVisibility }/>

          <label htmlFor="mostraPassword">Mostrar Senha</label>
        </p>

        <button 
          id='button-cadastro'
          type='submit'
          disabled>CADASTRO</button>
      </form>
    </div>
  )
}

export default Cadastro