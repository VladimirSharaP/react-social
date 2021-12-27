import React from "react";
import post from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.postsData.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    newPostElement.current.value = "";
  };

  let updateNewPostText = () => {
    let newPostText = newPostElement.current.value;
    props.updateNewPostText(newPostText);
  };

  return (
    <div className={post.postsBlock}>
      <div>
        <h3>MyPosts</h3>
      </div>
      <div>
        <textarea
          onChange={updateNewPostText}
          ref={newPostElement}
          value={props.postsData.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>New Post</button>
      </div>
      <div>New post</div>
      <div className={post.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
