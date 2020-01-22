import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("I am props", props);

  return (
    <div className="todo-list">
      {props.todoList.map(item => (
        <Todo key={item.id} todo={item} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
