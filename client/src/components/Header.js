import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SignOutBtn from "./auth0/SignOutBtn";
import { CurrentUserContext } from "./CurrentUserContext";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { currentUser, setCurrentUser, signedIn, setSignedIn } =
    useContext(CurrentUserContext);

  return (
    <div>
      {!currentUser || !user ? (
        <Div>
          <HomeLink to={"/"}>
            <Title>Header</Title>
          </HomeLink>
          <Nav>
            <SigninLink to={"/signin"}>
              <Signin>sign in</Signin>
            </SigninLink>
            <SignupLink to={"/signup"}>
              <Signup>sign up</Signup>
            </SignupLink>
          </Nav>
        </Div>
      ) : (
        <Div>
          <HomeLink to={"/"}>
            <Title>Header</Title>
          </HomeLink>
          <Nav>
            <AdsLink to={"//my-ads"}>
              <Ads>My Ads</Ads>
            </AdsLink>
            <ProfileLink to={"/profile/:profileId"}>
              <Profile>My Profile</Profile>
            </ProfileLink>
            <SignOutBtn />
          </Nav>
        </Div>
      )}
    </div>
  );
};

export default Header;

const Div = styled.div`
  background-color: #8e94f2;
  height: 100px;
  margin-top: -21px;
  margin-left: -21px;
  margin-right: -21px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Nav = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: space-evenly;
  width: 250px;
`;

const Title = styled.h1`
  margin-left: 30px;
  color: rgb(237, 238, 255);
  font-family: "Raleway";
  font-size: 40px;
`;

const Signin = styled.p`
  color: rgb(237, 238, 255);
  font-family: "Raleway";
  padding: 5px 10px;
  &:hover {
    color: #6d326d;
  }
`;
const SigninLink = styled(Link)`
  text-decoration: none;
`;

const Signup = styled.p`
  color: rgb(237, 238, 255);
  font-family: "Raleway";
  background-color: #558b6e;
  padding: 5px 10px;
  border-radius: 6px;
  &:hover {
    color: #6d326d;
  }
`;

const SignupLink = styled(Link)`
  text-decoration: none;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const Ads = styled.p`
  color: #e5ebea;
  font-family: "Raleway";
  &:hover {
    color: #6d326d;
  }
`;

const Profile = styled.p`
  color: #e5ebea;
  font-family: "Raleway";
  &:hover {
    color: #6d326d;
  }
`;

const AdsLink = styled(Link)`
  text-decoration: none;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
`;
