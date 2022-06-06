import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./components/redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};
rerenderTree(store.getState());
store.subscribe(rerenderTree);
