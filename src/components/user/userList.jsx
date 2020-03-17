import React, { Component } from "react";

// import axios from "axios";
import UserCard from "./user-card";
import http from '../../_api/api';

export default class UserList extends Component {
  state = {
    users: []
  };
  componentDidMount() {
      http.get("https://jsonplaceholder.typicode.com/users").then(u => {
      this.setState({ users: u.data });
    });
  }
 // Delete User
 handleDelete = (id) => {  
    http
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  
  render() {
    return (
      <div className="container">    
      <input type="search" placeholder="search user..."  className="form-control"/>   
        {
        this.state.users.map(user => (
          <UserCard key={user.id} user={user} 
          onRemove={this.handleDelete}
          />
        ))
        }
      </div>
    );
  }
}
