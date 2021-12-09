import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const persistParam = window.localStorage.getItem("currentUser");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

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
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
