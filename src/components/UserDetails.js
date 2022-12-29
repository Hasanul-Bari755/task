import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState([]);
  const userId = useParams();

  //   useEffect(() => {
  //     fetch(`https://main.hangerstock.com/api/user/get/id`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ id: userId.id }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setUser(data.data));
  //   }, []);

  useEffect(() => {
    axios
      .post("https://main.hangerstock.com/api/user/get/id", {
        id: userId.id,
      })
      .then((data) => setUser(data.data.data));
  }, []);

  return (
    <div>
      <h2>Email:{user?.email}</h2>
    </div>
  );
};

export default UserDetails;
