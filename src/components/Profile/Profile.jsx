import styles from './Profile.module.css'
import Description from './Description/Description'
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {

   return (      
      <div>
         <div>
            <img className = {styles.profile_img} alt="2" src="./travel.jpg"></img>
         </div>
         <Description />
         <MyPostsContainer />
      </div>      
   );
};

export default Profile;
