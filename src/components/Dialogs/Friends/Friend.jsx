import style from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
                <div className={style.friends_item}>
                    <NavLink to={`/Dialogs/${props.friendId}`} activeClassName={style.active}>
                        {props.friendName}
                    </NavLink>
                </div>
    );
};

export default Friend;