const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
   postsData: [
      { id: 1, text: 'Post number one', likeCount: 11 },
      { id: 2, text: 'Post number two', likeCount: 6 },
      { id: 3, text: 'Last post', likeCount: 19 }
   ],
   postNewText: '',
}

const profileReducer = (state = initialState, action) => {
switch (action.type) {
   case ADD_POST:
      return {
         ...state,
         postsData: [...state.postsData, {id:5, text: state.postNewText, likeCount: 0}],
         postNewText: ''
      };

   case UPDATE_POST_TEXT: {
      return {
         ...state,
         postNewText: action.data
      };
   }
   default: return state;
};
};

export const addPost = () => ({type: ADD_POST});
export const updatePostText = newText => ({type: UPDATE_POST_TEXT, data: newText});

export default profileReducer;