import React from 'react';
import post from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNeewPostTextActionCreator } from '../../../redux/state'

const MyPosts = (props) => {

  let posts = props.postsData.postData.map( p => <Post id={p.id} message = {p.message} likesCount = {p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let updateNewPostText = () => {
    let newPostText = newPostElement.current.value;
    props.dispatch(updateNeewPostTextActionCreator(newPostText));
  }
  
    return (
        <div className={post.postsBlock}>
          <div><h3>MyPosts</h3></div>
          <div>
            <textarea 
              onChange={updateNewPostText}
              ref={newPostElement} 
              value={props.postsData.newPostText} />
          </div>
          <div><button onClick={ addPost }>New Post</button></div>
        <div>
          New post
        </div>
        <div className={post.posts}>
          {posts}
        </div>
      </div>
    );
  }
  
  export default MyPosts;