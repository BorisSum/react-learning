import StoreContext from '../../StoreContext';
import {sendMessageCreator, updateMessageTextCreator} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            const state = store.getState().dialogsPage;

            const sendMessage = () => {
                store.dispatch(sendMessageCreator());
            };
        
            const updateMessageText = (text) => {
                store.dispatch(updateMessageTextCreator(text));
            };

            return <Dialogs
                friendsData={state.friendsData}
                messagesData={state.messagesData}
                messageNewText={state.messageNewText}
                sendMessage={sendMessage}
                updateMessageText={updateMessageText}/>;
        }
    }
    </StoreContext.Consumer>    
};

export default DialogsContainer;