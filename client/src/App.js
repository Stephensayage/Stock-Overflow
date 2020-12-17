import { Route } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";
import { verifyUser } from "./services/auth";

import Footer from "./Components/Shared/Footer";
// import Homepage from "./Screens/Homepage/Homepage";
import Landingpage from "./Screens/Landingpage/Landingpage";
import Signup from "./Screens/Signup/Signup";
import Signin from "./Screens/Signin/Signin";
import ProfilePage from "./Screens/ProfilePage/ProfilePage";
import Header from "./Components/Shared/Header";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify();
  }, []);

  const handleVerify = async () => {
    const currentUserData = await verifyUser();
    setCurrentUser(currentUserData);
  };

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Route
        path="/"
        exact
        render={(props) => <Landingpage currentUser={currentUser} />}
      />
      <Route
        path="/signup"
        render={(props) => (
          <Signup
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            {...props}
          />
        )}
      />
      <Route
        path="/signin"
        render={(props) => (
          <Signin
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            {...props}
          />
        )}
      />
      <Route
        path="/profile"
        render={(props) => <ProfilePage currentUser={currentUser} {...props} />}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
