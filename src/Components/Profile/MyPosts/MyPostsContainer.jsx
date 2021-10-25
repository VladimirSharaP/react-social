import { connect } from 'react-redux';
import { addPostActionCreator, updateNeewPostTextActionCreator } from '../../../redux/profileReduser'
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postsData:state.profileReduser.postData
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (newPostText) => {
      dispatch(updateNeewPostTextActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
  
export default MyPostsContainer;