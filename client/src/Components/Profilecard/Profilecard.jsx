import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./ProfileCard.css";

export default function Profilecard(props) {
  const displayDate = new Date(props.user.created_at).toDateString();

  return (
    <div className="profile-card-ctn">
      <Jumbotron className="profile-card">
        <img src={props.user.image} className="profile-pic" alt="profile-pic" />
        <h1>{props.user.username}</h1>
        <div>
          <span>{props.user.first_name} </span>
          <span>{props.user.last_name}</span>
          <br />
          <span>{props.user.email}</span>
          <br />
          <span>
            <strong>Member since:</strong> {displayDate}
          </span>
        </div>
      </Jumbotron>
    </div>
  );
}
