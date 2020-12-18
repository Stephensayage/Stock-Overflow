import React from "react";
import { Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import "./ProfilePage.css";

import Profilecard from "../../Components/Shared/Profilecard/Profilecard";

export default function ProfilePage(props) {
  console.log(props.currentUser);
  return (
    <div>
      <h1>Profile Page</h1>
      <Profilecard currentUser={props.currentUser} />
    </div>
  );
}
