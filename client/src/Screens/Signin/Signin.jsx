import React from "react";
import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { loginUser } from "../../services/auth";
import "./Signin.css";

export default function Signin(props) {
  const [signInInput, setSignInInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInInput({
      ...signInInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser(signInInput);
    props.setCurrentUser(userData);
    props.history.push("/profile");
  };

  return (
    <Form className="signup-ctn" onSubmit={handleSubmit}>
      <h1 className="su-title">Welcome Back!</h1>
      <Form.Row className="un-pw-ctn">
        <Form.Group as={Col} controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={signInInput.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={signInInput.password}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
}
