import React from "react";
import { useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../Contexts/user_context";
import { loginUser } from "../../services/auth";
import "./Signin.scss";

export default function Signin(props) {
  const { setUser } = useContext(UserContext);
  const { push } = useHistory();

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
    try {
      const response = await loginUser(signInInput);
      setUser(response);
      push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="signup-ctn" onSubmit={handleSubmit}>
      <h1 className="su-title">Welcome Back!</h1>
      <Form.Row className="un-pw-ctn">
        <Form.Group as={Col} controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="sing-in-input"
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
            className="sing-in-input"
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
