import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import HttpService from './utils/httpService';


const App = () => {
  const [currency, setCurrency] = useState({from: 'USD', to: 'USD'})
  const [currencies, setCurrencies] = useState([])
  const [amount, setAmount] = useState({from: 1, to: 1})
  const handleChangeCurrency = ({target: {value, id}}) => {
    console.log(id)
    setCurrency(state => ({...state, [id]: value}))
  }

  const handleChangeAmount = ({target: {value, id}}) => {
    console.log(id)
    setAmount(state => ({...state, [id]: value}))
  }

  const fetchCurrency = useCallback(async () => {
    const data = await HttpService.get({url: `/api/currency/${currency.from}`})
    setCurrencies(data.conversion_rates)
  }, [currency])

  const convertCurrency = useCallback(async ({from, to, amount}) => {
    const data = await HttpService.get({url: `/api/currency/convert`, body: JSON.stringify({from, to, amount})})
    // setCurrencies(data.conversion_rates)
  }, [currency])

  useEffect(() => {
    fetchCurrency()
    convertCurrency({from: 'USD', to: 'AED', amount: 5})
  }, [])

  return (
    <div className="App">
      <h1>Dwight Funding Assesment</h1>
      <div className='currency-selectors'>
      <select id="from" onChange={handleChangeCurrency} value={currency.from}>
               {Object.keys(currencies).map(key => <option key={key} value={key} >{key}/{currencies[key]}</option>
               )}
               </select>
               <p></p>
           <select id="to" onChange={handleChangeCurrency} value={currency.to}>
               {Object.keys(currencies).map(key => <option key={key} value={key} >{key}/{currencies[key]}</option>
               )}
               </select>
               <p></p>
           </div>

           <div className='currency-inputs'>
      <input id="from" type="number" onChange={handleChangeAmount} value={amount.from}/>
           <input id="to" type="number" onChange={handleChangeAmount} value={amount.to}/>
           </div>

           <button onClick={convertCurrency}>convert</button>
    </div>
  ); 
}

export default App;
