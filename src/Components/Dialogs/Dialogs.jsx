import React from 'react';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import dia from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogs = props.dialogsData.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} />)
    let messages = props.dialogsData.messagesData.map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={dia.dialogs}>
            <div className={dia.dialogsItems}>
                {dialogs}
            </div>
            <div className={dia.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;