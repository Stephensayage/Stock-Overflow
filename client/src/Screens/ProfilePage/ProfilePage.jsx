import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/user_context";
import { getPosts } from "../../services/posts";

import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import ProfileFeed from "../../Components/ProfileFeed/ProfileFeed";
import CreatePost from "../../Components/CreatePost/CreatePost";

export default function ProfilePage() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res);
  };

  return (
    <div>
      {user && posts && (
        <>
          <ProfileCard user={user} />
          <CreatePost />
          <ProfileFeed userPosts={posts} user={user} />
        </>
      )}
    </div>
  );
}
