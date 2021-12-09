import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UsersContext } from "./UsersContext";
import { IoStarOutline } from "react-icons/io5";
import { CurrentUserContext } from "./CurrentUserContext";

const MyProfile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { id } = useParams();

  return (
    <Wrapper>
      <Div></Div>
    </Wrapper>
  );
};
export default MyProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: rgb(237, 238, 255);
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: white;
  height: 800px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 80px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
