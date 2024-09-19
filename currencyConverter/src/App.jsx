import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {

  

  return (
    <>
      <div className="tracking-tighter text-3xl text-center font-medium">Currency Converter</div> 
      <InputBox />
    </>
  )
}

export default App
