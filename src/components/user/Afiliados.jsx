import { useEffect } from 'react'
import Grafico from '../../assets/imgs/grafico.jpg'
import Copy from './Copy'

const Afiliados = () => {

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
    <section className='afiliados'>

      <article id='change-background'>
        <img className='money' src={ Grafico }/>

        <div>
          <h1>PAINEL DE AFILIADOS</h1>
          <p>Resumo dos seus resultados como afiliado</p>
        </div>

        <Copy/>

        <div className='extrato'>
          <h2>Painel de Afiliados:</h2>

          <p>Contabilização pode demorar até 1 hora</p>

          <li className='afiliado'>
            <strong>Afiliado de:</strong>
            <strong>Ninguém</strong>
          </li>
        </div>

        <nav>
          <ul>
            <li className='cadastros'>
              <strong>Cadastros</strong>
              <strong>0000</strong>
            </li>

            <li className='ganhos'>
              <strong>Ganhos</strong>
              <strong>R$ 0.00</strong>
            </li>

            <li className='indicação'>
              <strong>Indicação</strong>
              <strong>R$ 0.00</strong>
            </li>

            <li className='bonus'>
              <strong>Bônus</strong>
              <strong>R$ 0.00</strong>
            </li>
          </ul>

          <ul>
            <li className='total-cadastros'>
              <strong>Cad. ativos</strong>
              <strong>0 cadastros</strong>
            </li>

            <li className='valor-ativo'>
              <strong>Valor por ativo</strong>
              <strong>R$ 0.00</strong>
            </li>

            <li className='porcentagem-recorrencia'>
              <strong>Recorrência</strong>
              <strong>0%</strong>
            </li>

            <li className='porcentagem-indicados'>
              <strong>Indicação</strong>
              <strong>0%</strong>
            </li>
          </ul>
        </nav>

        <nav className='equipe'>
          <h2>Minha Equipe:</h2>

          <ul>
            <li>
              <strong>Juliana</strong>
              <strong>12/10/2023</strong>
            </li>

            <li>
              <strong>Rafaela</strong>
              <strong>08/10/2023</strong>
            </li>
          </ul>
        </nav>

        <a href="https://t.me/fruitmoneygame" target='_blank' rel='noreferrer'>
          <button className='major-button'>Telegram</button>
        </a>

        <div>
        </div>

      </article>
    </section>

  )
}

export default Afiliados
