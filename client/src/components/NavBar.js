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
      <ul>
        <li>
          <Link
            to={
              myProfile
                ? `/my-profile/${currentUser.data._id}`
                : `/edit-profile/${currentUser.data._id}`
            }
          >
            My profile
          </Link>
        </li>
        <li>
          <Link to="/my-ads">My ads</Link>
        </li>
        <li>
          <button onClick={handleSignOut}>Sign out</button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;
