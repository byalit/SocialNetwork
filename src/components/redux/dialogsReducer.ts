const SEND_MESSAGE = "SAND-MESSAGE";
type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
let initialState = {

    dialogs: [
        {id: 1, name: "Charlotte"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "John"},
        {id: 4, name: "Hazel"},
        {id: 5, name: "Luna"},
        {id: 6, name: "Theodore"},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How old are you?"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Nien!"},
    ] as Array<MessagesType>
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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
type SendMessageCreatorActionType={
    type: typeof SEND_MESSAGE
    newMessageBody:string
}
export const sendMessageCreator = (newMessageBody:string):SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;