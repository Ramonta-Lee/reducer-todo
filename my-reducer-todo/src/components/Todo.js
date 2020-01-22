import React from "react";

const Todo = ({ todo, toggleComplete }) => {
  const { id, item, completed } = todo;
  console.log("todo props", todo);
  return (
    <div>
      <p
        onClick={() => toggleComplete(id) }
        className={completed ? "TOGGLE_COMPLETE" : "todo"}
      >
        {item}
      </p>

      {/* <p onClick={() => props.toggleCompleted(props.todos.id)} className={`TODO${props.todos.completed ? "_COMPLETE" : ""}`}>{props.todos.complete}</p> */}
    </div>
  );
};

export default Todo;
