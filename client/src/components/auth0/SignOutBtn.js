import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SignOutBtn = () => {
  const { logout } = useAuth0();

  return <Signout onClick={() => logout()}>Sign out</Signout>;
};
export default SignOutBtn;

const Signout = styled.button`
  color: rgb(237, 238, 255);
  background-color: transparent;
  border-style: none;
  font-family: "Raleway";
  padding: 5px 10px;
  &:hover {
    color: #6d326d;
  }
`;
