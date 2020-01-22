import React from "react";

export const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      console.log("console", state, action);
      const toggler = state.todos.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
          return item;
        } else return item;
      });
      return {
        todos: toggler
      };

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
      return {
        todos: state.todos.filter(e => !e.completed)
      };
    default:
      return state;
  }
};
