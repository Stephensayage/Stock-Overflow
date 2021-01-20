import React, { useState, useEffect, createContext } from "react";
import { verifyUser } from "../services/auth";
import { getUsers } from "../services/users";

export const UserContext = createContext({
  user: {},
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const verify = async () => {
    const res = await verifyUser();
    setUser(res);
  };

  if (!user) {
    verify();
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
