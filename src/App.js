import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import LoginForm from './LoginForm';
import PostForm from './PostForm';
import PostsIndex from './PostsIndex';

import { Route, Link, HashRouter as Router } from 'react-router-dom';

import { fetchFollows, fetchPosts, fetchPost_Photos, fetchUsers } from './api';

export default class App extends React.Component {
  state = {
    users: [],
    posts: [],
    post_photos: [],
    follows: [],
    likes: [],
    dislikes: [],
    comments: []
  };
  
  //Async here is ES6 feature 
  componentDidMount = async () => {
    // const users = await fetchUsers();
    // const posts = await fetchPosts();
    const post_photos = await fetchPost_Photos();
    const follows = await fetchFollows();

    // console.log({ users, posts });

    this.setState({
      follows,
      // posts,
      post_photos,
      // users,
      // likes,
      // dislikes,
      // comments
    });
  };

  render = () => {
    return (
      <div className="app">
        
      <Router>
      
        {
          //    <LoginForm />
          //    <Feed posts={this.state.posts} users={this.state.users} />
        // <Route exact path="/" component={ Feed } />
      }
        <Route path="/" component={ Sidebar } />
        <Route exact path="/" component={ PostsIndex } />
        <Route exact path="/posts/new" component={ PostForm } />
        <Route exact path="/posts/:id" component={ PostShow } />
        {
        // above route will provide to hte PostShow component the id from the URL in a prop called this.props.match.params.id
        }
        <Widgets />

      </Router>
      </div>
    );
  }
}
