import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Stateless Functional Components
const Header = () => {
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
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counters">
              Counters
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user">
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user-list">
              Users
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
// export default function Header() {
//   return (

//   );
// }
