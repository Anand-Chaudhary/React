import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  let passwordHook = useRef(null);


  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()_-+~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      setPassword(pass)
    }
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordHook.current?.select();
    passwordHook.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGen();
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-700 shadow-md rounded-lg p-4 m-8'>
        <h1 className='text-4xl tracking-tighter my-3 mb-5 font-bold text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none text-black w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordHook}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='py-2 px-3 bg-blue-500'>Copy</button>
        </div>
        <div className="flex text-sm tracking-tighter gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
