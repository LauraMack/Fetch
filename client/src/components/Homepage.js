import React, { useEffect } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
import User from "./User";
import { useContext } from "react";
import { UsersContext } from "./UsersContext";
import { CurrentUserContext } from "./CurrentUserContext";
import dogWalker from "../assets/dog-walkers2.png";
import ball from "../assets/ball-5084273_640.png";
import atHome from "../assets/at-home.png";
import mapPin from "../assets/map-pin2.png";
import Loading from "./Loading";

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

  const { currentUser, status, setStatus } = useContext(CurrentUserContext);

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  console.log(moreUsers);

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
    setStatus("pending");
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
    setStatus("success");
  };

  //callback function for geolocation API
  const error = () => {
    console.log("An error occured. Please try again!");
  };

  return (
    <Wrapper>
      {/* <ImageContainer><DogWalker src={dogWalker} /></ImageContainer> */}
      <FetchDiv>
        <Fetch>Fetch</Fetch>
        <Ball src={ball} />
      </FetchDiv>
      <ConnectDiv>
        <Connect>Connect with fellow pet lovers near you.</Connect>
      </ConnectDiv>
      <Searchdiv>
        <Searchbar result={result} setResult={setResult} />
      </Searchdiv>
      <CategoryDiv>
        <Categories result={result} setResult={setResult} />
      </CategoryDiv>
      {currentUser && (
        <LocationDiv>
          <HomeImage src={mapPin} />
          <LocationHeader>
            Help us find users near you at the click of a button by setting your
            location below.
          </LocationHeader>
          <LocationButton onClick={handleLocationSet}>
            Set My location
          </LocationButton>
        </LocationDiv>
      )}
      {status === "pending" && (
        <LoadDiv>
          <Loading />
        </LoadDiv>
      )}
      {currentLatitude && currentLongitude !== null ? (
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
          style={{ display: moreUsers.length >= 12 ? "none" : "block" }}
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
  font-family: "Lora";
  height: max-content;
  background-color: #e1eedd;
  width: 100vw;
`;

const FetchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  margin: 0 auto;
  margin-top: 30px;
`;

const Fetch = styled.h1`
  font-size: 100px;
  color: #183a1d;
  margin-left: 30px;
`;

const Ball = styled.img`
  height: 60px;
  margin-top: 40px;
`;
const Searchdiv = styled.div`
  height: 50px;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
`;

const ConnectDiv = styled.div`
  height: 50px;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Connect = styled.p`
  font-size: 22px;
  margin: 0;
  color: #183a1d;
`;

const CategoryDiv = styled.div`
  height: 50px;
  width: 600px;
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 150px;
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
  color: #183a1d;
  margin: 0 auto;
  margin-top: 200px;
  font-weight: bold;
  font-size: 18px;
`;

const LocationHeader = styled.div`
  height: 50px;
  width: 1000px;
  text-align: center;
  color: #183a1d;
  margin: 0 auto;
  margin-top: 50px;
  font-weight: bold;
  font-size: 18px;
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
  font-family: "Lora";
  background-color: transparent;
  border: solid 2px #183a1d;
  border-radius: 5px;
  color: #183a1d;
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
    border-style: none;
  }
`;

const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const LocationButton = styled.button`
  cursor: pointer;
  background-color: #40916c;
  color: #faf9f0;
  font-weight: bold;
  width: 145px;
  padding: 15px;
  border-style: none;
  border-radius: 5px;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const DogWalker = styled.img`
  height: 400px;
  border-radius: 180px;
`;

const ImageContainer = styled.div`
  height: 50px;
  width: 600px;
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

const HomeImage = styled.img`
  height: 300px;
  width: 400px;
`;

const LoadDiv = styled.div`
  height: 100px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
