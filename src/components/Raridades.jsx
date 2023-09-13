import { ReactComponent as Quinteto } from '../assets/svg/5-quinteto.svg'

const Raridades = () => {

  return (

    <section className='raridades'>
      <article>
        <div className='base'> <h1 className='medium-size'>RARIDADES</h1>
          <p>
            Cada fruta possui um valor diferente que você pode ganhar ao cortá-la, confira nossa tabela.
          </p>
        </div>

        <section>
          <div className='tipos'> <h2>TIPOS</h2>
            <ul>
              <li> <strong>Mais comum</strong>
                <p>Maçã</p>
              </li>

              <li> <strong>Menos Comum</strong>
                <p>Laranja</p>
              </li>

              <li> <strong>Raro</strong>
                <p>Abacaxi</p>
              </li>

              <li> <strong>Super Raro</strong>
                <p>Fruta Premiada</p>
              </li>
            </ul>

            <Quinteto/>
          </div>

          <div className='variados'> <h2>Variações</h2>
            <ul>
              <li> <strong>R$0.05</strong>
                <p>Maçã</p>
              </li>

              <li> <strong>R$0.10</strong>
                <p>Melância</p>
              </li>

              <li> <strong>R$0.20</strong>
                <p>Kiwi</p>
              </li>

              <li> <strong>R$0.25</strong>
                <p>Cereja</p>
              </li>

              <li> <strong>R$0.30</strong>
                <p>Manga</p>
              </li>

              <li> <strong>R$0.35</strong>
                <p>Banana</p>
              </li>

              <li> <strong>R$0.40</strong>
                <p>Limão</p>
              </li>

              <li> <strong>R$0.45</strong>
                <p>Pêssego</p>
              </li>

              <li> <strong>R$0.50</strong>
                <p>Morango</p>
              </li>

              <li> <strong>R$0.75</strong>
                <p>Laranja</p>
              </li>

              <li> <strong>R$1.00</strong>
                <p>Abacaxi</p>
              </li>

              <li> <strong>R$100</strong>
                <p>Fruta Premiada</p>
              </li>
            </ul>
            
          </div>
        </section>

      </article>
    </section>

  )
}

export default Raridades
