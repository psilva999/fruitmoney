import PropTypes from 'prop-types';

import { ReactComponent as Pix } from "../../assets/svg/3-pix.svg"
import { ReactComponent as Emoji } from "../../assets/svg/1-emoji.svg"
import QRCode from 'qrcode.react';
import { useEffect, useState } from "react"

const Code = ({ shouldStartCountdown }) => {
  const initialDuration = 90; // 120 seconds
  const [duration, setDuration] = useState(initialDuration),
        [copied, setCopied] = useState(false)

  const copyPix = () => {
    let texto = document.querySelector('.to-copy').textContent
    setCopied(true)

    navigator.clipboard.writeText(texto)
  }

  useEffect(() => {
    if (shouldStartCountdown && duration > 0) {
      const interval = setInterval(() => {
        if (duration > 0) {
          setDuration(prevDuration => prevDuration - 1);

          if (duration <= 1) {
            document.querySelector('.qr-code h3').style.animation = 'none'

            document.querySelector('.qr-code h1').textContent = 'Seu Bônus expirou'
          }
        }

        else {
          clearInterval(interval);
        } 
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [duration, shouldStartCountdown]);

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return (
    <article className='qr-code'>
      <div className='money'><Pix/></div>

      <h1>BÔNUS DE R$ 25 VÁLIDOS</h1>

      <h3>POR {' '}
        { minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </h3>

      <div> 
        <li>
          <QRCode size={ 270 }/>
        </li>

        <p className='to-copy'>
          ipsum heigh sit amet consectetur adipisicing elit. Consectetur sequi cumque beatae debitis tuta
          ipsum heigh sit amet consectetur adipisicing elit. Consectetur sequi cumque beatae debitis tuta
          ipsum heigh sit amet consectetur adipisicing elit. Consectetur sequi cumque beatae debitis tuta
          ipsum heigh sit
        </p>
      </div>

      <h2>R$25,00</h2>

      <a onClick={ copyPix }><button className='major-button copy'>
      { copied? 'Pix copiado' : 'Copiar Código PIX' }  
      </button></a>

      <p className='emoji'>PIX CREDITADO NA HORA! <span><Emoji/></span></p>
    </article>
  )
}

export default Code

Code.propTypes = {
  shouldStartCountdown: PropTypes.bool.isRequired,
};
