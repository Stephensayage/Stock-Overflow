import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./Signup.css";

export default function Signup() {
  return (
    <Form className="signup-ctn">
      <h1 className="su-title">Sign Up Here!</h1>
      <Form.Row className="un-pw-ctn">
        <Form.Group as={Col} controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Row className="user-info-ctn">
        <Form.Group controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Bob" />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Roberts" />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Profile Image URL</Form.Label>
          <Form.Control placeholder="www..." />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
