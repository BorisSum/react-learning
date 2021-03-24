import React from 'react';
import style from './Search.module.css';
import * as axios from 'axios';

class Search extends React.Component {

    getUsers = () => {

        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5')
            .then(response => {
                this.props.getUsersFromSrv(response.data.items);
            });
    }

    render() {
        return <div className={style.searchPageWrapper}>
            <h2 className={style.searchHeader}>Search friends</h2>
            {
                this.props.searchData.map( user => <div className={style.friendWrapper}>
                    <div className={style.avatarWrapper}>
                        <img src={user.photos.small != null ? user.photo.small : './logo.svg'} alt='ava'
                            className={style.friendAva}></img>
                        <div className={user.followed ? style.unfriendBtn : style.friendBtn}
                            onClick={() => {
                                this.props.toggleFollow(user.id);
                            }}>{user.followed ? 'Del Friend' : 'Add Friend' }</div>
                    </div>
                    <div className={style.friendInfoWrapper}>
                        <div className={style.friendFIO}>{user.name}</div>
                        <div>Status: {user.status}</div>
                        <div>Date of birth:</div>
                    </div>
                </div>)
            }
            <div className={style.showMoreBtn} onClick={this.getUsers}>Show more ...</div>
        </div>
    }
};

export default Search;