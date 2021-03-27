import {addPost, updatePostText} from './../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
   return {
      postNewText: state.profilePage.postNewText,
      postsData:state.profilePage.postsData,
   }
};

export default connect(mapStateToProps, {addPost, updatePostText})(MyPosts);
