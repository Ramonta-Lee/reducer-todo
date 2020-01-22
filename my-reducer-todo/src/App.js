import React from "react";
import {TodoForm} from "./components/TodoForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Today's Todos:</h1>
      <TodoForm />
    </div>
  );
}

export default App;
