import React from "react";
import { Link } from "react-router-dom";

const data = {
  SJMin: {
    name: "민승준",
    description: "남편!"
  },
  ESYang: {
    name: "양은숙",
    description: "부인!"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return (
      <div>
        <ul>
          <li>
            <Link to="/profile/SJMin">To MSJ</Link>
          </li>
          <li>
            <Link to="/profile/ESYang">To YES</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
      </div>
    );
  }
};

export default Profile;
