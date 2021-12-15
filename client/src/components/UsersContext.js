import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState("");
  const [profile, setProfile] = useState("");
  const [moreUsers, setMoreUsers] = useState([]);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [orderedUsers, setOrderedUsers] = useState(null);
  const [adsUpdated, setAdsUpdated] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
        //slice the original array for pagination purposes
        if (orderedUsers === null) {
          const sliced = data.data.slice(0, 3);
          setMoreUsers(sliced);
        } else {
          const sliced = orderedUsers.slice(0, 3);
          setMoreUsers(sliced);
        }
      });
  }, [orderedUsers, adsUpdated]);

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
        adsUpdated,
        setAdsUpdated,
        rating,
        setRating,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
