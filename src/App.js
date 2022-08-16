import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    if(localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const filterHandler = () => {
    switch (status) {
      case "completed": setFilteredTodos(todos.filter(todo => (todo.completed === true)))
        break;
      case "uncompleted": setFilteredTodos(todos.filter(todo => (todo.completed === false)))
        break;
      default: setFilteredTodos(todos)
    }
  }

  useEffect(() => filterHandler(status), [status, todos])

  return (
    <div className="App">
      <header>
        <h1>Bediwe's Todo List</h1>
      </header>
      <section className='form'>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          status={status}
          filterHandler={filterHandler}
        />
      </section>
      <section className="todos">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          status={status}
          filteredTodos={filteredTodos}
        />
      </section>
    </div>
  );
}

export default App;
