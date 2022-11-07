import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

import App from "./App";
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>
);
