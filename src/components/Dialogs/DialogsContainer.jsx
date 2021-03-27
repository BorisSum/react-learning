import {connect} from 'react-redux';
import {sendMessage, updateMessageText} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        friendsData: state.dialogsPage.friendsData,
        messagesData: state.dialogsPage.messagesData,
        messageNewText: state.dialogsPage.messageNewText,
    }
};

export default connect(mapStateToProps, {updateMessageText, sendMessage})(Dialogs);