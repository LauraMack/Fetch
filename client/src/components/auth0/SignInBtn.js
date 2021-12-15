import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useHistory } from "react-router";

const SignInBtn = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <GoogleButton
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Continue with Google
    </GoogleButton>
  );
};
export default SignInBtn;

const GoogleButton = styled.button`
  font-family: "Lora";
  width: 312px;
  border-radius: 4px;
  border: solid 1px #183a1d;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  background-color: #40916c;
  color: #e1eedd;
  font-weight: bold;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;
