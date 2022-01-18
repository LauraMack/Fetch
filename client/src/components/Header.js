import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { IoTennisballOutline } from "react-icons/io5";
import { FiCompass, FiArchive, FiUser } from "react-icons/fi";

const Header = () => {
  const { currentUser, setCurrentUser, setSignedIn } =
    useContext(CurrentUserContext);

  let history = useHistory();

  const handleSignOut = (ev) => {
    setCurrentUser(null);
    setSignedIn(false);
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
          <TitleDiv>
            <HomeLink to={"/"}>
              <Title>
                <TennisBall />
                Fetch
              </Title>
            </HomeLink>
          </TitleDiv>
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
          <TitleDiv>
            <HomeLink to={"/"}>
              <Title>
                <TennisBall />
                Fetch
              </Title>
            </HomeLink>
          </TitleDiv>
          <Nav>
            <MapLink to={"/map"}>
              <Map>Map</Map>
            </MapLink>
            <ProfileLink
              to={
                currentUser.data.name && currentUser.data.forte
                  ? `/my-profile/${currentUser.data._id}`
                  : `/edit-profile/${currentUser.data._id}`
              }
            >
              <Profile>Profile</Profile>
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
  font-size: 40px;
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

const TennisBall = styled(IoTennisballOutline)`
  margin-right: 10px;
  position: relative;
  top: 5px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
