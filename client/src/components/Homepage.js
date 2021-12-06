import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
import User from "./User";
import { useContext, useState } from "react";
import { UsersContext } from "./UsersContext";

const Homepage = () => {
  const { allUsers, moreUsers, setMoreUsers } = useContext(UsersContext);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);

  const handleLoadMore = () => {
    let currentProfiles = moreUsers.length;
    let newProfilesNumber = currentProfiles + 3;
    let newSlice = allUsers.slice(0, newProfilesNumber);
    setMoreUsers(newSlice);
  };

  const handleLocationSet = () => {
    if (!navigator.geolocation) {
      console.log("Sorry, Geolocation is not supposed by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const success = (position) => {
    setCurrentLatitude(position.coords.latitude);
    setCurrentLongitude(position.coords.longitude);
    console.log(currentLatitude, "lat");
    console.log(currentLongitude, "long");
  };
  const error = () => {
    console.log("An error occured. Please try again!");
  };

  return (
    <Wrapper>
      <LocationDiv>
        Homepage
        <LocationButton onClick={handleLocationSet}>
          Set My location
        </LocationButton>
      </LocationDiv>
      <Searchdiv>
        <Searchbar />
      </Searchdiv>
      <CategoryDiv>
        <Categories />
      </CategoryDiv>
      <UserHeader>Recent Users:</UserHeader>
      <UserDiv>
        {moreUsers.map((user) => {
          const profileId = user._id;
          return (
            <User moreUsers={moreUsers} user={user} profileId={profileId} />
          );
        })}
      </UserDiv>
      <LoadMoreDiv>
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      </LoadMoreDiv>
    </Wrapper>
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
  display: flex;
  width: 1000px;
  margin: 0 auto;
  margin-top: -50px;
  flex-wrap: wrap;
`;

const UserHeader = styled.div`
  height: 100px;
  width: 1000px;
  text-align: center;
  margin: 0 auto;
  margin-top: 210px;
`;

const LoadMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1110px;
  background-color: transparent;
  border-style: none;
  margin: 0 auto;
  margin-top: 80px;
`;

const LoadMore = styled.button`
  height: 40px;
  width: 150px;
  font-family: "Raleway";
  background-color: transparent;
  border-radius: 40px;
  box-shadow: none;
  color: #558b6e;
  border-color: #558b6e;
  border-width: 2px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #558b6e;
    color: white;
  }
`;

const LocationDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LocationButton = styled.button`
  margin-right: 30px;
`;
