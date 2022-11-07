import {
  ADD_SEARCH_RESULT,
  HANDLE_EBBACK_CLICK,
  HANDLE_EB_CLICK
} from "../Actions";

const getSearchItems = [];

const initialEbookState = {
  searchItems: getSearchItems,
  displayHandler: false,
  clickItem: {}
};

export function eBook(state = initialEbookState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      // console.log("hie", state.searchItems);

      return { ...state, searchItems: action.books, displayHandler: false };
    case HANDLE_EB_CLICK:
      // console.log("hie", state);

      return { ...state, displayHandler: true, clickItem: action.item };
    case HANDLE_EBBACK_CLICK:
      return { ...state, displayHandler: false };

    default:
      return state;
  }
}
