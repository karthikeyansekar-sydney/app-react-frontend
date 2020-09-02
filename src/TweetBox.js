import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
    return (
        <div className="tweetBox">
<form>
<div className="tweetBox_input">
<Avatar src="/images/avatar_sample.png"/>
<input placeholder="What's happening?" type="text"/>
</div>
<input className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
      <Button type="submit" className="tweetBox__tweetButton">Tweet</Button>
</form>
        </div>
    );
}

export default TweetBox;
