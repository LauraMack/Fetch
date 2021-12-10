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
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { UsersContext } from "./UsersContext";
import LocateMe from "./LocateMe";
import MapSearch from "./MapSearch";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "40vw",
  height: "40vh",
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

  console.log(allUsers.data);
  console.log(currentLongitude, currentLatitude);

  useEffect(() => {
    let markersArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        let userLocation = {
          name: i.name,
          avatar: i.avatar,
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
      <LocateMe panTo={panTo} />
      <MapSearch panTo={panTo} />
      {isLoaded ? (
        <Wrapper>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
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
                    <InfoDiv>
                      <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => setSelected(null)}
                      >
                        <div>
                          <p>{name}</p>
                          <WindowImage src={avatar} />
                        </div>
                      </InfoWindow>
                    </InfoDiv>
                  )}
                </Marker>
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
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 24px;
  width: 500px;
  text-align: center;
  margin-top: 2px;
`;

const WindowImage = styled.img`
  height: 50px;
`;

const InfoDiv = styled.div`
  background-color: white;
  height: 150px;
  width: 150px;
`;
