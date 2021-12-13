import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  GoogleMap,
  LoadScript,
  useLoadScript,
  onLoad,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import { UsersContext } from "../UsersContext";
import LocateMe from "./LocateMe";
import MapSearch from "./MapSearch";
import mapStyles from "./mapStyles";
import dogWalker from "../../assets/dog-walking.png";
import { IoStarOutline } from "react-icons/io5";

const libraries = ["places"];
const mapContainerStyle = {
  width: "60vw",
  height: "80vh",
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
  const { allUsers, currentLatitude, currentLongitude } =
    useContext(UsersContext);
  const { error, setError } = useContext(CurrentUserContext);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [rating, setRating] = useState(null);
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    setError("Loading map...");
  } else if (isLoaded) {
    setError("");
  }

  useEffect(() => {
    let markersArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        let userLocation = {
          name: i.name,
          avatar: i.avatar,
          rating: i.rating,
          lat: Number(i.lat),
          lng: Number(i.long),
        };
        markersArray.push(userLocation);
      });
      setMarkers(markersArray);
    }
  }, [allUsers]);

  console.log(markers, "markers array");

  const mapRef = useRef(null);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <Wrapper>
          <MapDiv>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={12}
              center={center}
              options={options}
              onLoad={onMapLoad}
            >
              {markers.map((marker) => {
                return (
                  <Marker
                    onClick={() => {
                      setSelected(marker);
                      setName(marker.name);
                      setAvatar(marker.avatar);
                    }}
                    key={Math.floor(Math.random() * 1000000000000000)}
                    position={{ lat: marker.lat, lng: marker.lng }}
                  >
                    {selected && (
                      <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => setSelected(null)}
                      >
                        <InfoDiv>
                          <WindowImage src={avatar} />
                          <Name>{name}</Name>
                          <Rating>
                            <Star>
                              <IoStarOutline />
                            </Star>
                            <Star>
                              <IoStarOutline />
                            </Star>
                            <Star>
                              <IoStarOutline />
                            </Star>
                            <Star>
                              <IoStarOutline />
                            </Star>
                            <Star>
                              <IoStarOutline />
                            </Star>
                          </Rating>
                        </InfoDiv>
                      </InfoWindow>
                    )}
                  </Marker>
                );
              })}
            </GoogleMap>
          </MapDiv>
          <Div>
            <Title>
              Find friendly people in your neighbourhood for all your
              pet-related needs.
            </Title>
            <DogWalker src={dogWalker} />
            <LocateMe panTo={panTo} />
            <Or>or</Or>
            <MapSearch panTo={panTo} />
          </Div>
        </Wrapper>
      ) : (
        <div>{error !== "" && <ErrorMessage>{error}</ErrorMessage>}</div>
      )}
    </div>
  );
};

export default Map;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const MapDiv = styled.div`
  height: max-content;
  width: max-content;
  margin-left: 50px;
  margin-top: 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const Div = styled.div`
  width: 30vw;
  height: 80vh;
  margin-top: 30px;
  margin-left: 30px;
  background-color: #faf9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 24px;
  width: 500px;
  text-align: center;
  margin-top: 2px;
`;

const WindowImage = styled.img`
  height: 80px;
  border-radius: 50px;
`;

const Name = styled.p`
  font-size: 16px;
  color: darkgray;
  font-weight: bold;
`;

const Or = styled.p`
  font-size: 16px;
  color: #183a1d;
  width: 300px;
  text-align: center;
`;

const Title = styled.p`
  width: 300px;
  font-size: 24px;
  margin-top: 40px;
  color: #183a1d;
`;

const DogWalker = styled.img`
  height: 150px;
  margin-bottom: 30px;
  margin-top: 15px;
`;

const InfoDiv = styled.div`
  padding: 20px;
  width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Star = styled.p`
  margin: 0;
  color: #edb230;
  font-size: 16px;
`;

const Rating = styled.div`
  display: flex;
`;
