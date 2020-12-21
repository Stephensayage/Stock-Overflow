import React from "react";
import "./ProfilePage.css";

import Profilecard from "../../Components/Profilecard/Profilecard";
import UserCreatePost from "../../Components/UserCreatePost/UserCreatePost";

export default function ProfilePage(props) {
  console.log(props.currentUser);
  return (
    <div>
      <h1>Profile Page</h1>
      <Profilecard currentUser={props.currentUser} />
      <UserCreatePost currentUser={props.currentUser} />
    </div>
  );
}
