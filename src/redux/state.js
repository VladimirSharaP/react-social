import { profileReduser } from './profileReduser';
import { dialogsReduser } from './dialogsReduser';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profile: {
      postData: [
        {id: 1, message: 'Hi!', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 18},
        {id: 3, message: 'Nice!', likesCount: 7}
      ],
      newPostText: ''
    },
    dialogs: {
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
    }
  },
  _renderEntireTree() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profile.newPostText,
      likesCount: 0
    };
  
    this._state.profile.postData.push(newPost);
    this._state.profile.newPostText = '';
    this._renderEntireTree(this._state);
  },
  updateNewPostText(newPostText) {
    this._state.profile.newPostText = newPostText;
    this._renderEntireTree(this._state);
  },

  sendMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogs.newMessageText
    };
  
    this._state.dialogs.messageData.push(newMessage);
    this._state.dialogs.newMessageText = '';
    this._renderEntireTree(this._state);
  },
  updateNewMessageText(newMessageText) {
    this._state.dialogs.newMessageText = newMessageText;
    this._renderEntireTree(this._state);
  },
  
  dispatch(action) {
    this._state.profile = profileReduser(this._state.profile, action);
    this._state.dialogs = dialogsReduser(this._state.dialogs, action);

    this._renderEntireTree(this._state);
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNeewPostTextActionCreator = (newPostText) =>
  ({
    type: UPDATE_NEW_POST_TEXT, 
    text: newPostText
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (newMessageText) =>
  ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    text: newMessageText
})


export default store;