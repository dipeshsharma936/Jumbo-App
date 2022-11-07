import React from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import Todos from "./Todos";

const Home = (props) => {
  const { store } = props;
  return (
    <div className="home">
      <Header />
      <AddTodo store={store} />
      <Todos store={store} />
    </div>
  );
};
export default Home;
