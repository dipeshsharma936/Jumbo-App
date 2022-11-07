import { ADD_TODO, DESC_CHANGE, ON_DELETE, TITLE_CHANGE } from "../Actions";

let gettodos;
if (localStorage.getItem("todos")) {
  gettodos = JSON.parse(localStorage.getItem("todos"));
  // console.log(gettodos);
} else {
  gettodos = [];
  // console.log(gettodos);
}

const initialTodosState = {
  todos: gettodos,
  inputtitle: "",
  inputdesc: ""
};
export function todos(state = initialTodosState, action) {
  switch (action.type) {
    case ADD_TODO:
      action.e.preventDefault();
      // console.log(state.inputtitle,state.inputdesc);
      const newtodo = { title: state.inputtitle, desc: state.inputdesc };
      const newtodos = [...state.todos];
      // // console.log(newtodos);
      const newtodos1 = [newtodo, ...newtodos];
      // console.log(newtodos1);

      return {
        ...state,
        todos: newtodos1,
        inputdesc: "",
        inputtitle: ""
      };

    case ON_DELETE:
      // console.log(action.todo);
      const filteredArray = state.todos.filter(
        (todo) => todo.desc !== action.todo.desc
      );
      return { ...state, todos: filteredArray };

    case TITLE_CHANGE:
      // console.log(action.title);

      return { ...state, inputtitle: action.title };

    case DESC_CHANGE:
      return { ...state, inputdesc: action.desc };

    default:
      return state;
  }
}
