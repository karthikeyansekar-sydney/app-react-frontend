import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import LoginForm from './LoginForm';

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

  componentDidMount = async () => {
    const users = await fetchUsers();
    const posts = await fetchPosts();
    const post_photos = await fetchPost_Photos();
    const follows = await fetchFollows();

    console.log({ users, posts });

    this.setState({
      follows,
      posts,
      post_photos,
      users,
      // likes,
      // dislikes,
      // comments
    });
  };

  render = () => {
    return (
      <div className="app">
      // <LoginForm />
        <Sidebar />
        <Feed posts={this.state.posts} users={this.state.users} />
        <Widgets />
      </div>
    );
  }
}
