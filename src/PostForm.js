import React from 'react';
// import './App.css' (may not be needed)
import axios from 'axios';
const RAILS_POST_CREATE_URL = "http://localhost:3000/posts.json"
class PostForm extends React.Component {


    state = {
       postContent: '' 
    }; 

    handleInput = (event) => {
        this.setState({ postContent: event.target.value });
    } 

    handleSubmit = (event) => {
        axios.post( RAILS_POST_CREATE_URL, {
            post: {
                user_post: this.state.postContent
            }
        } ) 
        .then( (res) => {
             console.log('response', res.data);
             if (res.data.success) {
                 this.props.history.push(`/posts/${ res.data.post.id }`) // go to new page in react frontend
             }
        }) 
        .catch( (error) => {
            console.log('error', error)
        });
        // console.log('handleSubmit')

    } // handleSubmit

    render() {
        return (
            <div>
                <h1>Create new post</h1>
                <textarea onChange={ this.handleInput }></textarea>
                <br/>
                <button onClick={this.handleSubmit }>Create post</button>
            </div>
        );

    } //end of render 

} // PostForm class

export default PostForm
