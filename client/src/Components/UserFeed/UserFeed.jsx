import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./UserFeed.css";

export default function UserFeed(props) {
  console.log(props.userPosts);

  return (
    <div className="feed-ctn">
      {props.userPosts.map((post) => (
        <Card className="post-ctn">
          <img src={props.currentUser.image} className="post-img" />
          <Card.Body className="post-content">{post.content}</Card.Body>
        </Card>
      ))}
    </div>
  );
}
