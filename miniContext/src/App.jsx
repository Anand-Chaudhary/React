import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Login/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App
