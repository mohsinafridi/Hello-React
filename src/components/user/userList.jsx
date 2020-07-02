import React, { useState, useEffect } from "react";

// import axios from "axios";
import UserCard from "./user-card";
import http from "../../_api/api";

const UserList = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setQuery] = useState("Bret");

  useEffect(() => {
    console.log("mohsin");
    const fetchFunc = async () => {
      const reponse = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const jsonData = await reponse.json();
      setUser(jsonData[0]);
    };
    fetchFunc();
  }, [searchQuery]);

  // componentDidMount() {
  //     http.get("https://jsonplaceholder.typicode.com/users").then(u => {
  //     this.setState({ users: u.data });
  //   });
  // }
  // Delete User
  //  handleDelete = (id) => {
  //     http
  //       .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then(res => {
  //         console.log(res);
  //         console.log(res.data);
  //       });
  //   };

  return (
    <div className="container">
      <input
        type="search"
        placeholder="search user..."
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
        value={searchQuery}
      />
      {user ? (
        <div className="row">
          <div className="col-sm-3 m-2"></div>
          <div className="card" style={{ width: 280,background:'#654321' }} key={user.id}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h5 className="card-title">{user.username}</h5>              
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      ) : (
        "No user!"
      )}

      {/* {this.state.users.map((user) => (
        <UserCard key={user.id} user={user} onRemove={this.handleDelete} />
      ))} */}
    </div>
  );
};

export default UserList;
