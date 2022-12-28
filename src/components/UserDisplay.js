import React from "react";
import { Link } from "react-router-dom";

const UserDisplay = ({ user }) => {
  const { id, first_name, last_name } = user;
  return (
    <div>
      <Link to={`/details/${id}`}>
        {first_name} {last_name}
      </Link>
    </div>
  );
};

export default UserDisplay;
