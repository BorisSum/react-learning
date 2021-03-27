import React from 'react';
import {toggleFollow, getUsersFromSrv, 
        setNewCurrentPage, toggleIsFetching} from './../../redux/SearchReducer';
import Search from './Search';
import {connect} from 'react-redux';
import * as axios from 'axios'; 
import Preloader from '../common/preloader';

class SearchContainer extends React.Component {

    componentDidMount () {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.getUsersFromSrv(response.data.items, response.data.totalCount);
            });
    }

    changeCurrentPage = (newPage) => {
        if (newPage < 1) {newPage = 1}
        if (newPage > Math.ceil(this.props.totalCount/this.props.pageSize)) {
            newPage = Math.ceil(this.props.totalCount/this.props.pageSize);
        }
        this.props.setNewCurrentPage(newPage);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPage}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.getUsersFromSrv(response.data.items, response.data.totalCount);
        });
    }

    render() { return <>
                    {this.props.isFetching ? <Preloader/>: null}
                    <Search changeCurrentPage={this.changeCurrentPage}
                            toggleFollow={this.props.toggleFollow}
                            searchData={this.props.searchData}
                            currentPage={this.props.currentPage}
                            totalCount={this.props.totalCount}
                            pageSize={this.props.pageSize} />
                    </>
            }                              
};

const mapStateToProps = (state) => {
    return {
        searchData: state.searchPage.searchData,
        totalCount: state.searchPage.totalCount,
        pageSize: state.searchPage.pageSize,
        currentPage: state.searchPage.currentPage,
        isFetching: state.searchPage.isFetching,
    }
};

export default connect(mapStateToProps,
                        {toggleFollow, getUsersFromSrv, setNewCurrentPage, toggleIsFetching})
                (SearchContainer);