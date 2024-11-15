import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-sans underline text-3xl text-white tracking-tighter'>Manage Todos</h1>
    </>
  )
}

export default App
