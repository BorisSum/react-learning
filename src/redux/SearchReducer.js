const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

const initialState = {
   searchData: [],
};

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      
      case FOLLOW_TOGGLE:
         return {...state,
            searchData: state.searchData.map( user => {
               if (user.id === parseInt(action.userId)) {
                  return {...user, followed: !user.followed}
               }
               return user;
            })
         };

      case SET_USERS:
         return {
            ...state,
            searchData: [...state.searchData, ...action.newUserList],
         }

      default: return state;
   };
};

export const followToggleCreator = (userId) => ({type: FOLLOW_TOGGLE, userId});
export const getUsersFromSrvCreator = (newUserList) => ({type: SET_USERS, newUserList});

export default searchReducer;