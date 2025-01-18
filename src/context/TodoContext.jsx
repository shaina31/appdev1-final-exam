import React, { useContext, createContext, useState, useEffect } from "react";

const TodoContext = createContext();// TODO: Create a context for the Todo app (use createContext)

export const TodoProvider = ({ children }) => {
    // TODO: Initialize state for todos and loading
    const [todos, setTodos] = useState([
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: true },
        { id: 3, title: "Todo 3", completed: false },
        { id: 4, title: "Todo 4", completed: true },
        { id: 5, title: "Todo 5", completed: true },
        { id: 6, title: "Todo 6", completed: false },
        { id: 7, title: "Todo 7", completed: true },
        { id: 8, title: "Todo 8", completed: true },
        { id: 9, title: "Todo 9", completed: true },
        { id: 10, title: "Todo 10", completed: true },
    ]);
   
 // TODO: Implement useEffect to fetch todos when the component mounts
 const [loading, setLoading] = useState(false); 
  

  // TODO: Implement addTodo function to add a new todo to the list
    const addTodo = (todo) => {
        setTodos([...todos, 
          { id: todos.length + 1, title:todo, completed: false }  
    ]);
    };
  

  // TODO: Implement deleteTodo function to remove a todo by its ID
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
 

  // TODO: Implement toggleComplete function to toggle the completion status of a todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <TodoContext.Provider
          value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}
        >
          {children}
        </TodoContext.Provider>
      );
    };

// TODO: Implement a custom hook (useTodos) to consume the TodoContext and return the values from the context
export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
};
