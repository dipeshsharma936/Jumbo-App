import { combineReducers } from "redux";

import { eBook } from "./eBook";
import { todos } from "./todos";

export default combineReducers({ todos: todos, eBook: eBook });
