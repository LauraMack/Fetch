import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState("");
  const [profile, setProfile] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [moreUsers, setMoreUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.data);
        //slice the original array for pagination purposes
        const sliced = data.data.slice(0, 3);
        setMoreUsers(sliced);
        console.log(sliced, "sliced");
      });
  }, []);

  return (
    <UsersContext.Provider
      value={{
        allUsers,
        setAllUsers,
        moreUsers,
        setMoreUsers,
        profile,
        setProfile,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
