import React, { useState } from "react";
const MyDataBase = () => {
  const [quotes, setQuotes] = useState();


  return (
    <div>
      <h3>Add Quote</h3>
      <form className="form">
        <div class="form-group">
          <label>FirstName:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>LastName:</label>
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      <div class="row">
      
      </div>
    </div>
  );
};

export default MyDataBase;
