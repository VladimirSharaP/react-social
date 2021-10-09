import React from 'react';
import prof from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
          <textarea></textarea>
          <button>New Post</button>
        <div>
          New post
        </div>
        <div className={prof.posts}>
          <Post message = 'Hi petuch!'/>
          <Post message = 'EBAT` TVOY LISIY CHEREP!'/>
          <Post message = 'YA EGO VSE EBAL!'/>
        </div>
      </div>
    );
  }
  
  export default MyPosts;