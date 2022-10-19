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
    ]
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;