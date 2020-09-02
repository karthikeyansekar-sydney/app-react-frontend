import React from 'react';
import "./Feed.css";
import "./App.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { getUserFromId } from './utils';

const Feed = ({ posts, users }) => {
    return (
        <div className="feed">
            <div className="feed_header">
<h2>Home</h2>
        </div>
        <TweetBox />
        {posts.map(({ user_id, user_post }) => (
          <Post

            text={user_post}
            user={getUserFromId(users, user_id)}
          />
      ))}
        </div>
    )
}

export default Feed
