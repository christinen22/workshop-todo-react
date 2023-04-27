import { useState } from 'react'
import './App.css'

type Todo = {
  id: number
  title: string
  status: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Hajhaj", status: false}
  ])

  const [newTodoTitle, setNewTodoTitle] = useState('')

  const [status, setStatus] = useState(false)

  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newTodo: Todo = {
      id: 1,
      title: newTodoTitle,
      status: status
    }
    setTodos([...todos, newTodo])

    setNewTodoTitle('')
  }

    const handleTodoToggle = (todoToToggle: Todo) => {
      setTodos(
        todos.filter(todo => todo !== todoToToggle)
      )

  } 


  return (
      <div className='App'>
        <h1>Todos</h1>

        <h2>Shit that has to be done:</h2>

        <form onSubmit={handleTodoSubmit} className='mb-3'>
          <div className='input-group'>
            <input 
              type="text" 
              className='form-control'
              placeholder='Todo title'
              onChange={ e => setNewTodoTitle(e.target.value) }
              value={newTodoTitle}
              required
            />

            <button
              type='submit'
              className='btn btn-primary'
              
            >
              Create
            </button>
          </div>
        </form>

        {todos.length > 0 && (
          <ul>
            {
              todos.map( (todo, index) => (
                <li key={index}>
                  {todo.title} -  {todo.status} Done?
                  <input
                  type='checkbox'
                  checked={status}
                  onClick={() => handleTodoToggle}
                  />
                  <button
                    className='btn btn-success btn-sm ms-1'
                    onClick={() => handleTodoToggle(todo)}
                  > ✔️</button>
                </li>
              
              ))
            }
          </ul>
        )}

        
      </div>
     
    
  )
}

export default App
