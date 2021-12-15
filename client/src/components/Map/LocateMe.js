import React, { useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext";
import { UsersContext } from "../UsersContext";
import styled from "styled-components";

const LocateMe = ({ panTo }) => {
  const { error, setError } = useContext(CurrentUserContext);
  const { setCurrentLatitude, setCurrentLongitude } = useContext(UsersContext);

  const handleLocationSet = () => {
    if (!navigator.geolocation) {
      setError("Sorry, Geolocation is not supposed by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(success, err);
    }
  };

  //callback function for geolocation API
  const success = (position) => {
    setCurrentLatitude(position.coords.latitude);
    setCurrentLongitude(position.coords.longitude);
    panTo({ lat: position.coords.latitude, lng: position.coords.longitude });
  };

  //callback function for geolocation API
  const err = () => {
    setError("An error occured. Please try again!");
  };

  return (
    <div>
      <Button onClick={handleLocationSet}>Locate users near you</Button>
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default LocateMe;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 2px;
`;

const Button = styled.button`
  padding: 15px;
  width: 330px;
  background-color: #40916c;
  border-style: none;
  color: #faf9f0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #183a1d;
    background-color: #f6c453;
  }
`;
