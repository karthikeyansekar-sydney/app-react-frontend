import React from 'react'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from "react-flip-move";

class TestShow extends React.Component  {
  render(){
    console.log("MyUsers");
    console.log(this.props.myUsers);
    console.log("Post");
    console.log(this.props.myPosts);

    if(this.props.myUsers == null)
    {
      return null;
    }

    return(

    <div>
    {this.props.myUsers.map((item) =>(
                <Post
                  key={item.id}
                   displayName={item.name}
                  username="ssss"
                  verified={true}
                  text="yooo its working"
        avatar="/images/avatar_sample.png"
        image="https://media.giphy.com/media/Y2hvJ47uJf6RuwhPyv/giphy.gif"
                  />
    )
)
}
</div>
)
}
}

export default TestShow;
