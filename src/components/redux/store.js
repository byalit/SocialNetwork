import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 1, message: "It's my first post", likesCount: 11},
            ],
            newPostText: "Hello World",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Charlotte"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "John"},
                {id: 4, name: "Hazel"},
                {id: 5, name: "Luna"},
                {id: 6, name: "Theodore"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 1, message: "How old are you?"},
                {id: 1, message: "How are you?"},
                {id: 1, message: "Nien!"},
            ],
            newMessageBody: "",
        },
        sidebarPage: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._rerenderTree(this._state);
    }
};




export default store;
window.store = store;



