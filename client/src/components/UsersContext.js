import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState("");
  const [profile, setProfile] = useState("");
  const [moreUsers, setMoreUsers] = useState([]);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [orderedUsers, setOrderedUsers] = useState(null);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
        console.log(data);
        //slice the original array for pagination purposes
        if (orderedUsers === null) {
          const sliced = data.data.slice(0, 3);
          setMoreUsers(sliced);
          console.log(sliced, "sliced");
        } else {
          const sliced = orderedUsers.slice(0, 3);
          setMoreUsers(sliced);
          console.log(sliced, "ordered slice");
        }
      });
  }, [orderedUsers]);

  return (
    <UsersContext.Provider
      value={{
        allUsers,
        setAllUsers,
        moreUsers,
        setMoreUsers,
        profile,
        setProfile,
        currentLatitude,
        setCurrentLatitude,
        currentLongitude,
        setCurrentLongitude,
        orderedUsers,
        setOrderedUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
