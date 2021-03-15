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
      const newPost = {
         id: 5,
         text: state.postNewText,
         likeCount: 0      
      };
   
      state.postsData.push(newPost);
      state.postNewText = '';
      return state;

   case UPDATE_POST_TEXT:
      state.postNewText = action.data;
      return state;

   default: return state;
};
};

export const addPostCreator = () => ({type: ADD_POST});
export const updatePostTextCreator = newText => ({type: UPDATE_POST_TEXT, data: newText});

export default profileReducer;