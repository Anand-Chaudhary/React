import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  let [disable, setDisable] = useState(true);

  const addValue = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      setDisable(false); // Enable the decrease button when the counter is above 0
      return newCounter;
    });
  };

  const decreaseValue = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter - 1;
      if (newCounter <= 0) {
        setDisable(true); // Disable the decrease button when the counter reaches 0
      }
      return newCounter;
    });
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add Value</button><br /><br />
      <button onClick={decreaseValue} disabled={disable}>Decrease Value</button>
    </>
  )
}

export default App