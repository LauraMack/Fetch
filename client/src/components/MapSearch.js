import React from "react";
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
import { Redirect } from "react-router";

const MapSearch = ({ panTo }) => {
  const inputStyle = {
    padding: "14px",
    width: "300px",
  };
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 45.52984, lng: () => -73.62733 },
      radius: 200 * 1000,
    },
  });
  return (
    <Combobox
      onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
          const results = await getGeocode({ address });

          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log("error");
        }
      }}
    >
      <ComboboxInput
        className="search"
        style={inputStyle}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        placeholder="enter an address"
      />

      <ComboboxPopover>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <ComboboxOption key={id} value={description} />
          ))}
      </ComboboxPopover>
    </Combobox>
  );
};

export default MapSearch;
