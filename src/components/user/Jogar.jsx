import { useEffect } from "react"

import { Link } from 'react-router-dom'

import { ReactComponent as Emoji } from "../../assets/svg/1-emoji.svg"

const Jogar = () => {

  const handleLabelValor = input => {
    const regexValor = /^(?:[1-9]\d*|10)$/,
          // cortar = document.querySelector('.cortar'), //aqui
          testar = document.querySelector('.testar')

    let valorTotal = input.target.value.replace(/[^0-9]/g, ''),
        matchValor = regexValor.test(valorTotal)

    if (valorTotal === '' || matchValor) {
      input.target.classList.add('checked')

      // cortar.disabled = true //aqui
      testar.disabled = false
    }

    else {
      input.target.classList.remove('checked')

      // cortar.disabled = true
      testar.disabled = true
    }

    if (valorTotal === '') {
      input.target.classList.remove('checked')
      input.target.value = valorTotal

      // cortar.disabled = false//aqui
      testar.disabled = true
    }
  }

  useEffect(() => {
    const arrayColors = ['purple', 'red', 'blue']

    document.querySelectorAll('#change-background')
    .forEach(article => {
      article.classList.remove(...article.classList)

      const randomIndex = Math.floor(Math.random() * arrayColors.length);
      article.classList.add(`${ arrayColors[randomIndex] }`)
    })
  })

  return (
    <section className='jogar'>

      <article id='change-background'>
        <li className='container-saldo'>
          <strong>SALDO: </strong>
          
          <strong className='SALDO'>R$ 200.00</strong>
        </li>

        <div>
          <h1>CORTAR FRUTAS</h1>

          <p>
            Cada fruta tem um valor pré determinado, ao corta-la você coleta seu valor. Dica:<strong> Não deixe ela cair</strong> <Emoji/>
          </p>
        </div>

      
        <form>
          <span>
            <input
              type="number"
              id='entrada'
              name='entrada'
              placeholder="Valor de Entrada"
              onInput={ handleLabelValor }/>
          </span>
        </form>

        <div> 
          <Link to='/game'>
            <button 
              className='major-button testar' 
              disabled>Testar</button>
          </Link>

          <p>Valores pra jogar: 
            <strong> R$1.00 à R$25,00</strong>
          </p>
        </div>

        <div> 
          <Link to='/game'>
            <button 
              className='major-button cortar' 
              disabled>CORTAR</button>
          </Link>

          <p>Você tem 
            <strong className='tentativas'> 20 </strong>
            tentativas!
          </p>
        </div>

      </article>

    </section>
  )
}

export default Jogar