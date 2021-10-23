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

export const dialogsReduser = (state = initialState, action) => {

    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default: 
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (newMessageText) =>
  ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    text: newMessageText
})