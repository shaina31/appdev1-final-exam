import React from "react";

// TODO: Identify the missing parameters required in TodoForm
// Hint: The parameters are destructured from the props object

const TodoForm = ({newTodo, setNewTodo, addTodo}) => {
    const handleAddTodo = () => {
        addTodo(newTodo);
        setNewTodo("");
    };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo title"
      />
      <button onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;