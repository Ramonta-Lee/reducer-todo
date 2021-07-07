import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        className="todo-input"
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      />
      <Button
        className="add-button"
        variant="contained"
        color="primary"
        onClick={() => addTodo(newTodo)}
      >
        Add Todo
      </Button>
    </div>
  );
};
