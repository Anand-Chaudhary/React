import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='p-4 bg-white text-black rounded-xl mb-5'>Using Tailwind</h1>
    </>
  )
}

export default App
