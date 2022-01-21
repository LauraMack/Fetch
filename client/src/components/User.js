import React, { useContext } from "react";
import { CurrentUserContext } from "./Context/CurrentUserContext";
import styled from "styled-components";
import { IoStarSharp } from "react-icons/io5";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const User = ({ user, profileId }) => {
  const { currentUser, favourites, setFavourites } =
    useContext(CurrentUserContext);
  let history = useHistory();
  const starRating = {
    star: IoStarSharp,
  };

  const handleAddFavourite = (ev) => {
    // add to favourites array
    ev.preventDefault();
    ev.stopPropagation();
    if (!currentUser) {
      return history.push("/signin");
    }
    fetch(`/users/${currentUser.data._id}/favourite`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: profileId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          window.sessionStorage.setItem("currentUser", JSON.stringify(data));
          let favouritesArray = data.data.favourites.map((i) => {
            return i._id;
          });
          setFavourites(favouritesArray);
          window.sessionStorage.setItem(
            "favourites",
            JSON.stringify(favouritesArray)
          );
        }
      });
  };

  const handleRemoveFavourite = (ev) => {
    // remove from favourites array
    ev.stopPropagation();
    ev.preventDefault();
    if (!currentUser) {
      return history.push("/signin");
    }
    fetch(`/users/${currentUser.data._id}/remove-favourite`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: profileId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          window.sessionStorage.setItem("currentUser", JSON.stringify(data));
          let favouritesArray = data.data.favourites.map((i) => {
            return i._id;
          });
          setFavourites(favouritesArray);
          window.sessionStorage.setItem(
            "favourites",
            JSON.stringify(favouritesArray)
          );
        }
      });
  };

  return (
    <div>
      {!user.email && (
        <Div key={`id-${profileId}`}>
          <UserLink to={!currentUser ? "/signin" : `/profile/${profileId}`}>
            <Wrapper>
              <FavouriteDiv>
                {favourites && favourites.includes(user._id) ? (
                  <FavouriteBtn onClick={handleRemoveFavourite}>
                    <FilledFav />
                  </FavouriteBtn>
                ) : (
                  <FavouriteBtn onClick={handleAddFavourite}>
                    <EmptyFav />
                  </FavouriteBtn>
                )}
              </FavouriteDiv>
              <ImageDiv>
                <Image src={user.avatar} />
              </ImageDiv>
              <Name>{user.name}</Name>
              <Rating>
                {user.rating.map((i) => {
                  const icon = starRating[i];
                  return (
                    <Star key={Math.floor(Math.random() * 1000000000000000)}>
                      {icon ? icon() : null}
                    </Star>
                  );
                })}
              </Rating>
              <ForteContainer>
                <ForteIntro>Fortes:</ForteIntro>
                {user.forte?.slice(0, 3).map((skill) => {
                  return (
                    <Forte
                      onClick={(ev) => {
                        ev.preventDefault();
                        history.push(`/category/${skill}`);
                      }}
                      key={Math.floor(Math.random() * 1000000000000000)}
                    >
                      {skill}
                    </Forte>
                  );
                })}
              </ForteContainer>
            </Wrapper>
          </UserLink>
        </Div>
      )}
    </div>
  );
};

export default User;

const Div = styled.div`
  border-radius: 15px;
  cursor: pointer;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  margin: 30px;
  background-color: #faf9f0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 380px;
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 1px 2px 3px 1px,
      rgba(60, 64, 67, 0.15) 1px 3px 6px 3px;
  }
`;

const UserLink = styled(Link)`
  width: 300px;
  margin: 20px;
  text-decoration: none;
`;

const ImageDiv = styled.div`
  position: relative;
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const Name = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: #183a1d;
  font-size: 20px;
`;

const Rating = styled.div`
  padding: 10px;
  color: black;
  display: flex;
`;
const Star = styled.p`
  margin: 0;
  color: #f6c453;
`;

const ForteContainer = styled.div`
  height: 360px;
`;

const Forte = styled.li`
  list-style-type: none;
  font-size: 14px;
  background-color: #40916c;
  border-radius: 5px;
  width: 200px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  color: #e5ebea;
  &:hover {
    color: #183a1d;
    background-color: #f6c453;
  }
`;

const ForteIntro = styled.div`
  font-size: 14px;
  text-align: center;
  color: #183a1d;
`;

const FavouriteDiv = styled.div`
  position: relative;
  height: 80px;
  width: 40px;
  left: 105px;
`;

const FilledFav = styled(BsFillSuitHeartFill)`
  font-size: 16px;
  color: #40916c;
  transition: 0.25s;
  &:active {
    transform: scale(2);
  }
`;

const EmptyFav = styled(BsSuitHeart)`
  font-size: 16px;
  color: #40916c;
  transition: 0.25s;
  &:active {
    transform: scale(2);
    fill: #40916c;
  }
  &:active:after {
    transform: scale(2);
    fill: #40916c;
  }
`;

const FavouriteBtn = styled.button`
  height: 25px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;
