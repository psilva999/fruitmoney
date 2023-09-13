import { ReactComponent as Logo } from "../assets/svg/logo-footer.svg"
import { ReactComponent as Pix } from "../assets/svg/3-pix.svg"

const Footer = () => {
  return (

    <footer>
      <section>
        <Logo/>

        <div>
          <article> <h2>Main Menu</h2>
            <ul>
              <li>Sobre</li>
              <li>Raridades</li>
              <li>Jogar</li>
            </ul>
          </article>

          <article> <h2>Infos</h2>
            <ul>
              <li>Sobre PIX</li>
              <li>Saque</li>
              <li>Nosso Jogo</li>
            </ul>
          </article>

        </div>
      </section>

      <div className='copy'>
        <p>&copy; Copyright Fruits Money</p>

        <Pix/>
      </div>
    </footer>
  )
}

export default Footer
