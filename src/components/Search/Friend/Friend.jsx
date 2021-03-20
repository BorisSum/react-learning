import style from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={style.friendWrapper}>
            <div className={style.avatarWrapper}>
                <img src='./logo.svg' alt='ava' className={style.friendAva}></img>
                <div className={style.friendBtn}>Add Friend</div>
            </div>
            <div className={style.friendInfoWrapper}>
                <div className={style.friendFIO}>{`${props.firstName} ${props.midName} ${props.lastName}`}</div>
                <div>{`${props.country}, ${props.city}`}</div>
                <div>{props.dateOfBirth}</div>
            </div>
        </div>
    );
};

export default Friend;