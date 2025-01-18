import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 
              TODO: Apply conditional styling for completed todos (e.g., strikethrough)
            */}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.title}
            </span>
            {/* TODO: Implement a delete button to remove a todo */}    
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;