import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = ({ text, user }) => {
    return (
        <div className="post">
          <div className="post_avatar">
<Avatar src={user.profile_pic}/>
          </div>
          <div className="post__body">
         <div className="post__header">
           <div className="post__headerText">
             <h3>
               {user.name}
            </h3>
           </div>
           <div className="post__headerDescription">
             <p>{text}</p>
           </div>
         </div>
       </div>
     </div>
    )
}

export default Post;
