import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCurrencies from "../hooks/useSelectCurrencies";
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Form = () => {
  const [cryptos, setCryptos] =  useState([])

  const [ currency, SelectCurrencies ] = useSelectCurrencies('Select your currency', currencies)

  useEffect(() => {
    const queryAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const response = await fetch(url)
      const result = await response.json() 

      const cryptosArray = result.Data.map( crypto => {
        const obj = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        
        return obj
      })

      setCryptos(cryptosArray)

    }
    queryAPI()

  }, [])

  SelectCurrencies()
  
  return (
    <form>
      <SelectCurrencies />
      <InputSubmit 
        type="submit" 
        value="Quote" 
      />
    </form>
  )
}

export default Form;
