import React, { Component } from "react";
import "../../css/user.css";
import axios from "axios";
class UserCard extends Component {
  state = {
    id: ""
  };
  styles = {};

  handleChange = event => {
    this.setState({ id: event.target.value });
  };
 

  render() {
    // const {user.name , user.id,user.email}  = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3 m-2">
            <div
              className="card"
              style={{ width: 280 }}
              key={this.props.user.id}
            >
              <img
                className="card-img-top"
                alt=""
                src="https://picsum.photos/20"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.user.name}</h5>
                <p className="card-text">{this.props.user.email}</p>
                <button
                  className="btn btn-danger" 
                  onClick={ () => this.props.onRemove(this.props.user.id)} 
                >
                  Delete
                </button>
              </div>
            </div>
            {/* <form onSubmit={this.handleDelete}>
        <label className=""> Person ID: :</label>
        <input type="text" name="id" onChange={this.handleChange} />
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCard;
