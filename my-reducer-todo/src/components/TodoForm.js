import React, {useState, useReducer} from 'react';
import {initialState, Reducer} from "../reducers/Reducer";
import TodoList from "../components/TodoList";

export const TodoForm = () => {
 const [newTodo, setNewTodo] = useState("");
 const [state, dispatch] = useReducer(Reducer, initialState);

 console.log("i am state", state)

 const handleChanges = e => {
  e.preventDefault();
  setNewTodo(e.target.value)
 };




 

 return(
  <div>
   <input className="todo-input" type="text" name="newTodo" value={newTodo} onChange={handleChanges}
   />
   <button onClick={() => dispatch({type: "ADD_TODO", payload: newTodo})}>Add Todo</button>
   <TodoList  todos={state} dispatch={dispatch} />
  
  </div>
  
 )
}