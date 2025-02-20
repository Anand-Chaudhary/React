import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("Component rerendered Successfully");
    
  }, [])

  const onClick = ()=>{
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
      <p>Button clicked {count} times</p>
    </div>
  )
}

export default App