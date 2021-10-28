import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReduser 
    }
};

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;