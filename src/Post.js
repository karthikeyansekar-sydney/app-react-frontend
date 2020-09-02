import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = (props) => {
  console.log('post',props.postData);
    return (
        <div className="post">
          <div className="post_avatar">
<Avatar src="/images/avatar_sample.png"/>
          </div>
          <div className="post__body">
         <div className="post__header">
           <div className="post__headerText">
             <h3>
              {props.postData.user.name}
             </h3>
           </div>
           <div className="post__headerDescription">
             <p>{props.postData.user_post}</p>
           </div>
         </div>
         <img src="https://media.giphy.com/media/Y2hvJ47uJf6RuwhPyv/giphy.gif"/>
       </div>
     </div>
    )
}

export default Post;
