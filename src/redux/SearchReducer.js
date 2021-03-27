const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; 

const initialState = {
   searchData: [],
   pageSize: 3,
   totalCount:0,
   currentPage: 1,
   isFetching: false,
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

      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         }

      default: return state;
   };
};

export const toggleFollow = (userId) => ({type: FOLLOW_TOGGLE, userId});
export const getUsersFromSrv = (newUserList, totalCount) => ({type: SET_USERS, newUserList, totalCount});
export const setNewCurrentPage = (newCurrentPage) => ({type: CHANGE_CURRENT_PAGE, newCurrentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default searchReducer;