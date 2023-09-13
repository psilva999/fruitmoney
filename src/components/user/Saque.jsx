import Sacado from '../../assets/imgs/saque.gif'

const Saque = () => {
  const handleLabelCpf = input => {
      let valueCpf = input.target.value,
          valueLabel = document.querySelector('#saque').value

      handleRegex(valueCpf, valueLabel)
    },

    handleLabelValor = () => {
      let valueCpf = document.querySelector('#cpfSaque').value,
          valueLabel = document.querySelector('#saque').value

      handleRegex(valueCpf, valueLabel)
    },

    handleRegex = (cpfValue, valorTotal) => {
      const cpf = document.querySelector('#cpfSaque'),
            regexValor = /^(?:[1-9]\d{1,}|10)$/

      const valor = document.querySelector('#saque'),
            button = document.querySelector('.sacar')

      let totalDinheiro = valorTotal.replace(/[^0-9]/g, ''),
          matchValor = regexValor.test(totalDinheiro)

      cpfValue.length >= 1?
        cpf.classList.add('checked')
        :
        cpf.classList.remove('checked')

      totalDinheiro === '' || matchValor?
        valor.classList.add('checked')
        :
        valor.classList.remove('checked')

      cpfValue.length >= 1 && matchValor? 
        button.disabled = false
        :
        button.disabled = true

      if (totalDinheiro === '') {
        valor.classList.remove('checked')
        valor.value = totalDinheiro
      }
    }

  const handleSaque = (event) => {
    event.preventDefault()
  }

  return (
    <section className='saque'>
      
      <article>
        <div className='money'>
          <img src={ Sacado }/>
        </div>

        <div>
          <h1>SAQUE</h1>

          <li className='container-saldo'>
            <strong>SALDO: </strong>
            
            <strong className='SALDO'>R$ 200.00</strong>
          </li>

          <p>
            <strong>PIX </strong>

            saques instantâneos com muita praticidade.
          </p>
        </div>

        <form onSubmit={ handleSaque }>
          <span>
            <input 
              type="text" 
              id='cpfSaque'
              name='cpfSaque'
              onInput={ handleLabelCpf }
              placeholder='Chave PIX'/>
          </span>

          <span>
            <input 
              type="number" 
              id='saque'
              name='saque'
              onInput={ handleLabelValor }
              placeholder='Valor'/>
            <a className='dica'>Valor Mínimo: R$ 10</a>
          </span>

          <button className='major-button sacar' type='submit' disabled>Sacar via PIX</button>
        </form>

        <div className='transacoes'>
          <h2>Histórico de transações</h2>
          <p>O valor demora em média <strong>1h e 30min</strong> para cair na sua conta bancária</p>
        </div>

        <ul className='historico'>
          <li>
            <strong>R$15.00</strong>
            <strong>11/08/2023 - 17:28:34</strong>
          </li>
        </ul>

      </article>

    </section>
  )
}

export default Saque
