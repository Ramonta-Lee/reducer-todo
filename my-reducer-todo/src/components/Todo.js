import React from "react";

const Todo = ({ dispatch, todo }) => {
  const { id, item, completed } = todo;
  console.log("todo props", todo);
  return (
    <div>
      <p
        onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: todo })}
        className={completed ? "TOGGLE_COMPLETE" : "todo"}
      >
        {item}
      </p>

      {/* <p onClick={() => props.toggleCompleted(props.todos.id)} className={`TODO${props.todos.completed ? "_COMPLETE" : ""}`}>{props.todos.complete}</p> */}
    </div>
  );
};

export default Todo;
