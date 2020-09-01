import React from 'react';
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets(props) {
    return (
        <div className="widgets">
          <div className="widgets_input">
            <SearchIcon className="widgets_searchIcon"/>
            <input placeholder="Search Twitter" type="text"/>
          </div>
<div className="widgets__widgetContainer">
<h2>What's happening</h2>
  <TwitterTweetEmbed tweetId={"1236261827463360512"} />

         <TwitterTimelineEmbed
           sourceType="profile"
           screenName="karthik75533115"
           options={{ height: 400 }}
         />

         <TwitterShareButton
           url={"https://www.facebook.com/karthikeyan.sekar.39"}
           options={{ text: "#reactjs is awesome", via: "karthik" }}
         />
        </div>
        </div>
    )
}



export default Widgets
