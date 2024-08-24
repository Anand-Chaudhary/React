import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    username : "Aakash",
    age : 21
  };
  let arr = [1, 2, 3];

  return (
    <>
    <h1 className='p-4 bg-white text-black rounded-xl mb-5'>Using Tailwind</h1>
    <Card username = "Chai aur Code" btnText = "Click me please"/>
    <Card username= "Aakash"/>
    </>
  )
}

export default App
