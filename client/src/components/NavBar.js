import React, { useContext, useRef } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";

const NavBar = () => {
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
    <Wrapper>
      <StyledUl>
        <StyledLi>
          <StyledLink
            to={
              myProfile
                ? `/my-profile/${currentUser.data._id}`
                : `/edit-profile/${currentUser.data._id}`
            }
          >
            {" "}
            My profile
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/my-ads">My ads</StyledLink>
        </StyledLi>
        <StyledLi>
          <Signout onClick={handleSignOut}>Sign out</Signout>
        </StyledLi>
      </StyledUl>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;
  height: 150px;
  width: 180px;
  z-index: 2;
  background-color: #a2d2ff;
  border-radius: 4px;
`;

const StyledUl = styled.ul`
  position: relative;
`;

const StyledLi = styled.li`
  text-align: center;
  padding: 10px;
  &:hover {
    background-color: #faf9f0;
    color: #a2d2ff;
  }
`;

const StyledLink = styled(Link)`
  color: #136f63;
  padding: 10px;
  &:hover {
    background-color: #faf9f0;
    color: #a2d2ff;
  }
`;

const Signout = styled.button`
  color: #136f63;
  background-color: transparent;
  border-style: none;
  font-family: "Lora";
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    color: #a2d2ff;
  }
`;
