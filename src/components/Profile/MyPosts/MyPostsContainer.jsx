import StoreContext from '../../../StoreContext';
import {addPostCreator, updatePostTextCreator} from './../../../redux/profileReducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

   return <StoreContext.Consumer>
      { store => {
         const state = store.getState().profilePage;

         const sendPost = () => {
            store.dispatch(addPostCreator());   
         }
      
         const updateText = (text) => {
            store.dispatch(updatePostTextCreator(text));
         };

         return <MyPosts
            postsData={state.postsData}
            postNewText={state.postNewText}
            sendPost={sendPost}
            updateText={updateText}/>
      }
   }
   </StoreContext.Consumer>
};

export default MyPostsContainer;
