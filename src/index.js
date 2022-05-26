import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { addPost } from "./components/redux/state";
import { rerenderTree } from "./render";
rerenderTree(state);
reportWebVitals();
