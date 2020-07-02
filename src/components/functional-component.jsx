import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment,reset } from "../redux/actions/counter-action";

const Prompt = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("use Effect calls.");
    document.title = `You clicked ${count} times`;
  });

  // componentDidMount() {
  //     console.log('use Effect calls.');
  // }

  // componentDidUpdate(() => {
  //   console.log('use Effect calls.');
  // }

  return (
    <div>
      <p>This is Functional Component</p>
      <h2>You clicked {count} times</h2>

      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch(increment())}
      >
        Click me to update Header Counter using Redux
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch(reset())}
      >
        Reset Counter using Redux
      </button>
    </div>
  );
};

export default Prompt;
