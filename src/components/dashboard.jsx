import React from "react";

import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function Dashboard() {
  let { path, url } = useRouteMatch();
debugger;
  return (
    <div>
      <h2>Dasboard</h2>     
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* <Switch> */}
        <Route  path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      {/* </Switch> */}
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
debugger;
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
