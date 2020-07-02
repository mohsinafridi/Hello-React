import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";

import axios from "axios";

import { useState, useEffect } from "react";

function UserList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:60671/api/dcandidate/");
      setData(result.data);
    };

    GetData();
  }, []);

  const deleteUser = (id) => {
    debugger;

    axios
      .delete("http://localhost:60671/api/dcandidate/" + id)

      .then((result) => {
        props.history.push("/all-users");
      });
  };

  const editUser = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Age</th>
                    <th>BloodGroup</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.age}</td>
                        <td>{item.bloodGroup}</td>
                        <td>{item.address}</td>
                        <td>
                          <div className="btn-group">
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                editUser(item.id);
                              }}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                deleteUser(item.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UserList;
