import { Route } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import "./Components/Shared/Shared.scss";
import { verifyUser } from "./services/auth";
import { getPosts } from "./services/posts";
import { getUsers } from "./services/users";

import Footer from "./Components/Shared/Footer";
import Landingpage from "./Screens/Landingpage/Landingpage";
import Signup from "./Screens/Signup/Signup";
import Signin from "./Screens/Signin/Signin";
import Header from "./Components/Shared/Header";
import { UserContext } from "./Contexts/user_context";
import ProfilePage from "./Screens/ProfilePage/ProfilePage";
import Homepage from "./Screens/Homepage/Homepage";
import { Form } from "react-bootstrap";
import Sidebar from "./Components/Shared/Sidebar";

function App() {
  const { user } = useContext(UserContext);

  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    showPosts();
    showUsers();
  }, [user]);

  const showUsers = async () => {
    const fetchUsers = await getUsers();
    setAllUsers(fetchUsers);
  };

  const showPosts = async () => {
    const fetchPosts = await getPosts();
    setAllPosts(fetchPosts.reverse());
  };

  return (
    <div className="App">
      <Header />
      <div className="app-ctn">
        <Sidebar />
        <Route path="/" exact render={(props) => <Landingpage />} />
        <Route path="/signup" render={(props) => <Signup {...props} />} />
        <Route path="/signin" render={(props) => <Signin {...props} />} />
        <Route path="/profile" render={(props) => <ProfilePage {...props} />} />
        <Route
          path="/homepage"
          render={(props) => (
            <Homepage allUsers={allUsers} allPosts={allPosts} {...props} />
          )}
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
