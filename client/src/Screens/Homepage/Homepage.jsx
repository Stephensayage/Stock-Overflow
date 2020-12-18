import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../services/users";
import Button from "react-bootstrap/Button";

export default function Homepage() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   showUsers();
  // }, []);

  // const showUsers = async () => {
  //   const fetchUsers = await getUsers();
  //   setUsers(fetchUsers);
  // };

  return (
    <div>
      <h1>Welcome to the homepage</h1>
      {/* {users.map((user) => (
        <>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
        </>
      ))} */}
    </div>
  );
}
