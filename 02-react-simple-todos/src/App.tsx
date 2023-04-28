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

   function toggle(status: boolean) {
    return !status
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
                  {todo.title} - Done?
                  <input
                  type='checkbox'
                  checked={status}
                  onChange={ () => setStatus(toggle)}
                  />
                </li>
              
              ))
            }
          </ul>
        )}

        
      </div>
     
    
  )
}

export default App
