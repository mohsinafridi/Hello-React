import React, { Component } from "react";

import axios from "axios";
import UserCard from "./user-card";

export default class UserList extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(u => {
      this.setState({ users: u.data });
    });
  }
  render() {
    return (
      <div className="container">       
        {
        this.state.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))
        }
      </div>
    );
  }
}
