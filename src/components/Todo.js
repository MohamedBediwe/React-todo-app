import React from "react";
import trash from '../images/trash.svg'
import check from '../images/check.svg'

function Todo({ id, text, completed, todos, setTodos }) {
  const handleCheck = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button onClick={() => handleCheck(id)} className="complete-btn">
        {/* <i className="fas fa-check"></i> */}
        <img src={check} alt="check item" />
      </button>
      <button onClick={() => handleDelete(id)} className="trash-btn">
        <img src={trash} alt="remove item" />
        
      </button>
    </div>
  );
}

export default Todo;
