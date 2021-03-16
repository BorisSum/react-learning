const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState = {
   messageNewText: '',
   friendsData: [
      { id: 1, name: 'Friend-1' },
      { id: 2, name: 'Friend-2' },
      { id: 3, name: 'Friend-3' },
      { id: 4, name: 'Friend-4' },
      { id: 5, name: 'Friend-5' },
      { id: 6, name: 'Friend-6' },
   ],

   messagesData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'No, we are Russian' },
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: 
         return {
            ...state,
            messagesData: [...state.messagesData, {id:5, message: state.messageNewText}],
            messageNewText: ''
         };
         
      case UPDATE_MESSAGE_TEXT: {
         return {
            ...state,
            messageNewText: action.data
         };
      }
      default: return state;
   };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextCreator = newText => ({type: UPDATE_MESSAGE_TEXT, data: newText});

export default dialogsReducer;