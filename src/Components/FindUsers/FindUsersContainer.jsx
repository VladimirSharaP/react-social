import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/findUsersReduser'
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
  return {
    users:state.findUsersReduser.users
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
    }
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);