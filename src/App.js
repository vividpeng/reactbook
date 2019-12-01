import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import About from "./08about";
import Home from "./08home";
import Practice from "./08practice";
import Profile from "./08profile";
import Profiles2 from "./08profiles2";
import History from "./09history";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">To About</Link>
        </li>
        <li>
          <Link to="/practice">To practice</Link>
        </li>
        <li>
          <Link to="/profile">To profile</Link>
        </li>
        <li>
          <Link to="/profiles">To profile2</Link>
        </li>
        <li>
          <Link to="/history">history(for log in)</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/practice" component={Practice} />
      <Route path="/profiles" component={Profiles2} />
      <Route path="/profile" component={Profile} exact={true} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/history" component={History} />
    </>
  );
}

export default App;
