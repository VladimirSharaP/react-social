import React from 'react';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import dia from './Dialogs.module.css';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogs = props.dialogsData.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} />);
    let messages = props.dialogsData.messagesData.map(m => <Message id={m.id} message={m.message} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = () => {
        let newMessageText = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessageText));
    }

    return (
        <div className={dia.dialogs}>
            <div className={dia.dialogsItems}>
                <div>
                    {dialogs}
                </div>
            </div>
            <div className={dia.messages}>
                <div>
                    {messages}
                </div>
                <div>
                <textarea 
                    onChange={updateNewMessageText}
                    ref={newMessageElement} 
                    value={props.dialogsData.newMessageText} />
                </div>
                <div><button onClick={ sendMessage }>New Message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;