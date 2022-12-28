import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [user, setUsers] = useState([]);
  const userId = useParams();

  useEffect(() => {
    axios
      .post(`https://main.hangerstock.com/api/user/get/${userId}`)
      .then((data) => setUsers(data));
  }, [userId]);

  console.log(user);
  return (
    <div>
      <h2>Details</h2>
    </div>
  );
};

export default UserDetails;
