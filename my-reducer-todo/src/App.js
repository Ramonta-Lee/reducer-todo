import React, { useReducer } from "react";
import Button from "@material-ui/core/Button";
import { TodoForm } from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import { Reducer } from "./reducers/Reducer";

const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO" });
  };

  return (
    <div className="App">
      <h1>Today's Todos:</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList toggleComplete={toggleComplete} todoList={state.todos} />
      <Button
        variant="contained"
        className="DELETE_TODO"
        onClick={() => deleteTodo()}
      >
        Delete Completed Todos
      </Button>
    </div>
  );
}

export default App;
