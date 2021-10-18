import React from 'react';
import prof from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={prof.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PR2ZAzwhWY7orX3aNxJE67X5TaAjAN7H_g&usqp=CAU'></img>
                {props.message}
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}
  
export default Post;