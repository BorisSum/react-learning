import {followToggleCreator, getUsersFromSrvCreator} from './../../redux/SearchReducer';
import Search from './Search';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchData:state.searchPage.searchData,
    }
};

const mapDispatchToProps = (dispatch) => {
        return {
        toggleFollow: (userId) => {dispatch(followToggleCreator(userId))},
        getUsersFromSrv: (newUserList) => {
            dispatch(getUsersFromSrvCreator(newUserList));
        }
    }
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;