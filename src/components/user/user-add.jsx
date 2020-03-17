import React, { Component } from "react";
import axios from "axios";

class AddUser extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  // Add User
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="">Name :</label>
        <input type="text" name="text" onChange={this.handleChange} />
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    );
  }
}

export default AddUser;
