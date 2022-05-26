import { rerenderTree } from "../../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 1, message: "It's my first post", likesCount: 11 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Charlotte" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "John" },
      { id: 4, name: "Hazel" },
      { id: 5, name: "Luna" },
      { id: 6, name: "Theodore" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 1, message: "How old are you?" },
      { id: 1, message: "How are you?" },
      { id: 1, message: "Nien!" },
    ],
  },
};
export const addPost = (text) => {
  let newPost = {
    id: 5,
    message: text,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderTree(state);
};
export default state;
