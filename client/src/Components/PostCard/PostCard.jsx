import React from "react";

export default function PostCard(props) {
  return (
    <div className="card mb-3 post-ctn">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.user.image} alt="user-pic" className="feed-pic" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.user.username}</h5>
            <p className="card-text">{props.post.content}</p>
            <p class="card-text">
              <small class="text-muted">
                Created: {new Date(props.post.created_at).toDateString()}
              </small>
            </p>
            <span className="card-text">Likes: {props.post.like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
