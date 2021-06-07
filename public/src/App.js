import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Route Component
import AddInfo from "./Routes/AddInfo";
import Error from "./Routes/Error";
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import User from "./Routes/User";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Router path="/user">
            <User />
          </Router>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/addinfo">
            <AddInfo />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
