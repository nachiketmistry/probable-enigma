import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <p>About page</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="App">
      <p>Dashboard</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="App">
      <p>Sorry, cant't find that.</p>
    </div>
  );
}
export default App;
