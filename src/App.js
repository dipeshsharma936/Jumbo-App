import React from "react";
import "./styles.css";
import TodosList from "./TodosList/TodosList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import EBook from "./EBook/EBook";

class App extends React.Component {
  componentDidMount() {
    // console.log(this.props.store.getState());
    this.props.store.subscribe(() => {
      this.forceUpdate();
      // console.log(this.props.store.getState());
      localStorage.setItem(
        "todos",
        JSON.stringify(this.props.store.getState().todos.todos)
      );
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/todoslist"
              element={<TodosList store={this.props.store} />}
            />
            <Route path="/ebook" element={<EBook store={this.props.store} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
