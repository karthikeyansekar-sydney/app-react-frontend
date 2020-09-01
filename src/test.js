import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios'
const USERS_URL = 'http://localhost:3000/users'

function test() {
    return (
        <div>
                  <h1>social media app</h1>
          <h2>Lets have some fun!!</h2>
        </div>
    )
}

class UserList extends React.Component {

  state = {
    Users: []
  };

  showUsers = () => {
    axios.get(FLIGHTS_URL)
    .then(response => {
      console.log(response.data);
      this.setState({flights: response.data});
    })
    .catch(error => console.warn(error));
  }; // showUsers

  componentDidMount(){
    console.log('Loaded.');
    this.showUsers();
  } // componentDidMount()

  render() {
    return (
      
      <div>

        <h1> <strong>User Details:</strong></h1>
              <li key={item.id}><strong>Id:</strong> {item.id} | <strong>Flight number:</strong> {item.name}| <strong>Row:</strong> {item.row} |<strong> Column:</strong> {item.column}
              </li>


      </div>
    );
  } // render

} // class Fli

export default UserList;
