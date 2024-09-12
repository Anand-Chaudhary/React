import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColour] = useState("blue")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 h-8 w-full rounded-full">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
             onClick={()=>{setColour("red")}}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={()=>{setColour("green")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
            <button
            onClick={()=>{setColour("Yellow")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button 
            onClick={()=>{setColour("blue")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={()=>{setColour("violet")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "violet"}}>Violet</button>
            <button 
            onClick={()=>{setColour("white")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "white"}}>White</button>
            <button 
            onClick={()=>{setColour("orange")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
