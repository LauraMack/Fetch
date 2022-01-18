import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";

const SignOutBtn = () => {
  const { setCurrentUser, setSignedIn } = useContext(CurrentUserContext);
  const { logout } = useAuth0();

  return <Signout onClick={logout()}>Sign out</Signout>;
};
export default SignOutBtn;

const Signout = styled.button`
  color: #183a1d;
  background-color: transparent;
  border-style: none;
  font-family: "Montserrat";
  padding: 5px 10px;
  &:hover {
    color: #6d326d;
  }
`;
