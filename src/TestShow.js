import React from 'react'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from "react-flip-move";

class TestShow extends React.Component  {
  render(){
    return (
      <div>
        {this.props.myPosts.map(post => <Post postData={post} key={post.id}/>)}
      </div>
    );//return
 }//render
}//class

export default TestShow;
