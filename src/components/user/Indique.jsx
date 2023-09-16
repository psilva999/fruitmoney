import { NavLink } from "react-router-dom"

import { handleItems } from '../events/handleHeader'
import Indicado from '../../assets/imgs/indique.gif'
import Copy from './Copy';
import { useEffect } from "react";

const Indique = () => {

  useEffect(() => {
    const arrayColors = ['purple', 'red', 'blue']

    document.querySelectorAll('#change-background')
    .forEach(article => {
      article.classList.remove(...article.classList)

      const randomIndex = Math.floor(Math.random() * arrayColors.length);
      article.classList.add(`${ arrayColors[randomIndex] }`)
    })
  })
  
  const toSaque = () => {
          handleItems(document.querySelectorAll('.abas li'), 1)
          window.scrollTo(0, 0)
        }

  return (

    <section className='indique'>
      <article id='change-background'> 

        <li className='money'>
          <img src={ Indicado }/>
        </li>

        <div>
          <h1>PAINEL DE INDICAÇÃO</h1>
          
          <p>Seu link de indicação é:</p>

          <Copy/>
        </div>
        
        <div>
          <h2>EXTRATO</h2>
          <li>
            <strong>Saldo disponível</strong>
            <strong>R$0,00</strong>
          </li>


          <NavLink to="/fruitmoney/saque">
            <button 
              className='major-button'
              onClick={ toSaque }>Sacar saldo disponível</button>
          </NavLink>
        </div>

      </article>
    </section>
  )
}

export default Indique
