import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReduser';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (newMessageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageText));
    }

    return <Dialogs dialogsData = {state.dialogsReduser} sendMessage = { sendMessage } updateNewMessageText = { updateNewMessageText } />
}

export default DialogsContainer;