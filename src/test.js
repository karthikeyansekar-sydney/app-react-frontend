import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios'
import TestShow from "./TestShow";
import TweetBox from "./TweetBox"

const POSTS_URL = 'http://localhost:3000/posts'



class Test extends React.Component {

  state = {
    users: [],
    posts: []
  };


  fetchPosts = () => {
    axios.get(POSTS_URL)
    .then(response => {
      console.log(response.data);
      this.setState({posts: response.data});
    })
    .catch(error => console.warn(error));
  };

  componentDidMount(){
    console.log('Loaded.');
    this.fetchPosts();

  } // componentDidMount()

  render() {
    return (

      <div>
  <TweetBox />

      <TestShow  myPosts={this.state.posts} />


      </div>
    );
  } // render

} // class Fli

export default Test;
