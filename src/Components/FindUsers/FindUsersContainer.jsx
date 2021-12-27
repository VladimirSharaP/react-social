import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  updateCurrentPage,
  setUsersTotalCount,
  isFetchingData,
  followingProgress,
} from "../../redux/findUsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import { usersAPI } from "../../api/api";

class FindUsersContainer extends React.Component {
  componentDidMount() {
    if (!this.props.users[0]) {
      this.props.isFetchingData();
      usersAPI
        .getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.setUsers(data.items);
          this.props.setUsersTotalCount(data.totalCount);
          this.props.isFetchingData();
        });
    }
  }

  moreUsers = () => {
    this.props.isFetchingData();
    this.props.updateCurrentPage(this.props.currentPage + 1);
    usersAPI
      .getUsers(this.props.currentPage + 1, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.isFetchingData();
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            moreUsers={this.moreUsers}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            followingProgress={this.props.followingProgress}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.findUsersReducer.users,
    pageSize: state.findUsersReducer.pageSize,
    totalUserCount: state.findUsersReducer.totalUserCount,
    currentPage: state.findUsersReducer.currentPage,
    isFetching: state.findUsersReducer.isFetching,
    followingInProgress: state.findUsersReducer.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setUsersTotalCount,
  updateCurrentPage,
  isFetchingData,
  followingProgress,
})(FindUsersContainer);
