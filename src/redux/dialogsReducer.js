const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Volodya'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Sergo'},
        {id: 4, name: 'Mark'}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Darova'},
        {id: 3, message: 'Privetylchenko'},
        {id: 4, message: 'Privet'}
      ],
      newMessageText: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };

        default: 
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})

export const updateNewMessageText = (newMessageText) =>
  ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    text: newMessageText
})