import React from "react";
import PostCard from "../PostCard/PostCard";
import "./ProfileFeed.css";

export default function ProfileFeed(props) {
  const currentUserPosts = props.userPosts
    .filter((posts) => posts.user_id === props.user.id)
    .reverse();

  return (
    <div className="feed-ctn">
      <h2 className="feed-title">{props.user.username}'s Feed</h2>
      {currentUserPosts.map((post) => (
        <PostCard user={props.user} post={post} />
      ))}
    </div>
  );
}
