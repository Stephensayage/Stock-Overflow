import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./CreatePost.css";
import { createPost } from "../../services/posts";
import { useContext } from "react";
import { UserContext } from "../../Contexts/user_context";

export default function UserCreatePost(props) {
  const { user } = useContext(UserContext);

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
      user_id: user.id,
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
    </div>
  );
}
