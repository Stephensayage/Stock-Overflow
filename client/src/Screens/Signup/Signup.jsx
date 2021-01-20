import React, { useState, useContext, useHistory } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { UserContext } from "../../Contexts/user_context";
import { registerUser } from "../../services/auth";
import "./Signup.css";

export default function Signup(props) {
  const { setUser } = useContext(UserContext);

  const [signUpInput, setSignUpInput] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInput({
      ...signUpInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser(signUpInput);
      setUser(newUser);
      props.history.push("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form className="signup-ctn" onSubmit={handleSubmit}>
      <h1 className="su-title">Sign Up Here!</h1>
      <Form.Row className="un-pw-ctn">
        <Form.Group as={Col} controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={signUpInput.username}
            onChange={handleChange}
            name="username"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={signUpInput.password}
            onChange={handleChange}
            name="password"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row className="user-info-ctn">
        <Form.Group controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="Bob"
            value={signUpInput.first_name}
            onChange={handleChange}
            name="first_name"
          />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Roberts"
            value={signUpInput.last_name}
            onChange={handleChange}
            name="last_name"
          />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Profile Image URL</Form.Label>
          <Form.Control
            placeholder="www..."
            value={signUpInput.image}
            onChange={handleChange}
            name="image"
          />
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="...@email.com"
            value={signUpInput.email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
