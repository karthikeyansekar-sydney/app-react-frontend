import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios'
import TestShow from "./TestShow";
import TweetBox from "./TweetBox"

const USERS_URL = 'http://localhost:3000/users'
const POSTS_URL = 'http://localhost:3000/posts'



class Test extends React.Component {

  state = {
    users: [],
    posts: []
  };

  showUsers = () => {
    axios.get(USERS_URL)
    .then(response => {
      console.log(response.data);
      this.setState({users: response.data});
    })
    .catch(error => console.warn(error));
  }; // showUsers

  showPosts = () => {
    axios.get(POSTS_URL)
    .then(response => {
      console.log(response.data);
      this.setState({posts: response.data});
    })
    .catch(error => console.warn(error));
  };

  componentDidMount(){
    console.log('Loaded.');
    this.showUsers();
    this.showPosts();

  } // componentDidMount()

  render() {
    return (

      <div>
  <TweetBox />

      <TestShow myUsers={this.state.users}  />


      </div>
    );
  } // render

} // class Fli

export default Test;
