import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentUserContext } from "./CurrentUserContext";
import { RiMenuLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const { currentUser, setCurrentUser, setSignedIn, myProfile, setMyProfile } =
    useContext(CurrentUserContext);

  let history = useHistory();

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
          <NavDiv>
            <SigninLink to={"/signin"}>
              <Signin>Sign in</Signin>
            </SigninLink>
            <SignupLink to={"/signup"}>
              <Signup>Sign up</Signup>
            </SignupLink>
          </NavDiv>
        </Div>
      ) : (
        <Div>
          <HomeLink to={"/"}>
            <Title>Fetch</Title>
          </HomeLink>
          <Nav>
            <AdsLink to={"/all-ads"}>
              <Ads>Ads</Ads>
            </AdsLink>
            <MapLink to={"/map"}>
              <Map>Map</Map>
            </MapLink>
            <ProfileLink to={`/my-profile/${currentUser.data._id}`}>
              <Profile>My Profile</Profile>
            </ProfileLink>
            <Signout onClick={handleSignOut}>Sign Out</Signout>
          </Nav>
        </Div>
      )}
    </div>
  );
};

export default Header;

const Div = styled.div`
  background-color: #e1eedd;
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
  justify-content: space-around;
  width: 400px;
`;

const NavDiv = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: space-evenly;
  width: 220px;
`;

const Title = styled.h1`
  margin-left: 30px;
  color: #183a1d;
  font-family: "Lora";
  font-size: 50px;
  text-align: center;
  &:hover {
    color: #f6c453;
  }
`;

const Signin = styled.p`
  color: #183a1d;
  font-family: "Lora";
  padding: 5px 10px;
  &:hover {
    color: #f6c453;
  }
`;
const SigninLink = styled(Link)`
  text-decoration: none;
`;

const Signup = styled.p`
  color: #183a1d;
  font-family: "Lora";
  padding: 5px 10px;
  border-radius: 6px;
  &:hover {
    color: #f6c453;
  }
`;

const SignupLink = styled(Link)`
  text-decoration: none;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const Ads = styled.p`
  color: #183a1d;
  font-family: "Lora";
  font-size: 16px;
  margin-right: 15px;
  font-weight: bold;
  &:hover {
    color: #f6c453;
  }
`;

const Map = styled.p`
  color: #183a1d;
  font-family: "Lora";
  font-size: 16px;
  margin-right: 15px;
  font-weight: bold;
  &:hover {
    color: #f6c453;
  }
`;

const Profile = styled.p`
  color: #183a1d;
  font-family: "Lora";
  font-size: 16px;
  margin-right: 15px;
  font-weight: bold;
  &:hover {
    color: #f6c453;
  }
`;

const AdsLink = styled(Link)`
  text-decoration: none;
`;

const MapLink = styled(Link)`
  text-decoration: none;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
`;

const Signout = styled.button`
  color: #183a1d;
  background-color: transparent;
  border-style: none;
  font-family: "Lora";
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    color: #f6c453;
  }
`;
