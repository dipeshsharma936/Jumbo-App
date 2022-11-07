import React from "react";
import { onDelete } from "../Actions";

const TodoItem = (props) => {
  const { todo, store } = props;

  const handleOnDelete = () => {
    store.dispatch(onDelete(todo));
    // localStorage.setItem("todos", null);
    // localStorage.setItem("todos", store.getState().todos.todos);
  };

  return (
    <div className="todoitem">
      <h3 className="title">{todo.title}</h3>
      <h4 className="description">{todo.desc}</h4>
      <div>
        <button className="delete-btn" onClick={handleOnDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
