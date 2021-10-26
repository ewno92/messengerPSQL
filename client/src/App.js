import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Routes from "./routes";
import Home from "./components/Home";
import Test from "./components/Test";
import Messenger from "./components/Messenger";
import { UserContext } from "./UserContext";
function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Messenger} />
            <Route path="/test" component={Test} />
            {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/home" component={Home} /> */}
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
