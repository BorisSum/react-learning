import React from 'react';
import {followToggleCreator, getUsersFromSrvCreator, setNewCurrentPageCreator} from './../../redux/SearchReducer';
import Search from './Search';
import {connect} from 'react-redux';
import * as axios from 'axios'; 

class SearchContainer extends React.Component {

    componentDidMount () {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.getUsersFromSrv(response.data.items, response.data.totalCount);
            });
    }

    changeCurrentPage = (newPage) => {
        if (newPage < 1) {newPage = 1}
        if (newPage > Math.ceil(this.props.totalCount/this.props.pageSize)) {
            newPage = Math.ceil(this.props.totalCount/this.props.pageSize);
        }
        this.props.setNewCurrentPage(newPage);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPage}`)
        .then(response => {
            this.props.getUsersFromSrv(response.data.items, response.data.totalCount);
        });
    }

    render() { return <Search   changeCurrentPage={this.changeCurrentPage}
                                toggleFollow={this.props.toggleFollow}
                                searchData={this.props.searchData}
                                currentPage={this.props.currentPage}
                                totalCount={this.props.totalCount}
                                pageSize={this.props.pageSize}/>}    
};

const mapStateToProps = (state) => {
    return {
        searchData: state.searchPage.searchData,
        totalCount: state.searchPage.totalCount,
        pageSize: state.searchPage.pageSize,
        currentPage: state.searchPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
        return {
        toggleFollow: (userId) => {dispatch(followToggleCreator(userId))},
        getUsersFromSrv: (newUserList, totalCount) => {
            dispatch(getUsersFromSrvCreator(newUserList, totalCount));
        },
        setNewCurrentPage: (newPage) => {
            dispatch(setNewCurrentPageCreator(newPage))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);