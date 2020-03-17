import React, { useState ,useEffect} from 'react';
const Prompt = () => {

    const[count, setCount] = useState(0);
   
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('use Effect calls.');    
    document.title = `You clicked ${count} times`;
  });


  // componentDidMount(){
  //     console.log('use Effect calls.');    
  // }

  // componentDidUpdate(() => {
  //   console.log('use Effect calls.');    
  // }
    
  return (
    <div>
        <p>This is Functional Component</p>
      <h2>You clicked {count} times</h2>
   
      <button className="btn btn-primary m-2" onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
};

export default Prompt;
