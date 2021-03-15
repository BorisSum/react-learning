import styles from "./Post.module.css";

const Post = (props) => {
   return (
      <div>
         <div className={styles.item}>
            <img className={styles.item_img} alt="ava" src="./logo.svg"></img>
               {props.text}
            <div className={styles.like_btn}>
               <span>{props.likes} Likes</span>
            </div>
         </div>

      </div>
   );
};

export default Post;
