import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState ([ //todos= to Dos setTodos = set to dos
    {
      id: 1,
      texto: "Ir para a academia",
      categoria: "(Exercício)",
      status: false
    },
    {
      id: 2,
      texto: "Fazer tarefa do +praTI",
      categoria: "(+praTI)",
      status: true
    }
  ])

  const concluirTarefa = (id) =>{
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, status: !todo.status} : todo
    ))
  }

  return <div className='app'>
    <h1>Lista de tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="conteudo">
            <input type="checkbox" checked={todo.status} onChange={() => concluirTarefa(todo.id)}/>
            <p>{todo.categoria}</p>
            <p>{todo.texto}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default App
