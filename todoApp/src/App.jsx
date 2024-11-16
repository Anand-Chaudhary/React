import { useState } from 'react'
import './App.css'
import { ToDoProvider } from './context'
import TodoForm from './components/Form/TodoForm'


function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev) => [...prev, {id: Date.now, ...todo}]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // prev.map((eachVal) => {
    //   if(eachVal.id === id){
    //     todo
    //   } else{
    //     prevTodo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-sans underline text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
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
