const RecuperarSenha = () => {
  const handleRecuperar = (event) => {
    event.preventDefault()

    document.querySelector(".recuperar-senha").classList.remove('active')
    document.querySelector('.email-enviado').classList.add("active")
  },

  handleRegex = () => {
    const email = document.querySelector('#recuSenha'),
          regexEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i,
          matchRegexEmail = email.value.match(regexEmail),
          button = document.querySelector('.recuperar-senha button')

    if (matchRegexEmail) {
      email.classList.add('checked')
      button.disabled = false
    }

    else {
      email.classList.remove('checked')
      button.disabled = true
    }
  }

  return (

    <form onSubmit={ handleRecuperar } className='recuperar-senha'>
      <span>
        <input 
          type="email" 
          id='recuSenha' 
          name='recuSenha'
          onInput={ handleRegex }/>
      </span>

      <button 
        type='submit'
        disabled>Recuperar</button>
    </form>
  )
}

export default RecuperarSenha