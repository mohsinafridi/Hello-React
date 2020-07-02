import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/user.action.js";
import api from "../_api/api.js";
import axios from "axios";
const MyDataBase = (...props) => {
  const [quotes, setQuotes] = useState();
  const [user, setUser] = useState({
    Name: "",
    Age: "",
    Mobile: "",
    Email: "",
    Address: "",
    BloodGroup: "",
  });

  const Insertemployee = (e) => {
    e.preventDefault();
    debugger;
    const data = {
      fullname: user.Name,
      age: parseInt(user.Age),
      mobile: user.Mobile,
      address: user.Address,
      bloodGroup: user.BloodGroup,
      email: user.Email,
    };
    axios
      .post("http://localhost:60671/api/dcandidate/", data)
      .then((result) => {
        alert("done");
      });
    // api.dCandidate().create(data).then((result) => {
    //   debugger;
    //   alert("done");
    //   //props.history.push("/EmployeList");
    // });
  };

  const onChange = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Add Quote</h3>
      <form className="form-horizontal" onSubmit={Insertemployee}>
        <div className="form-group">
          <label className="control-label col-sm-2">Name:</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="Name"
              className="form-control"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2">Mobile:</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="Mobile"
              className="form-control"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2">Email:</label>
          <div class="col-sm-10">
          <input
            type="text"
            name="Email"
            className="form-control"
            onChange={onChange}
          />
        </div>  </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Age:</label>
          <div class="col-sm-10">
          <input
            type="text"
            name="Age"
            className="form-control"
            onChange={onChange}
          />
        </div>
        </div>        
        <div className="form-group">
          <label className="control-label col-sm-2">bloodGroup:</label>
          <div class="col-sm-10">
          <input
            type="text"
            name="BloodGroup"
            className="form-control"
            onChange={onChange}
          />
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Address:</label>
          <div class="col-sm-10">
               <input
            type="text"
            name="Address"
            className="form-control"
            onChange={onChange}
          />
        </div>  
        </div>  
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   dCandidateList: state.dCandidate.list,
// });

// const mapDispatchToProps = {
//   createNewUser: actions.CreateUser,
// };
//export default connect(mapStateToProps, mapDispatchToProps)(MyDataBase);
export default MyDataBase;
