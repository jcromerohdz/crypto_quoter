import { useState, useEffect } from 'react'
import Form from './components/Form'
import styled from '@emotion/styled'
import CriptoImage from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 922px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  width: 90%;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [currencies, setCurrencies] = useState({})
  const [result, setResult] = useState({})

  useEffect(() => {
    if(Object.keys(currencies).length > 0){
      const quoteCrypto = async () => {
        const { currency, cryptocurrency } = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`

        const response = await fetch(url)
        const result = await response.json()

        setResult(result.DISPLAY[cryptocurrency][currency])
      }

      quoteCrypto()
    }

  }, [currencies])

  return (
    <div>

      <Container>
        <Image 
          src={CriptoImage}
          alt="crypto images" 
        />

        <div>
          <Heading>Instant Crypto Quoter</Heading>
          <Form 
            setCurrencies={setCurrencies}
          />
        </div>
      </Container>
    </div>
  )
}

export default App
