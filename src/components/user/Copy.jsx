import { useState, useEffect } from 'react'

const Copy = () => {
  const [copied, setCopied] = useState(false)
  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    setRandomString(generateRandomString(15))
  }, [])

  const generateRandomString = (length) => {
    const characters = 'aBcDeFgHiJkLmNo'
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength)
      result += characters.charAt(randomIndex)
    }
    return result
  }

  const copyCode = () => {
    let texto = document.querySelector('.link-indique').textContent + randomString

    navigator.clipboard.writeText(texto)

    let tempo = 2,
      container = setInterval(countdown, 1000)

    setCopied(true)

    function countdown() {
      tempo--

      if (tempo === 0) {
        setCopied(false)
        clearInterval(container)
      }
    }
  }

  return (
    <span className='copy-filiados' onClick={copyCode}>
      <p className='link-indique'>
        https://fruitmoney.com.br/auth/register?{randomString}
      </p>
      <button>{copied ? 'Copiado!' : 'Copiar'}</button>
    </span>
  )
}

export default Copy
