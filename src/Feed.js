import React from 'react';
import "./Feed.css";
import "./App.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed_header">
<h2>Home</h2>
        </div>
        <TweetBox />
        <Post displayName="nemo"
          username="ssss"
          verified={true}
          text="yooo its working"
avatar="/images/avatar_sample.png"
image="https://media.giphy.com/media/Y2hvJ47uJf6RuwhPyv/giphy.gif"
          />

        </div>
    )
}

export default Feed
