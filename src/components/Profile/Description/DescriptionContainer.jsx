import React from 'react';
import {connect} from 'react-redux';
import style from './Description.module.css';
import * as axios from 'axios';
import {getUserProfile, toggleIsFetching} from '../../../redux/profileReducer'
import Preloader from '../../common/preloader';


class Description extends React.Component {
   componentDidMount () {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
               this.props.toggleIsFetching(false);
               this.props.getUserProfile(response.data);
            });
   }

   render() {     
      if (!this.props.userProfile) {
         return <div className={style.description}>         
                  {this.props.isFetching ? <Preloader/>: null}
               </div>
      }
      return <>
      {this.props.isFetching ? <Preloader/>: null}      
      <div className={style.description}>         
         <div><img src={this.props.userProfile.photos.small} alt='1'/></div>
         <div><h3>{this.props.userProfile.fullName}</h3></div>
      </div>
      </>
   }
}


const mapStateToProps = (state) => {
   return {
      userProfile: state.profilePage.userProfile,
   }
};

export default connect(mapStateToProps,{getUserProfile, toggleIsFetching})(Description)