import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./08profile";

const Profiles2 = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profiles/SJMin">To MSJ</Link>
        </li>
        <li>
          <Link to="/profiles/ESYang">To YES</Link>
        </li>
      </ul>
      <Route path="/profiles" exact={true} render={() => <div>select</div>} />

      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles2;
