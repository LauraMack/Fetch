import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const persistParam = window.sessionStorage.getItem("currentUser");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [forte, setForte] = useState([]);
  const [openToTrading, setOpenToTrading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [myAds, setMyAds] = useState("");
  const [favourited, setFavourited] = useState(false);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        password,
        setPassword,
        signedIn,
        setSignedIn,
        name,
        setName,
        bio,
        setBio,
        forte,
        setForte,
        error,
        setError,
        openToTrading,
        setOpenToTrading,
        status,
        setStatus,
        myAds,
        setMyAds,
        favourited,
        setFavourited,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
