import React from 'react';
import { addPostActionCreator, updateNeewPostTextActionCreator } from '../../../redux/profileReduser'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (newPostText) => {
    props.store.dispatch(updateNeewPostTextActionCreator(newPostText));
  }
  
    return <MyPosts postsData = {state.profileReduser.postData}  addPost = { addPost } updateNewPostText = { updateNewPostText } />;
  }
  
  export default MyPostsContainer;