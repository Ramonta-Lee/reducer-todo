import React from "react";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
     // console.log("console", state, action)
     const toggler = state.todos.map(item => {
      if(item.id === action.payload.id){
        item.completed = !item.completed
      }
      else return item;
     })
      return { 
       todos: [...state.todos,
        toggler ]};
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "DELETE_TODO":
      return state.filter(e => !e.completed);
    default:
      return state;
  }
};
