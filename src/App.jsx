import React from "react";
import { TodoProvider } from "./context/TodoContext.jsx";
import  TodoList  from "./components/TodoList.jsx";
const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoProvider>
        <TodoList />
        </TodoProvider>
    </div>
  );
};

export default App;