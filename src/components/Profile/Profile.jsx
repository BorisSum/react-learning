import styles from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import DescriptionContainer from './Description/DescriptionContainer';


const Profile = () => {

   return (      
      <div>
         <div>
            <img className = {styles.profile_img} alt="2" src="./travel.jpg"></img>
         </div>
         <DescriptionContainer />
         <MyPostsContainer />
      </div>      
   );
};

export default Profile;
