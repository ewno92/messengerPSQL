import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Routes from "./routes";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/home" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
