import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentUserContext } from "./CurrentUserContext";
import NavBar from "./NavBar";
import { RiMenuLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const { user } = useAuth0();
  const { currentUser } = useContext(CurrentUserContext);

  console.log(currentUser);

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownClick = () => {
    setOpen(!open);
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
            <AdsLink to={"/all-ads"}>
              <Ads>Ads</Ads>
            </AdsLink>
            <MapLink to={"/map"}>
              <Map>Map</Map>
            </MapLink>
            <DropdownContainer>
              <DropdownButton onClick={handleDropdownClick}>
                {open ? <RiArrowDropDownLine /> : <RiMenuLine />}
              </DropdownButton>
              {open && <NavBar />}
            </DropdownContainer>
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
  justify-content: space-evenly;
  width: 250px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h1`
  margin-left: 30px;
  color: #24562c;
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

const AdsLink = styled(Link)`
  text-decoration: none;
`;

const MapLink = styled(Link)`
  text-decoration: none;
`;

const DropdownButton = styled.button`
  margin-right: 30px;
  margin-top: 15px;
  cursor: pointer;
  padding: 0;
  width: 80px;
  border: 0;
  background-color: #e1eedd;
  color: #183a1d;
  outline: 0;
  font-size: 23px;
`;
