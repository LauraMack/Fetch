import React, { useEffect } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
import User from "./User";
import { useContext } from "react";
import { UsersContext } from "./UsersContext";
import { CurrentUserContext } from "./CurrentUserContext";

const Homepage = ({ result, setResult }) => {
  const {
    allUsers,
    moreUsers,
    setMoreUsers,
    currentLatitude,
    currentLongitude,
    setCurrentLatitude,
    setCurrentLongitude,
    orderedUsers,
    setOrderedUsers,
  } = useContext(UsersContext);

  const { currentUser, signedIn } = useContext(CurrentUserContext);

  console.log(currentUser, "CURRENT USER");
  console.log(signedIn);

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // get distance of users from current users
  const getDistanceFromLatLonInKm = (userId, lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return { distance: d, userId: userId };
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    if (allUsers.data) {
      let locations = allUsers.data.map((i) => {
        return getDistanceFromLatLonInKm(
          i._id,
          Number(currentLatitude),
          Number(currentLongitude),
          Number(i.lat),
          Number(i.long)
        );
      });
      // returns an array of userIds and the distance in KM from current user
      let locationsByDistance = locations.sort((a, b) => {
        return a.distance - b.distance;
      });
      // new array of just the userIds, ordered by distance
      let newArray = locationsByDistance.map(({ userId }) => userId);
      console.log(newArray);

      // function for ordering all the users by the distance from current user
      let mapOrder = (array, order, key) => {
        array.sort((a, b) => {
          let A = a[key];
          let B = b[key];
          if (order.indexOf(A) > order.indexOf(B)) {
            return 1;
          } else {
            return -1;
          }
        });
        return array;
      };
      let orderedUsersArray = mapOrder(allUsers.data, newArray, "_id");
      setOrderedUsers(orderedUsersArray);
    }
  }, [currentLatitude, currentLongitude]);

  //load more users
  const handleLoadMore = () => {
    // load the order of users based on the current user's location
    if (orderedUsers !== null) {
      let currentProfiles = moreUsers.length;
      let newProfilesNumber = currentProfiles + 3;
      let newSlice = orderedUsers.slice(0, newProfilesNumber);
      setMoreUsers(newSlice);
    } else {
      let currentProfiles = moreUsers.length;
      let newProfilesNumber = currentProfiles + 3;
      let newSlice = allUsers.data.slice(0, newProfilesNumber);
      setMoreUsers(newSlice);
    }
  };

  //on click for getting the lat and long of the current user
  const handleLocationSet = () => {
    if (!navigator.geolocation) {
      console.log("Sorry, Geolocation is not supposed by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  //callback function for geolocation API
  const success = (position) => {
    setCurrentLatitude(position.coords.latitude);
    setCurrentLongitude(position.coords.longitude);
  };

  console.log(currentLatitude, currentLongitude, "currentUserLocation");
  console.log(orderedUsers, "orderedUsers");

  //callback function for geolocation API
  const error = () => {
    console.log("An error occured. Please try again!");
  };

  return (
    <Wrapper>
      <LocationDiv>
        <LocationButton onClick={handleLocationSet}>
          Set My location
        </LocationButton>
      </LocationDiv>
      <Searchdiv>
        <Searchbar result={result} setResult={setResult} />
      </Searchdiv>
      <CategoryDiv>
        <Categories result={result} setResult={setResult} />
      </CategoryDiv>
      {orderedUsers !== null ? (
        <UserHeader>Users near you:</UserHeader>
      ) : (
        <UserHeader>Recent Users:</UserHeader>
      )}
      <UserDiv>
        {moreUsers.map((user) => {
          const profileId = user._id;
          return (
            <User
              key={`id-${profileId}`}
              moreUsers={moreUsers}
              user={user}
              profileId={profileId}
            />
          );
        })}
      </UserDiv>
      <LoadMoreDiv>
        <LoadMore
          disabled={moreUsers.length === moreUsers.length - 1}
          onClick={handleLoadMore}
        >
          Load More
        </LoadMore>
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
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  margin-top: -80px;
  flex-wrap: wrap;
`;

const UserHeader = styled.div`
  height: 100px;
  width: 1000px;
  text-align: center;
  margin: 0 auto;
  margin-top: 230px;
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
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  /* &:hover {
    background-color: #558b6e;
    color: white;
  } */
`;

const LocationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LocationButton = styled.button`
  margin-right: 30px;
`;
