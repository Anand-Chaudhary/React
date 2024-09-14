import { useState, useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");
  

  const passwordGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*()_-+~`"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass = str.charAt(char);

      setPassword(pass)
    }
  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
    <div className='w-full h-full'>
      <h1 className='text-4xl tracking-tighter text-center'>Password Generator</h1>
      <div className="bg-zinc-500 h-1/4 w-1/2">

      </div>
    </div>
    </>
  )
}

export default App
