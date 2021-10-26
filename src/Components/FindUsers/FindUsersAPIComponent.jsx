import axios from 'axios';
import React from 'react';
import Users from './Users';

class FindUsersAPIComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);
    });
  };

  moreUsers = () => {
    this.props.updateCurrentPage(this.props.currentPage + 1);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render () {
    return <Users users = {this.props.users} />
  }
}
  
  export default FindUsersAPIComponent;