import Post from "./Post/Post";
import style from './MyPosts.module.css';

const MyPosts = (props) => {

   const postsElements = props.postsData
      .map( post => <Post text={post.text} likes={post.likeCount} />);

   const onSendPost = () => {
      props.addPost();
   }

   const onUpdateText = (event) => {
      props.updatePostText(event.target.value);
   };

   return (
      <div className={style.profile}>
         <h3 className={style.h3_style}>New Posts</h3>
         <textarea onChange = {onUpdateText} value={props.postNewText}></textarea>
         <button onClick = { onSendPost }>Send Post</button>
         {postsElements}
      </div>
   );
};

export default MyPosts;
