const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 1, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "Hello World",
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
  },
  _rerenderTree() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderTree(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
window.store = store;
