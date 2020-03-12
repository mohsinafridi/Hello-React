import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function User() {
  
     let { path, url } = useRouteMatch();
    
    return (
      <div className="container">
        <h2>User Operations.</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={`${url}/add-user`}>Add User</Link>
              </li>
              <li className="nav-item">
                <Link to={`${url}/user-list`}>Users</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <Switch> */}
          <Route  path={`${path}`} >
           <Topic />
          </Route>
        {/* </Switch> */}
      </div>
    );
  }

  function Topic(match) {
     
      return (
         <h2>match.params.sectionName</h2>
      )
  }

