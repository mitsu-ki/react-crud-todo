import React, { createContext } from "react";
import { useRender } from "../hooks/render";
import Form from "./Form";
import TodoList from "./TodoList";

export const DispatchContext = createContext();

const App = () => {
  const [todos, dispatch] = useRender("http://localhost:3001/TODOS");
  console.log(todos);
  return (
    <div className="todo-wrap">
      <DispatchContext.Provider value={dispatch}>
        <TodoList todos={todos} />
        <Form />
      </DispatchContext.Provider>
    </div>
  );
};

export default App;
