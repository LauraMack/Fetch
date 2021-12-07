import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState("");
  const [allLocations, setAllLocations] = useState({});
  const [profile, setProfile] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [moreUsers, setMoreUsers] = useState([]);
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [currentLongitude, setCurrentLongitude] = useState("");

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
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
        currentLatitude,
        setCurrentLatitude,
        currentLongitude,
        setCurrentLongitude,
        allLocations,
        setAllLocations,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
