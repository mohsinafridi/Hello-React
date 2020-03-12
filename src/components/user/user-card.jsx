import React, { Component } from "react";
import "../../css/user.css";
class UserCard extends Component {
  state = {};
  render() {
    // const {user.name , user.id,user.email}  = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="card"
              style={{ width: 280 }}
              key={this.props.user.id}
            >
              <img
                className="card-img-top"
                src="https://picsum.photos/50"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.user.name}</h5>
                <p className="card-text">{this.props.user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCard;
