import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = ({displayName,username,verified,text,image,avatar}) => {
    return (
        <div className="post">
          <div className="post_avatar">
<Avatar src="/images/avatar_sample.png"/>
          </div>
          <div className="post__body">
         <div className="post__header">
           <div className="post__headerText">
             <h3>
              {displayName}{""}
              <span>
{verified && <VerifiedUserIcon className="post_badge" />} @
{username}
              </span>
             </h3>
           </div>
           <div className="post__headerDescription">
             <p>{text}</p>
           </div>
         </div>
         <img src="https://media.giphy.com/media/Y2hvJ47uJf6RuwhPyv/giphy.gif"/>
       </div>
     </div>
    )
}

export default Post;
