import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useSelector } from "react-redux";


// Stateless Functional Components
const Header = (state) => {
const counter = useSelector(state => state.counter);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mb-0 h1" to="/">
        My Prompt
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About - Cake
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counters">
              Counters
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-user">
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user-list">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/functional-component">
              Function - Redux
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/my-database">
              My DataBase
            </Link>
          </li>

          <li className="nav-item">
           <h3>Counter  {counter}</h3> 
          </li>  

          <li className="nav-item">
            <Link className="nav-link" to="/create-user">
              Create DB User
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/all-users">
              All Users
            </Link>
          </li>
              
        </ul>

        <span className="navbar-text">
          <Link className="nav-link" to="/routing">
            Login
          </Link>
        </span>
        <span className="navbar-text">
          <Link className="nav-link" to="/routing">
            Register
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
