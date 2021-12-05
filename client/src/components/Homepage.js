import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
import User from "./User";
import { useState, useEffect, useContext } from "react";
import { UsersContext } from "./UsersContext";

const Homepage = () => {
  const { moreUsers } = useContext(UsersContext);

  return (
    <>
      <Wrapper>
        Homepage
        <Searchdiv>
          <Searchbar />
        </Searchdiv>
        <CategoryDiv>
          <Categories />
        </CategoryDiv>
        <UserDiv>
          {moreUsers.map((user) => {
            const profileId = user._id;
            return (
              <User moreUsers={moreUsers} user={user} profileId={profileId} />
            );
          })}
        </UserDiv>
      </Wrapper>
    </>
  );
};

export default Homepage;

const Wrapper = styled.div`
  font-family: "Raleway";
  height: max-content;
  width: 100vw;
`;
const Searchdiv = styled.div`
  height: 50px;
  width: 400px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 200px;
`;

const CategoryDiv = styled.div`
  height: 50px;
  width: 600px;
  display: flex;
  flex-direction: row wrap;
  margin: 0 auto;
  margin-top: 30px;
`;

const UserDiv = styled.div`
  height: 100px;
  width: 1000px;
  display: flex;
  flex-direction: row wrap;
  margin: 0 auto;
  margin-top: 200px;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 75px;
`;
