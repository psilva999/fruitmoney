import { ReactComponent as Emoji } from "../assets/svg/1-emoji.svg"
import { ReactComponent as Email } from "../assets/svg/6-email.svg"


const EmailEnviado = () => {
  return (

    <div className='email-enviado'>
      <Email/>

      <h1>Email Enviado</h1>

      <p>Clique no link que enviamos para o seu E-mail para mudar a senha</p>
      <Emoji/>
    </div>
  )
}

export default EmailEnviado