import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



const root = ReactDOM.createRoot(document.getElementById("root"));
let dialogs = [
    {id:1,name:'Charlotte'},
    {id:2,name:'Andrew'},
    {id:3,name:'John'},
    {id:4,name:'Hazel'},
    {id:5,name:'Luna'},
    {id:6,name:'Theodore'}
]
let messages = [
    {id:1, message:'Hi'},
    {id:1, message:'How old are you?'},
    {id:1, message:'How are you?'},
    {id:1, message:'Nien!'}

]
let posts = [
    {id:1, message: 'Hi, how are you?', likesCount: 12},
    {id:1, message: 'It\'s my first post', likesCount: 11}
]
root.render(

  <React.StrictMode>

    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
