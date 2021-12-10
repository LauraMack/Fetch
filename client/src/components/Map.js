import React, { useContext, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  useLoadScript,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { UsersContext } from "./UsersContext";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "60vw",
  height: "60vh",
};
const center = {
  lat: 45.52984,
  lng: -73.62733,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true,
};

const Map = () => {
  const { allUsers } = useContext(UsersContext);
  const { error, setError } = useContext(CurrentUserContext);
  const [markers, setMarkers] = useState([]);
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    setError("Loading map...");
  }

  console.log(allUsers.data);

  useEffect(() => {
    let markersArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        let userLocation = { lat: Number(i.lat), lng: Number(i.long) };
        markersArray.push(userLocation);
      });
      setMarkers(markersArray);
    }
  }, [allUsers]);

  console.log(markers, "markers array");

  return (
    <div>
      {isLoaded ? (
        <Wrapper>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
          >
            {markers.map((marker) => {
              return (
                <Marker
                  key={Math.floor(Math.random() * 1000000000000000)}
                  position={{ lat: marker.lat, lng: marker.lng }}
                ></Marker>
              );
            })}
          </GoogleMap>
        </Wrapper>
      ) : (
        <div>{error !== "" && <ErrorMessage>{error}</ErrorMessage>}</div>
      )}
    </div>
  );
};

export default Map;

const Wrapper = styled.div`
  height: 100vh;
  width: 2000px;
  display: flex;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 24px;
  width: 500px;
  text-align: center;
  margin-top: 2px;
`;
