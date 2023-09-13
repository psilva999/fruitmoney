import { useState } from 'react'

import Depositar from '../../assets/imgs/deposito.gif'
import Code from './Code'

const Deposito = () => {
  const [startCountdown, setStartCountdown] = useState(false);

  const handleLabelCpf = input => {
      let valueCpf = input.target.value.replace(/\D/g, ''),
          valueLabel = document.querySelector('#valor').value

      input.target.value.length <= 11 ?
      input.target.value = handleRegex(valueCpf, valueLabel)
      :
      input.target.value = handleRegex(valueCpf.slice(0, 11), valueLabel)
    },

    handleLabelValor = () => {
      let valueCpf = document.querySelector('#cpf').value.replace(/\D/g, ''),
          valueLabel = document.querySelector('#valor').value

      valueCpf.length <= 11 ?
      handleRegex(valueCpf, valueLabel)
      :
      handleRegex(valueCpf.slice(0, 11), valueLabel)

      document.querySelectorAll('.valores button').forEach(items => items.classList.remove("active"))
    },

    handleRegex = (cpfValue, valorTotal) => {
      const cpf = document.querySelector('#cpf'),
            regexCpf = /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
            regexValor = /^(?:[1-9]\d{1,}|10)$/

      const valor = document.querySelector('#valor'),
            button = document.querySelector('#button-deposito')

      let matchCpf = cpfValue.match(regexCpf),
          totalDinheiro = valorTotal.replace(/[^0-9]/g, ''),

          matchValor = regexValor.test(totalDinheiro),
          matchTotalCpf = matchCpf[1] && matchCpf[2] && matchCpf[3] && matchCpf[4]

      matchTotalCpf?
        cpf.classList.add('checked')
        :
        cpf.classList.remove('checked')

      totalDinheiro === '' || matchValor?
        valor.classList.add('checked')
        :
        valor.classList.remove('checked')

      matchTotalCpf && matchValor? 
        button.disabled = false
        :
        button.disabled = true

      if (totalDinheiro === '') {
        valor.classList.remove('checked')
        valor.value = totalDinheiro
      }

      if (!matchCpf[2]) return matchCpf[1]

      return `${matchCpf[1]}.${matchCpf[2]}.${matchCpf[3]}-${matchCpf[4]}`
    }

  const handleDeposito = () => {
    const h1Code = document.querySelector('.qr-code h1'),
          h2 = document.querySelector('.qr-code h2'),
          input = document.querySelector('#valor')

    let bonusMaior = (input.value * 150) / 50,
        bonusMenor = (input.value * 25) / 25

    scrollTo(0, 0)

    h2.textContent = `R$ ${ input.value }`

    document.querySelector(".article-deposito").classList.remove('active')
    document.querySelector(".qr-code").classList.add('active')

    if (input.value >= 50) {
      h1Code.textContent = `
        BÔNUS DE R$ ${ bonusMaior.toFixed(0) } VÁLIDOS 
      `
    } 

    else {
      h1Code.textContent = `
        BÔNUS DE R$ ${ bonusMenor.toFixed(0) } VÁLIDOS 
      `
    }

    setStartCountdown(true)
  }

  const handleValores = button => {
    const valueLabel = document.querySelector('#valor'),
          buttonValores = document.querySelectorAll('.valores button')

    let valueCpf = document.querySelector('#cpf').value.replace(/\D/g, ''),
        valueLabelDeposito = document.querySelector('#valor').value

    button.preventDefault()

    valueCpf.length <= 11 ?
      handleRegex(valueCpf, valueLabelDeposito)
      :
      handleRegex(valueCpf.slice(0, 11), valueLabelDeposito)

    if (button.currentTarget.classList.contains('10-valor'))
    valueLabel.value = 10

    else if (button.currentTarget.classList.contains('25-valor'))
      valueLabel.value = 25

    else if (button.currentTarget.classList.contains('50-valor'))
      valueLabel.value = 50

    else if (button.currentTarget.classList.contains('100-valor'))
      valueLabel.value = 100

    buttonValores.forEach(items => items.classList.remove("active"))
    button.currentTarget.classList.add("active")

    valueLabel.classList.add("checked")


    if (document.querySelector('#cpf').value.length >= 13) 
      document.querySelector('#button-deposito').disabled = false
  }

  return (

    <section className='deposito'>
      <article className='article-deposito active'> 

        <div className="money">
          <img src={ Depositar }/></div>

        <div>
          <h1>DEPÓSITO</h1>
          <p>Faça seu PIX de forma rápida com pitadas de diversão e praticidade</p>
        </div>

        <form>
          <span>
            <input 
              type="text" 
              id='cpf' 
              name='cpf'
              onInput={ handleLabelCpf } 
              placeholder='CPF'
              required/>
          </span>
          
          <span>
            <input 
              type="number" 
              id='valor' 
              name='valor' 
              onInput={ handleLabelValor }
              placeholder='Valor'
              required/>

              <a className='dica'>Valor Mínimo: R$ 10</a>
          </span>
        </form>

        <div className='valores'>
          <button 
            onClick={ handleValores }
            className='10-valor'>R$1O<br/>R$10 BÔNUS</button>
          <button 
            onClick={ handleValores }
            className='25-valor'>R$25<br/>R$25 BÔNUS</button>
          <button 
            onClick={ handleValores }
            className='50-valor'>R$50<br/>R$150 BÔNUS</button>
          <button 
            onClick={ handleValores }
            className='100-valor'>R$10O<br/>R$300 BÔNUS</button>
        </div>

        <a onClick={ handleDeposito }>
          <button
            className='major-button'
            id='button-deposito'
            disabled>Depositar via PIX</button>
        </a>
      </article>

      <Code shouldStartCountdown={ startCountdown }/>
    </section>

  )
}

export default Deposito
