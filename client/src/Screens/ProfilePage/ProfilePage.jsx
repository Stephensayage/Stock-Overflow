import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import { getPosts } from "../../services/posts";

import Profilecard from "../../Components/Profilecard/Profilecard";
import UserCreatePost from "../../Components/UserCreatePost/UserCreatePost";
import UserFeed from "../../Components/UserFeed/UserFeed";

export default function ProfilePage(props) {
  const [userPosts, setUserPosts] = useState();

  const fetchPosts = async () => {
    const allUserPosts = await getPosts(props.currentUser.id);
    setUserPosts(allUserPosts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <Profilecard currentUser={props.currentUser} />
      <UserCreatePost currentUser={props.currentUser} />
      <UserFeed currentUser={props.currentUser} userPosts={userPosts} />
    </div>
  );
}
