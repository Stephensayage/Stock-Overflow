import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./UserCreatePost.css";
import { createPost } from "../../services/posts";

export default function UserCreatePost(props) {
  const [postInput, setPostInput] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setPostInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = await createPost({
      user_id: props.currentUser.id,
      content: postInput,
    });
  };

  return (
    <div className="create-post-ctn">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          onChange={handleChange}
          value={postInput.content}
          name="content"
          className="create-post-input"
          as="textarea"
          rows={3}
          placeholder="What are you thinking?"
        />
        <Button type="submit" variant="info" className="post-btn">
          Post
        </Button>
      </Form>
      <Form.Label>{props.currentUser.username}'s Feed</Form.Label>
    </div>
  );
}
