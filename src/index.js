import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./components/redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter><App  /></BrowserRouter>
        </Provider>
    </React.StrictMode>
  );


