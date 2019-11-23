import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Intro from "./components/intro/intro";
import Outro from "./components/outro/outro";
import Poll from "./components/poll/poll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <Switch>
            <Route path="/poll">
              <Poll />
            </Route>
            <Route path="/outro">
              <Outro />
            </Route>
            <Route path="/">
              <Intro />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
