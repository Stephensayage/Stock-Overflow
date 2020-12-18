import React from "react";
import { Jumbotron, Button, Accordion, Card } from "react-bootstrap";
export default function Profilecard(props) {
  return (
    <div>
      <Jumbotron>
        <img
          src={props.currentUser.image}
          className="profile-pic"
          alt="profile-pic"
        />
        <h1>{props.currentUser.username}</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
}
