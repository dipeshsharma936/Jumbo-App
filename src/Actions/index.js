import request from "superagent";

//actionTypes
export const ADD_TODO = "ADD_TODO";
export const ON_DELETE = "ON_DELETE";
export const TITLE_CHANGE = "TITLE_CHANGE";
export const DESC_CHANGE = "DESC_CHANGE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const HANDLE_EB_CLICK = "HANDLE_EB_CLICK";
export const HANDLE_EBBACK_CLICK = "HANDLE_EBBACK_CLICK";

//actioncreators

export function addTodo(e) {
  return {
    type: ADD_TODO,
    e: e
  };
}

export function onDelete(todo) {
  return {
    type: ON_DELETE,
    todo: todo
  };
}
export function titleChange(e) {
  // console.log(e.target.value)
  return {
    type: TITLE_CHANGE,
    title: e.target.value
  };
}
export function descChange(e) {
  // console.log(e.target.value)
  return {
    type: DESC_CHANGE,
    desc: e.target.value
  };
}

export function onClickSearch(inputSearch) {
  // console.log("inputSearch", inputSearch);
  const url = "https://www.googleapis.com/books/v1/volumes";

  return function (dispatch) {
    request
      .get(url)
      .query({ q: inputSearch })
      // .then((response) => response.json())
      .then((data) => {
        // console.log(data.body.items);
        dispatch(addBookSearchResult(data.body.items));
      });
  };
}

export function addBookSearchResult(books) {
  // console.log("movies", movies);

  return {
    type: ADD_SEARCH_RESULT,
    books: books
  };
}

export function handleEbClick(item) {
  // console.log("book", item.volumeInfo.title);
  return {
    type: HANDLE_EB_CLICK,
    item: item
  };
}
export function handleEbbackClick() {
  // console.log("backbook");
  return {
    type: HANDLE_EBBACK_CLICK
  };
}
