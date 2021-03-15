import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import ImpFriend from "./Friend/Friend";
import StoreContext from "../../StoreContext";

const Navbar = () => {

  return <StoreContext.Consumer>
    {store => {
        const state = store.getState().dialogsPage;

        const importantFriends = [];
        for (let i = 0; i < 3; i++) {
            importantFriends.push(<ImpFriend name={state.friendsData[i].name} id = {state.friendsData[i].id} />);
        }
      return <nav className = {styles.nav}>
      <div className = {styles.item}><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></div>
      <div className = {styles.item}><NavLink to='/Dialogs' activeClassName={styles.active}>Dialogs</NavLink></div>
      <div className = {styles.item}><NavLink to='/News' activeClassName={styles.active}>News</NavLink></div>
      <div className = {styles.item}><NavLink to='/Music' activeClassName={styles.active}>Music</NavLink></div>
      <div className = {styles.item}><NavLink to='/Settings' activeClassName={styles.active}>Settings</NavLink></div>
      <div className = {styles.friendsWrapper}>
        {importantFriends}
      </div>
    </nav>
    }
  }
  </StoreContext.Consumer>
};

export default Navbar;
