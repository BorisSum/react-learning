import style from './Search.module.css';

const Search = props => {

    return <div className={style.searchPageWrapper}>
        <h2 className={style.searchHeader}>Search friends</h2>
        <button onClick={() => {props.changeCurrentPage(props.currentPage - 1)}}>Prev</button>
        <span>{` Page ${props.currentPage} of ${Math.ceil(props.totalCount/props.pageSize)} `}</span>
        <button onClick={() => {props.changeCurrentPage(props.currentPage + 1)}}>Next</button>
        {
            props.searchData.map( user => <div className={style.friendWrapper}>
                <div className={style.avatarWrapper}>
                    <img src={user.photos.small != null ? user.photos.small : './logo.svg'} alt='ava'
                        className={style.friendAva}></img>
                    <div className={user.followed ? style.unfriendBtn : style.friendBtn}
                        onClick={() => {
                            props.toggleFollow(user.id);
                        }}>{user.followed ? 'Del Friend' : 'Add Friend' }</div>
                </div>
                <div className={style.friendInfoWrapper}>
                    <div className={style.friendFIO}>{user.name}</div>
                    <div>Status: {user.status}</div>
                    <div>Date of birth:</div>
                </div>
            </div>)
        }
        <div className={style.showMoreBtn}>Show more ... </div>
    </div>
    
};

export default Search;