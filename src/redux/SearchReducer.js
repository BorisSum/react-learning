const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'; 

const initialState = {
   searchData: [],
   pageSize: 3,
   totalCount:0,
   currentPage: 1,
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
            searchData: action.newUserList,
            totalCount: action.totalCount,
         }

      case CHANGE_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.newCurrentPage
         }

      default: return state;
   };
};

export const followToggleCreator = (userId) => ({type: FOLLOW_TOGGLE, userId});
export const getUsersFromSrvCreator = (newUserList, totalCount) => ({type: SET_USERS, newUserList, totalCount});
export const setNewCurrentPageCreator = (newCurrentPage) => ({type: CHANGE_CURRENT_PAGE, newCurrentPage})

export default searchReducer;