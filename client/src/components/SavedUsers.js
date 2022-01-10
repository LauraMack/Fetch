import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { UsersContext } from "./UsersContext";
import User from "./User";

const SavedUsers = ({ profileId }) => {
  const { favourites, currentUser } = useContext(CurrentUserContext);
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
        favourites.forEach((i) => {
          if (i === user._id) {
            favouritesArray.push(user);
          }
        });
      });
      setSavedUsers(favouritesArray);
    }
  }, [favourites, allUsers.data]);

  const handleRemoveFavourite = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    fetch(`/users/${currentUser.data._id}/remove-favourite`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: profileId, // how to specify that THAT profile is the right one to remove?
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          window.sessionStorage.setItem("currentUser", JSON.stringify(data));
        }
      });
  };

  console.log(savedUsers);
  // have remove button always appear with user card, but only visible on favourites page and onClick only works on favourites page

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
      <FavouriteDiv>No Saved Users</FavouriteDiv>
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
