import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/user_context";
import PostCard from "../../Components/PostCard/PostCard";
import { getPosts } from "../../services/posts";
import { getUsers } from "../../services/users";
import { useLocation } from "react-router";

export default function Homepage(props) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome to the homepage</h1>
      {user ? (
        props.allPosts.map((post) => (
          <PostCard
            user={props.allUsers.find((user) => user.id === post.user_id)}
            post={post}
          />
        ))
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
}
