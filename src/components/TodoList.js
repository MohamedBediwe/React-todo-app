import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {

  const todosElements = filteredTodos.map(
    todo => (
      <Todo 
        id={todo.id} 
        text={todo.text} 
        completed={todo.completed} 
        todos={todos} 
        setTodos={setTodos}
        key={todo.id}
      />
    )
  )

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todosElements}
      </ul>
    </div>
  );
}

export default TodoList;
