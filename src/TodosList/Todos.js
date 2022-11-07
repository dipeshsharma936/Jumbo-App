import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const { store } = props;
  // console.log(store.getState());
  return (
    <div className="todos">
      {store.getState().todos.todos.map((todo, index) => {
        return <TodoItem key={index} store={store} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
