import {connect} from 'react-redux';
import Navbar from './Navbar'

const mapStateToProps = (state) => {

  return {
    friendsData: state.dialogsPage.friendsData,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
