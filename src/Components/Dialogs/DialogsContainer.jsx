import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReduser 
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { 
            dispatch(sendMessageActionCreator()) 
        },
        updateNewMessageText: (newMessageText) => {
            dispatch(updateNewMessageTextActionCreator(newMessageText))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;