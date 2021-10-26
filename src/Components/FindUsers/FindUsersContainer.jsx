import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, updateCurrentPageActionCreator, setUsersTotalCountActionCreator } from '../../redux/findUsersReduser'
import FindUsersAPIComponent from './FindUsersAPIComponent';

let mapStateToProps = (state) => {
  return {
    users: state.findUsersReduser.users,
    pageSize: state.findUsersReduser.pageSize,
    totalUsersCount: state.findUsersReduser.totalUsersCount,
    currentPage: state.findUsersReduser.currentPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followActionCreator(usersId));
    },
    unfollow: (usersId) => {
      dispatch(unfollowActionCreator(usersId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setUsersTotalCount: (totalUsersCount) => {
      dispatch(setUsersTotalCountActionCreator(totalUsersCount));
    },
    updateCurrentPage: (currentPage) => {
      dispatch(updateCurrentPageActionCreator(currentPage));
    }
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIComponent);