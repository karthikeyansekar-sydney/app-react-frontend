import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core"; 
const Post = ({displayName,username,verified,text,image,avatar}) => {
    return (
        <div className="post">
          <div className="post_avatar">
<Avatar src="/images/avatar_sample.png"/>
          </div>
        </div>
    )
}

export default Post;
