import React from "react";

function Form({inputText, setInputText, todos, setTodos, setStatus, filterHandler}) {
  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([...todos, {text: inputText, completed: false, id: Date.now()}])
      setInputText('')
    }
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
    filterHandler()
  }

  return <form>
    <input
      type="text"
      value={inputText}
      onChange={handleChange}
      name="input"
      className="todo-input"
    />
    <button
      className="todo-button"
      type="submit"
      onClick={handleSubmit}
    >
      +
    </button>
    <div className="select">
      <select onChange={handleStatus} name="todos" className="filter-todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>;
}

export default Form;
