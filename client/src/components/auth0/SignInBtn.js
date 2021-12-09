import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

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
  font-family: "Raleway";
  width: 312px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  background-color: #8e94f2;
  color: white;
  font-weight: bold;
`;
