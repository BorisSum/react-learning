import {addPostCreator, updatePostTextCreator} from './../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
   return {
      postNewText: state.profilePage.postNewText,
      postsData:state.profilePage.postsData,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      sendPost: () => { dispatch(addPostCreator()); },
      updateText: (text) => { dispatch(updatePostTextCreator(text)); },
   }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
