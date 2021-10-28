import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, updateCurrentPage, setUsersTotalCount, isFetchingData } from '../../redux/findUsersReducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader';

class FindUsersContainer extends React.Component {
  
  componentDidMount() {
    if(!this.props.users[0]){
      this.props.isFetchingData();
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
           .then(response => {
              this.props.setUsers(response.data.items);
              this.props.setUsersTotalCount(response.data.totalCount);
              this.props.isFetchingData();
            });
    }
  };

  moreUsers = () => {
    this.props.isFetchingData();
    this.props.updateCurrentPage(this.props.currentPage + 1);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.isFetchingData();
    });
  }

  render () {
    return <>
          {this.props.isFetching ? <Preloader /> : <Users users = {this.props.users} 
                  moreUsers = {this.moreUsers}
                  follow = {this.props.follow}
                  unfollow = {this.props.unfollow} 
                  isFetching = {this.props.isFetching}
            />}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.findUsersReduser.users,
    pageSize: state.findUsersReduser.pageSize,
    totalUserCount: state.findUsersReduser.totalUserCount,
    currentPage: state.findUsersReduser.currentPage,
    isFetching: state.findUsersReduser.isFetching
  }
};
  
export default connect(mapStateToProps, 
  {
    follow, unfollow, setUsers, setUsersTotalCount, updateCurrentPage, isFetchingData
  })(FindUsersContainer);