import React, { useState, ct } from "react";

import axios from "axios";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

function CreateUser(props) {
    const [user, setUser] = useState({
        Name: "",
        Age: "",
        Mobile: "",
        Email: "",
        Address: "",
        BloodGroup: "",
      });

  const [showLoading, setShowLoading] = useState(false);

  const apiUrl = "http://localhost:60671/api/dcandidate/";
  const Insertuser = (e) => {
    e.preventDefault();
    debugger;
    const data = {
        fullname: user.Name,
        mobile: user.Mobile,
        age: parseInt(user.Age),
        address: user.Address,
        bloodGroup: user.BloodGroup,
        email: user.Email,
      };
    axios.post(apiUrl, data).then((result) => {
      props.history.push("/all-users");
    });
  };

  const onChange = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={Insertuser}>
                  <h1>Register</h1>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      value={user.Name}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Mobile"
                      name="Mobile"
                      id="Mobile"
                      value={user.Mobile}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Age"
                      name="Age"
                      id="Age"
                      value={user.Age}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Email"
                      name="Email"
                      id="Email"
                      value={user.Email}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="BloodGroup"
                      name="BloodGroup"
                      id="BloodGroup"
                      value={user.BloodGroup}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Address"
                      name="Address"
                      id="Address"
                      value={user.Address}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>

                      <Col xs="12" sm="6">
                        <Button className="btn btn-info mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateUser;
