import { NavLink } from "react-router-dom";
import styles from "./Friend.module.css";
// import {NavLink} from "react-router-dom";

const ImpFriend = (props) => {
  return (
        <div>
          <NavLink to={`/Dialogs/${props.id}`} className={styles.friendItem}>
            <img className = {styles.friendAva} alt="ava" src="./logo.svg"></img>          
            <div className = {styles.friendName}>{props.name}</div>
          </NavLink>
        </div>
  );
};

export default ImpFriend;
