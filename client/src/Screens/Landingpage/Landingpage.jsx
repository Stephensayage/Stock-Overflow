import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Landingpage.css";

export default function Landingpage() {
  return (
    <Jumbotron className="jumbo">
      <h1>Welcome to StockOverflow</h1>
      <p>A social media platform for friends and traders alike!</p>
      <p>
        <Link to="/signup">
          <Button variant="primary">Sign Up</Button>
        </Link>
      </p>
      <div className="sign-in-ctn">
        <p>Already have an account?</p>
        <p>
          <Link to="/signin">
            <Button variant="primary">Sign In</Button>
          </Link>
        </p>
      </div>
    </Jumbotron>
  );
}
