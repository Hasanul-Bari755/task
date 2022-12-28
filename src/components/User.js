import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserDisplay from "./UserDisplay";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://main.hangerstock.com/api/user/get/all")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);
  console.log(users);

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-2">
        {users.map((user) => (
          <UserDisplay key={user.id} user={user}></UserDisplay>
        ))}
      </div>

      <button className="border m-2 p-2 font-bold">
        <Link to="/form">Form</Link>
      </button>
    </div>
  );
};

export default User;
