import {connect} from 'react-redux';
import {sendMessageCreator, updateMessageTextCreator} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        friendsData: state.dialogsPage.friendsData,
        messagesData: state.dialogsPage.messagesData,
        messageNewText: state.dialogsPage.messageNewText,
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        updateMessageText: (text) => { dispatch(updateMessageTextCreator(text)); },
        sendMessage: () => { dispatch(sendMessageCreator()); }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);


export default DialogsContainer;