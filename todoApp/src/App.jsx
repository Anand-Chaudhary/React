import { useState } from 'react'
import './App.css'
import { ToDoProvider } from './context'

function App() {
  const [todo, setTodo] = useState([])
  const addTodo = (todo) =>{
    setTodo((prev) => [...prev, {id: Date.now, ...todo}]);
  }

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-sans underline text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ ToDoProvider>
  )
}

export default App
