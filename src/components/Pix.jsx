import { ReactComponent as Money } from "../assets/svg/8-Money.svg"
import { ReactComponent as Fire } from "../assets/svg/7-fire.svg"
import { ReactComponent as Paixao } from "../assets/svg/bonecos/paixao.svg"

const Pix = () => {

  return (
    <section className='pix'>

      <article>
        <h1><Money/>TUDO NO PIX & NA HORA!<Fire/></h1>

        <p>Sua grana cai na hora na sua conta bancária, sem burocracias e sem taxas.</p>

        <Paixao className='paixao'/>
      </article>
    </section>

  )
}

export default Pix
