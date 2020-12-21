import React from "react";
import { Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import "./Profilecard.css";

export default function Profilecard(props) {
  const displayDate = new Date(props.currentUser.created_at).toDateString();

  return (
    <div className="profile-card-ctn">
      <Jumbotron className="profile-card">
        <img
          src={props.currentUser.image}
          className="profile-pic"
          alt="profile-pic"
        />
        <h1>{props.currentUser.username}</h1>
        <div>
          <span>{props.currentUser.first_name} </span>
          <span>{props.currentUser.last_name}</span>
          <br />
          <span>{props.currentUser.email}</span>
          <br />
          <span>
            <strong>Member since:</strong> {displayDate}
          </span>
        </div>
      </Jumbotron>
    </div>
  );
}
