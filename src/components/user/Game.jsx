import { useEffect } from 'react'

// import AlternativePass from './game/fruitmoney.html'

const Game = () => {

  const iframeStyles = {
    width: '100%',
    top: '0',
    left: '0',
    position: 'absolute',
    height: '100vh', 
    zIndex: '1000',
    border: 'none', 
  };

  useEffect(() => {
    window.scrollTo(0, 0)

    document.body.classList.add('game')
    document.documentElement.classList.add('game')
  })
 
  return (
    <main className='full-page'>
      <iframe 
      src='https://fruitmoney-teste.web.app/'
      style={ iframeStyles }></iframe>
    </main>
  )
}

export default Game
