const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE_TEXT";
const SEND_MESSAGE = "SAND-MESSAGE";
let initialState = {

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
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.body
            }


        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: text
});
export default dialogsReducer;