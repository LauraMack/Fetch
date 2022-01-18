import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { UsersContext } from "./UsersContext";
import User from "./User";

const SavedUsers = () => {
  const { favourites } = useContext(CurrentUserContext);
  const { allUsers } = useContext(UsersContext);
  const [savedUsers, setSavedUsers] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    let favouritesArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((user) => {
        //compare favourites array to user data to filter the correct users
        favourites.forEach((i) => {
          if (i === user._id) {
            favouritesArray.push(user);
          }
        });
      });
      setSavedUsers(favouritesArray);
    }
  }, [favourites, allUsers.data]);

  return savedUsers ? (
    <Main>
      <FavouriteDiv>Favourite Users</FavouriteDiv>
      <UserDiv>
        {savedUsers.map((user) => {
          return <User user={user} profileId={user._id} />;
        })}
      </UserDiv>
    </Main>
  ) : (
    <Main>
      <FavouriteDiv>No Favourite Users</FavouriteDiv>
    </Main>
  );
};

export default SavedUsers;

const Main = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: max-content;
  background-color: #e1eedd;
`;

const FavouriteDiv = styled.div`
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #183a1d;
`;

const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`;
