import React, { useState, useEffect } from "react";
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
  Row,
} from "reactstrap";

function EditUser(props) {

    const [user, setUser] = useState({
   // id:0,
    Name: "",
    Age: "",
    Mobile: "",
    Email: "",
    Address: "",
    BloodGroup: "",
  });
  const Url =
    "http://localhost:60671/api/dcandidate/" + props.match.params.id;

  useEffect(() => {
    const GetData = async () => {
      const result = await axios(Url);

      setUser(result.data);
    };

    GetData();
  }, []);

  const UpdateUser = (e) => {
    e.preventDefault();

    const data = {
      id: parseInt(props.match.params.id),
      fullname: user.fullName,
      age: parseInt(user.age),
      mobile: user.mobile,
      address: user.address,
      bloodGroup: user.bloodGroup,
      email: user.email,
    };
    axios.post("http://localhost:60671/api/dcandidate/", data)
      .then((result) => {
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
                <Form onSubmit={UpdateUser}>
                  <h1>Update User</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="fullName"
                      id="Name"
                      placeholder="Name"
                      value={user.fullName || ''}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Mobile"
                      name="mobile"
                      id="Mobile"
                      value={user.mobile   || ''} 
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Age"
                      name="age"
                      id="Age"
                      value={user.age   || ''}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="Email"
                      value={user.email   || ''}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="BloodGroup"
                      name="bloodGroup"
                      id="BloodGroup"
                      value={user.bloodGroup   || ''}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Address"
                      name="address"
                      id="Address"
                      value={user.address   || ''}
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

export default EditUser;
