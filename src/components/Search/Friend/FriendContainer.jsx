import {folowToggleCreator} from './../../redux/SearchReducer';
import Friend from './Friend';
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

const friendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default friendContainer;