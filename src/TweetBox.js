import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
    return (
        <div className="tweetBox">
<form>
<div className="tweetBox_input">
<Avatar src="/images/avatar_sample.png"/>
<input placeholder="What's happening?"></input>
</div>
<input className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
<Button className="tweetBox_tweetButton">Tweet</Button>
</form>
        </div>
    )
}

export default TweetBox
