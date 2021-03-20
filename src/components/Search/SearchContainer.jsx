import {folowToggleCreator} from './../../redux/SearchReducer';
import Search from './Search';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchData:state.searchData,
    }
};

const mapDispatchToProps = (dispatch) => {
        return {
        toggleFollow: () => {dispatch(folowToggleCreator())}
    }
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;