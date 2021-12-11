import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router";

const Header = () => {
  const { user } = useAuth0();
  const {
    currentUser,
    setCurrentUser,
    signedIn,
    setSignedIn,
    myProfile,
    setMyProfile,
  } = useContext(CurrentUserContext);

  console.log(currentUser);

  let history = useHistory();

  // isAuthenticated, isLoading

  const handleSignOut = (ev) => {
    setCurrentUser(null);
    setSignedIn(false);
    setMyProfile(null);
    window.sessionStorage.clear();
    history.push("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
  };

  return (
    <div>
      {currentUser === null ? (
        <Div>
          <HomeLink to={"/"}>
            <Title>Fetch</Title>
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
            <Title>Fetch</Title>
          </HomeLink>
          <Nav>
            <AdsLink to={"/my-ads"}>
              <Ads>My Ads</Ads>
            </AdsLink>
            <ProfileLink
              to={
                myProfile
                  ? `/my-profile/${currentUser.data._id}`
                  : `/edit-profile/${currentUser.data._id}`
              }
            >
              <Profile>My Profile</Profile>
            </ProfileLink>
            <Signout onClick={handleSignOut}>Sign out</Signout>
          </Nav>
        </Div>
      )}
    </div>
  );
};

export default Header;

const Div = styled.div`
  background-color: #e58e76;
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
  color: #faf9f0;
  font-family: "Lora";
  font-size: 50px;
  &:hover {
    color: #3d405b;
  }
`;

const Signin = styled.p`
  color: #f4f1de;
  font-family: "Lora";
  padding: 5px 10px;
  &:hover {
    color: #6d326d;
  }
`;
const SigninLink = styled(Link)`
  text-decoration: none;
`;

const Signup = styled.p`
  color: #f4f1de;
  font-family: "Lora";
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
  color: #faf9f0;
  font-family: "Lora";
  font-size: 16px;
  margin-right: 15px;
  font-weight: bold;
  &:hover {
    color: #3d405b;
  }
`;

const Profile = styled.p`
  color: #faf9f0;
  font-family: "Lora";
  font-size: 16px;
  margin-right: 15px;
  font-weight: bold;
  &:hover {
    color: #3d405b;
  }
`;

const AdsLink = styled(Link)`
  text-decoration: none;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
`;

const Signout = styled.button`
  color: #faf9f0;
  background-color: transparent;
  border-style: none;
  font-family: "Lora";
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  &:hover {
    color: #3d405b;
  }
`;
