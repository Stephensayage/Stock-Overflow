import { Route } from "react-router";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Homepage from "./Screens/Homepage/Homepage";
import Landingpage from "./Screens/Landingpage/Landingpage";
import Signup from "./Screens/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={(props) => <Landingpage />} />
      <Route path="/signup" exact render={(props) => <Signup />} />
      <Footer />
    </div>
  );
}

export default App;
