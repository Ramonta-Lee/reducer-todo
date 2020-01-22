import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("I am props", props);


  return (
    <div className="todo-list">
      {props.todos.todos.map(item => (
        <Todo
          key={item.id}
          todo={item}
          dispatch={props.dispatch}
          // toggleCompleted={toggleCompleted}
        />
      ))}
      <button className="DELETE_TODO">Delete Completed Todos</button>
    </div>
  );
};

export default TodoList;
