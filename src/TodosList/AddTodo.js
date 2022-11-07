import React, { useState } from "react";
import { addTodo, descChange, titleChange } from "../Actions";

const AddTodo = (props) => {
  const { store } = props;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleOnClick = (e) => {
    if (!title || !desc) {
      alert("Please Fill The Title & Description");
    } else {
      store.dispatch(addTodo(e));
      setDesc("");
      setTitle("");
      // localStorage.setItem(
      //   "todos",
      //   JSON.stringify(store.getState().todos.todos)
      // );
    }
  };

  return (
    <div className="addtodo">
      <form>
        <div>
          <input
            className="input-title"
            type="text"
            placeholder="Todo Title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
              store.dispatch(titleChange(e));
            }}
            value={title}
          />
        </div>
        <div>
          <input
            className="input-description"
            type="text"
            placeholder="Todo Description"
            required
            onChange={(e) => {
              setDesc(e.target.value);
              store.dispatch(descChange(e));
            }}
            value={desc}
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            // store.dispatch(addTodo(e));
            // setDesc("");
            // setTitle("");
            handleOnClick(e);
          }}
        >
          Add-Todo
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
